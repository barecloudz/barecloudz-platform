import { ApiResponse } from './types'

class ApiService {
  private baseUrl = '/api'

  async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<ApiResponse<T>> {
    try {
      const response = await fetch(`${this.baseUrl}${endpoint}`, {
        headers: {
          'Content-Type': 'application/json',
          ...options.headers,
        },
        ...options,
      })

      const data = await response.json()
      
      if (!response.ok) {
        return {
          success: false,
          error: data.error || 'An error occurred',
        }
      }

      return {
        success: true,
        data: data.data,
        message: data.message,
      }
    } catch (error) {
      return {
        success: false,
        error: 'Network error',
      }
    }
  }

  async get<T>(endpoint: string): Promise<ApiResponse<T>> {
    return this.request(endpoint, { method: 'GET' })
  }

  async post<T>(endpoint: string, data: any): Promise<ApiResponse<T>> {
    return this.request(endpoint, {
      method: 'POST',
      body: JSON.stringify(data),
    })
  }

  async put<T>(endpoint: string, data: any): Promise<ApiResponse<T>> {
    return this.request(endpoint, {
      method: 'PUT',
      body: JSON.stringify(data),
    })
  }

  async delete<T>(endpoint: string): Promise<ApiResponse<T>> {
    return this.request(endpoint, { method: 'DELETE' })
  }
}

export const apiService = new ApiService()