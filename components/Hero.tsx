'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Hero() {
  const [imageLoaded, setImageLoaded] = useState(false)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  const imageContainerVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.9,
      rotate: -5,
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: 0.4,
      },
    },
  }

  const imageVariants = {
    hidden: { 
      opacity: 0,
      scale: 1.05,
      filter: 'blur(8px)',
    },
    visible: {
      opacity: 1,
      scale: 1,
      filter: 'blur(0px)',
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: 0.6,
      },
    },
  }

  return (
    <section className="relative z-10 py-8 lg:py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div 
              variants={itemVariants}
              className="flex items-center gap-2 mb-4"
            >
              <span className="text-gray-600 text-lg">hi!</span>
              <motion.span 
                className="text-2xl will-change-transform"
                initial={{ rotate: 0 }}
                animate={{ rotate: [0, 14, -8, 0] }}
                transition={{ 
                  duration: 0.5,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              >
                🤘
              </motion.span>
            </motion.div>
            <motion.h1 
              variants={itemVariants}
              className="text-5xl lg:text-6xl font-bold mb-6"
            >
              I'm <span className="text-blue-600">Hải Văn</span>
            </motion.h1>
            <motion.p 
              variants={itemVariants}
              className="text-xl text-gray-600 mb-6 leading-relaxed"
            >
              a <strong>full-stack engineer</strong> with <strong>3+ years</strong> of experience building scalable web applications and specialized <strong>payment systems</strong> that power seamless transactions.
            </motion.p>
            
            {/* Metrics Badges */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap gap-4 mb-8"
            >
              <div className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-lg shadow-md border border-gray-200">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-semibold text-gray-800">3+ Years</span>
                <span className="text-xs text-gray-500">Experience</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-lg shadow-md border border-gray-200">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-semibold text-gray-800">20+ Projects</span>
                <span className="text-xs text-gray-500">Delivered</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-lg shadow-md border border-gray-200">
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-semibold text-gray-800">Payment Systems</span>
                <span className="text-xs text-gray-500">Expert</span>
              </div>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.a
                href="#contact"
                whileHover={{ 
                  scale: 1.05,
                  transition: { 
                    type: 'spring',
                    stiffness: 400,
                    damping: 25
                  }
                }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center px-8 py-3.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-xl hover:shadow-2xl will-change-transform transform"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Get in Touch
              </motion.a>
              <motion.a
                href="/resume/ngo_hai_van_resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download
                whileHover={{ 
                  scale: 1.05, 
                  x: 5,
                  transition: { 
                    type: 'spring',
                    stiffness: 400,
                    damping: 25
                  }
                }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-6 py-3.5 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-blue-600 hover:text-blue-600 bg-white/50 backdrop-blur-sm transition-all duration-200 shadow-md hover:shadow-lg will-change-transform"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Resume
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Side - Image */}
          <motion.div 
            className="flex justify-center lg:justify-end"
            variants={imageContainerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="relative">
              <motion.div 
                className="w-64 h-64 lg:w-80 lg:h-80 rounded-full bg-gradient-to-br from-blue-200 to-blue-400 flex items-center justify-center overflow-hidden shadow-2xl border-4 border-white/50 will-change-transform"
                initial={{ rotate: -3 }}
                animate={{ rotate: 0 }}
                transition={{
                  duration: 0.8,
                  ease: [0.25, 0.46, 0.45, 0.94],
                  delay: 0.4,
                }}
              >
                <motion.div 
                  className="relative w-full h-full"
                  variants={imageVariants}
                  initial="hidden"
                  animate={imageLoaded ? "visible" : "hidden"}
                >
                  <Image
                    src="/images/profile.jpg"
                    alt="Hải Văn"
                    fill
                    className="object-cover rounded-full"
                    priority
                    onLoad={() => setImageLoaded(true)}
                  />
                </motion.div>
                {/* Loading placeholder */}
                {!imageLoaded && (
                  <div className="absolute inset-0 bg-blue-300 flex items-center justify-center">
                    <motion.div
                      className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    />
                  </div>
                )}
              </motion.div>
              {/* Decorative circle */}
              <motion.div 
                className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-100 rounded-full -z-10 will-change-transform"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.5 }}
                transition={{
                  duration: 0.7,
                  ease: [0.25, 0.46, 0.45, 0.94],
                  delay: 0.6,
                }}
              ></motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
