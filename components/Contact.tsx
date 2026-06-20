'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useLocale, useTranslations } from 'next-intl'
import { site, socials } from '@/lib/site'
import { pick, type Locale } from '@/lib/i18n-content'

// Outline icons (24×24, stroke=currentColor) — one per contact row.
const rowIcons = {
  email:
    'M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75',
  phone:
    'M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z',
  location:
    'M15 10.5a3 3 0 11-6 0 3 3 0 016 0zM19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z',
  clock: 'M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z',
}

const copyIcon =
  'M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.16-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5A3.375 3.375 0 009.375 3.75H8.25'
const checkIcon = 'M4.5 12.75l6 6 9-13.5'

export default function Contact() {
  const locale = useLocale() as Locale
  const t = useTranslations('contact')

  const [copied, setCopied] = useState<string | null>(null)
  const [localTime, setLocalTime] = useState('')

  // Live local clock in Hanoi (GMT+7). Start empty to avoid hydration mismatch.
  useEffect(() => {
    const fmt = () =>
      new Intl.DateTimeFormat(locale === 'vi' ? 'vi-VN' : 'en-US', {
        timeZone: 'Asia/Ho_Chi_Minh',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      }).format(new Date())
    setLocalTime(fmt())
    const id = setInterval(() => setLocalTime(fmt()), 30_000)
    return () => clearInterval(id)
  }, [locale])

  const handleCopy = async (key: string, text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(key)
      setTimeout(() => setCopied((c) => (c === key ? null : c)), 1800)
    } catch {
      /* clipboard unavailable — silently ignore */
    }
  }

  const rows = [
    { key: 'email', label: t('rows.email'), value: site.email, href: `mailto:${site.email}`, icon: rowIcons.email, copy: site.email },
    { key: 'phone', label: t('rows.phone'), value: site.phone, href: site.phoneHref, icon: rowIcons.phone, copy: site.phone },
    { key: 'location', label: t('rows.location'), value: pick(site.location, locale), icon: rowIcons.location },
    {
      key: 'timezone',
      label: t('rows.timezone'),
      value: localTime ? `${localTime} · ${site.timezone}` : site.timezone,
      note: localTime ? t('localTime') : undefined,
      icon: rowIcons.clock,
    },
  ]

  return (
    <section id="contact" className="relative z-10 py-8 lg:py-12">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="overflow-hidden rounded-3xl border border-white/60 bg-white/70 shadow-glow backdrop-blur-md"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left — invite */}
            <div className="relative overflow-hidden bg-blue-gradient p-6 text-white lg:p-8">
              {/* depth: glow blobs + faint grid */}
              <div className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full bg-white/15 blur-2xl" />
              <div className="pointer-events-none absolute -bottom-16 -left-10 h-44 w-44 rounded-full bg-sky-300/20 blur-3xl" />
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.07]"
                style={{
                  backgroundImage:
                    'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
                  backgroundSize: '32px 32px',
                  maskImage: 'radial-gradient(120% 120% at 0% 0%, #000 40%, transparent 75%)',
                  WebkitMaskImage: 'radial-gradient(120% 120% at 0% 0%, #000 40%, transparent 75%)',
                }}
              />

              <div className="relative">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider ring-1 ring-white/20">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-300 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-300" />
                  </span>
                  {t('availableForWork')}
                </span>

                <h2 className="mt-4 font-display text-3xl font-bold leading-tight lg:text-4xl">{t('heading')}</h2>
                <p className="mt-3 max-w-md text-blue-50">{t('intro')}</p>

                <a
                  href={`mailto:${site.email}`}
                  className="group mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-primary-700 shadow-lg shadow-blue-900/15 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-900/25"
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  {t('sayHello')}
                  <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5-5 5M6 12h12" />
                  </svg>
                </a>

                <p className="mt-4 flex items-center gap-2 text-sm text-blue-100/90">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {t('responseTime')}
                </p>
              </div>
            </div>

            {/* Right — details */}
            <div className="p-6 lg:p-8">
              <ul className="space-y-0.5">
                {rows.map((row) => (
                  <li
                    key={row.key}
                    className="group flex items-center gap-4 rounded-2xl px-3 py-2.5 transition-colors hover:bg-slate-50"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary-600 ring-1 ring-primary-100">
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d={row.icon} />
                      </svg>
                    </span>

                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-medium uppercase tracking-wide text-slate-400">{row.label}</p>
                      {row.href ? (
                        <a
                          href={row.href}
                          className="block truncate font-semibold text-slate-800 transition-colors hover:text-primary-700"
                        >
                          {row.value}
                        </a>
                      ) : (
                        <p className="truncate font-semibold text-slate-800">
                          {row.value}
                          {row.note && <span className="ml-1.5 text-xs font-normal text-slate-400">{row.note}</span>}
                        </p>
                      )}
                    </div>

                    {row.copy && (
                      <button
                        type="button"
                        onClick={() => handleCopy(row.key, row.copy)}
                        aria-label={copied === row.key ? t('copied') : t('copy')}
                        title={copied === row.key ? t('copied') : t('copy')}
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border transition-all md:opacity-0 md:group-hover:opacity-100 ${
                          copied === row.key
                            ? 'border-emerald-200 bg-emerald-50 text-emerald-600 md:opacity-100'
                            : 'border-slate-200 text-slate-400 hover:border-primary-300 hover:bg-primary-50 hover:text-primary-600'
                        }`}
                      >
                        <svg className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d={copied === row.key ? checkIcon : copyIcon} />
                        </svg>
                      </button>
                    )}
                  </li>
                ))}
              </ul>

              <div className="mt-5 border-t border-slate-100 pt-5">
                <p className="mb-3 text-xs font-medium uppercase tracking-wide text-slate-400">{t('findMeOnline')}</p>
                <div className="flex flex-wrap gap-2.5">
                  {socials.map((s) => (
                    <a
                      key={s.name}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-sm font-medium text-slate-600 transition-all hover:-translate-y-0.5 hover:border-primary-300 hover:bg-primary-50 hover:text-primary-700 hover:shadow-card"
                    >
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d={s.icon} />
                      </svg>
                      {s.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
