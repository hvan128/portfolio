'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { site, socials } from '@/lib/site'

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
}
const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const } },
}

// Colored dot per stat chip — keeps the playful traffic-light accent from the design.
const dotColors = ['bg-green-500', 'bg-blue-500', 'bg-purple-500']

export default function Hero() {
  const t = useTranslations('hero')
  // Each chip has a bold label + a small subtitle, both from messages.
  const stats = t.raw('stats') as { label: string; sub: string }[]
  const [imageLoaded, setImageLoaded] = useState(false)

  return (
    <section className="relative z-10 overflow-hidden py-8 lg:py-12">
      <div className="section-shell">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Left — text content */}
          <motion.div variants={container} initial="hidden" animate="visible">
            <motion.div variants={item} className="mb-4 flex items-center gap-2">
              <span className="text-lg text-gray-600">{t('greeting')}</span>
              <motion.span
                className="text-2xl will-change-transform"
                animate={{ rotate: [0, 14, -8, 0] }}
                transition={{ duration: 0.6, repeat: Infinity, repeatDelay: 3 }}
              >
                🤘
              </motion.span>
            </motion.div>

            <motion.h1 variants={item} className="mb-6 text-5xl font-bold lg:text-6xl">
              {t('namePrefix')} <span className="text-blue-600">{site.shortName}</span>
            </motion.h1>

            <motion.p variants={item} className="mb-6 max-w-xl text-xl leading-relaxed text-gray-600">
              {t.rich('intro', { b: (chunks) => <strong className="text-gray-900">{chunks}</strong> })}
            </motion.p>

            {/* Metrics badges */}
            <motion.div variants={item} className="mb-8 flex flex-wrap gap-4">
              {stats.map((s, i) => (
                <div
                  key={s.label}
                  className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white/80 px-4 py-2 shadow-md backdrop-blur-sm"
                >
                  <span className={`h-2 w-2 rounded-full ${dotColors[i % dotColors.length]} animate-pulse`} />
                  <span className="text-sm font-semibold text-gray-800">{s.label}</span>
                  <span className="text-xs text-gray-500">{s.sub}</span>
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div variants={item} className="flex flex-col gap-4 sm:flex-row">
              <a
                href="#projects"
                className="group inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-3.5 font-semibold text-white shadow-xl transition-all duration-200 hover:from-blue-700 hover:to-blue-800 hover:shadow-2xl"
              >
                {t('viewWork')}
                <svg
                  className="ml-2 h-5 w-5 transition-transform duration-200 group-hover:translate-y-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </a>
              <a
                href={site.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border-2 border-gray-300 bg-white/50 px-6 py-3.5 font-semibold text-gray-700 shadow-md backdrop-blur-sm transition-all duration-200 hover:border-blue-600 hover:text-blue-600 hover:shadow-lg"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                {t('resume')}
              </a>
            </motion.div>

            {/* Social links — brand colors */}
            <motion.div variants={item} className="mt-6 flex items-center gap-5">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  style={{ color: s.color }}
                  className="transition-transform duration-200 hover:-translate-y-0.5 hover:scale-110"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d={s.icon} />
                  </svg>
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — round portrait */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.4 }}
          >
            <div className="relative">
              <div className="flex h-64 w-64 items-center justify-center overflow-hidden rounded-full border-4 border-white/50 bg-gradient-to-br from-blue-200 to-blue-400 shadow-2xl lg:h-80 lg:w-80">
                <div className="relative h-full w-full">
                  <Image
                    src="/images/profile.jpg"
                    alt={site.name}
                    fill
                    className="rounded-full object-cover"
                    priority
                    onLoad={() => setImageLoaded(true)}
                  />
                </div>
                {!imageLoaded && (
                  <div className="absolute inset-0 flex items-center justify-center bg-blue-300">
                    <motion.div
                      className="h-16 w-16 rounded-full border-4 border-blue-600 border-t-transparent"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                    />
                  </div>
                )}
              </div>
              {/* Decorative circle */}
              <div className="absolute -bottom-4 -right-4 -z-10 h-32 w-32 rounded-full bg-blue-100 opacity-50" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
