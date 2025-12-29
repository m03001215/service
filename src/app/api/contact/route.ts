import { NextRequest, NextResponse } from 'next/server';

import { createServerClient } from '@/lib/supabase';

export async function POST(request: NextRequest) {
  try {
    // Verify Supabase configuration
    if (
      !process.env.NEXT_PUBLIC_SUPABASE_URL ||
      !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    ) {
      console.error('Missing Supabase environment variables');
      return NextResponse.json(
        {
          error: 'Server configuration error. Please contact support.',
          details: 'Supabase environment variables are not configured.',
        },
        { status: 500 }
      );
    }

    const body = await request.json();
    const { name, email, budget, details, nda } = body;

    // Validate required fields
    if (!name || !email || !budget || !details) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate email format (using a safer regex to avoid ReDoS)
    // Limit email length to prevent ReDoS attacks
    if (typeof email !== 'string' || email.length > 254) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Verify Supabase URL is reachable before attempting database operation
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    if (supabaseUrl) {
      try {
        // Quick connectivity check with shorter timeout
        const testUrl = `${supabaseUrl}/rest/v1/`;
        const testResponse = (await Promise.race([
          fetch(testUrl, {
            method: 'HEAD',
            headers: {
              apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '',
            },
            signal: AbortSignal.timeout(8000), // 8 second timeout for test
          }),
          new Promise((_, reject) =>
            setTimeout(() => reject(new Error('Connection test timeout')), 8000)
          ),
        ])) as Response;

        if (!testResponse.ok && testResponse.status !== 404) {
          console.warn(
            `Supabase URL test returned status: ${testResponse.status}`
          );
        }
      } catch (testError) {
        console.error('Supabase connectivity test failed:', testError);
        return NextResponse.json(
          {
            error:
              'Unable to connect to Supabase. The connection is timing out.',
            details: `URL: ${supabaseUrl}. This usually means: 1) Your Supabase project is paused (check dashboard), 2) The URL is incorrect, 3) Network/firewall is blocking the connection. Please verify your Supabase project is active in the dashboard.`,
            troubleshooting:
              'Go to https://supabase.com/dashboard and check if your project is active. If paused, resume it.',
          },
          { status: 503 }
        );
      }
    }

    // Create server-side Supabase client
    const supabase = createServerClient();

    // Save to Supabase
    const { data, error } = await supabase
      .from('contact_submissions')
      .insert([
        {
          name,
          email,
          budget,
          details,
          nda: nda || false,
          created_at: new Date().toISOString(),
        },
      ])
      .select();

    if (error) {
      console.error('Supabase error:', error);
      console.error('Error details:', {
        message: error.message,
        code: error.code,
        details: error.details,
        hint: error.hint,
      });

      // Provide more specific error messages
      if (
        error.message?.includes('timeout') ||
        error.message?.includes('ECONNREFUSED')
      ) {
        return NextResponse.json(
          {
            error:
              'Connection timeout. Please check your Supabase configuration and network connection.',
            details:
              'Verify NEXT_PUBLIC_SUPABASE_URL is correct and your Supabase project is active.',
          },
          { status: 500 }
        );
      }

      if (
        error.code === 'PGRST116' ||
        error.message?.includes('relation') ||
        error.message?.includes('does not exist')
      ) {
        return NextResponse.json(
          {
            error:
              'Database table not found. Please create the contact_submissions table in Supabase.',
            details: 'See SUPABASE_SETUP.md for instructions.',
          },
          { status: 500 }
        );
      }

      return NextResponse.json(
        {
          error: 'Failed to save submission. Please try again later.',
          details: error.message || 'Unknown error',
        },
        { status: 500 }
      );
    }

    console.log('Contact form submission saved to Supabase:', data);

    return NextResponse.json(
      {
        success: true,
        message:
          'Your request has been submitted successfully. We will contact you within one business day.',
        data,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to submit request. Please try again later.' },
      { status: 500 }
    );
  }
}
