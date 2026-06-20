import { defineRouting } from 'next-intl/routing'

// Always prefixed in the URL (/en, /vi). The middleware auto-detects the visitor's
// language from the Accept-Language header on first visit and then remembers their
// manual choice via the NEXT_LOCALE cookie.
// NOTE: Vietnamese is temporarily disabled — to restore it, add 'vi' back to `locales`.
export const routing = defineRouting({
  locales: ['en'],
  defaultLocale: 'en',
  localePrefix: 'always',
})

// Content in lib/* and messages/ is authored in both languages, so the type stays
// 'en' | 'vi' even while a locale is disabled above — everything restores cleanly.
export type Locale = 'en' | 'vi'
