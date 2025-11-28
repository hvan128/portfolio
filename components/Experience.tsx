'use client'

import { motion } from 'framer-motion'

export default function Experience() {
  const experiences = [
    {
      company: 'Onehousing',
      position: 'Full-Stack Web & Hybrid Mobile Developer',
      period: 'Feb 2025 - Present',
      details: [
        'Owns the HRM & AI callbot platform covering Flask APIs, RBAC, and WebSocket notifications.',
        'Builds a Next.js dashboard (SSR) plus Flutter mobile apps that handle check-in and workflow updates.',
        'Automates CI/CD with Docker + GitHub Actions and monitors production workloads on Linux VPS environments.',
      ],
    },
    {
      company: 'EPOSO AI',
      position: 'Full-Stack Developer (Remote)',
      period: 'Nov 2024 - Jan 2025',
      details: [
        'Delivered the Energy Simulator web app that calculates cost savings for new HVAC models.',
        'Partnered with distributed teams to shape UX flows, Nest.js APIs, and Redux Toolkit state.',
        'Packaged the solution with Docker to guarantee parity from local development to production demos.',
      ],
    },
    {
      company: 'OpenWay Vietnam',
      position: 'Associate Implementation Engineer',
      period: 'Jul 2024 - Nov 2024',
      details: [
        'Integrated Way4 ATM flows for withdraw, balance inquiry, and fund transfers across test → prod environments.',
        'Mapped ISO-like routing between core banking services and Way4, ensuring compliance and resilience.',
        'Accelerated incident resolution by ≈45% through improved transaction log tracing and documentation.',
      ],
    },
    {
      company: 'OpenWay Vietnam',
      position: 'Frontend Web & Hybrid Mobile Developer',
      period: 'Oct 2022 - Jul 2024',
      details: [
        'Developed banking mobile apps and admin portals using React, React Native, Flutter, and Next.js.',
        'Implemented reusable UI components for card management, transaction history, and role-based admin controls.',
        'Collaborated with backend, QA, and product stakeholders to optimize GraphQL integrations and performance.',
      ],
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
          3+ years shipping full-stack web platforms, hybrid mobile apps, and payment solutions across startups and enterprise-scale teams.
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
              <p className="text-gray-700 font-medium mb-3">
                {exp.position}
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                {exp.details.map((detail, detailIndex) => (
                  <li key={detailIndex}>{detail}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
