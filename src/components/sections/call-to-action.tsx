import React from 'react'
import { motion } from 'framer-motion'
import { useQuery } from '@tanstack/react-query'
import { getCompanySettings } from '../../lib/supabase'
import { Button } from '../ui/button'
import { ArrowRight, Calendar, CheckCircle, Phone } from 'lucide-react'

const CallToAction: React.FC = () => {
  // Fetch company settings for dynamic phone number
  const { data: companySettings } = useQuery({
    queryKey: ['company-settings'],
    queryFn: getCompanySettings
  })

  const benefits = [
    'Free 30-minute consultation',
    'Custom AI automation strategy',
    'No setup fees or contracts',
    '30-day money-back guarantee'
  ]

  return (
    <section className="py-32 bg-gradient-to-br from-[#191919] to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-80 h-80 bg-[#35c677] opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#35c677] opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#35c677] opacity-3 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="inline-flex items-center space-x-2 bg-[#35c677]/20 border border-[#35c677]/30 rounded-full px-6 py-3">
              <Calendar className="h-5 w-5 text-[#35c677]" />
              <span className="text-sm font-medium text-white">
                Book Your Free Demo Today
              </span>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h2
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Ready to automate
            <br />
            <span className="text-white">your business?</span>
          </motion.h2>

          {/* Supporting Text */}
          <motion.div
            className="relative mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="absolute inset-0 bg-black/80 rounded-lg"></div>
            <p className="relative text-xl md:text-2xl text-white p-6 leading-relaxed">
              Join hundreds of local businesses that have transformed their operations 
              with AI automation. See how we can help you save time, increase bookings, 
              and boost revenue starting today.
            </p>
          </motion.div>

          {/* Benefits */}
          <motion.div
            className="relative mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="absolute inset-0 bg-black/80 rounded-lg"></div>
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto p-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                >
                  <CheckCircle className="h-6 w-6 text-[#35c677] flex-shrink-0" />
                  <span className="text-white text-lg">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button 
              size="lg" 
              className="text-lg px-10 py-5 h-auto bg-[#35c677] hover:bg-[#2ba866] text-white shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
            >
              <Calendar className="mr-2 h-5 w-5" />
              <span>Book Free Demo</span>
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-10 py-5 h-auto border-2 border-white bg-white text-black hover:bg-gray-100 hover:text-[#191919] transition-all duration-300"
            >
              <Phone className="mr-2 h-5 w-5" />
              <span>Call {companySettings?.phone || '(803) 977-4285'}</span>
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <p className="text-gray-400 text-sm mb-4">
              No setup fees • Cancel anytime • 24/7 support
            </p>
            <div className="flex justify-center items-center space-x-8 text-gray-500">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-[#35c677] rounded-full"></div>
                <span className="text-sm">SSL Secured</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-[#35c677] rounded-full"></div>
                <span className="text-sm">GDPR Compliant</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-[#35c677] rounded-full"></div>
                <span className="text-sm">SOC 2 Certified</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default CallToAction