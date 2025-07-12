import { User, AuthState } from './types'

class AuthService {
  private static instance: AuthService
  private authState: AuthState = {
    user: null,
    isAuthenticated: false,
    isLoading: false
  }

  static getInstance(): AuthService {
    if (!AuthService.instance) {
      AuthService.instance = new AuthService()
    }
    return AuthService.instance
  }

  async login(email: string, password: string): Promise<{ success: boolean; user?: User; error?: string }> {
    this.authState.isLoading = true
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      if (email === 'admin@barecloudz.com' && password === 'admin123') {
        const user: User = {
          id: 'admin-1',
          email: 'admin@barecloudz.com',
          name: 'BareCloudz Admin',
          role: 'admin',
          avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
          createdAt: new Date(),
          updatedAt: new Date()
        }
        
        this.authState.user = user
        this.authState.isAuthenticated = true
        localStorage.setItem('auth_user', JSON.stringify(user))
        
        return { success: true, user }
      } else {
        return { success: false, error: 'Invalid credentials' }
      }
    } catch (error) {
      return { success: false, error: 'Login failed' }
    } finally {
      this.authState.isLoading = false
    }
  }

  async logout(): Promise<void> {
    this.authState.user = null
    this.authState.isAuthenticated = false
    localStorage.removeItem('auth_user')
  }

  async getCurrentUser(): Promise<User | null> {
    const stored = localStorage.getItem('auth_user')
    if (stored) {
      const user = JSON.parse(stored)
      this.authState.user = user
      this.authState.isAuthenticated = true
      return user
    }
    return null
  }

  getAuthState(): AuthState {
    return this.authState
  }

  isAuthenticated(): boolean {
    return this.authState.isAuthenticated
  }
}

export const authService = AuthService.getInstance()