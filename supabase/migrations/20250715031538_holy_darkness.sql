/*
  # Fix contacts table permissions

  1. Security Changes
    - Remove dependency on auth.users table access
    - Simplify admin policy to use email from JWT token
    - Add policy for public contact form submissions

  2. Changes Made
    - Updated admin policy to use auth.jwt() instead of auth.users table
    - Added policy for anonymous users to insert contacts
    - Simplified permission structure
*/

-- Drop existing policies
DROP POLICY IF EXISTS "Admin users can manage all contacts" ON contacts;

-- Create new simplified admin policy using JWT claims
CREATE POLICY "Admin users can manage all contacts"
  ON contacts
  FOR ALL
  TO authenticated
  USING (
    COALESCE(
      (auth.jwt() ->> 'email')::text = 'admin@barecloudz.com',
      false
    )
  );

-- Allow public contact form submissions
CREATE POLICY "Anyone can submit contacts"
  ON contacts
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Allow authenticated users to read contacts (for admin interface)
CREATE POLICY "Authenticated users can read contacts"
  ON contacts
  FOR SELECT
  TO authenticated
  USING (
    COALESCE(
      (auth.jwt() ->> 'email')::text = 'admin@barecloudz.com',
      false
    )
  );