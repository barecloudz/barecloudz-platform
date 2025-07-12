import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '../ui/button'
import { ArrowRight, Play, Bot, Zap, TrendingUp } from 'lucide-react'

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* AI-themed floating elements */}
        <motion.div
          className="absolute top-20 left-10 text-[#35c677] opacity-10"
          animate={{ 
            y: [0, -30, 0],
            rotate: [0, 10, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          <Bot className="h-24 w-24" />
        </motion.div>
        
        <motion.div
          className="absolute top-40 right-20 text-[#35c677] opacity-8"
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, -5, 0],
            scale: [1, 0.9, 1]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        >
          <Zap className="h-32 w-32" />
        </motion.div>

        <motion.div
          className="absolute bottom-40 left-20 text-[#35c677] opacity-6"
          animate={{ 
            y: [0, -15, 0],
            rotate: [0, 8, 0]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        >
          <TrendingUp className="h-20 w-20" />
        </motion.div>

        {/* Gradient orbs */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#35c677] opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-[#191919] opacity-3 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-6xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="inline-flex items-center space-x-2 bg-[#35c677]/10 border border-[#35c677]/20 rounded-full px-6 py-3">
              <Bot className="h-5 w-5 text-[#35c677]" />
              <span className="text-sm font-medium text-[#191919]">
                AI-Powered Business Automation
              </span>
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-[#191919] mb-8 leading-[0.9] tracking-tight">
              Grow Your
              <br />
              <span className="text-[#35c677] relative inline-block">
                Local Business
                <motion.div
                  className="absolute -top-4 -right-4"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <Bot className="h-12 w-12 text-[#35c677] opacity-60" />
                </motion.div>
              </span>
              <br />
              with AI
            </h1>
          </motion.div>

          {/* Supporting Text */}
          <motion.p
            className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            We help local businesses save time, increase bookings, and boost revenue with 
            AI assistants, automated phone agents, and proven digital marketing strategies.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Button 
              size="lg" 
              className="text-lg px-8 py-4 h-auto bg-[#35c677] hover:bg-[#2ba866] text-white shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <span>Book Free Demo</span>
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 py-4 h-auto border-2 border-[#191919] text-[#191919] hover:bg-[#191919] hover:text-white transition-all duration-300"
            >
              <Play className="mr-2 h-5 w-5" />
              <span>Watch Demo</span>
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <div className="text-center">
              <motion.div 
                className="text-5xl md:text-6xl font-bold text-[#35c677] mb-2"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 1, type: "spring" }}
              >
                24/7
              </motion.div>
              <div className="text-lg text-gray-600 font-medium">AI Automation</div>
            </div>
            <div className="text-center">
              <motion.div 
                className="text-5xl md:text-6xl font-bold text-[#35c677] mb-2"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 1.2, type: "spring" }}
              >
                3x
              </motion.div>
              <div className="text-lg text-gray-600 font-medium">More Bookings</div>
            </div>
            <div className="text-center">
              <motion.div 
                className="text-5xl md:text-6xl font-bold text-[#35c677] mb-2"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 1.4, type: "spring" }}
              >
                50%
              </motion.div>
              <div className="text-lg text-gray-600 font-medium">Cost Savings</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-[#35c677] rounded-full flex justify-center">
          <div className="w-1 h-3 bg-[#35c677] rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero