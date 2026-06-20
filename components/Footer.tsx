'use client'

import { motion } from 'framer-motion'
import { useLocale, useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import { site, socials, navLinks } from '@/lib/site'
import { pick, type Locale } from '@/lib/i18n-content'

export default function Footer() {
  const locale = useLocale() as Locale
  const t = useTranslations('footer')
  const tNav = useTranslations('nav')
  const year = new Date().getFullYear()

  return (
    <footer className="relative z-10 mt-8 border-t border-slate-200/70 bg-white/60 backdrop-blur">
      <div className="section-shell py-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* About */}
          <div className="md:col-span-1">
            <Link href="/" className="font-display text-xl font-bold text-primary-700">
              {site.name}
            </Link>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-slate-600">
              {t('about', { role: pick(site.role, locale) })}
            </p>
            <div className="mt-4 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="text-slate-500 transition-colors hover:text-primary-700"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d={s.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Navigate */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-800">{t('navigate')}</h3>
            <ul className="mt-4 space-y-2">
              {navLinks.map((l) => (
                <li key={l.key}>
                  <Link href={l.href} className="text-sm text-slate-600 transition-colors hover:text-primary-700">
                    {tNav(l.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get in touch */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-800">{t('getInTouch')}</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li>
                <a href={`mailto:${site.email}`} className="transition-colors hover:text-primary-700">
                  {site.email}
                </a>
              </li>
              <li>
                <a href={site.phoneHref} className="transition-colors hover:text-primary-700">
                  {site.phone}
                </a>
              </li>
              <li>{pick(site.location, locale)}</li>
            </ul>
          </div>
        </div>

        <motion.div
          className="mt-10 border-t border-slate-200/70 pt-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm text-slate-500">© {year} {site.name}. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  )
}
