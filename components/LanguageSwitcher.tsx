'use client'

import { useTransition } from 'react'
import { useLocale, useTranslations } from 'next-intl'
import { usePathname, useRouter } from '@/i18n/navigation'
import { routing, type Locale } from '@/i18n/routing'

// Compact segmented EN / VI toggle. Switches locale in place — next-intl preserves
// the current path and persists the choice via the NEXT_LOCALE cookie.
export default function LanguageSwitcher() {
  const locale = useLocale()
  const pathname = usePathname()
  const router = useRouter()
  const t = useTranslations('language')
  const [isPending, startTransition] = useTransition()

  // Nothing to switch when only one locale is active (e.g. Vietnamese disabled).
  if (routing.locales.length < 2) return null

  const switchTo = (next: string) => {
    if (next === locale) return
    startTransition(() => {
      router.replace(pathname, { locale: next })
    })
  }

  return (
    <div
      role="group"
      aria-label={t('switch')}
      className="flex items-center rounded-lg border border-slate-200/80 bg-white/70 p-0.5 backdrop-blur"
    >
      {routing.locales.map((l) => {
        const active = l === locale
        return (
          <button
            key={l}
            type="button"
            onClick={() => switchTo(l)}
            disabled={isPending}
            aria-pressed={active}
            aria-label={(l as Locale) === 'vi' ? t('vietnamese') : t('english')}
            className={`rounded-md px-2 py-1 text-xs font-semibold uppercase transition-colors ${
              active ? 'bg-blue-gradient text-white shadow-sm' : 'text-slate-500 hover:text-primary-700'
            }`}
          >
            {l}
          </button>
        )
      })}
    </div>
  )
}
