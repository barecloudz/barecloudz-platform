import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '../ui/button'
import { ArrowRight, CheckCircle, Users, BarChart3, Rocket } from 'lucide-react'

const HowItWorks: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Discovery & Strategy',
      description: 'We dive deep into your business goals, target audience, and competitive landscape to craft a personalized marketing strategy.',
      icon: Users,
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: [
        'Business analysis & goal setting',
        'Target audience research',
        'Competitive landscape review',
        'Custom strategy development'
      ]
    },
    {
      step: '02',
      title: 'Campaign Creation',
      description: 'Our AI-powered platform creates optimized campaigns across multiple channels, ensuring maximum reach and engagement.',
      icon: Rocket,
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: [
        'Multi-channel campaign setup',
        'AI-optimized content creation',
        'Advanced targeting configuration',
        'Creative asset development'
      ]
    },
    {
      step: '03',
      title: 'Launch & Optimize',
      description: 'We launch your campaigns and continuously monitor performance, making real-time adjustments for optimal results.',
      icon: BarChart3,
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: [
        'Campaign launch & monitoring',
        'Real-time performance tracking',
        'Continuous optimization',
        'Detailed reporting & insights'
      ]
    }
  ]

  return (
    <section className="py-32 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-40 left-20 w-80 h-80 bg-[#35c677] opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 right-20 w-96 h-96 bg-[#191919] opacity-3 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-[#191919] mb-6 leading-tight">
            How it
            <span className="text-[#35c677]"> works</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our proven three-step process transforms your marketing from ordinary to extraordinary, 
            delivering measurable results that drive business growth.
          </p>
        </motion.div>

        <div className="space-y-32">
          {steps.map((step, index) => {
            const Icon = step.icon
            const isEven = index % 2 === 0

            return (
              <motion.div
                key={index}
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-16`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                {/* Content */}
                <div className="flex-1 space-y-8">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-[#35c677] rounded-2xl flex items-center justify-center shadow-lg">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="text-6xl font-bold text-[#35c677] opacity-20">
                      {step.step}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-4xl font-bold text-[#191919] mb-4">
                      {step.title}
                    </h3>
                    <p className="text-xl text-gray-600 leading-relaxed mb-8">
                      {step.description}
                    </p>
                  </div>

                  <div className="space-y-4">
                    {step.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        className="flex items-center space-x-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: featureIndex * 0.1 }}
                      >
                        <CheckCircle className="h-6 w-6 text-[#35c677] flex-shrink-0" />
                        <span className="text-gray-700 text-lg">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  {index === steps.length - 1 && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                    >
                      <Button 
                        size="lg" 
                        className="text-lg px-8 py-4 h-auto bg-[#35c677] hover:bg-[#2ba866] text-white shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        <span>Start Your Campaign</span>
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </motion.div>
                  )}
                </div>

                {/* Image */}
                <motion.div
                  className="flex-1"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#35c677]/20 to-[#191919]/20 rounded-3xl transform rotate-3"></div>
                    <img
                      src={step.image}
                      alt={step.title}
                      className="relative w-full h-96 object-cover rounded-3xl shadow-2xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl"></div>
                  </div>
                </motion.div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks