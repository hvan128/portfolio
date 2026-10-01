'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import SectionHeader from './ui/SectionHeader'
import { featuredProjects, moreProjects } from '@/lib/projects'
import ProjectCard from './projects/ProjectCard'

const gridVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
}

export default function Projects() {
  const t = useTranslations('projectsSection')

  return (
    <section id="projects" className="relative z-10 py-8 lg:py-12">
      <div className="section-shell">
        {/* Header */}
        <SectionHeader
          index="01"
          eyebrow={t('eyebrow')}
          headingBefore={t('headingBefore')}
          headingHighlight={t('headingHighlight')}
          intro={t('intro')}
        />

        {/* Featured grid */}
        <motion.div
          className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2"
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} featured />
          ))}
        </motion.div>

        {/* More projects */}
        {moreProjects.length > 0 && (
          <>
            <motion.h3
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5 }}
              className="mt-10 mb-5 font-display text-2xl font-bold text-white"
            >
              {t('moreProjects')}
            </motion.h3>
            <motion.div
              className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
              variants={gridVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              {moreProjects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </motion.div>
          </>
        )}
      </div>
    </section>
  )
}
