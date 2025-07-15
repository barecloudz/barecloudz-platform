import React from 'react'
import { Link, useLocation } from 'wouter'
import { motion } from 'framer-motion'
import { 
  Cloud, 
  LayoutDashboard, 
  Users, 
  FileText, 
  DollarSign, 
  BookOpen, 
  FolderOpen,
  MessageSquare,
  Settings,
  LogOut
} from 'lucide-react'
import { Button } from '../ui/button'
import { authService } from '../../lib/auth'

const AdminSidebar: React.FC = () => {
  const [location] = useLocation()

  const sidebarItems = [
    { icon: LayoutDashboard, label: 'Dashboard', href: '/admin/dashboard' },
    { icon: Users, label: 'Clients', href: '/admin/clients' },
    { icon: FileText, label: 'Marketing Plans', href: '/admin/marketing-plans' },
    { icon: DollarSign, label: 'Invoices', href: '/admin/invoices' },
    { icon: BookOpen, label: 'Blog', href: '/admin/blog' },
    { icon: FolderOpen, label: 'Documents', href: '/admin/documents' },
    { icon: MessageSquare, label: 'Contacts', href: '/admin/contacts' },
    { icon: Settings, label: 'Settings', href: '/admin/settings' },
  ]

  const handleLogout = async () => {
    await authService.logout()
    window.location.href = '/auth/login'
  }

  return (
    <div className="w-64 bg-white border-r border-gray-200 h-screen fixed left-0 top-0 z-40">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center space-x-2">
          <Cloud className="h-8 w-8 text-[#35c677]" />
          <span className="text-xl font-bold text-[#191919]">BareCloudz</span>
        </div>
        <p className="text-sm text-gray-500 mt-1">Admin Panel</p>
      </div>

      <nav className="mt-6">
        <div className="px-4 space-y-2">
          {sidebarItems.map((item) => {
            const Icon = item.icon
            const isActive = location === item.href
            
            return (
              <Link key={item.href} href={item.href}>
                <motion.a
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                    isActive 
                      ? 'bg-[#35c677] text-white' 
                      : 'text-gray-600 hover:bg-gray-50 hover:text-[#35c677]'
                  }`}
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Icon className="h-5 w-5" />
                  <span className="text-sm font-medium">{item.label}</span>
                </motion.a>
              </Link>
            )
          })}
        </div>
      </nav>

      <div className="absolute bottom-6 left-4 right-4">
        <Button 
          variant="outline" 
          className="w-full flex items-center space-x-2"
          onClick={handleLogout}
        >
          <LogOut className="h-4 w-4" />
          <span>Logout</span>
        </Button>
      </div>
    </div>
  )
}

export default AdminSidebar