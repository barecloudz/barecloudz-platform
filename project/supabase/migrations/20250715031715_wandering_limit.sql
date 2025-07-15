/*
  # Fix invoices and invoice_items RLS policies

  1. Security Updates
    - Remove auth.users table dependencies from RLS policies
    - Use JWT-based authentication for admin checks
    - Maintain proper user isolation for non-admin users

  2. Tables Updated
    - invoices: Updated admin and user policies
    - invoice_items: Updated admin and user policies
*/

-- Drop existing policies for invoices
DROP POLICY IF EXISTS "Admin users can manage all invoices" ON invoices;
DROP POLICY IF EXISTS "Users can read their own invoices" ON invoices;

-- Create new policies for invoices using JWT
CREATE POLICY "Admin users can manage all invoices"
  ON invoices
  FOR ALL
  TO authenticated
  USING (COALESCE((auth.jwt() ->> 'email'::text) = 'admin@barecloudz.com'::text, false));

CREATE POLICY "Users can read their own invoices"
  ON invoices
  FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1
      FROM clients
      WHERE clients.id = invoices.client_id
        AND clients.user_id = auth.uid()
    )
  );

-- Drop existing policies for invoice_items
DROP POLICY IF EXISTS "Admin users can manage all invoice items" ON invoice_items;
DROP POLICY IF EXISTS "Users can read their own invoice items" ON invoice_items;

-- Create new policies for invoice_items using JWT
CREATE POLICY "Admin users can manage all invoice items"
  ON invoice_items
  FOR ALL
  TO authenticated
  USING (COALESCE((auth.jwt() ->> 'email'::text) = 'admin@barecloudz.com'::text, false));

CREATE POLICY "Users can read their own invoice items"
  ON invoice_items
  FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1
      FROM invoices
      JOIN clients ON clients.id = invoices.client_id
      WHERE invoices.id = invoice_items.invoice_id
        AND clients.user_id = auth.uid()
    )
  );