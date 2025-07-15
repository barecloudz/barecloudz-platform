export interface User {
  id: string
  email: string
  name: string
  role: 'admin' | 'client'
  avatar?: string
  createdAt: Date
  updatedAt: Date
}

export interface Client {
  id: string
  name: string
  email: string
  company: string
  phone?: string
  industry: string
  website?: string
  status: 'active' | 'inactive' | 'pending'
  createdAt: Date
  updatedAt: Date
  userId: string
}

export interface Contact {
  id: string
  name: string
  email: string
  phone?: string
  company?: string
  message: string
  status: 'unread' | 'read' | 'spam'
  createdAt: Date
}

export interface MarketingPlan {
  id: string
  title: string
  description: string
  content: string
  businessType: string
  industry: string
  targetAudience: string
  budget: number
  goals: string[]
  channels: string[]
  status: 'draft' | 'pending' | 'approved' | 'rejected'
  clientId: string
  createdAt: Date
  updatedAt: Date
}

export interface Invoice {
  id: string
  number: string
  clientId: string
  amount: number
  status: 'draft' | 'sent' | 'paid' | 'overdue'
  dueDate: Date
  items: InvoiceItem[]
  createdAt: Date
  updatedAt: Date
}

export interface InvoiceItem {
  id: string
  description: string
  quantity: number
  rate: number
  amount: number
}

export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  featuredImage?: string
  status: 'draft' | 'published'
  authorId: string
  createdAt: Date
  updatedAt: Date
}

export interface Document {
  id: string
  name: string
  type: string
  size: number
  url: string
  clientId?: string
  uploadedBy: string
  createdAt: Date
}

export interface Analytics {
  totalClients: number
  totalRevenue: number
  totalProjects: number
  conversionRate: number
  monthlyStats: {
    month: string
    clients: number
    revenue: number
    projects: number
  }[]
}

export interface AuthState {
  user: User | null
  isAuthenticated: boolean
  isLoading: boolean
}

export interface ApiResponse<T> {
  success: boolean
  data?: T
  error?: string
  message?: string
}