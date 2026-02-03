'use client'

import { motion } from 'framer-motion'

interface Project {
  name: string
  period: string
  role: string
  problem: string
  solution: string
  impact: string
  metrics: string[]
  tech: string[]
  screenshot?: string
  demo?: string
  github?: string
}

export default function Projects() {
  const projects: Project[] = [
    {
      name: 'HRM & Work Management + AI Callbot System',
      period: 'Feb 2025 - Present',
      role: 'Full-Stack Developer',
      problem: 'Organizations struggled with fragmented HR workflows, manual task management, and inefficient customer outreach, leading to operational bottlenecks and missed opportunities.',
      solution: 'Built an all-in-one digital transformation platform integrating HRM, workflow automation, and AI-powered callbots with real-time WebSocket updates and role-based access control.',
      impact: 'Enabled unified staff management and automated customer engagement, reducing manual processes by 60% and improving response rates for customer outreach campaigns.',
      metrics: [
        '60% reduction in manual HR processes',
        'Real-time updates via WebSocket',
        'Multi-platform support (Web + Mobile)',
        'Automated CI/CD with GitHub Actions'
      ],
      tech: ['Flask', 'Next.js', 'Flutter', 'WebSocket', 'Docker', 'GitHub Actions'],
      screenshot: '/images/projects/hrm-system.png',
      github: '#',
      demo: '#'
    },
    {
      name: 'Automotive Service Platform',
      period: 'May 2025 - Present',
      role: 'Mobile App Developer (Flutter)',
      problem: 'Vehicle owners and garages lacked a streamlined platform for booking services, managing quotations, and tracking service history, resulting in communication gaps and inefficiencies.',
      solution: 'Developed a two-sided marketplace mobile app using Clean Architecture and Riverpod state management, featuring booking workflows, quotation requests, and real-time notifications via Firebase Cloud Messaging.',
      impact: 'Connected vehicle owners with service providers seamlessly, reducing booking time by 50% and enabling 24/7 service availability through the mobile platform.',
      metrics: [
        '50% reduction in booking time',
        'Real-time push notifications',
        'Scalable Clean Architecture',
        'Automated CI/CD with Fastlane'
      ],
      tech: ['Flutter', 'Firebase', 'Fastlane', 'GitHub Actions', 'REST API'],
      screenshot: '/images/projects/automotive-platform.png',
      github: '#',
      demo: '#'
    },
    {
      name: 'Energy Simulator',
      period: 'Nov 2024 - Jan 2025',
      role: 'Full-Stack Developer',
      problem: 'Sales teams needed a reliable tool to calculate and demonstrate energy savings to customers, but lacked a centralized, accessible solution for real-time energy calculations.',
      solution: 'Created a responsive web application with Next.js and Tailwind CSS that performs real-time energy calculations, synced across devices with Redux Toolkit and deployed via Docker containers.',
      impact: 'Empowered remote sales teams with accurate energy calculations on-the-go, leading to a 30% increase in conversion rates and faster customer decision-making.',
      metrics: [
        '30% increase in conversion rates',
        'Real-time energy calculations',
        'Multi-device state sync',
        'Docker containerized deployment'
      ],
      tech: ['Next.js', 'Tailwind CSS', 'Redux Toolkit', 'Nest.js', 'MySQL', 'Docker'],
      screenshot: '/images/projects/energy-simulator.png',
      github: '#',
      demo: '#'
    },
    {
      name: 'Way4 ATM Payment Integration',
      period: 'Jul 2024 - Nov 2024',
      role: 'Associate Implementation Engineer',
      problem: 'ATM transaction processing suffered from slow issue isolation and complex routing between core banking services and the Way4 payment platform, causing delays in financial operations.',
      solution: 'Configured ISO-like routing protocols and implemented comprehensive logging systems to streamline transaction flows and accelerate troubleshooting processes.',
      impact: 'Improved issue isolation efficiency by 45%, ensuring faster transaction processing and enhanced compliance across all banking environments.',
      metrics: [
        '45% reduction in issue isolation time',
        'ISO-compliant routing',
        'Enhanced financial logging',
        '100% compliance across environments'
      ],
      tech: ['Way4 platform', 'Oracle', 'PL/SQL'],
      screenshot: '/images/projects/way4-integration.png',
      github: '#',
      demo: '#'
    },
    {
      name: 'Banking App & Admin Portal',
      period: 'Oct 2022 - Apr 2024',
      role: 'Frontend & Mobile Developer',
      problem: 'Banking customers needed a seamless cross-platform experience, while administrators required efficient tools for payment operations, but existing solutions were fragmented and slow.',
      solution: 'Built reusable UI components and optimized React/React Native/Flutter applications with GraphQL integration, delivering a consistent omni-channel banking experience with improved performance.',
      impact: 'Delivered unified banking experiences across platforms, reducing app load time by 40% and enabling administrators to process transactions 3x faster through the optimized portal.',
      metrics: [
        '40% reduction in app load time',
        '3x faster admin transaction processing',
        'Cross-platform consistency',
        'Reduced re-render overhead'
      ],
      tech: ['React', 'React Native', 'Flutter', 'Next.js', 'GraphQL'],
      screenshot: '/images/projects/banking-app.png',
      github: '#',
      demo: '#'
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
                <p className="text-gray-600 mb-4 font-medium">
                  {project.role}
                </p>

                {/* Screenshot placeholder */}
                {project.screenshot && (
                  <div className="mb-6 rounded-lg overflow-hidden bg-gray-100 border border-gray-200">
                    <div className="relative w-full h-48 lg:h-64 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                      <div className="text-center p-6">
                        <svg className="w-16 h-16 mx-auto mb-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <p className="text-gray-500 text-sm font-medium">Screenshot placeholder</p>
                        <p className="text-gray-400 text-xs mt-1">Add project screenshots to /public/images/projects/</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Problem-Solution-Impact Structure */}
                <div className="space-y-4 mb-6">
                  <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                      <span className="text-red-600">Problem</span>
                    </h4>
                    <p className="text-gray-700 text-sm leading-relaxed">{project.problem}</p>
                  </div>
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                      <span className="text-blue-600">Solution</span>
                    </h4>
                    <p className="text-gray-700 text-sm leading-relaxed">{project.solution}</p>
                  </div>
                  <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                      <span className="text-green-600">Impact</span>
                    </h4>
                    <p className="text-gray-700 text-sm leading-relaxed">{project.impact}</p>
                  </div>
                </div>

                {/* Quantified Metrics */}
                {project.metrics && project.metrics.length > 0 && (
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                      Key Metrics
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {project.metrics.map((metric, metricIndex) => (
                        <div
                          key={metricIndex}
                          className="flex items-start gap-2 px-3 py-2 bg-gray-50 rounded-lg border border-gray-200"
                        >
                          <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-sm text-gray-700 font-medium">{metric}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Demo and GitHub Links */}
                {(project.demo || project.github) && (
                  <div className="flex flex-wrap gap-3 mb-4">
                    {project.demo && (
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ 
                          scale: 1.05,
                          transition: { 
                            type: 'spring',
                            stiffness: 400,
                            damping: 25
                          }
                        }}
                        whileTap={{ scale: 0.98 }}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-md hover:shadow-lg will-change-transform"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        Live Demo
                      </motion.a>
                    )}
                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ 
                          scale: 1.05,
                          transition: { 
                            type: 'spring',
                            stiffness: 400,
                            damping: 25
                          }
                        }}
                        whileTap={{ scale: 0.98 }}
                        className="inline-flex items-center gap-2 px-4 py-2 border-2 border-gray-300 text-gray-700 font-medium rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-all duration-200 shadow-sm hover:shadow-md will-change-transform"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                        </svg>
                        View Code
                      </motion.a>
                    )}
                  </div>
                )}

                {/* Tech Stack Tags */}
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
