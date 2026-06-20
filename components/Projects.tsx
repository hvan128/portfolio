'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="max-w-2xl"
        >
          <span className="eyebrow">
            <span className="h-1.5 w-1.5 rounded-full bg-primary-500" />
            {t('eyebrow')}
          </span>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-slate-900 lg:text-5xl">
            {t('headingBefore')}
            <span className="text-gradient">{t('headingHighlight')}</span>
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">{t('intro')}</p>
        </motion.div>

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
              className="mt-10 mb-5 font-display text-2xl font-bold text-slate-900"
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
