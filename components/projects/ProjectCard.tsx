'use client'

import { motion } from 'framer-motion'
import { useLocale, useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import type { Project } from '@/lib/projects'
import { pick, type Locale } from '@/lib/i18n-content'
import ProjectCover from './ProjectCover'

interface ProjectCardProps {
  project: Project
  featured?: boolean
}

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
}

export default function ProjectCard({ project, featured = false }: ProjectCardProps) {
  const locale = useLocale() as Locale
  const t = useTranslations('projectsSection')
  const liveLink = project.links.find((l) => l.kind === 'live' || l.kind === 'web')

  return (
    <motion.article
      variants={cardVariants}
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 350, damping: 28 }}
      className={`group relative flex flex-col overflow-hidden rounded-2xl border bg-white/80 backdrop-blur-md transition-shadow duration-300 ${
        project.ai
          ? 'border-indigo-200/70 shadow-card hover:shadow-ai-glow'
          : 'border-white/70 shadow-card hover:shadow-card-hover'
      }`}
    >
      {/* Cover */}
      <Link
        href={`/projects/${project.slug}`}
        aria-label={t('openCaseStudy', { name: project.name })}
        className="relative block aspect-[16/10] overflow-hidden"
      >
        <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-[1.03]">
          <ProjectCover project={project} priority={featured} locale={locale} />
        </div>
        {project.ai && <span className="ai-badge absolute right-3 top-3 z-10">AI</span>}
      </Link>

      {/* Body */}
      <div className="flex flex-1 flex-col p-5">
        <div className="mb-1.5 flex items-center gap-2">
          <span className="text-xs font-medium text-primary-600">{pick(project.period, locale)}</span>
          <span className="text-slate-300">·</span>
          <span className="truncate text-xs text-slate-500">{project.tags.join(' · ')}</span>
        </div>

        <h3 className="font-display text-xl font-bold text-slate-900">
          <Link href={`/projects/${project.slug}`} className="transition-colors hover:text-primary-700">
            {project.name}
          </Link>
        </h3>
        <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{pick(project.tagline, locale)}</p>

        {featured && (
          <div className="mt-4 grid grid-cols-2 gap-2">
            {project.metrics.slice(0, 2).map((m, i) => (
              <div key={i} className="rounded-lg border border-slate-100 bg-slate-50/70 px-3 py-2">
                <div className="text-sm font-bold text-slate-900">{pick(m.value, locale)}</div>
                <div className="text-[11px] leading-tight text-slate-500">{pick(m.label, locale)}</div>
              </div>
            ))}
          </div>
        )}

        {/* Tech chips */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tech.slice(0, featured ? 5 : 4).map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-primary-50 px-2.5 py-0.5 text-[11px] font-medium text-primary-700"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary-700 transition-colors hover:text-primary-800"
          >
            {t('viewCaseStudy')}
            <svg className="h-4 w-4 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
          {liveLink && (
            <a
              href={liveLink.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-medium text-slate-500 transition-colors hover:text-primary-700"
            >
              {t('live')}
              <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </motion.article>
  )
}
