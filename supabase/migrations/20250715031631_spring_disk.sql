/*
  # Fix marketing plans RLS policies

  1. Security Updates
    - Remove dependency on auth.users table
    - Use JWT token for admin email check
    - Maintain user data isolation through clients table relationship

  2. Changes
    - Update admin policy to use auth.jwt() instead of auth.users
    - Keep user access policy using clients table relationship
    - Add COALESCE for null safety
*/

-- Drop existing policies
DROP POLICY IF EXISTS "Admin users can manage all marketing plans" ON marketing_plans;
DROP POLICY IF EXISTS "Users can read their own marketing plans" ON marketing_plans;

-- Create new policies that don't reference auth.users
CREATE POLICY "Admin users can manage all marketing plans"
  ON marketing_plans
  FOR ALL
  TO authenticated
  USING (COALESCE(((auth.jwt() ->> 'email'::text) = 'admin@barecloudz.com'::text), false));

CREATE POLICY "Users can read their own marketing plans"
  ON marketing_plans
  FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1
      FROM clients
      WHERE clients.id = marketing_plans.client_id
        AND clients.user_id = auth.uid()
    )
  );