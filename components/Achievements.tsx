'use client'

import { motion } from 'framer-motion'
import { useLocale, useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import { achievements } from '@/lib/achievements'
import { pick, type Locale } from '@/lib/i18n-content'

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] as const } },
}

export default function Achievements() {
  const locale = useLocale() as Locale
  const t = useTranslations('achievementsSection')

  return (
    <section id="achievements" className="relative z-10 py-8 lg:py-12">
      <div className="section-shell">
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

        <div className="mt-10 space-y-10">
          {achievements.map((a) => (
            <div key={a.event}>
              {/* Event header */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                className="flex flex-wrap items-baseline gap-x-3 gap-y-1"
              >
                <h3 className="font-display text-xl font-bold text-slate-900">{a.event}</h3>
                <span className="text-sm font-medium text-primary-600">{pick(a.period, locale)}</span>
                <span className="w-full text-sm text-slate-500 sm:w-auto">
                  {t('organizedBy')} {a.organizer}
                </span>
              </motion.div>

              {/* Entries */}
              <motion.div
                className="mt-5 grid gap-5 md:grid-cols-2"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                transition={{ staggerChildren: 0.12 }}
              >
                {a.entries.map((e) => (
                  <motion.div
                    key={e.name}
                    variants={itemVariants}
                    className={`glass-card flex flex-col p-6 lg:p-7 ${
                      e.winner ? 'border-amber-200/80 ring-1 ring-amber-200/60' : ''
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h4 className="font-display text-lg font-bold text-slate-900">{e.name}</h4>
                        {e.track && (
                          <p className="mt-1 text-xs font-medium uppercase tracking-wider text-slate-400">
                            {pick(e.track, locale)} · {t('track')}
                          </p>
                        )}
                      </div>
                      <span
                        className={`inline-flex flex-shrink-0 items-center gap-1 rounded-full px-2.5 py-1 text-xs font-bold ${
                          e.winner
                            ? 'bg-amber-50 text-amber-700 ring-1 ring-amber-200'
                            : 'bg-primary-50 text-primary-700 ring-1 ring-primary-100'
                        }`}
                      >
                        {e.winner && (
                          <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor" aria-hidden="true">
                            <path d="M5 3h14a1 1 0 0 1 1 1v2a4 4 0 0 1-3.07 3.89A6.002 6.002 0 0 1 13 13.91V17h2a1 1 0 0 1 1 1v1h2a1 1 0 1 1 0 2H6a1 1 0 1 1 0-2h2v-1a1 1 0 0 1 1-1h2v-3.09a6.002 6.002 0 0 1-3.93-4.02A4 4 0 0 1 4 6V4a1 1 0 0 1 1-1Zm-1 3a2 2 0 0 0 1.2 1.83A6.03 6.03 0 0 1 6 6V5H4v1Zm16 0V5h-2v1c0 .63-.1 1.24-.27 1.81A2 2 0 0 0 20 6Z" />
                          </svg>
                        )}
                        {pick(e.result, locale)}
                      </span>
                    </div>

                    <p className="mt-4 text-sm leading-relaxed text-slate-600">{pick(e.description, locale)}</p>

                    {e.prize && (
                      <p className="mt-3 text-sm font-medium text-slate-700">
                        <span className="text-slate-400">{t('prize')}: </span>
                        {pick(e.prize, locale)}
                      </p>
                    )}

                    {(e.tech?.length || e.projectSlug || e.href) && (
                      <div className="mt-auto pt-4">
                        {e.tech && e.tech.length > 0 && (
                          <div className="flex flex-wrap gap-2">
                            {e.tech.map((tech) => (
                              <span
                                key={tech}
                                className="rounded-full bg-primary-50 px-2.5 py-1 text-xs font-medium text-primary-700"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        )}

                        {e.projectSlug ? (
                          <Link
                            href={`/projects/${e.projectSlug}`}
                            className={`inline-flex items-center gap-1 text-sm font-semibold text-primary-600 transition-colors hover:text-primary-700 ${
                              e.tech?.length ? 'mt-3' : ''
                            }`}
                          >
                            {t('viewProject')} →
                          </Link>
                        ) : (
                          e.href && (
                            <a
                              href={e.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`inline-flex items-center gap-1 text-sm font-semibold text-primary-600 transition-colors hover:text-primary-700 ${
                                e.tech?.length ? 'mt-3' : ''
                              }`}
                            >
                              {t('viewProject')} →
                            </a>
                          )
                        )}
                      </div>
                    )}
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
