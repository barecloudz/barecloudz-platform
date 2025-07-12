import React from 'react'
import { Route, Switch } from 'wouter'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import HomePage from './pages/home'
import LoginPage from './pages/auth/login'
import AdminDashboard from './pages/admin/dashboard'
import AdminClients from './pages/admin/clients'
import AdminMarketingPlans from './pages/admin/marketing-plans'
import ProtectedRoute from './components/auth/protected-route'
import './index.css'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
})

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-white">
        <Switch>
          <Route path="/" component={HomePage} />
          <Route path="/auth/login" component={LoginPage} />
          <Route path="/admin/dashboard">
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          </Route>
          <Route path="/admin/clients">
            <ProtectedRoute>
              <AdminClients />
            </ProtectedRoute>
          </Route>
          <Route path="/admin/marketing-plans">
            <ProtectedRoute>
              <AdminMarketingPlans />
            </ProtectedRoute>
          </Route>
          <Route>
            <div className="min-h-screen flex items-center justify-center">
              <div className="text-center">
                <h1 className="text-4xl font-bold text-[#191919] mb-4">
                  404 - Page Not Found
                </h1>
                <p className="text-gray-600 mb-8">
                  The page you're looking for doesn't exist.
                </p>
                <a
                  href="/"
                  className="inline-flex items-center justify-center rounded-md bg-[#35c677] px-4 py-2 text-sm font-medium text-white hover:bg-[#2ba866] transition-colors"
                >
                  Go Home
                </a>
              </div>
            </div>
          </Route>
        </Switch>
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App