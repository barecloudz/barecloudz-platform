import React from 'react'
import { motion } from 'framer-motion'
import AdminSidebar from '../../components/layout/admin-sidebar'
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card'
import { Button } from '../../components/ui/button'
import { Badge } from '../../components/ui/badge'
import { Plus, Sparkles, Eye, Edit, Download } from 'lucide-react'

const AdminMarketingPlans: React.FC = () => {
  const [isGenerating, setIsGenerating] = React.useState(false)

  const plans = [
    {
      id: 1,
      title: 'Tech Startup Growth Strategy',
      client: 'Tech Startup Co',
      businessType: 'B2B SaaS',
      industry: 'Technology',
      budget: 15000,
      status: 'approved',
      goals: ['Brand Awareness', 'Lead Generation'],
      channels: ['Social Media', 'SEO', 'Content Marketing'],
      createdAt: '2024-01-15',
      updatedAt: '2024-01-20'
    },
    {
      id: 2,
      title: 'E-commerce Revenue Boost',
      client: 'E-commerce Store',
      businessType: 'E-commerce',
      industry: 'Retail',
      budget: 8500,
      status: 'pending',
      goals: ['Sales Growth', 'Customer Retention'],
      channels: ['Email Marketing', 'Paid Ads', 'Social Media'],
      createdAt: '2024-02-20',
      updatedAt: '2024-02-22'
    },
    {
      id: 3,
      title: 'Local Restaurant Visibility',
      client: 'Local Restaurant',
      businessType: 'Local Business',
      industry: 'Food & Beverage',
      budget: 3200,
      status: 'draft',
      goals: ['Local Awareness', 'Customer Acquisition'],
      channels: ['Local SEO', 'Social Media', 'Google Ads'],
      createdAt: '2024-03-10',
      updatedAt: '2024-03-12'
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved':
        return 'success'
      case 'pending':
        return 'warning'
      case 'draft':
        return 'secondary'
      case 'rejected':
        return 'destructive'
      default:
        return 'secondary'
    }
  }

  const handleGenerateAIPlan = async () => {
    setIsGenerating(true)
    // Simulate AI plan generation
    await new Promise(resolve => setTimeout(resolve, 3000))
    setIsGenerating(false)
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
                Marketing Plans
              </h1>
              <p className="text-gray-600 mt-1">
                Create and manage AI-powered marketing strategies
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <Button 
                variant="outline" 
                className="flex items-center space-x-2"
                onClick={handleGenerateAIPlan}
                disabled={isGenerating}
              >
                <Sparkles className="h-4 w-4" />
                <span>
                  {isGenerating ? 'Generating...' : 'Generate AI Plan'}
                </span>
              </Button>
              <Button className="flex items-center space-x-2">
                <Plus className="h-4 w-4" />
                <span>Create Plan</span>
              </Button>
            </div>
          </div>

          {isGenerating && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-gradient-to-r from-[#35c677] to-[#2ba866] text-white p-6 rounded-lg"
            >
              <div className="flex items-center space-x-3">
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                <div>
                  <h3 className="font-semibold">AI Marketing Plan Generation</h3>
                  <p className="text-sm opacity-90">
                    Creating a customized marketing strategy based on your business requirements...
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {plans.map((plan) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -4 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-200">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg text-[#191919] mb-2">
                          {plan.title}
                        </CardTitle>
                        <p className="text-sm text-gray-600">
                          {plan.client}
                        </p>
                      </div>
                      <Badge variant={getStatusColor(plan.status) as any}>
                        {plan.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-gray-500">Business Type:</span>
                        <p className="font-medium">{plan.businessType}</p>
                      </div>
                      <div>
                        <span className="text-gray-500">Industry:</span>
                        <p className="font-medium">{plan.industry}</p>
                      </div>
                    </div>

                    <div>
                      <span className="text-gray-500 text-sm">Budget:</span>
                      <p className="font-semibold text-[#35c677]">
                        ${plan.budget.toLocaleString()}
                      </p>
                    </div>

                    <div>
                      <span className="text-gray-500 text-sm">Goals:</span>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {plan.goals.map((goal, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {goal}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <span className="text-gray-500 text-sm">Channels:</span>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {plan.channels.map((channel, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {channel}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t">
                      <div className="flex items-center space-x-2">
                        <Button size="sm" variant="outline">
                          <Eye className="h-3 w-3" />
                        </Button>
                        <Button size="sm" variant="outline">
                          <Edit className="h-3 w-3" />
                        </Button>
                        <Button size="sm" variant="outline">
                          <Download className="h-3 w-3" />
                        </Button>
                      </div>
                      <span className="text-xs text-gray-500">
                        Updated {new Date(plan.updatedAt).toLocaleDateString()}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </main>
    </div>
  )
}

export default AdminMarketingPlans