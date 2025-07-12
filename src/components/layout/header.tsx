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
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/">
            <motion.div 
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
            >
              <Cloud className="h-8 w-8 text-[#35c677]" />
              <span className="text-xl font-bold text-[#191919]">BareCloudz</span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <motion.a
                  className={`text-sm font-medium transition-colors ${
                    location === item.href
                      ? 'text-[#35c677]'
                      : 'text-gray-600 hover:text-[#35c677]'
                  }`}
                  whileHover={{ y: -2 }}
                >
                  {item.label}
                </motion.a>
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Link href="/auth/login">
              <Button variant="outline" size="sm">
                Sign In
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="sm">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.nav
            className="md:hidden py-4 border-t border-gray-200"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href}>
                  <a
                    className={`block text-sm font-medium transition-colors ${
                      location === item.href
                        ? 'text-[#35c677]'
                        : 'text-gray-600 hover:text-[#35c677]'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                </Link>
              ))}
              <div className="flex flex-col space-y-2 pt-4">
                <Link href="/auth/login">
                  <Button variant="outline" size="sm" className="w-full">
                    Sign In
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="sm" className="w-full">
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
          </motion.nav>
        )}
      </div>
    </header>
  )
}

export default Header