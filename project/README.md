# BareCloudz Marketing Agency Management Platform

A comprehensive full-stack marketing agency management platform built with React, TypeScript, and modern web technologies.

## Features

- 🎨 Modern landing page with animated cloud background
- 🔐 Complete authentication system (Admin/Client portals)
- 🤖 AI-powered marketing plan generation using OpenAI API
- 👥 Client management with communication history
- 📊 Analytics dashboard with traffic stats
- 💰 Invoice system with PDF generation
- 📝 Blog management system
- 📁 Document sharing and file uploads
- 📱 Mobile-responsive design with smooth animations

## Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **UI**: Tailwind CSS, Radix UI components
- **State Management**: TanStack Query
- **Routing**: Wouter
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Zod validation
- **Database**: PostgreSQL (ready for Supabase/Neon)

## Getting Started

### Prerequisites

- Node.js 18+ 
- PostgreSQL database
- OpenAI API key (for marketing plan generation)

### Installation

1. Clone the repository
```bash
git clone <your-repo-url>
cd barecloudz-platform
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables
```bash
cp .env.example .env
# Edit .env with your configuration
```

4. Start the development server
```bash
npm run dev
```

## Deployment

### Vercel Deployment

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Configure environment variables in Vercel dashboard
4. Deploy!

Build settings for Vercel:
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

### Environment Variables

Set these in your Vercel dashboard:

- `DATABASE_URL`: PostgreSQL connection string
- `OPENAI_API_KEY`: Your OpenAI API key
- `SESSION_SECRET`: Random secret for sessions
- `NODE_ENV`: Set to `production`

## Demo Credentials

- **Admin Login**: admin@barecloudz.com / admin123

## Brand Colors

- Primary: #191919 (Dark)
- Accent: #35c677 (Green)
- Background: White

## License

MIT License