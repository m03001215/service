# Supabase Setup Guide

This guide will help you set up Supabase to store contact form submissions.

## Step 1: Install Supabase Client

Run the following command to install the Supabase JavaScript client:

```bash
yarn add @supabase/supabase-js
```

## Step 2: Create a Supabase Project

1. Go to [https://supabase.com](https://supabase.com)
2. Sign up or log in to your account
3. Click "New Project"
4. Fill in your project details:
   - **Name**: Your project name
   - **Database Password**: Choose a strong password (save this!)
   - **Region**: Choose the closest region to your users
5. Click "Create new project" and wait for it to be set up

## Step 3: Get Your Supabase Credentials

1. In your Supabase project dashboard, go to **Settings** → **API**
2. You'll find:
   - **Project URL** (e.g., `https://xxxxx.supabase.co`)
   - **anon/public key** (starts with `eyJ...`)

## Step 4: Create the Database Table

1. In your Supabase dashboard, go to **SQL Editor**
2. Run the following SQL to create the `contact_submissions` table:

```sql
-- Create contact_submissions table
CREATE TABLE IF NOT EXISTS contact_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  budget TEXT NOT NULL,
  details TEXT NOT NULL,
  nda BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create an index on email for faster queries
CREATE INDEX IF NOT EXISTS idx_contact_submissions_email ON contact_submissions(email);

-- Create an index on created_at for sorting
CREATE INDEX IF NOT EXISTS idx_contact_submissions_created_at ON contact_submissions(created_at DESC);

-- Enable Row Level Security (RLS)
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Create a policy that allows inserts from anyone (for the contact form)
-- But restricts reads to authenticated users only
CREATE POLICY "Allow public inserts" ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Allow authenticated reads" ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (true);
```

## Step 5: Set Up Environment Variables

1. Create a `.env.local` file in the root of your project (if it doesn't exist)
2. Add your Supabase credentials:

```env
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

**Important**: 
- Replace `xxxxx` with your actual Supabase project URL
- Replace the anon key with your actual anon/public key
- Never commit `.env.local` to version control (it should be in `.gitignore`)

## Step 6: Verify the Setup

1. Start your development server: `yarn dev`
2. Go to the Contact page
3. Fill out and submit the contact form
4. Check your Supabase dashboard → **Table Editor** → `contact_submissions` to see the submission

## Optional: View Submissions in Supabase

1. Go to **Table Editor** in your Supabase dashboard
2. Click on `contact_submissions` table
3. You'll see all form submissions with timestamps

## Troubleshooting

### Error: "Missing Supabase environment variables"
- Make sure `.env.local` exists in the project root
- Verify the environment variable names are correct
- Restart your development server after adding environment variables

### Error: "relation 'contact_submissions' does not exist"
- Make sure you've run the SQL script in Step 4
- Check that the table was created in the correct database

### Error: "new row violates row-level security policy"
- Make sure you've created the RLS policies as shown in Step 4
- Verify the policy allows inserts from anonymous users

## Security Notes

- The `anon` key is safe to use in client-side code, but it's restricted by Row Level Security (RLS) policies
- Only authenticated users can read submissions (you can modify this policy as needed)
- For production, consider adding rate limiting to prevent spam

