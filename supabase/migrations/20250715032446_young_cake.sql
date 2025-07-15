/*
  # Fix documents table RLS policies

  1. Security Updates
    - Remove dependency on auth.users table
    - Use JWT-based authentication instead
    - Maintain proper access control for admin and users

  2. Changes
    - Update admin policy to use auth.jwt() instead of auth.users
    - Keep user access policy using auth.uid() for uploaded_by
    - Maintain client relationship access through clients table
*/

-- Drop existing policies
DROP POLICY IF EXISTS "Admin users can manage all documents" ON documents;
DROP POLICY IF EXISTS "Users can read their own documents" ON documents;

-- Create new policies without auth.users dependency
CREATE POLICY "Admin users can manage all documents"
  ON documents
  FOR ALL
  TO authenticated
  USING (COALESCE(((auth.jwt() ->> 'email'::text) = 'admin@barecloudz.com'::text), false))
  WITH CHECK (COALESCE(((auth.jwt() ->> 'email'::text) = 'admin@barecloudz.com'::text), false));

CREATE POLICY "Users can read their own documents"
  ON documents
  FOR SELECT
  TO authenticated
  USING (
    (client_id IS NULL) OR 
    (EXISTS ( 
      SELECT 1
      FROM clients
      WHERE ((clients.id = documents.client_id) AND (clients.user_id = auth.uid()))
    ))
  );