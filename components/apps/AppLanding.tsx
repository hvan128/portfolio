import Image from 'next/image'
import { getTranslations } from 'next-intl/server'
import { Link } from '@/i18n/navigation'
import type { AppLanding as AppLandingData } from '@/lib/apps'
import { pick, type Locale } from '@/lib/i18n-content'

function AppStoreBadge({
  href,
  accent = false,
  downloadLabel,
  storeLabel,
}: {
  href: string
  accent?: boolean
  downloadLabel: string
  storeLabel: string
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-3 rounded-xl px-5 py-3 transition-transform hover:scale-[1.03] ${
        accent ? 'bg-white text-slate-900 shadow-lg' : 'bg-slate-900 text-white shadow-card'
      }`}
    >
      <svg className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M17.05 12.04c-.03-2.6 2.12-3.85 2.22-3.91-1.21-1.77-3.1-2.01-3.77-2.04-1.6-.16-3.13.94-3.94.94-.81 0-2.07-.92-3.4-.9-1.75.03-3.36 1.02-4.26 2.58-1.82 3.16-.46 7.83 1.3 10.39.86 1.25 1.89 2.66 3.24 2.6 1.3-.05 1.79-.84 3.36-.84 1.57 0 2.01.84 3.39.81 1.4-.02 2.28-1.27 3.13-2.53.99-1.45 1.4-2.86 1.42-2.93-.03-.01-2.72-1.04-2.75-4.13zM14.6 4.6c.71-.86 1.19-2.06 1.06-3.25-1.02.04-2.27.68-3 1.54-.66.76-1.23 1.98-1.08 3.15 1.14.09 2.31-.58 3.02-1.44z" />
      </svg>
      <span className="text-left leading-tight">
        <span className="block text-[10px] font-medium opacity-70">{downloadLabel}</span>
        <span className="block text-lg font-semibold">{storeLabel}</span>
      </span>
    </a>
  )
}

// Marketing landing page for a mobile app. Server-rendered for SEO; the App Store
// screenshots are already framed marketing shots, shown in a scrollable gallery.
export default async function AppLanding({ app, locale }: { app: AppLandingData; locale: Locale }) {
  const t = await getTranslations('appLanding')
  const heroStyle = {
    backgroundImage: `radial-gradient(120% 120% at 100% 0%, ${app.accent.from}33, transparent 55%), linear-gradient(135deg, ${app.accent.from} 0%, ${app.accent.to} 100%)`,
  }
  const downloadLabel = t('downloadOnThe')
  const storeLabel = t('appStore')

  return (
    <main className="relative z-10">
      {/* Top bar */}
      <header className="sticky top-0 z-40 border-b border-blue-200/30 bg-white/80 backdrop-blur-md">
        <div className="section-shell flex h-14 items-center justify-between">
          <Link href="/" className="font-display text-lg font-bold text-primary-700 hover:text-primary-800">
            Ngô Hải Văn
          </Link>
          <Link
            href={`/projects/${app.caseStudySlug}`}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-600 transition-colors hover:text-primary-700"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            {t('caseStudy')}
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden text-white" style={heroStyle}>
        <div className="absolute inset-0 bg-grid-faint [background-size:26px_26px] opacity-20" />
        <div className="section-shell relative grid grid-cols-1 items-center gap-8 py-10 lg:grid-cols-2 lg:py-14">
          <div>
            <div className="flex items-center gap-4">
              <div className="rounded-2xl bg-white/90 p-2 shadow-lg">
                <Image src={app.logo} alt={`${app.name} icon`} width={64} height={64} className="h-16 w-16 rounded-xl object-contain" />
              </div>
              <div>
                <h1 className="font-display text-4xl font-extrabold tracking-tight lg:text-5xl">{app.name}</h1>
                <p className="text-sm font-medium text-white/80">{pick(app.category, locale)}</p>
              </div>
            </div>
            <p className="mt-6 font-display text-2xl font-bold leading-snug">{pick(app.tagline, locale)}</p>
            <p className="mt-3 max-w-md leading-relaxed text-white/85">{pick(app.intro, locale)}</p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <AppStoreBadge href={app.appStoreUrl} accent downloadLabel={downloadLabel} storeLabel={storeLabel} />
            </div>
          </div>

          {/* Lead screenshot (already framed) */}
          <div className="relative hidden justify-center lg:flex">
            <div className="absolute -inset-6 rounded-full bg-white/20 blur-3xl" />
            <Image
              src={app.screenshots[1]?.src ?? app.screenshots[0].src}
              alt={pick(app.screenshots[1]?.alt ?? app.screenshots[0].alt, locale)}
              width={600}
              height={1300}
              priority
              className="relative h-[440px] w-auto drop-shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-shell py-10 lg:py-14">
        <h2 className="font-display text-3xl font-bold text-slate-900">{t('everythingYouNeed')}</h2>
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {app.features.map((f, i) => (
            <div key={i} className={`glass-card p-6 ${f.ai ? 'border-indigo-200/70' : ''}`}>
              <div className="mb-3 flex items-center gap-3">
                <span
                  className={`flex h-10 w-10 items-center justify-center rounded-xl ${
                    f.ai ? 'bg-ai-gradient text-white' : 'bg-primary-50 text-primary-600'
                  }`}
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={f.icon} />
                  </svg>
                </span>
                <h3 className="flex items-center gap-2 font-display font-bold text-slate-900">
                  {pick(f.title, locale)}
                  {f.ai && <span className="ai-badge">AI</span>}
                </h3>
              </div>
              <p className="text-sm leading-relaxed text-slate-600">{pick(f.desc, locale)}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Screenshot gallery */}
      <section className="border-y border-slate-200/70 bg-white/50 py-10">
        <div className="section-shell">
          <h2 className="font-display text-3xl font-bold text-slate-900">{t('seeItInAction')}</h2>
          <p className="mt-2 text-slate-600">{t('realScreens')}</p>
        </div>
        <div className="mt-8 overflow-x-auto pb-4">
          <div className="section-shell flex gap-5">
            {app.screenshots.map((s) => (
              <Image
                key={s.src}
                src={s.src}
                alt={pick(s.alt, locale)}
                width={600}
                height={1300}
                className="h-[420px] w-auto shrink-0 rounded-2xl shadow-card"
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-shell py-10 lg:py-14">
        <div className="relative overflow-hidden rounded-3xl p-8 text-center text-white lg:p-12" style={heroStyle}>
          <div className="absolute inset-0 bg-grid-faint [background-size:26px_26px] opacity-20" />
          <div className="relative">
            <h2 className="font-display text-3xl font-bold lg:text-4xl">{t('get', { name: app.name })}</h2>
            <p className="mx-auto mt-2 max-w-md text-white/85">{t('ctaSubtitle')}</p>
            <div className="mt-7 flex justify-center">
              <AppStoreBadge href={app.appStoreUrl} accent downloadLabel={downloadLabel} storeLabel={storeLabel} />
            </div>
            <Link href={`/projects/${app.caseStudySlug}`} className="mt-6 inline-block text-sm font-medium text-white/80 underline-offset-4 hover:underline">
              {t('readCaseStudy')}
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
