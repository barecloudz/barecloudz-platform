import React from 'react'
import { motion } from 'framer-motion'
import AdminSidebar from '../../components/layout/admin-sidebar'
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card'
import { Button } from '../../components/ui/button'
import { Input } from '../../components/ui/input'
import { Badge } from '../../components/ui/badge'
import { Plus, Search, Edit, Trash2, Mail, Phone, Globe } from 'lucide-react'

const AdminClients: React.FC = () => {
  const [searchTerm, setSearchTerm] = React.useState('')

  const clients = [
    {
      id: 1,
      name: 'Tech Startup Co',
      email: 'contact@techstartup.com',
      company: 'Tech Startup Co',
      phone: '+1 (555) 123-4567',
      industry: 'Technology',
      website: 'https://techstartup.com',
      status: 'active',
      projects: 3,
      revenue: 15000,
      joinedDate: '2024-01-15'
    },
    {
      id: 2,
      name: 'E-commerce Store',
      email: 'hello@ecomstore.com',
      company: 'E-commerce Store',
      phone: '+1 (555) 987-6543',
      industry: 'E-commerce',
      website: 'https://ecomstore.com',
      status: 'active',
      projects: 2,
      revenue: 8500,
      joinedDate: '2024-02-20'
    },
    {
      id: 3,
      name: 'Local Restaurant',
      email: 'info@localrestaurant.com',
      company: 'Local Restaurant',
      phone: '+1 (555) 456-7890',
      industry: 'Food & Beverage',
      website: 'https://localrestaurant.com',
      status: 'pending',
      projects: 1,
      revenue: 3200,
      joinedDate: '2024-03-10'
    }
  ]

  const filteredClients = clients.filter(client =>
    client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    client.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
    client.industry.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'success'
      case 'pending':
        return 'warning'
      case 'inactive':
        return 'secondary'
      default:
        return 'secondary'
    }
  }

  return (
    <div className="flex h-screen bg-gray-50">
      <AdminSidebar />
      <main className="flex-1 ml-64 p-8 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-[#191919]">
                Client Management
              </h1>
              <p className="text-gray-600 mt-1">
                Manage your clients and their projects
              </p>
            </div>
            <Button className="flex items-center space-x-2">
              <Plus className="h-4 w-4" />
              <span>Add Client</span>
            </Button>
          </div>

          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>All Clients</CardTitle>
                <div className="flex items-center space-x-2">
                  <div className="relative">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      placeholder="Search clients..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 w-64"
                    />
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4 font-medium text-gray-600">
                        Client
                      </th>
                      <th className="text-left py-3 px-4 font-medium text-gray-600">
                        Contact
                      </th>
                      <th className="text-left py-3 px-4 font-medium text-gray-600">
                        Industry
                      </th>
                      <th className="text-left py-3 px-4 font-medium text-gray-600">
                        Status
                      </th>
                      <th className="text-left py-3 px-4 font-medium text-gray-600">
                        Projects
                      </th>
                      <th className="text-left py-3 px-4 font-medium text-gray-600">
                        Revenue
                      </th>
                      <th className="text-left py-3 px-4 font-medium text-gray-600">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredClients.map((client) => (
                      <motion.tr
                        key={client.id}
                        className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <td className="py-4 px-4">
                          <div>
                            <div className="font-medium text-[#191919]">
                              {client.name}
                            </div>
                            <div className="text-sm text-gray-500">
                              {client.company}
                            </div>
                          </div>
                        </td>
                        <td className="py-4 px-4">
                          <div className="space-y-1">
                            <div className="flex items-center space-x-2">
                              <Mail className="h-3 w-3 text-gray-400" />
                              <span className="text-sm text-gray-600">
                                {client.email}
                              </span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Phone className="h-3 w-3 text-gray-400" />
                              <span className="text-sm text-gray-600">
                                {client.phone}
                              </span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Globe className="h-3 w-3 text-gray-400" />
                              <span className="text-sm text-gray-600">
                                {client.website}
                              </span>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 px-4">
                          <span className="text-sm text-gray-600">
                            {client.industry}
                          </span>
                        </td>
                        <td className="py-4 px-4">
                          <Badge variant={getStatusColor(client.status) as any}>
                            {client.status}
                          </Badge>
                        </td>
                        <td className="py-4 px-4">
                          <span className="text-sm font-medium text-[#191919]">
                            {client.projects}
                          </span>
                        </td>
                        <td className="py-4 px-4">
                          <span className="text-sm font-medium text-[#35c677]">
                            ${client.revenue.toLocaleString()}
                          </span>
                        </td>
                        <td className="py-4 px-4">
                          <div className="flex items-center space-x-2">
                            <Button size="sm" variant="outline">
                              <Edit className="h-3 w-3" />
                            </Button>
                            <Button size="sm" variant="outline">
                              <Trash2 className="h-3 w-3" />
                            </Button>
                          </div>
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </main>
    </div>
  )
}

export default AdminClients