'use client'

import { motion } from 'framer-motion'
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

export default function TechStack() {
  const techStack = [
    { name: 'Flutter', icon: SiFlutter, color: 'text-blue-500' },
    { name: 'React', icon: SiReact, color: 'text-cyan-500' },
    { name: 'Next.js', icon: SiNextdotjs, color: 'text-gray-900' },
    { name: 'Node.js', icon: SiNodedotjs, color: 'text-green-600' },
    { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-600' },
    { name: 'Python', icon: SiPython, color: 'text-yellow-500' },
    { name: 'Flask', icon: SiFlask, color: 'text-red-500' },
    { name: 'Docker', icon: SiDocker, color: 'text-blue-500' },
    { name: 'Firebase', icon: SiFirebase, color: 'text-orange-500' },
    { name: 'MongoDB', icon: SiMongodb, color: 'text-green-600' },
    { name: 'MySQL', icon: SiMysql, color: 'text-blue-600' },
    { name: 'Git', icon: SiGit, color: 'text-orange-600' },
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
          className="text-gray-600 mb-6"
        >
          current favorite tech stack/tools:
        </motion.p>
        <motion.div 
          className="flex flex-wrap items-center gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1, margin: "-50px" }}
        >
          {techStack.map((tech, index) => {
            const IconComponent = tech.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.08, 
                  y: -4,
                  transition: { 
                    type: 'spring',
                    stiffness: 400,
                    damping: 25
                  }
                }}
                className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer group will-change-transform border border-gray-200"
              >
                <IconComponent className={`text-2xl ${tech.color} group-hover:scale-110 transition-transform duration-200`} />
                <span className="text-sm font-medium text-gray-700 group-hover:text-blue-600 transition-colors duration-200">
                  {tech.name}
                </span>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
