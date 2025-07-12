import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from '../ui/card'
import { Star, Quote } from 'lucide-react'

const Testimonials: React.FC = () => {
  // This would typically come from your backend API
  const testimonials = [
    {
      id: 1,
      name: 'Maria Rodriguez',
      role: 'Owner',
      company: 'Bella Vista Restaurant',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
      content: 'The AI phone agent has been a game-changer for our restaurant. We\'re taking 40% more orders and our staff can focus on food quality instead of answering phones all day.',
      rating: 5,
      results: '+40% orders'
    },
    {
      id: 2,
      name: 'David Chen',
      role: 'Manager',
      company: 'Elite Fitness Gym',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
      content: 'Our AI assistant handles membership inquiries and class bookings 24/7. We\'ve seen a 60% increase in new member sign-ups since implementing the system.',
      rating: 5,
      results: '+60% sign-ups'
    },
    {
      id: 3,
      name: 'Sarah Thompson',
      role: 'Owner',
      company: 'Thompson Dental Care',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
      content: 'The appointment booking automation has eliminated double bookings and reduced no-shows by 30%. Our patients love the instant confirmation and reminders.',
      rating: 5,
      results: '-30% no-shows'
    },
    {
      id: 4,
      name: 'Mike Johnson',
      role: 'Owner',
      company: 'Johnson Auto Repair',
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150',
      content: 'The AI customer support handles basic inquiries and schedules service appointments. We\'ve cut our phone time in half while improving customer satisfaction.',
      rating: 5,
      results: '+50% efficiency'
    },
    {
      id: 5,
      name: 'Lisa Park',
      role: 'Manager',
      company: 'Sunset Spa & Wellness',
      avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150',
      content: 'Our booking system now works 24/7 and the AI handles customer questions about services and pricing. Revenue is up 45% since we started using BareCloudz.',
      rating: 5,
      results: '+45% revenue'
    },
    {
      id: 6,
      name: 'Carlos Martinez',
      role: 'Owner',
      company: 'Martinez Landscaping',
      avatar: 'https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=150',
      content: 'The lead qualification system filters serious customers before they reach us. We\'re closing 70% more deals and spending less time on unqualified leads.',
      rating: 5,
      results: '+70% conversions'
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
    <section className="py-32 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
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
            Real results from
            <br />
            <span className="text-[#35c677]">real businesses</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            See how local businesses are transforming their operations and boosting 
            revenue with our AI-powered automation solutions.
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
          <p className="text-gray-500 mb-8">Trusted by 200+ local businesses</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-2xl font-bold text-gray-400">Restaurants</div>
            <div className="text-2xl font-bold text-gray-400">Fitness Centers</div>
            <div className="text-2xl font-bold text-gray-400">Medical Practices</div>
            <div className="text-2xl font-bold text-gray-400">Auto Repair</div>
            <div className="text-2xl font-bold text-gray-400">Spas & Salons</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials