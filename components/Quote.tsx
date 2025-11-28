'use client'

import { motion } from 'framer-motion'

export default function Quote() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
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

  return (
    <section className="relative z-10 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2, margin: "-50px" }}
        >
          <motion.p 
            variants={itemVariants}
            className="text-4xl lg:text-6xl font-light italic text-gray-500 mb-2"
          >
            Make Today
          </motion.p>
          <motion.div 
            variants={itemVariants}
            className="flex items-center justify-center gap-4 mb-2"
          >
            <motion.div 
              className="h-px bg-gray-300 flex-1 max-w-xs"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: 0.3,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
            ></motion.div>
            <p className="text-4xl lg:text-6xl font-light text-gray-500">
              1% Better Than
            </p>
            <motion.div 
              className="h-px bg-gray-300 flex-1 max-w-xs"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: 0.3,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
            ></motion.div>
          </motion.div>
          <motion.p 
            variants={itemVariants}
            className="text-4xl lg:text-6xl font-bold text-blue-600 will-change-transform"
            whileHover={{ 
              scale: 1.05,
              transition: { 
                type: 'spring',
                stiffness: 400,
                damping: 25
              }
            }}
          >
            Yesterday.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
