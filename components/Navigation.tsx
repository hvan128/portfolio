'use client'

import { useState, useEffect } from 'react'
import { useTranslations } from 'next-intl'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from '@/i18n/navigation'
import { site, socials, navLinks } from '@/lib/site'
import LanguageSwitcher from './LanguageSwitcher'

export default function Navigation() {
  const t = useTranslations('nav')
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled ? 'border-blue-200/40 bg-white/85 shadow-card backdrop-blur-md' : 'border-transparent bg-white/60 backdrop-blur-sm'
      }`}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className="section-shell">
        <div className="flex h-14 items-center justify-between">
          <Link href="/" className="font-display text-xl font-bold text-primary-700 transition-colors hover:text-primary-800">
            {site.name}
          </Link>

          {/* Desktop links */}
          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((l) => (
              <Link
                key={l.key}
                href={l.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-primary-50 hover:text-primary-700"
              >
                {t(l.key)}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <LanguageSwitcher />
            <div className="hidden items-center gap-1 sm:flex">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="rounded-lg p-2 text-slate-500 transition-colors hover:bg-primary-50 hover:text-primary-700"
                >
                  <svg className="h-[18px] w-[18px]" fill="currentColor" viewBox="0 0 24 24">
                    <path d={s.icon} />
                  </svg>
                </a>
              ))}
            </div>
            <a
              href={site.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden rounded-lg bg-blue-gradient px-4 py-2 text-sm font-semibold text-white shadow-card transition-transform hover:scale-[1.04] sm:inline-flex"
            >
              {t('resume')}
            </a>

            {/* Mobile toggle */}
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label={t('toggleMenu')}
              aria-expanded={open}
              className="rounded-lg p-2 text-slate-700 transition-colors hover:bg-primary-50 md:hidden"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {open ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7h16M4 12h16M4 17h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-blue-200/40 bg-white/95 backdrop-blur-md md:hidden"
          >
            <div className="section-shell flex flex-col gap-1 py-3">
              {navLinks.map((l) => (
                <Link
                  key={l.key}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-base font-medium text-slate-700 transition-colors hover:bg-primary-50 hover:text-primary-700"
                >
                  {t(l.key)}
                </Link>
              ))}
              <a
                href={site.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 rounded-lg bg-blue-gradient px-3 py-2.5 text-center text-base font-semibold text-white"
              >
                {t('downloadResume')}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
