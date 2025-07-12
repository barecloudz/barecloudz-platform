import React from 'react'
import { Link } from 'wouter'
import { motion } from 'framer-motion'
import { Cloud, Mail, Phone, MapPin, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react'

const Footer: React.FC = () => {
  const footerSections = [
    {
      title: 'Services',
      links: [
        { label: 'AI Customer Support', href: '/services/ai-support' },
        { label: 'AI Phone Agents', href: '/services/phone-agents' },
        { label: 'Social Media Marketing', href: '/services/social-media' },
        { label: 'SEO & Local Search', href: '/services/seo' },
        { label: 'Paid Advertising', href: '/services/ads' },
        { label: 'Website & App Development', href: '/services/development' }
      ]
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '/about' },
        { label: 'Case Studies', href: '/case-studies' },
        { label: 'Our Team', href: '/team' },
        { label: 'Careers', href: '/careers' },
        { label: 'Press', href: '/press' },
        { label: 'Blog', href: '/blog' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { label: 'Help Center', href: '/help' },
        { label: 'AI Automation Guide', href: '/guide' },
        { label: 'API Documentation', href: '/docs' },
        { label: 'Webinars', href: '/webinars' },
        { label: 'Templates', href: '/templates' },
        { label: 'Community', href: '/community' }
      ]
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy Policy', href: '/privacy' },
        { label: 'Terms of Service', href: '/terms' },
        { label: 'Cookie Policy', href: '/cookies' },
        { label: 'GDPR', href: '/gdpr' },
        { label: 'Security', href: '/security' },
        { label: 'Compliance', href: '/compliance' }
      ]
    }
  ]

  const socialLinks = [
    { icon: Twitter, href: 'https://twitter.com/barecloudz', label: 'Twitter' },
    { icon: Linkedin, href: 'https://linkedin.com/company/barecloudz', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://instagram.com/barecloudz', label: 'Instagram' },
    { icon: Youtube, href: 'https://youtube.com/barecloudz', label: 'YouTube' }
  ]

  return (
    <footer className="bg-[#191919] text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-80 h-80 bg-[#35c677] opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#35c677] opacity-3 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-6 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-2 space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-[#35c677] rounded-xl flex items-center justify-center shadow-lg">
                    <Cloud className="h-7 w-7 text-white" />
                  </div>
                  <span className="text-2xl font-bold">BareCloudz</span>
                </div>
                <p className="text-gray-400 text-lg leading-relaxed mb-6">
                  Transforming local businesses with AI-powered automation and proven 
                  digital marketing strategies. Save time, increase bookings, and boost revenue.
                </p>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                className="space-y-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-[#35c677]" />
                  <span className="text-gray-300">hello@barecloudz.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-[#35c677]" />
                  <span className="text-gray-300">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-[#35c677]" />
                  <span className="text-gray-300">San Francisco, CA</span>
                </div>
              </motion.div>

              {/* Social Links */}
              <motion.div
                className="flex items-center space-x-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {socialLinks.map((social) => {
                  const Icon = social.icon
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#35c677] transition-colors duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Icon className="h-5 w-5" />
                    </motion.a>
                  )
                })}
              </motion.div>
            </div>

            {/* Footer Links */}
            <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-8">
              {footerSections.map((section, sectionIndex) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
                >
                  <h3 className="text-lg font-semibold mb-6 text-white">
                    {section.title}
                  </h3>
                  <ul className="space-y-3">
                    {section.links.map((link) => (
                      <li key={link.label}>
                        <Link href={link.href}>
                          <motion.a
                            className="text-gray-400 hover:text-[#35c677] transition-colors duration-200 text-sm"
                            whileHover={{ x: 4 }}
                            transition={{ duration: 0.2 }}
                          >
                            {link.label}
                          </motion.a>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-gray-800 py-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              &copy; 2025 BareCloudz. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>Made with ❤️ for local businesses</span>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-[#35c677] rounded-full animate-pulse"></div>
                <span>All systems operational</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer