import React from 'react'
import { cn } from '../../lib/utils'

interface LoadingSpinnerProps {
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  className, 
  size = 'md' 
}) => {
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-8 w-8',
    lg: 'h-12 w-12'
  }

  return (
    <div
      className={cn(
        'animate-spin rounded-full border-2 border-gray-200 border-t-[#35c677]',
        sizeClasses[size],
        className
      )}
    />
  )
}

export { LoadingSpinner }