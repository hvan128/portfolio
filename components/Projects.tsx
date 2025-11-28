'use client'

import { motion } from 'framer-motion'

export default function Projects() {
  const projects = [
    {
      name: 'HRM & Work Management + AI Callbot System',
      period: 'Feb 2025 - Present',
      role: 'Full-Stack Developer',
      summary: 'All-in-one digital transformation platform for internal staff, workflows, and outbound AI callbots.',
      highlights: [
        'Designed a Flask REST API with authentication, RBAC, and WebSocket-driven updates.',
        'Built a Next.js SSR dashboard plus a Flutter mobile app (Provider/Riverpod) for check-in and task updates.',
        'Containerized and automated deployments with Docker + GitHub Actions and instrumented monitoring on a Linux VPS.',
      ],
      tech: ['Flask', 'Next.js', 'Flutter', 'WebSocket', 'Docker', 'GitHub Actions'],
    },
    {
      name: 'Automotive Service Platform',
      period: 'May 2025 - Present',
      role: 'Mobile App Developer (Flutter)',
      summary: 'Two-sided marketplace that connects vehicle owners with garages for booking, servicing, and history tracking.',
      highlights: [
        'Implemented Clean Architecture with Riverpod to keep feature modules scalable.',
        'Shipped booking workflows, quotation requests, notifications, and responsive UI for owners and garages.',
        'Integrated REST APIs, Firebase Cloud Messaging, and automated CI/CD pipelines with GitHub Actions + Fastlane.',
      ],
      tech: ['Flutter', 'Firebase', 'Fastlane', 'GitHub Actions', 'REST API'],
    },
    {
      name: 'Energy Simulator',
      period: 'Nov 2024 - Jan 2025',
      role: 'Full-Stack Developer',
      summary: 'Web tool that calculates energy efficiency, savings, and payback when switching air-conditioner models.',
      highlights: [
        'Delivered a responsive Next.js + Tailwind UI with real-time energy calculations from backend formulas.',
        'Synced data with Nest.js services, MySQL, and Redux Toolkit for consistent multi-device state.',
        'Packaged the app via Docker for reproducible deployments used by remote sales teams.',
      ],
      tech: ['Next.js', 'Tailwind CSS', 'Redux Toolkit', 'Nest.js', 'MySQL', 'Docker'],
    },
    {
      name: 'Way4 ATM Payment Integration',
      period: 'Jul 2024 - Nov 2024',
      role: 'Associate Implementation Engineer',
      summary: 'Integration of ATM transaction flows across withdraw, balance inquiry, and fund transfer scenarios.',
      highlights: [
        'Configured ISO-like routing between core banking services and the Way4 platform.',
        'Traced financial logs to cut issue isolation time by ~45% and ensured compliance across environments.',
      ],
      tech: ['Way4 platform', 'Oracle', 'PL/SQL'],
    },
    {
      name: 'Banking App & Admin Portal',
      period: 'Oct 2022 - Apr 2024',
      role: 'Frontend & Mobile Developer',
      summary: 'Omni-channel banking experience covering mobile apps and admin portal for payment operations.',
      highlights: [
        'Built reusable UI modules for card management, transaction history, and role-based admin settings.',
        'Delivered React, React Native, and Flutter experiences that reduced re-render overhead and sped up prototypes.',
        'Partnered closely with backend and QA teams to optimize GraphQL interactions and user flows.',
      ],
      tech: ['React', 'React Native', 'Flutter', 'Next.js', 'GraphQL'],
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
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  const techTagsContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
        delayChildren: 0.1,
      },
    },
  }

  const techTagVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  return (
    <section id="projects" className="relative z-10 py-20">
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
          Projects I've worked on
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
          className="text-lg text-gray-600 mb-12 max-w-3xl"
        >
          I have worked on a variety of projects, ranging from web applications to mobile apps, 
          and even some payment integration systems. If you're interested in learning more about 
          any of these projects, feel free to reach out.
        </motion.p>
        <motion.div 
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1, margin: "-50px" }}
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                y: -6,
                transition: { 
                  type: 'spring',
                  stiffness: 400,
                  damping: 30,
                  mass: 0.8
                }
              }}
              className="bg-white rounded-lg shadow-xl p-6 hover:shadow-2xl transition-all duration-300 border border-gray-200 hover:border-blue-400 overflow-hidden relative group will-change-transform"
            >
              {/* Subtle gradient overlay on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-50/0 to-blue-50/0 group-hover:from-blue-50/50 group-hover:to-transparent pointer-events-none transition-opacity duration-300"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              />
              
              <div className="relative z-10">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <h3 className="text-2xl font-semibold text-gray-900">
                    {project.name}
                  </h3>
                  <span className="text-blue-600 font-medium text-sm md:text-base">
                    {project.period}
                  </span>
                </div>
                <p className="text-gray-600 mb-2 font-medium">
                  {project.role}
                </p>
                <p className="text-gray-700 mb-4">{project.summary}</p>
                {project.highlights && (
                  <ul className="list-disc pl-5 text-gray-600 space-y-2 mb-4">
                    {project.highlights.map((highlight, highlightIndex) => (
                      <li key={highlightIndex}>{highlight}</li>
                    ))}
                  </ul>
                )}
                <motion.div 
                  className="flex flex-wrap gap-2"
                  variants={techTagsContainerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.1 }}
                >
                  {project.tech.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      variants={techTagVariants}
                      whileHover={{ 
                        scale: 1.1,
                        y: -3,
                        transition: { 
                          type: 'spring',
                          stiffness: 500,
                          damping: 20,
                          mass: 0.5
                        }
                      }}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-blue-100 hover:text-blue-700 transition-colors duration-200 cursor-default will-change-transform"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
