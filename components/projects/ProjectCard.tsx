'use client'

import type { CSSProperties } from 'react'
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
  const { from, to } = project.accent
  const maxTech = featured ? 5 : 4
  const extraTech = project.tech.length - maxTech

  // Per-card brand tints — kept decorative (hairline, dot, button, stat wash) so
  // body/link text stays on the accessible slate/primary system.
  const accentVars = { '--from': from, '--to': to } as CSSProperties

  return (
    <motion.article
      variants={cardVariants}
      whileHover={{ y: -8 }}
      transition={{ type: 'spring', stiffness: 350, damping: 26 }}
      style={accentVars}
      className={`group relative flex flex-col overflow-hidden rounded-3xl border bg-white/85 backdrop-blur-md transition-[box-shadow,border-color] duration-300 ${
        project.ai
          ? 'border-indigo-200/60 shadow-card hover:shadow-ai-glow'
          : 'border-slate-200/60 shadow-card hover:shadow-card-hover'
      }`}
    >
      {/* Top accent hairline — brand signature, sweeps in on hover */}
      <span
        aria-hidden
        style={{ backgroundImage: `linear-gradient(90deg, ${from}, ${to})` }}
        className="absolute inset-x-0 top-0 z-20 h-[3px] origin-left scale-x-0 opacity-0 transition-all duration-500 ease-out group-hover:scale-x-100 group-hover:opacity-100"
      />

      {/* Cover */}
      <Link
        href={`/projects/${project.slug}`}
        aria-label={t('openCaseStudy', { name: project.name })}
        className="relative block aspect-[16/10] overflow-hidden"
      >
        <div className="absolute inset-0 transition-transform duration-[600ms] ease-out group-hover:scale-[1.04]">
          <ProjectCover project={project} priority={featured} locale={locale} />
        </div>

        {/* Hover scrim + reveal arrow (desktop delight; footer link covers touch) */}
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-slate-950/45 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <span
          style={{ backgroundImage: `linear-gradient(135deg, ${from}, ${to})` }}
          className="absolute bottom-3 right-3 z-20 flex h-9 w-9 translate-y-2 items-center justify-center rounded-full text-white opacity-0 shadow-lg ring-1 ring-white/30 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
          aria-hidden
        >
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
          </svg>
        </span>

        {project.ai && <span className="ai-badge absolute right-3 top-3 z-20">AI</span>}
      </Link>

      {/* Body */}
      <div className="flex flex-1 flex-col p-5 lg:p-6">
        {/* Meta row */}
        <div className="mb-2.5 flex items-center gap-2">
          <span className="h-1.5 w-1.5 shrink-0 rounded-full" style={{ backgroundColor: from }} />
          <span className="text-xs font-semibold text-slate-700">{pick(project.period, locale)}</span>
          <span className="text-slate-300">·</span>
          <span className="truncate text-xs font-medium text-slate-400">{project.tags.join(' · ')}</span>
        </div>

        <h3 className="font-display text-xl font-bold tracking-tight text-slate-900 lg:text-[1.35rem]">
          <Link href={`/projects/${project.slug}`} className="transition-colors group-hover:text-primary-700">
            {project.name}
          </Link>
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">{pick(project.tagline, locale)}</p>

        {featured && (
          <div className="mt-5 grid grid-cols-2 gap-2.5">
            {project.metrics.slice(0, 2).map((m, i) => (
              <div
                key={i}
                style={{ backgroundColor: `${from}0d`, borderColor: `${from}1f` }}
                className="rounded-xl border px-3.5 py-2.5"
              >
                <div className="text-sm font-bold text-slate-900">{pick(m.value, locale)}</div>
                <div className="mt-0.5 text-[11px] leading-tight text-slate-500">{pick(m.label, locale)}</div>
              </div>
            ))}
          </div>
        )}

        {/* Tech chips */}
        <div className="mt-5 flex flex-wrap items-center gap-1.5">
          {project.tech.slice(0, maxTech).map((tech) => (
            <span
              key={tech}
              className="rounded-md bg-slate-100/80 px-2.5 py-1 text-[11px] font-medium text-slate-600"
            >
              {tech}
            </span>
          ))}
          {extraTech > 0 && (
            <span className="px-1 text-[11px] font-semibold text-slate-400">+{extraTech}</span>
          )}
        </div>

        {/* Actions — pinned to the bottom for uniform card heights */}
        <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-4">
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary-700 transition-colors hover:text-primary-800"
          >
            {t('viewCaseStudy')}
            <svg
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
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
