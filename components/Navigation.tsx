'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Navigation() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const getNavLink = (item: string) => {
    const linkMap: { [key: string]: string } = {
      'Projects': '#projects',
      'Experience': '#experience',
      'Skills & Tools': '#skills',
      'Contact': '#contact',
    }
    return linkMap[item] || `#${item.toLowerCase().replace(/\s+/g, '').replace('&', '')}`
  }

  return (
    <motion.nav 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-xl' : 'bg-white/90 backdrop-blur-sm shadow-lg'
      } border-b border-blue-200/30`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ 
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          {/* Logo */}
          <motion.div 
            className="flex-shrink-0 will-change-transform"
            whileHover={{ 
              scale: 1.05,
              transition: { 
                type: 'spring',
                stiffness: 400,
                damping: 25
              }
            }}
            whileTap={{ scale: 0.98 }}
          >
            <a href="/" className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors">
              Ngô Hải Văn
            </a>
          </motion.div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-1">
            {['Projects', 'Experience', 'Skills & Tools', 'Contact'].map((item, index) => (
              <motion.a
                key={item}
                href={getNavLink(item)}
                className="px-3 py-2 text-sm font-medium text-blue-900 hover:text-blue-600 transition-colors duration-200 will-change-transform"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  delay: index * 0.08,
                  duration: 0.5,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                whileHover={{ 
                  y: -2,
                  transition: { 
                    type: 'spring',
                    stiffness: 400,
                    damping: 25
                  }
                }}
              >
                {item}
              </motion.a>
            ))}
          </div>

          {/* Social Icons & Quick Access */}
          <div className="flex items-center space-x-4">
            {[
              { name: 'LinkedIn', href: 'https://linkedin.com/hvan128', icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' },
              { name: 'GitHub', href: 'https://github.com/hvan128', icon: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' },
              { name: 'Facebook', href: 'https://facebook.com/hvan128', icon: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' },
            ].map((social, index) => (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-900 hover:text-blue-600 transition-colors duration-200 will-change-transform"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  delay: 0.2 + index * 0.08,
                  duration: 0.5,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                whileHover={{ 
                  scale: 1.15, 
                  rotate: 5,
                  transition: { 
                    type: 'spring',
                    stiffness: 400,
                    damping: 25
                  }
                }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d={social.icon} />
                </svg>
              </motion.a>
            ))}
            <motion.button 
              className="px-3 py-1.5 text-sm font-medium text-blue-900 hover:text-blue-600 transition-colors duration-200 flex items-center gap-1 will-change-transform"
              whileHover={{ 
                scale: 1.05,
                transition: { 
                  type: 'spring',
                  stiffness: 400,
                  damping: 25
                }
              }}
              whileTap={{ scale: 0.98 }}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              Quick Access
            </motion.button>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}
