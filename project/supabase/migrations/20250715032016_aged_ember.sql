/*
  # Fix blog posts RLS policies

  1. Security Changes
    - Update admin policy to use JWT token instead of auth.users table
    - Keep public read access for published posts
    - Remove dependency on auth.users table to avoid permission errors

  2. Changes Made
    - Replace auth.users table query with JWT token check
    - Use COALESCE for null safety
    - Maintain existing security model
*/

-- Drop existing policies
DROP POLICY IF EXISTS "Admin users can manage all blog posts" ON blog_posts;
DROP POLICY IF EXISTS "Anyone can read published blog posts" ON blog_posts;

-- Create new policies that don't reference auth.users table
CREATE POLICY "Admin users can manage all blog posts"
  ON blog_posts
  FOR ALL
  TO authenticated
  USING (COALESCE((auth.jwt() ->> 'email') = 'admin@barecloudz.com', false))
  WITH CHECK (COALESCE((auth.jwt() ->> 'email') = 'admin@barecloudz.com', false));

CREATE POLICY "Anyone can read published blog posts"
  ON blog_posts
  FOR SELECT
  TO public
  USING (status = 'published');