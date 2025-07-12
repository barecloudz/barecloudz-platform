import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from '../ui/card'
import { Star, Quote } from 'lucide-react'

const Testimonials: React.FC = () => {
  // This would typically come from your backend API
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'CEO',
      company: 'TechFlow Solutions',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
      content: 'BareCloudz transformed our marketing completely. We saw a 300% increase in qualified leads within the first quarter. Their AI-powered approach is simply revolutionary.',
      rating: 5,
      results: '+300% leads'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Marketing Director',
      company: 'GrowthLab Inc',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
      content: 'The level of personalization and automation they achieved for our campaigns is incredible. Our ROI improved by 250% and customer acquisition costs dropped significantly.',
      rating: 5,
      results: '+250% ROI'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Founder',
      company: 'EcoVenture',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
      content: 'Working with BareCloudz feels like having a team of marketing experts in the cloud. Their strategies are data-driven, creative, and deliver real business impact.',
      rating: 5,
      results: '+180% revenue'
    },
    {
      id: 4,
      name: 'David Park',
      role: 'VP Marketing',
      company: 'InnovateCorp',
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150',
      content: 'The automation workflows they set up have saved us countless hours while improving our conversion rates. It\'s like having a 24/7 marketing team that never sleeps.',
      rating: 5,
      results: '+400% efficiency'
    },
    {
      id: 5,
      name: 'Lisa Thompson',
      role: 'CMO',
      company: 'FutureScale',
      avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150',
      content: 'BareCloudz doesn\'t just execute campaigns, they become true partners in your growth journey. Their insights and strategic thinking have been invaluable to our success.',
      rating: 5,
      results: '+220% growth'
    },
    {
      id: 6,
      name: 'James Wilson',
      role: 'Founder',
      company: 'StartupBoost',
      avatar: 'https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=150',
      content: 'From day one, they understood our vision and translated it into marketing campaigns that resonated with our audience. The results speak for themselves.',
      rating: 5,
      results: '+350% conversions'
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
    hidden: { y: 30, opacity: 0 },
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
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50/30 to-white"></div>
      <div className="absolute top-20 left-20 w-80 h-80 bg-[#35c677] opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#191919] opacity-3 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-[#191919] mb-6 leading-tight">
            What our clients
            <br />
            <span className="text-[#35c677]">are saying</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. See how we've helped businesses like yours 
            achieve remarkable growth through strategic marketing.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-8">
                  {/* Quote Icon */}
                  <div className="mb-6">
                    <Quote className="h-8 w-8 text-[#35c677] opacity-60" />
                  </div>

                  {/* Rating */}
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                    "{testimonial.content}"
                  </p>

                  {/* Results Badge */}
                  <div className="mb-6">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[#35c677]/10 text-[#35c677] border border-[#35c677]/20">
                      {testimonial.results}
                    </span>
                  </div>

                  {/* Author */}
                  <div className="flex items-center space-x-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold text-[#191919]">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-gray-600">
                        {testimonial.role} at {testimonial.company}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="text-gray-500 mb-8">Trusted by 500+ companies worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {/* You can replace these with actual client logos */}
            <div className="text-2xl font-bold text-gray-400">TechFlow</div>
            <div className="text-2xl font-bold text-gray-400">GrowthLab</div>
            <div className="text-2xl font-bold text-gray-400">EcoVenture</div>
            <div className="text-2xl font-bold text-gray-400">InnovateCorp</div>
            <div className="text-2xl font-bold text-gray-400">FutureScale</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials