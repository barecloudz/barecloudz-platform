import React from 'react'
import { Link, useLocation } from 'wouter'
import { motion } from 'framer-motion'
import { Button } from '../ui/button'
import { Cloud, Menu, X } from 'lucide-react'

const Header: React.FC = () => {
  const [location] = useLocation()
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/about', label: 'About' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <motion.header 
      className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-gray-200/50 z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/">
            <motion.div 
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="w-10 h-10 bg-[#35c677] rounded-xl flex items-center justify-center shadow-lg">
                <Cloud className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-[#191919]">BareCloudz</span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <motion.a
                  className={`text-lg font-medium transition-colors relative ${
                    location === item.href
                      ? 'text-[#35c677]'
                      : 'text-gray-700 hover:text-[#35c677]'
                  }`}
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  {item.label}
                  {location === item.href && (
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#35c677]"
                      layoutId="activeTab"
                    />
                  )}
                </motion.a>
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Link href="/auth/login">
              <Button variant="ghost" size="lg" className="text-lg">
                Sign In
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" className="text-lg px-6 bg-[#35c677] hover:bg-[#2ba866] shadow-lg hover:shadow-xl transition-all duration-300">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.nav
            className="md:hidden py-6 border-t border-gray-200/50"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href}>
                  <motion.a
                    className={`block text-lg font-medium transition-colors py-2 ${
                      location === item.href
                        ? 'text-[#35c677]'
                        : 'text-gray-700 hover:text-[#35c677]'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    {item.label}
                  </motion.a>
                </Link>
              ))}
              <div className="flex flex-col space-y-3 pt-4 border-t border-gray-200">
                <Link href="/auth/login">
                  <Button variant="outline" size="lg" className="w-full text-lg">
                    Sign In
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" className="w-full text-lg bg-[#35c677] hover:bg-[#2ba866]">
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
          </motion.nav>
        )}
      </div>
    </motion.header>
  )
}

export default Header