'use client'

import { motion } from 'framer-motion'
import { useLocale, useTranslations } from 'next-intl'
import { experiences } from '@/lib/experience'
import { pick, type Locale } from '@/lib/i18n-content'

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] as const } },
}

export default function Experience() {
  const locale = useLocale() as Locale
  const t = useTranslations('experienceSection')

  return (
    <section id="experience" className="relative z-10 py-8 lg:py-12">
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

        <motion.div
          className="relative mt-12 space-y-6 before:absolute before:left-[7px] before:top-2 before:hidden before:h-[calc(100%-1rem)] before:w-px before:bg-gradient-to-b before:from-primary-300 before:to-transparent md:before:block"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          transition={{ staggerChildren: 0.1 }}
        >
          {experiences.map((exp, i) => (
            <motion.div key={`${exp.company}-${i}`} variants={itemVariants} className="relative md:pl-10">
              <span className="absolute left-0 top-6 hidden h-4 w-4 rounded-full border-4 border-white bg-primary-500 md:block" />
              <div className="glass-card p-6 lg:p-7 transition-shadow hover:shadow-card-hover">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                  <h3 className="font-display text-xl font-bold text-slate-900">{exp.company}</h3>
                  <span className="text-sm font-medium text-primary-600">{pick(exp.period, locale)}</span>
                </div>
                <p className="mt-1 font-medium text-slate-700">{pick(exp.position, locale)}</p>
                <ul className="mt-4 space-y-2">
                  {pick(exp.details, locale).map((d) => (
                    <li key={d} className="flex items-start gap-2 text-sm leading-relaxed text-slate-600">
                      <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-primary-400" />
                      {d}
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
