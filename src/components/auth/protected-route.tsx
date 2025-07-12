import React from 'react'
import { useLocation } from 'wouter'
import { LoadingSpinner } from '../ui/loading-spinner'
import { authService } from '../../lib/auth'

interface ProtectedRouteProps {
  children: React.ReactNode
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const [, navigate] = useLocation()
  const [isLoading, setIsLoading] = React.useState(true)
  const [isAuthenticated, setIsAuthenticated] = React.useState(false)

  React.useEffect(() => {
    const checkAuth = async () => {
      try {
        const user = await authService.getCurrentUser()
        if (user) {
          setIsAuthenticated(true)
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
  }, [navigate])

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

  if (!isAuthenticated) {
    return null
  }

  return <>{children}</>
}

export default ProtectedRoute