import React from 'react'
import { useLocation } from 'wouter'
import { motion } from 'framer-motion'
import LoginForm from '../../components/auth/login-form'
import { authService } from '../../lib/auth'

const LoginPage: React.FC = () => {
  const [, navigate] = useLocation()

  React.useEffect(() => {
    const checkAuth = async () => {
      const user = await authService.getCurrentUser()
      if (user) {
        navigate(user.role === 'admin' ? '/admin/dashboard' : '/client/dashboard')
      }
    }
    checkAuth()
  }, [navigate])

  const handleLoginSuccess = () => {
    const user = authService.getAuthState().user
    if (user) {
      navigate(user.role === 'admin' ? '/admin/dashboard' : '/client/dashboard')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <LoginForm onSuccess={handleLoginSuccess} />
      </motion.div>
    </div>
  )
}

export default LoginPage