/*
  # Create content and communication tables

  1. New Tables
    - `blog_posts`
      - `id` (uuid, primary key)
      - `title` (text, post title)
      - `slug` (text, unique URL slug)
      - `excerpt` (text, post excerpt)
      - `content` (text, full post content)
      - `featured_image` (text, optional image URL)
      - `status` (text, draft/published)
      - `author_id` (uuid, references auth.users)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

    - `documents`
      - `id` (uuid, primary key)
      - `name` (text, document name)
      - `type` (text, file type)
      - `size` (bigint, file size in bytes)
      - `url` (text, storage URL)
      - `client_id` (uuid, optional, references clients)
      - `uploaded_by` (uuid, references auth.users)
      - `created_at` (timestamp)

    - `contacts`
      - `id` (uuid, primary key)
      - `name` (text, contact name)
      - `email` (text, contact email)
      - `phone` (text, optional phone)
      - `company` (text, optional company)
      - `message` (text, contact message)
      - `status` (text, unread/read/spam)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on all tables
    - Add appropriate policies for each table
*/

-- Create blog_posts table
CREATE TABLE IF NOT EXISTS blog_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  excerpt text NOT NULL,
  content text NOT NULL,
  featured_image text,
  status text NOT NULL DEFAULT 'draft' CHECK (status IN ('draft', 'published')),
  author_id uuid REFERENCES auth.users(id) ON DELETE CASCADE,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create documents table
CREATE TABLE IF NOT EXISTS documents (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  type text NOT NULL,
  size bigint NOT NULL DEFAULT 0,
  url text NOT NULL,
  client_id uuid REFERENCES clients(id) ON DELETE CASCADE,
  uploaded_by uuid REFERENCES auth.users(id) ON DELETE CASCADE,
  created_at timestamptz DEFAULT now()
);

-- Create contacts table
CREATE TABLE IF NOT EXISTS contacts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  company text,
  message text NOT NULL,
  status text NOT NULL DEFAULT 'unread' CHECK (status IN ('unread', 'read', 'spam')),
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE documents ENABLE ROW LEVEL SECURITY;
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;

-- Create policies for blog_posts table
CREATE POLICY "Anyone can read published blog posts"
  ON blog_posts
  FOR SELECT
  USING (status = 'published');

CREATE POLICY "Admin users can manage all blog posts"
  ON blog_posts
  FOR ALL
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM auth.users 
      WHERE auth.users.id = auth.uid() 
      AND auth.users.email = 'admin@barecloudz.com'
    )
  );

-- Create policies for documents table
CREATE POLICY "Admin users can manage all documents"
  ON documents
  FOR ALL
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM auth.users 
      WHERE auth.users.id = auth.uid() 
      AND auth.users.email = 'admin@barecloudz.com'
    )
  );

CREATE POLICY "Users can read their own documents"
  ON documents
  FOR SELECT
  TO authenticated
  USING (
    client_id IS NULL OR
    EXISTS (
      SELECT 1 FROM clients 
      WHERE clients.id = documents.client_id 
      AND clients.user_id = auth.uid()
    )
  );

-- Create policies for contacts table
CREATE POLICY "Admin users can manage all contacts"
  ON contacts
  FOR ALL
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM auth.users 
      WHERE auth.users.id = auth.uid() 
      AND auth.users.email = 'admin@barecloudz.com'
    )
  );

-- Create triggers for updated_at
CREATE TRIGGER update_blog_posts_updated_at BEFORE UPDATE ON blog_posts FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();