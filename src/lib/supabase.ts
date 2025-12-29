import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error(
    'Missing Supabase environment variables. Please set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY in your .env.local file.'
  );
}

// Client-side Supabase client (for use in React components)
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: false,
  },
});

// Server-side Supabase client (for use in API routes)
// This client is optimized for server-side usage with better timeout handling
export const createServerClient = () => {
  // Use native fetch with proper configuration for server-side
  // Configure connection timeout for Node.js undici
  const customFetch = async (
    url: RequestInfo | URL,
    options: RequestInit = {}
  ) => {
    const timeout = 30000; // 30 seconds total timeout
    // const connectTimeout = 20000; // 20 seconds for connection

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeout);

    try {
      // For Node.js, we need to handle the connection timeout differently
      // Use AbortSignal.timeout if available, otherwise use our controller
      const signal = AbortSignal.timeout
        ? AbortSignal.timeout(timeout)
        : controller.signal;

      const fetchOptions: RequestInit = {
        ...options,
        signal,
        headers: {
          'Content-Type': 'application/json',
          apikey: supabaseAnonKey,
          Authorization: `Bearer ${supabaseAnonKey}`,
          ...options.headers,
        },
      };

      // Set keepalive for better connection reuse
      if (typeof (fetchOptions as any).keepalive === 'undefined') {
        (fetchOptions as any).keepalive = true;
      }

      const response = await fetch(url, fetchOptions);
      clearTimeout(timeoutId);
      return response;
    } catch (error) {
      clearTimeout(timeoutId);
      if (error instanceof Error) {
        if (error.name === 'AbortError' || error.message.includes('timeout')) {
          throw new Error(
            'Connection timeout: Unable to connect to Supabase. ' +
              'Please verify: 1) Your Supabase project is active (not paused), ' +
              '2) The URL in .env.local is correct, ' +
              '3) Your network allows connections to Supabase.'
          );
        }
        if (
          error.message.includes('ECONNREFUSED') ||
          error.message.includes('ENOTFOUND')
        ) {
          throw new Error(
            'Unable to connect to Supabase. ' +
              `URL: ${supabaseUrl}. ` +
              'Please verify your NEXT_PUBLIC_SUPABASE_URL is correct and the project exists.'
          );
        }
      }
      throw error;
    }
  };

  return createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
    global: {
      fetch: customFetch,
      headers: {
        apikey: supabaseAnonKey,
        Authorization: `Bearer ${supabaseAnonKey}`,
      },
    },
  });
};
