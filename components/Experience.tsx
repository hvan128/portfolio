'use client'

import { motion } from 'framer-motion'
import { useLocale, useTranslations } from 'next-intl'
import SectionHeader from './ui/SectionHeader'
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
        <SectionHeader
          index="02"
          eyebrow={t('eyebrow')}
          headingBefore={t('headingBefore')}
          headingHighlight={t('headingHighlight')}
          intro={t('intro')}
        />

        <motion.div
          className="relative mt-12 space-y-6 before:absolute before:left-[7px] before:top-2 before:hidden before:h-[calc(100%-1rem)] before:w-px before:bg-gradient-to-b before:from-cyan-400/50 before:to-transparent md:before:block"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          transition={{ staggerChildren: 0.1 }}
        >
          {experiences.map((exp, i) => (
            <motion.div key={`${exp.company}-${i}`} variants={itemVariants} className="relative md:pl-10">
              <span className="absolute left-0 top-6 hidden h-4 w-4 rounded-full border-4 border-[#04050d] bg-cyan-400 md:block" />
              <div className="glass-card p-6 lg:p-7 transition-shadow hover:border-white/15">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                  <h3 className="font-display text-xl font-bold text-white">{exp.company}</h3>
                  <span className="text-sm font-medium text-cyan-300">{pick(exp.period, locale)}</span>
                </div>
                <p className="mt-1 font-medium text-slate-300">{pick(exp.position, locale)}</p>
                <ul className="mt-4 space-y-2">
                  {pick(exp.details, locale).map((d) => (
                    <li key={d} className="flex items-start gap-2 text-sm leading-relaxed text-slate-400">
                      <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-cyan-400/70" />
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
