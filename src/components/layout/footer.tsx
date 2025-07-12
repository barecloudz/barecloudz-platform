import React from 'react'
import { Link } from 'wouter'
import { Cloud, Mail, Phone, MapPin } from 'lucide-react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#191919] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Cloud className="h-8 w-8 text-[#35c677]" />
              <span className="text-xl font-bold">BareCloudz</span>
            </div>
            <p className="text-gray-400 text-sm">
              Modern marketing solutions in the cloud. We help businesses grow 
              through strategic digital marketing and innovative technology.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services/social-media">
                  <a className="text-gray-400 hover:text-[#35c677] transition-colors">
                    Social Media Marketing
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/services/seo">
                  <a className="text-gray-400 hover:text-[#35c677] transition-colors">
                    SEO Optimization
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/services/email">
                  <a className="text-gray-400 hover:text-[#35c677] transition-colors">
                    Email Marketing
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/services/content">
                  <a className="text-gray-400 hover:text-[#35c677] transition-colors">
                    Content Marketing
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about">
                  <a className="text-gray-400 hover:text-[#35c677] transition-colors">
                    About Us
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/blog">
                  <a className="text-gray-400 hover:text-[#35c677] transition-colors">
                    Blog
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/careers">
                  <a className="text-gray-400 hover:text-[#35c677] transition-colors">
                    Careers
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className="text-gray-400 hover:text-[#35c677] transition-colors">
                    Contact
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-[#35c677]" />
                <span className="text-gray-400">hello@barecloudz.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-[#35c677]" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-[#35c677]" />
                <span className="text-gray-400">San Francisco, CA</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2025 BareCloudz. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer