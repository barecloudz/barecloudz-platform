import React from 'react'
import AdminSidebar from '../../components/layout/admin-sidebar'
import DashboardOverview from '../../components/admin/dashboard-overview'

const AdminDashboard: React.FC = () => {
  return (
    <div className="flex h-screen bg-gray-50">
      <AdminSidebar />
      <main className="flex-1 ml-64 p-8 overflow-y-auto">
        <DashboardOverview />
      </main>
    </div>
  )
}

export default AdminDashboard