import Image from 'next/image'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { Link } from '@/i18n/navigation'
import { getProject, getProjectSlugs, projects, type ProjectLink } from '@/lib/projects'
import { pick, type Locale } from '@/lib/i18n-content'
import ProjectCover from '@/components/projects/ProjectCover'
import DemoFrame from '@/components/projects/DemoFrame'

export function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: { locale: Locale; slug: string } }): Promise<Metadata> {
  const { locale, slug } = params
  const project = getProject(slug)
  if (!project) return { title: 'Project not found' }
  const tagline = pick(project.tagline, locale)
  const summary = pick(project.summary, locale)
  const title = `${project.name} — ${tagline}`
  return {
    title: `${title} | Ngô Hải Văn`,
    description: summary,
    openGraph: { title, description: summary, type: 'article' },
    twitter: { card: 'summary_large_image', title, description: summary },
  }
}

const ICON_PATHS = {
  github:
    'M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z',
  facebook:
    'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z',
  appstore:
    'M17.05 12.04c-.03-2.6 2.12-3.85 2.22-3.91-1.21-1.77-3.1-2.01-3.77-2.04-1.6-.16-3.13.94-3.94.94-.81 0-2.07-.92-3.4-.9-1.75.03-3.36 1.02-4.26 2.58-1.82 3.16-.46 7.83 1.3 10.39.86 1.25 1.89 2.66 3.24 2.6 1.3-.05 1.79-.84 3.36-.84 1.57 0 2.01.84 3.39.81 1.4-.02 2.28-1.27 3.13-2.53.99-1.45 1.4-2.86 1.42-2.93-.03-.01-2.72-1.04-2.75-4.13zM14.6 4.6c.71-.86 1.19-2.06 1.06-3.25-1.02.04-2.27.68-3 1.54-.66.76-1.23 1.98-1.08 3.15 1.14.09 2.31-.58 3.02-1.44z',
  playstore:
    'M3.609 1.814L13.792 12 3.609 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .61-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.39 12l2.308-2.491zM5.864 2.658L16.802 8.99l-2.303 2.303-8.635-8.635z',
}

function LinkButton({ link, label, primary }: { link: ProjectLink; label: string; primary?: boolean }) {
  const brandPath = ICON_PATHS[link.kind as keyof typeof ICON_PATHS]
  return (
    <a
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      className={
        primary
          ? 'inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500 px-5 py-3 text-sm font-semibold text-white shadow-neon transition-transform hover:scale-[1.03]'
          : 'inline-flex items-center gap-2 rounded-xl border-2 border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-slate-300 backdrop-blur transition-colors hover:border-cyan-300/50 hover:text-cyan-200'
      }
    >
      {brandPath ? (
        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path d={brandPath} />
        </svg>
      ) : (
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      )}
      {label}
    </a>
  )
}

