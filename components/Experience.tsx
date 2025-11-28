'use client'

import { motion } from 'framer-motion'

export default function Experience() {
  const experiences = [
    {
      company: 'Onehousing',
      position: 'Full-Stack Web Developer & Hybrid Mobile App Developer',
      period: '2/2025 - Hiện tại',
    },
    {
      company: 'EPOSO AI',
      position: 'FullStack Developer (Remote)',
      period: '11/2024 - 1/2025',
    },
    {
      company: 'OpenWay Vietnam',
      position: 'Associate Implementation Engineer',
      period: '7/2024 - 11/2024',
    },
    {
      company: 'OpenWay Vietnam',
      position: 'Frontend Web Developer & Hybrid Mobile App Developer',
      period: '10/2022 - 7/2024',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06,
        delayChildren: 0.05,
      },
    },
  }

  const itemVariants = {
    hidden: { 
      opacity: 0,
      y: 30,
      x: -10,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  return (
    <section id="experience" className="relative z-10 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ 
            duration: 0.6,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
          className="text-4xl font-bold text-gray-900 mb-6"
        >
          Work Experience
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ 
            duration: 0.6,
            ease: [0.25, 0.46, 0.45, 0.94],
            delay: 0.1
          }}
          className="text-lg text-gray-600 mb-8 max-w-3xl"
        >
          I have a diverse background in software development, having worked with various technologies 
          and frameworks. My experience includes both front-end and back-end development, mobile app 
          development, as well as payment solution engineering.
        </motion.p>
        <motion.div 
          className="space-y-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1, margin: "-50px" }}
        >
          {experiences.map((exp, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                x: 10,
                transition: { 
                  type: 'spring',
                  stiffness: 400,
                  damping: 30,
                  mass: 0.8
                }
              }}
              className="bg-white rounded-lg shadow-xl p-6 hover:shadow-2xl transition-all duration-300 border-l-4 border-transparent hover:border-blue-600 relative overflow-hidden group will-change-transform border border-gray-200"
            >
              {/* Animated border gradient */}
              <motion.div
                className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ scaleY: 0 }}
                whileHover={{ scaleY: 1 }}
                transition={{ 
                  type: 'spring',
                  stiffness: 300,
                  damping: 25
                }}
              />
              
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <h3 className="text-xl font-semibold text-gray-900">
                  {exp.company}
                </h3>
                <span className="text-blue-600 font-medium text-sm md:text-base">
                  {exp.period}
                </span>
              </div>
              <p className="text-gray-700">
                {exp.position}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
