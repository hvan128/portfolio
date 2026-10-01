'use client'

import { motion } from 'framer-motion'
import { useLocale, useTranslations } from 'next-intl'
import SectionHeader from './ui/SectionHeader'
import { education } from '@/lib/education'
import { pick, type Locale } from '@/lib/i18n-content'

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] as const } },
}

export default function Education() {
  const locale = useLocale() as Locale
  const t = useTranslations('educationSection')

  return (
    <section id="education" className="relative z-10 py-8 lg:py-12">
      <div className="section-shell">
        <SectionHeader
          index="03"
          eyebrow={t('eyebrow')}
          headingBefore={t('headingBefore')}
          headingHighlight={t('headingHighlight')}
          intro={t('intro')}
        />

        {/* Timeline */}
        <motion.div
          className="relative mt-8 space-y-5 before:absolute before:left-[7px] before:top-2 before:hidden before:h-[calc(100%-1rem)] before:w-px before:bg-gradient-to-b before:from-cyan-400/50 before:to-transparent md:before:block"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          transition={{ staggerChildren: 0.1 }}
        >
          {education.map((item) => (
            <motion.div key={item.school} variants={itemVariants} className="relative md:pl-10">
              {/* node */}
              <span
                className={`absolute left-0 top-6 hidden h-4 w-4 rounded-full border-4 border-[#04050d] md:block ${
                  item.ai ? 'bg-ai-gradient shadow-ai-glow' : 'bg-cyan-400'
                }`}
              />
              <div
                className={`glass-card p-5 lg:p-6 ${item.ai ? 'border-violet-400/20' : ''}`}
              >
                <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                  <h3 className="flex items-center gap-2 font-display text-xl font-bold text-white">
                    {item.school}
                    {item.ai && <span className="ai-badge">AI</span>}
                  </h3>
                  <span className="text-sm font-medium text-cyan-300">{pick(item.period, locale)}</span>
                </div>
                <p className="mt-1 font-medium text-slate-300">
                  {pick(item.program, locale)}
                  {item.status && (
                    <span className="ml-2 inline-flex items-center gap-1 rounded-full bg-emerald-400/10 px-2 py-0.5 text-xs font-semibold text-emerald-300">
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
                      {pick(item.status, locale)}
                    </span>
                  )}
                </p>
                <ul className="mt-4 space-y-2">
                  {pick(item.highlights, locale).map((h) => (
                    <li key={h} className="flex items-start gap-2 text-sm leading-relaxed text-slate-400">
                      <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-cyan-400/70" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
