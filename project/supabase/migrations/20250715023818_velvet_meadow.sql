/*
  # Create core business tables for BareCloudz platform

  1. New Tables
    - `clients`
      - `id` (uuid, primary key)
      - `name` (text, client name)
      - `email` (text, unique email)
      - `company` (text, company name)
      - `phone` (text, optional phone)
      - `industry` (text, business industry)
      - `website` (text, optional website)
      - `status` (text, active/inactive/pending)
      - `user_id` (uuid, references auth.users)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

    - `marketing_plans`
      - `id` (uuid, primary key)
      - `title` (text, plan title)
      - `description` (text, plan description)
      - `content` (text, full plan content)
      - `business_type` (text, type of business)
      - `industry` (text, industry category)
      - `target_audience` (text, target audience description)
      - `budget` (numeric, budget amount)
      - `goals` (text[], array of goals)
      - `channels` (text[], array of marketing channels)
      - `status` (text, draft/pending/approved/rejected)
      - `client_id` (uuid, references clients)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

    - `invoices`
      - `id` (uuid, primary key)
      - `number` (text, unique invoice number)
      - `client_id` (uuid, references clients)
      - `amount` (numeric, total amount)
      - `status` (text, draft/sent/paid/overdue)
      - `due_date` (date, payment due date)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

    - `invoice_items`
      - `id` (uuid, primary key)
      - `invoice_id` (uuid, references invoices)
      - `description` (text, item description)
      - `quantity` (numeric, item quantity)
      - `rate` (numeric, item rate)
      - `amount` (numeric, calculated amount)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users to manage their data
    - Admin users can access all data
    - Clients can only access their own data
*/

-- Create clients table
CREATE TABLE IF NOT EXISTS clients (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text UNIQUE NOT NULL,
  company text NOT NULL,
  phone text,
  industry text NOT NULL,
  website text,
  status text NOT NULL DEFAULT 'active' CHECK (status IN ('active', 'inactive', 'pending')),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create marketing_plans table
CREATE TABLE IF NOT EXISTS marketing_plans (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  content text NOT NULL DEFAULT '',
  business_type text NOT NULL,
  industry text NOT NULL,
  target_audience text NOT NULL,
  budget numeric NOT NULL DEFAULT 0,
  goals text[] DEFAULT '{}',
  channels text[] DEFAULT '{}',
  status text NOT NULL DEFAULT 'draft' CHECK (status IN ('draft', 'pending', 'approved', 'rejected')),
  client_id uuid REFERENCES clients(id) ON DELETE CASCADE,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create invoices table
CREATE TABLE IF NOT EXISTS invoices (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  number text UNIQUE NOT NULL,
  client_id uuid REFERENCES clients(id) ON DELETE CASCADE,
  amount numeric NOT NULL DEFAULT 0,
  status text NOT NULL DEFAULT 'draft' CHECK (status IN ('draft', 'sent', 'paid', 'overdue')),
  due_date date NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create invoice_items table
CREATE TABLE IF NOT EXISTS invoice_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  invoice_id uuid REFERENCES invoices(id) ON DELETE CASCADE,
  description text NOT NULL,
  quantity numeric NOT NULL DEFAULT 1,
  rate numeric NOT NULL DEFAULT 0,
  amount numeric NOT NULL DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE clients ENABLE ROW LEVEL SECURITY;
ALTER TABLE marketing_plans ENABLE ROW LEVEL SECURITY;
ALTER TABLE invoices ENABLE ROW LEVEL SECURITY;
ALTER TABLE invoice_items ENABLE ROW LEVEL SECURITY;

-- Create policies for clients table
CREATE POLICY "Admin users can manage all clients"
  ON clients
  FOR ALL
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM auth.users 
      WHERE auth.users.id = auth.uid() 
      AND auth.users.email = 'admin@barecloudz.com'
    )
  );

CREATE POLICY "Users can read their own client data"
  ON clients
  FOR SELECT
  TO authenticated
  USING (user_id = auth.uid());

-- Create policies for marketing_plans table
CREATE POLICY "Admin users can manage all marketing plans"
  ON marketing_plans
  FOR ALL
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM auth.users 
      WHERE auth.users.id = auth.uid() 
      AND auth.users.email = 'admin@barecloudz.com'
    )
  );

CREATE POLICY "Users can read their own marketing plans"
  ON marketing_plans
  FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM clients 
      WHERE clients.id = marketing_plans.client_id 
      AND clients.user_id = auth.uid()
    )
  );

-- Create policies for invoices table
CREATE POLICY "Admin users can manage all invoices"
  ON invoices
  FOR ALL
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM auth.users 
      WHERE auth.users.id = auth.uid() 
      AND auth.users.email = 'admin@barecloudz.com'
    )
  );

CREATE POLICY "Users can read their own invoices"
  ON invoices
  FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM clients 
      WHERE clients.id = invoices.client_id 
      AND clients.user_id = auth.uid()
    )
  );

-- Create policies for invoice_items table
CREATE POLICY "Admin users can manage all invoice items"
  ON invoice_items
  FOR ALL
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM auth.users 
      WHERE auth.users.id = auth.uid() 
      AND auth.users.email = 'admin@barecloudz.com'
    )
  );

CREATE POLICY "Users can read their own invoice items"
  ON invoice_items
  FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM invoices 
      JOIN clients ON clients.id = invoices.client_id
      WHERE invoices.id = invoice_items.invoice_id 
      AND clients.user_id = auth.uid()
    )
  );

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Create triggers for updated_at
CREATE TRIGGER update_clients_updated_at BEFORE UPDATE ON clients FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_marketing_plans_updated_at BEFORE UPDATE ON marketing_plans FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_invoices_updated_at BEFORE UPDATE ON invoices FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();