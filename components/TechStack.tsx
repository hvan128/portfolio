'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { 
  SiFlutter, 
  SiReact, 
  SiNextdotjs, 
  SiNodedotjs, 
  SiTypescript, 
  SiPython, 
  SiFlask, 
  SiDocker, 
  SiFirebase, 
  SiMongodb, 
  SiMysql, 
  SiGit 
} from 'react-icons/si'

interface TechItem {
  name: string
  icon: React.ComponentType<{ className?: string }>
  color: string
  years: string
}

interface TechCategory {
  category: string
  technologies: TechItem[]
}

export default function TechStack() {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null)

  const techCategories: TechCategory[] = [
    {
      category: 'Mobile',
      technologies: [
        { name: 'Flutter', icon: SiFlutter, color: 'text-blue-500', years: '2+ years' },
      ]
    },
    {
      category: 'Frontend',
      technologies: [
        { name: 'React', icon: SiReact, color: 'text-cyan-500', years: '3+ years' },
        { name: 'Next.js', icon: SiNextdotjs, color: 'text-gray-900', years: '2+ years' },
        { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-600', years: '3+ years' },
      ]
    },
    {
      category: 'Backend',
      technologies: [
        { name: 'Node.js', icon: SiNodedotjs, color: 'text-green-600', years: '3+ years' },
        { name: 'Python', icon: SiPython, color: 'text-yellow-500', years: '2+ years' },
        { name: 'Flask', icon: SiFlask, color: 'text-red-500', years: '2+ years' },
        { name: 'Firebase', icon: SiFirebase, color: 'text-orange-500', years: '2+ years' },
        { name: 'MongoDB', icon: SiMongodb, color: 'text-green-600', years: '3+ years' },
        { name: 'MySQL', icon: SiMysql, color: 'text-blue-600', years: '3+ years' },
      ]
    },
    {
      category: 'DevOps',
      technologies: [
        { name: 'Docker', icon: SiDocker, color: 'text-blue-500', years: '2+ years' },
        { name: 'Git', icon: SiGit, color: 'text-orange-600', years: '3+ years' },
      ]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.05,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  return (
    <section className="relative z-10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ 
            duration: 0.6,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
          className="text-gray-600 mb-8"
        >
          current favorite tech stack/tools:
        </motion.p>
        
        <div className="space-y-10">
          {techCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ 
                duration: 0.6,
                delay: categoryIndex * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
            >
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <span className="w-1 h-6 bg-blue-600 rounded-full"></span>
                {category.category}
              </h3>
              <motion.div 
                className="flex flex-wrap items-center gap-4"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1, margin: "-50px" }}
              >
                {category.technologies.map((tech, index) => {
                  const IconComponent = tech.icon
                  const isHovered = hoveredTech === `${category.category}-${tech.name}`
                  return (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      onMouseEnter={() => setHoveredTech(`${category.category}-${tech.name}`)}
                      onMouseLeave={() => setHoveredTech(null)}
                      whileHover={{ 
                        scale: 1.08, 
                        y: -4,
                        transition: { 
                          type: 'spring',
                          stiffness: 400,
                          damping: 25
                        }
                      }}
                      className="relative flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer group will-change-transform border border-gray-200"
                    >
                      <IconComponent className={`text-2xl ${tech.color} group-hover:scale-110 transition-transform duration-200`} />
                      <span className="text-sm font-medium text-gray-700 group-hover:text-blue-600 transition-colors duration-200">
                        {tech.name}
                      </span>
                      
                      {/* Tooltip */}
                      {isHovered && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="absolute -top-12 left-1/2 transform -translate-x-1/2 px-3 py-1.5 bg-gray-900 text-white text-xs font-medium rounded-md shadow-lg whitespace-nowrap z-20 pointer-events-none"
                        >
                          {tech.years} of experience
                          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
                        </motion.div>
                      )}
                    </motion.div>
                  )
                })}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
