export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      clients: {
        Row: {
          id: string
          name: string
          email: string
          company: string
          phone: string | null
          industry: string
          website: string | null
          status: 'active' | 'inactive' | 'pending'
          user_id: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          email: string
          company: string
          phone?: string | null
          industry: string
          website?: string | null
          status?: 'active' | 'inactive' | 'pending'
          user_id?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          email?: string
          company?: string
          phone?: string | null
          industry?: string
          website?: string | null
          status?: 'active' | 'inactive' | 'pending'
          user_id?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      marketing_plans: {
        Row: {
          id: string
          title: string
          description: string
          content: string
          business_type: string
          industry: string
          target_audience: string
          budget: number
          goals: string[]
          channels: string[]
          status: 'draft' | 'pending' | 'approved' | 'rejected'
          client_id: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          title: string
          description: string
          content?: string
          business_type: string
          industry: string
          target_audience: string
          budget?: number
          goals?: string[]
          channels?: string[]
          status?: 'draft' | 'pending' | 'approved' | 'rejected'
          client_id: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          title?: string
          description?: string
          content?: string
          business_type?: string
          industry?: string
          target_audience?: string
          budget?: number
          goals?: string[]
          channels?: string[]
          status?: 'draft' | 'pending' | 'approved' | 'rejected'
          client_id?: string
          created_at?: string
          updated_at?: string
        }
      }
      invoices: {
        Row: {
          id: string
          number: string
          client_id: string
          amount: number
          status: 'draft' | 'sent' | 'paid' | 'overdue'
          due_date: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          number: string
          client_id: string
          amount?: number
          status?: 'draft' | 'sent' | 'paid' | 'overdue'
          due_date: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          number?: string
          client_id?: string
          amount?: number
          status?: 'draft' | 'sent' | 'paid' | 'overdue'
          due_date?: string
          created_at?: string
          updated_at?: string
        }
      }
      invoice_items: {
        Row: {
          id: string
          invoice_id: string
          description: string
          quantity: number
          rate: number
          amount: number
          created_at: string
        }
        Insert: {
          id?: string
          invoice_id: string
          description: string
          quantity?: number
          rate?: number
          amount?: number
          created_at?: string
        }
        Update: {
          id?: string
          invoice_id?: string
          description?: string
          quantity?: number
          rate?: number
          amount?: number
          created_at?: string
        }
      }
      blog_posts: {
        Row: {
          id: string
          title: string
          slug: string
          excerpt: string
          content: string
          featured_image: string | null
          status: 'draft' | 'published'
          author_id: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          title: string
          slug: string
          excerpt: string
          content: string
          featured_image?: string | null
          status?: 'draft' | 'published'
          author_id: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          title?: string
          slug?: string
          excerpt?: string
          content?: string
          featured_image?: string | null
          status?: 'draft' | 'published'
          author_id?: string
          created_at?: string
          updated_at?: string
        }
      }
      documents: {
        Row: {
          id: string
          name: string
          type: string
          size: number
          url: string
          client_id: string | null
          uploaded_by: string
          created_at: string
        }
        Insert: {
          id?: string
          name: string
          type: string
          size?: number
          url: string
          client_id?: string | null
          uploaded_by: string
          created_at?: string
        }
        Update: {
          id?: string
          name?: string
          type?: string
          size?: number
          url?: string
          client_id?: string | null
          uploaded_by?: string
          created_at?: string
        }
      }
      contacts: {
        Row: {
          id: string
          name: string
          email: string
          phone: string | null
          company: string | null
          message: string
          status: 'unread' | 'read' | 'spam'
          created_at: string
        }
        Insert: {
          id?: string
          name: string
          email: string
          phone?: string | null
          company?: string | null
          message: string
          status?: 'unread' | 'read' | 'spam'
          created_at?: string
        }
        Update: {
          id?: string
          name?: string
          email?: string
          phone?: string | null
          company?: string | null
          message?: string
          status?: 'unread' | 'read' | 'spam'
          created_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}