/*
  # Fix clients table RLS policies

  1. Security Updates
    - Remove dependency on auth.users table access
    - Use JWT-based authentication for admin checks
    - Maintain user isolation for regular users
    - Use COALESCE for null safety
*/

-- Drop existing policies
DROP POLICY IF EXISTS "Admin users can manage all clients" ON clients;
DROP POLICY IF EXISTS "Users can read their own client data" ON clients;

-- Create new policies using JWT instead of auth.users table
CREATE POLICY "Admin users can manage all clients"
  ON clients
  FOR ALL
  TO authenticated
  USING (COALESCE((auth.jwt() ->> 'email') = 'admin@barecloudz.com', false));

CREATE POLICY "Users can read their own client data"
  ON clients
  FOR SELECT
  TO authenticated
  USING (user_id = auth.uid());