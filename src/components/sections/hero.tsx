import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '../ui/button'
import { Cloud, ArrowRight, Play } from 'lucide-react'

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 to-white">
      {/* Animated Background Clouds */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 text-[#35c677] opacity-20">
          <motion.div
            animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <Cloud className="h-16 w-16" />
          </motion.div>
        </div>
        <div className="absolute top-40 right-20 text-[#35c677] opacity-15">
          <motion.div
            animate={{ y: [0, -15, 0], rotate: [0, -3, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          >
            <Cloud className="h-24 w-24" />
          </motion.div>
        </div>
        <div className="absolute bottom-40 left-20 text-[#35c677] opacity-10">
          <motion.div
            animate={{ y: [0, -10, 0], rotate: [0, 2, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          >
            <Cloud className="h-20 w-20" />
          </motion.div>
        </div>
        <div className="absolute bottom-20 right-10 text-[#35c677] opacity-25">
          <motion.div
            animate={{ y: [0, -25, 0], rotate: [0, -4, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          >
            <Cloud className="h-12 w-12" />
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-[#191919] mb-6 leading-tight">
              Marketing in the{' '}
              <span className="text-[#35c677] relative">
                Cloud
                <motion.div
                  className="absolute -top-2 -right-2"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <Cloud className="h-8 w-8 text-[#35c677] opacity-50" />
                </motion.div>
              </span>
            </h1>
          </motion.div>

          <motion.p
            className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Transform your business with our cutting-edge digital marketing solutions. 
            We create campaigns that convert and strategies that scale.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button size="lg" className="flex items-center space-x-2">
              <span>Get Started Today</span>
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="flex items-center space-x-2">
              <Play className="h-5 w-5" />
              <span>Watch Demo</span>
            </Button>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-[#35c677] mb-2">500+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#35c677] mb-2">95%</div>
              <div className="text-gray-600">Client Retention</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#35c677] mb-2">24/7</div>
              <div className="text-gray-600">Support</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero