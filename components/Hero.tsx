'use client'

import dynamic from 'next/dynamic'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { site, socials } from '@/lib/site'
import CountUp from './fx/CountUp'
import DecryptText from './fx/DecryptText'

// WebGL is client-only and decorative — keep it out of the server render.
const Galaxy = dynamic(() => import('./fx/Galaxy'), { ssr: false })

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
}
const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const } },
}

interface Stat {
  value: number
  suffix: string
  label: string
}

export default function Hero() {
  const t = useTranslations('hero')
  const stats = t.raw('stats') as Stat[]

  return (
    <section className="relative z-10 -mt-14 flex min-h-[100svh] items-center overflow-hidden pt-14">
      {/* Star field — fades into the page at the bottom edge */}
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,#000_60%,transparent)]">
        <Galaxy
          density={1.2}
          glowIntensity={0.35}
          saturation={0.45}
          hueShift={210}
          twinkleIntensity={0.4}
          rotationSpeed={0.04}
          starSpeed={0.35}
          repulsionStrength={2.5}
        />
      </div>
      {/* Readability scrim behind the copy */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_55%_at_25%_50%,rgba(4,5,13,0.75),transparent_70%)]" />

      <div className="section-shell pointer-events-none relative w-full py-16">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[1.25fr_1fr]">
          {/* Copy */}
          <motion.div variants={container} initial="hidden" animate="visible" className="pointer-events-auto">
            <motion.div variants={item}>
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-400/[0.07] px-3 py-1.5 font-mono text-xs text-emerald-200">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                {t('status')}
              </span>
            </motion.div>

            <motion.p variants={item} className="mt-8 font-mono text-sm text-cyan-300/80">
              <span className="text-slate-500">&gt;</span> {t('greeting')}
            </motion.p>

            <motion.h1
              variants={item}
              className="mt-3 font-display text-5xl font-extrabold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl"
            >
              {site.name}
            </motion.h1>

            <motion.p variants={item} className="mt-5 font-display text-xl font-semibold sm:text-2xl">
              <DecryptText text={t('role')} className="text-gradient" delay={700} />
            </motion.p>

            <motion.p variants={item} className="mt-6 max-w-xl text-lg leading-relaxed text-slate-400">
              {t.rich('intro', { b: (chunks) => <strong className="font-semibold text-slate-100">{chunks}</strong> })}
            </motion.p>

            {/* CTAs */}
            <motion.div variants={item} className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#projects"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500 px-7 py-3.5 font-semibold text-white shadow-neon transition-transform duration-200 hover:-translate-y-0.5"
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                <span className="relative">{t('viewWork')}</span>
                <svg className="relative ml-2 h-5 w-5 transition-transform duration-200 group-hover:translate-y-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </a>
              <a
                href={site.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.04] px-6 py-3.5 font-semibold text-slate-200 backdrop-blur transition-colors hover:border-cyan-300/50 hover:text-white"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                {t('resume')}
              </a>
            </motion.div>

            {/* Socials */}
            <motion.div variants={item} className="mt-7 flex items-center gap-2">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="rounded-lg border border-white/10 bg-white/[0.03] p-2.5 text-slate-400 transition-colors hover:border-cyan-300/40 hover:text-cyan-200"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d={s.icon} />
                  </svg>
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Portrait in an orbiting ring */}
          <motion.div
            className="pointer-events-auto flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.3 }}
          >
            <div className="relative h-64 w-64 sm:h-72 sm:w-72 lg:h-[22rem] lg:w-[22rem]">
              <div className="absolute -inset-10 rounded-full bg-[radial-gradient(circle,rgba(56,189,248,0.25),transparent_65%)] blur-2xl" />
              <div className="absolute -inset-[3px] animate-spin-slow rounded-full bg-[conic-gradient(from_0deg,#22d3ee,#3b82f6,#8b5cf6,transparent_65%,#22d3ee)]" />
              <div className="absolute -inset-7 rounded-full border border-dashed border-white/10" />
              <div className="absolute -inset-7 animate-[spin-slow_22s_linear_infinite] rounded-full">
                <span className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300 shadow-[0_0_14px_3px_rgba(103,232,249,0.7)]" />
              </div>
              <div className="relative h-full w-full overflow-hidden rounded-full border-4 border-[#04050d] bg-slate-900">
                <Image src="/images/profile.jpg" alt={site.name} fill sizes="352px" className="object-cover" priority />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="pointer-events-auto mt-16 grid grid-cols-3 divide-x divide-white/[0.08] overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-md"
        >
          {stats.map((s) => (
            <div key={s.label} className="px-4 py-5 sm:px-8 sm:py-6">
              <div className="font-mono text-3xl font-semibold text-white sm:text-4xl">
                <CountUp to={s.value} />
                <span className="text-gradient">{s.suffix}</span>
              </div>
              <div className="mt-1.5 text-xs leading-snug text-slate-400 sm:text-sm">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
