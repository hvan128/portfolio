import type { Locale } from '@/i18n/routing'

// A value that exists in both languages. Used for structured content in lib/*
// (projects, apps, experience, education) where prose differs per locale but the
// surrounding data (slugs, tech, links, images) is shared.
export type Localized<T = string> = Record<Locale, T>

// Resolve a localized value for the active locale.
export function pick<T>(value: Localized<T>, locale: Locale): T {
  return value[locale]
}

export type { Locale }
