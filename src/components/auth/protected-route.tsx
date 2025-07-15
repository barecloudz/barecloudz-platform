import React from 'react'
import { useLocation } from 'wouter'
import { LoadingSpinner } from '../ui/loading-spinner'
import { authService } from '../../lib/auth'

interface ProtectedRouteProps {
  children: React.ReactNode
  requiredRole?: 'admin' | 'client'
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, requiredRole }) => {
  const [, navigate] = useLocation()
  const [isLoading, setIsLoading] = React.useState(true)
  const [isAuthenticated, setIsAuthenticated] = React.useState(false)
  const [hasPermission, setHasPermission] = React.useState(false)

  React.useEffect(() => {
    const checkAuth = async () => {
      try {
        const user = await authService.getCurrentUser()
        if (user) {
          setIsAuthenticated(true)
          
          // Check role-based access
          if (requiredRole) {
            if (user.role === requiredRole || user.role === 'admin') {
              setHasPermission(true)
            } else {
              // Redirect based on user role
              navigate(user.role === 'admin' ? '/admin/dashboard' : '/client/dashboard')
              return
            }
          } else {
            setHasPermission(true)
          }
        } else {
          navigate('/auth/login')
        }
      } catch (error) {
        navigate('/auth/login')
      } finally {
        setIsLoading(false)
      }
    }

    checkAuth()
  }, [navigate, requiredRole])

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <LoadingSpinner size="lg" />
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    )
  }

  if (!isAuthenticated || !hasPermission) {
    return null
  }

  return <>{children}</>
}

export default ProtectedRoute