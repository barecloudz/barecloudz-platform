export const BRAND_COLORS = {
  primary: '#191919',
  accent: '#35c677',
  white: '#ffffff',
  gray: {
    50: '#f9fafb',
    100: '#f3f4f6',
    200: '#e5e7eb',
    300: '#d1d5db',
    400: '#9ca3af',
    500: '#6b7280',
    600: '#4b5563',
    700: '#374151',
    800: '#1f2937',
    900: '#111827',
  }
} as const

export const ROUTES = {
  HOME: '/',
  BLOG: '/blog',
  ADMIN: {
    DASHBOARD: '/admin/dashboard',
    CLIENTS: '/admin/clients',
    MARKETING_PLANS: '/admin/marketing-plans',
    INVOICES: '/admin/invoices',
    BLOG: '/admin/blog',
    DOCUMENTS: '/admin/documents',
    CONTACTS: '/admin/contacts',
    SETTINGS: '/admin/settings',
  },
  CLIENT: {
    DASHBOARD: '/client/dashboard',
    PLANS: '/client/plans',
    INVOICES: '/client/invoices',
    DOCUMENTS: '/client/documents',
    PROFILE: '/client/profile',
  },
  AUTH: {
    LOGIN: '/auth/login',
    REGISTER: '/auth/register',
    RESET: '/auth/reset',
  }
} as const

export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: '/api/auth/login',
    LOGOUT: '/api/auth/logout',
    REGISTER: '/api/auth/register',
    RESET: '/api/auth/reset',
    ME: '/api/auth/me',
  },
  CLIENTS: '/api/clients',
  MARKETING_PLANS: '/api/marketing-plans',
  INVOICES: '/api/invoices',
  BLOG: '/api/blog',
  DOCUMENTS: '/api/documents',
  CONTACTS: '/api/contacts',
  ANALYTICS: '/api/analytics',
} as const

export const SERVICES = [
  {
    id: 'social-media',
    title: 'Social Media Marketing',
    description: 'Amplify your brand presence across all major social platforms with strategic content and engagement.',
    icon: '📱',
    features: ['Content Strategy', 'Community Management', 'Paid Advertising', 'Analytics & Reporting']
  },
  {
    id: 'seo',
    title: 'Search Engine Optimization',
    description: 'Boost your visibility and drive organic traffic with our proven SEO strategies.',
    icon: '🔍',
    features: ['Keyword Research', 'On-Page SEO', 'Technical SEO', 'Link Building']
  },
  {
    id: 'email-marketing',
    title: 'Email Marketing',
    description: 'Build lasting relationships with personalized email campaigns that convert.',
    icon: '📧',
    features: ['Campaign Design', 'List Management', 'Automation', 'Performance Tracking']
  },
  {
    id: 'content-marketing',
    title: 'Content Marketing',
    description: 'Create compelling content that resonates with your audience and drives results.',
    icon: '📝',
    features: ['Content Strategy', 'Blog Writing', 'Video Production', 'Graphic Design']
  }
] as const