'use client'

import { motion } from 'framer-motion'

export default function Skills() {
  const technicalSkills = {
    'Mobile Development': ['Flutter', 'React Native', 'Java (Android Native)'],
    'Frontend': ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React.js', 'Next.js', 'TailwindCSS'],
    'Backend': ['Node.js (Express.js, NestJS)', 'Flask (Python)', 'RESTful API', 'GraphQL'],
    'Database': ['Oracle', 'MySQL', 'Redis (caching & session)'],
    'DevOps & Deployment': ['Docker', 'Linux (Ubuntu)', 'Nginx', 'GitHub Actions CI/CD'],
    'Cloud & Services': ['Firebase (Auth, Firestore, FCM)', 'VPS deployment', 'AWS basics', 'Realtime Communication (WebSocket/Socket.IO)'],
  }

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

  const categoryVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.96,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  const labelContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
        delayChildren: 0.08,
      },
    },
  }

  const labelVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.9,
      y: 10,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  return (
    <section id="skills" className="relative z-10 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ 
            duration: 0.6,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
          className="text-4xl font-bold text-gray-900 mb-6"
        >
          Skills & Tools
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ 
            duration: 0.6,
            delay: 0.1,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
          className="text-lg text-gray-600 mb-8 max-w-3xl"
        >
          A look at all the programming languages, libraries, and tools I've worked with.
        </motion.p>
        <motion.div 
          className="bg-white rounded-lg shadow-xl p-8 lg:p-12 will-change-transform border border-gray-200"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1, margin: "-50px" }}
          transition={{ 
            duration: 0.6,
            delay: 0.15,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
        >
          <motion.div 
            className="mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35 }}
          >
            <p className="text-gray-600 mb-6">
              I represent all data in labels to make it easier to read.
            </p>
          </motion.div>
          <motion.div 
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            {Object.entries(technicalSkills).map(([category, skills], categoryIndex) => (
              <motion.div 
                key={category}
                variants={categoryVariants}
              >
                <motion.h3 
                  className="text-xl font-semibold text-gray-900 mb-4 will-change-transform"
                  whileHover={{ 
                    x: 5,
                    transition: { 
                      type: 'spring', 
                      stiffness: 400, 
                      damping: 25 
                    }
                  }}
                >
                  {category}
                </motion.h3>
                <motion.div 
                  className="flex flex-wrap gap-2"
                  variants={labelContainerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.1 }}
                >
                  {skills.map((skill, index) => (
                    <motion.span
                      key={index}
                      variants={labelVariants}
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
                      className="px-4 py-2 bg-blue-50 text-blue-900 rounded-full text-sm font-medium hover:bg-blue-100 hover:shadow-md transition-colors duration-200 cursor-default will-change-transform"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
