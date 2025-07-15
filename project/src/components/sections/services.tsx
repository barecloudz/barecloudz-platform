import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from '../ui/card'
import { 
  Bot, 
  Phone, 
  Share2, 
  Search, 
  Target, 
  Smartphone,
  ArrowRight,
  Zap
} from 'lucide-react'
import { Button } from '../ui/button'

const Services: React.FC = () => {
  const services = [
    {
      icon: Bot,
      title: 'AI Customer Support',
      description: 'Intelligent chatbots that handle customer inquiries, bookings, and support 24/7 without human intervention.',
      features: ['24/7 availability', 'Multi-language support', 'CRM integration', 'Smart escalation'],
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Phone,
      title: 'AI Phone Agents',
      description: 'Automated phone systems for restaurants and service businesses to handle orders, reservations, and inquiries.',
      features: ['Order taking', 'Appointment booking', 'FAQ handling', 'Call routing'],
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: Share2,
      title: 'Social Media Marketing',
      description: 'Strategic content creation and management across Instagram, Facebook, and TikTok to build your brand presence.',
      features: ['Content strategy', 'Post scheduling', 'Community management', 'Analytics tracking'],
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Search,
      title: 'SEO & Local Search',
      description: 'Optimize your online presence to dominate local search results and attract more customers in your area.',
      features: ['Local SEO', 'Google My Business', 'Review management', 'Citation building'],
      gradient: 'from-orange-500 to-red-500'
    },
    {
      icon: Target,
      title: 'Paid Advertising',
      description: 'Expert management of Meta Ads and Google Ads campaigns to maximize your return on advertising spend.',
      features: ['Campaign setup', 'Audience targeting', 'A/B testing', 'Performance optimization'],
      gradient: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Smartphone,
      title: 'Websites & Apps',
      description: 'Professional website and mobile app development that converts visitors into customers and drives business growth.',
      features: ['Responsive design', 'E-commerce integration', 'Mobile apps', 'Performance optimization'],
      gradient: 'from-yellow-500 to-orange-500'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 to-white"></div>
      <div className="absolute top-20 right-20 w-72 h-72 bg-[#35c677] opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#191919] opacity-3 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center space-x-2 bg-[#35c677]/10 border border-[#35c677]/20 rounded-full px-4 py-2 mb-6">
            <Zap className="h-4 w-4 text-[#35c677]" />
            <span className="text-sm font-medium text-[#191919]">
              Our Core Services
            </span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-[#191919] mb-6 leading-tight">
            Everything your
            <br />
            <span className="text-[#35c677]">business needs</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From AI-powered automation to proven marketing strategies, we provide 
            the complete toolkit to grow your local business and stay ahead of the competition.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white/80 backdrop-blur-sm group">
                  <CardContent className="p-8">
                    <div className="mb-6">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} p-4 mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-[#191919] mb-3">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-6">
                        {service.description}
                      </p>
                    </div>

                    <div className="space-y-3 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-[#35c677] rounded-full"></div>
                          <span className="text-sm text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Button 
                      variant="ghost" 
                      className="w-full justify-between text-[#35c677] hover:bg-[#35c677]/10 group-hover:translate-x-1 transition-transform duration-300"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Button size="lg" className="flex items-center space-x-2 bg-[#35c677] hover:bg-[#2ba866] text-white px-8 py-4 text-lg">
            <span>Get Custom Quote</span>
            <ArrowRight className="h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

export default Services