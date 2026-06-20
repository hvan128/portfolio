import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import { getAppLanding, getAppSlugs } from '@/lib/apps'
import { pick, type Locale } from '@/lib/i18n-content'
import AppLanding from '@/components/apps/AppLanding'

export function generateStaticParams() {
  return getAppSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: { locale: Locale; slug: string } }): Promise<Metadata> {
  const { locale, slug } = params
  const app = getAppLanding(slug)
  if (!app) return { title: 'App not found' }
  const tagline = pick(app.tagline, locale)
  const intro = pick(app.intro, locale)
  const title = `${app.name} — ${tagline}`
  return {
    title,
    description: intro,
    openGraph: { title, description: intro, type: 'website' },
    twitter: { card: 'summary_large_image', title: app.name, description: intro },
  }
}

export default function AppLandingPage({ params }: { params: { locale: string; slug: string } }) {
  setRequestLocale(params.locale)
  const app = getAppLanding(params.slug)
  if (!app) notFound()
  return <AppLanding app={app} locale={params.locale as Locale} />
}