export default async function ProjectDetailPage({ params }: { params: { locale: string; slug: string } }) {
  const { locale: rawLocale, slug } = params
  setRequestLocale(rawLocale)
  const locale = rawLocale as Locale
  const project = getProject(slug)
  if (!project) notFound()

  const t = await getTranslations('projectDetail')

  const blocks = [
    { key: 'problem', label: t('problem'), value: pick(project.problem, locale), tone: 'text-rose-300', bar: 'bg-rose-400' },
    { key: 'solution', label: t('solution'), value: pick(project.solution, locale), tone: 'text-cyan-300', bar: 'bg-cyan-400' },
    { key: 'impact', label: t('impact'), value: pick(project.impact, locale), tone: 'text-emerald-300', bar: 'bg-emerald-400' },
  ]

  const primaryLink =
    project.links.find((l) => l.kind === 'live' || l.kind === 'web' || l.kind === 'demo') ?? project.links[0]
  const otherLinks = project.links.filter((l) => l !== primaryLink)
  const related = projects.filter((p) => p.slug !== project.slug).slice(0, 3)

  return (
    <main className="relative z-10">
      {/* Top bar */}
      <header className="sticky top-0 z-40 border-b border-white/[0.08] bg-[#04050d]/80 backdrop-blur-md">
        <div className="section-shell flex h-14 items-center justify-between">
          <Link href="/" className="font-display text-lg font-bold text-white hover:text-cyan-100">
            Ngô Hải Văn
          </Link>
          <Link
            href="/#projects"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-400 transition-colors hover:text-cyan-200"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            {t('allProjects')}
          </Link>
        </div>
      </header>

      <article className="section-shell py-8 lg:py-12">
        {/* Hero */}
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <div>
            <div className="mb-4 flex flex-wrap items-center gap-2">
              {project.ai && <span className="ai-badge">AI</span>}
              {project.tags.map((tag) => (
                <span key={tag} className="rounded-full border border-cyan-400/25 bg-white/[0.04] px-3 py-1 text-xs font-semibold text-cyan-300">
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="font-display text-4xl font-extrabold tracking-tight text-white lg:text-5xl">
              {project.name}
            </h1>
            <p className="mt-3 text-lg text-slate-400">{pick(project.tagline, locale)}</p>
            <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-slate-500">
              <span className="font-medium text-cyan-300">{pick(project.period, locale)}</span>
              <span className="text-slate-600">·</span>
              <span>{pick(project.role, locale)}</span>
            </div>
            <div className="mt-7 flex flex-wrap gap-3">
              {primaryLink && <LinkButton link={primaryLink} label={pick(primaryLink.label, locale)} primary />}
              {otherLinks.map((l) => (
                <LinkButton key={l.href} link={l} label={pick(l.label, locale)} />
              ))}
            </div>
          </div>

          <div className="aspect-[16/10] overflow-hidden rounded-2xl border border-white/10 shadow-neon">
            <ProjectCover project={project} priority variant="detail" locale={locale} />
          </div>
        </div>

        {/* Summary */}
        <p className="mx-auto mt-10 max-w-3xl text-balance text-center text-xl leading-relaxed text-slate-300">
          {pick(project.summary, locale)}
        </p>

        {/* Problem / Solution / Impact */}
        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
          {blocks.map((b) => (
            <div key={b.key} className="glass-card p-6">
              <div className="mb-3 flex items-center gap-2">
                <span className={`h-5 w-1 rounded-full ${b.bar}`} />
                <span className={`text-sm font-bold uppercase tracking-wide ${b.tone}`}>{b.label}</span>
              </div>
              <p className="text-sm leading-relaxed text-slate-400">{b.value}</p>
            </div>
          ))}
        </div>

        {/* Metrics */}
        <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {project.metrics.map((m, i) => (
            <div key={i} className="rounded-2xl border border-cyan-400/15 bg-white/[0.04] p-5 text-center backdrop-blur">
              <div className="font-display text-2xl font-extrabold text-gradient">{pick(m.value, locale)}</div>
              <div className="mt-1 text-xs text-slate-500">{pick(m.label, locale)}</div>
            </div>
          ))}
        </div>

        {/* Highlights + Tech */}
        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="font-display text-2xl font-bold text-white">{t('whatIWorkedOn')}</h2>
            <ul className="mt-5 space-y-3">
              {pick(project.highlights, locale).map((h) => (
                <li key={h} className="flex items-start gap-3 text-slate-300">
                  <svg className="mt-1 h-5 w-5 flex-shrink-0 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="leading-relaxed">{h}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-display text-2xl font-bold text-white">{t('techStack')}</h2>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span key={tech} className="rounded-full bg-cyan-400/10 px-3 py-1.5 text-sm font-medium text-cyan-300">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Screenshot gallery (when available) — horizontal scroll handles any aspect */}
        {project.screenshots.length > 0 && (
          <div className="mt-10">
            <h2 className="font-display text-2xl font-bold text-white">{t('screens')}</h2>
            <div className="mt-5 overflow-x-auto pb-4">
              <div className="flex gap-5">
                {project.screenshots.map((s) => (
                  <Image
                    key={s.src}
                    src={s.src}
                    alt={pick(s.alt, locale)}
                    width={600}
                    height={1300}
                    className="h-[440px] w-auto shrink-0 rounded-2xl border border-white/10 shadow-panel"
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Interactive demo */}
        {project.demoUrl && (
          <div className="mt-10">
            <h2 className="font-display text-2xl font-bold text-white">
              {locale === 'vi' ? 'Xem thực tế' : 'See it in action'}
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              {locale === 'vi'
                ? 'Demo tương tác — tự phát, bấm để điều khiển từng bước.'
                : 'Interactive walkthrough — plays automatically, click to control each step.'}
            </p>
            <div className="mt-5 overflow-hidden rounded-2xl ring-1 ring-white/10 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.12)]">
              <DemoFrame
                src={project.demoUrl}
                title={locale === 'vi' ? 'Demo hoàn tiền Shopee' : 'Shopee cashback demo'}
              />
            </div>
          </div>
        )}

        {/* CTA */}
        {primaryLink && (
          <div className="mt-12 overflow-hidden rounded-3xl border border-white/[0.08] bg-[linear-gradient(135deg,rgba(34,211,238,0.18),rgba(59,130,246,0.14)_45%,rgba(139,92,246,0.2))] p-6 text-center text-white lg:p-10">
            <h2 className="font-display text-2xl font-bold lg:text-3xl">{t('ctaTitle', { name: project.name })}</h2>
            <p className="mx-auto mt-2 max-w-xl text-slate-300">{t('ctaSubtitle')}</p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <a
                href={primaryLink.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition-transform hover:scale-[1.03]"
              >
                {pick(primaryLink.label, locale)}
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
              <Link
                href="/#projects"
                className="inline-flex items-center gap-2 rounded-xl border-2 border-white/40 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                {t('ctaMoreProjects')}
              </Link>
            </div>
          </div>
        )}

        {/* Related */}
        <div className="mt-10">
          <h2 className="mb-5 font-display text-xl font-bold text-white">{t('otherProjects')}</h2>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
            {related.map((p) => (
              <Link
                key={p.slug}
                href={`/projects/${p.slug}`}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur transition-shadow hover:border-white/20"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <ProjectCover project={p} locale={locale} />
                  {p.ai && <span className="ai-badge absolute right-2.5 top-2.5 z-10">AI</span>}
                </div>
                <div className="p-4">
                  <span className="text-xs text-slate-500">{p.tags.join(' · ')}</span>
                  <div className="mt-1 font-display font-bold text-white group-hover:text-cyan-200">{p.name}</div>
                  <p className="mt-1 line-clamp-2 text-sm text-slate-400">{pick(p.tagline, locale)}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </article>
    </main>
  )
}
