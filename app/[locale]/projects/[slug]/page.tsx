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
          ? 'inline-flex items-center gap-2 rounded-xl bg-blue-gradient px-5 py-3 text-sm font-semibold text-white shadow-glow transition-transform hover:scale-[1.03]'
          : 'inline-flex items-center gap-2 rounded-xl border-2 border-slate-200 bg-white/70 px-5 py-3 text-sm font-semibold text-slate-700 backdrop-blur transition-colors hover:border-primary-400 hover:text-primary-700'
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
    { key: 'problem', label: t('problem'), value: pick(project.problem, locale), tone: 'text-rose-600', bar: 'bg-rose-400' },
    { key: 'solution', label: t('solution'), value: pick(project.solution, locale), tone: 'text-primary-600', bar: 'bg-primary-500' },
    { key: 'impact', label: t('impact'), value: pick(project.impact, locale), tone: 'text-emerald-600', bar: 'bg-emerald-400' },
  ]

  const primaryLink =
    project.links.find((l) => l.kind === 'live' || l.kind === 'web' || l.kind === 'demo') ?? project.links[0]
  const otherLinks = project.links.filter((l) => l !== primaryLink)
  const related = projects.filter((p) => p.slug !== project.slug).slice(0, 3)

  return (
    <main className="relative z-10">
      {/* Top bar */}
      <header className="sticky top-0 z-40 border-b border-blue-200/30 bg-white/80 backdrop-blur-md">
        <div className="section-shell flex h-14 items-center justify-between">
          <Link href="/" className="font-display text-lg font-bold text-primary-700 hover:text-primary-800">
            Ngô Hải Văn
          </Link>
          <Link
            href="/#projects"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-600 transition-colors hover:text-primary-700"
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
                <span key={tag} className="rounded-full border border-primary-200/70 bg-white/70 px-3 py-1 text-xs font-semibold text-primary-700">
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="font-display text-4xl font-extrabold tracking-tight text-slate-900 lg:text-5xl">
              {project.name}
            </h1>
            <p className="mt-3 text-lg text-slate-600">{pick(project.tagline, locale)}</p>
            <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-slate-500">
              <span className="font-medium text-primary-600">{pick(project.period, locale)}</span>
              <span className="text-slate-300">·</span>
              <span>{pick(project.role, locale)}</span>
            </div>
            <div className="mt-7 flex flex-wrap gap-3">
              {primaryLink && <LinkButton link={primaryLink} label={pick(primaryLink.label, locale)} primary />}
              {otherLinks.map((l) => (
                <LinkButton key={l.href} link={l} label={pick(l.label, locale)} />
              ))}
            </div>
          </div>

          <div className="aspect-[16/10] overflow-hidden rounded-2xl border border-white/60 shadow-glow">
            <ProjectCover project={project} priority variant="detail" locale={locale} />
          </div>
        </div>

        {/* Summary */}
        <p className="mx-auto mt-10 max-w-3xl text-balance text-center text-xl leading-relaxed text-slate-700">
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
              <p className="text-sm leading-relaxed text-slate-600">{b.value}</p>
            </div>
          ))}
        </div>

        {/* Metrics */}
        <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {project.metrics.map((m, i) => (
            <div key={i} className="rounded-2xl border border-primary-100 bg-white/70 p-5 text-center backdrop-blur">
              <div className="font-display text-2xl font-extrabold text-gradient">{pick(m.value, locale)}</div>
              <div className="mt-1 text-xs text-slate-500">{pick(m.label, locale)}</div>
            </div>
          ))}
        </div>

        {/* Highlights + Tech */}
        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="font-display text-2xl font-bold text-slate-900">{t('whatIWorkedOn')}</h2>
            <ul className="mt-5 space-y-3">
              {pick(project.highlights, locale).map((h) => (
                <li key={h} className="flex items-start gap-3 text-slate-700">
                  <svg className="mt-1 h-5 w-5 flex-shrink-0 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="leading-relaxed">{h}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-display text-2xl font-bold text-slate-900">{t('techStack')}</h2>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span key={tech} className="rounded-full bg-primary-50 px-3 py-1.5 text-sm font-medium text-primary-700">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Screenshot gallery (when available) — horizontal scroll handles any aspect */}
        {project.screenshots.length > 0 && (
          <div className="mt-10">
            <h2 className="font-display text-2xl font-bold text-slate-900">{t('screens')}</h2>
            <div className="mt-5 overflow-x-auto pb-4">
              <div className="flex gap-5">
                {project.screenshots.map((s) => (
                  <Image
                    key={s.src}
                    src={s.src}
                    alt={pick(s.alt, locale)}
                    width={600}
                    height={1300}
                    className="h-[440px] w-auto shrink-0 rounded-2xl border border-white/60 shadow-card"
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Interactive demo */}
        {project.demoUrl && (
          <div className="mt-10">
            <h2 className="font-display text-2xl font-bold text-slate-900">
              {locale === 'vi' ? 'Xem thực tế' : 'See it in action'}
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              {locale === 'vi'
                ? 'Demo tương tác — tự phát, bấm để điều khiển từng bước.'
                : 'Interactive walkthrough — plays automatically, click to control each step.'}
            </p>
            <div className="mt-5 overflow-hidden rounded-2xl ring-1 ring-slate-200/80 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.12)]">
              <DemoFrame
                src={project.demoUrl}
                title={locale === 'vi' ? 'Demo hoàn tiền Shopee' : 'Shopee cashback demo'}
              />
            </div>
          </div>
        )}

        {/* CTA */}
        {primaryLink && (
          <div className="mt-12 overflow-hidden rounded-3xl bg-blue-gradient p-6 text-center text-white lg:p-10">
            <h2 className="font-display text-2xl font-bold lg:text-3xl">{t('ctaTitle', { name: project.name })}</h2>
            <p className="mx-auto mt-2 max-w-xl text-blue-50">{t('ctaSubtitle')}</p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <a
                href={primaryLink.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-primary-700 transition-transform hover:scale-[1.03]"
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
          <h2 className="mb-5 font-display text-xl font-bold text-slate-900">{t('otherProjects')}</h2>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
            {related.map((p) => (
              <Link
                key={p.slug}
                href={`/projects/${p.slug}`}
                className="group overflow-hidden rounded-2xl border border-white/60 bg-white/70 backdrop-blur transition-shadow hover:shadow-card-hover"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <ProjectCover project={p} locale={locale} />
                  {p.ai && <span className="ai-badge absolute right-2.5 top-2.5 z-10">AI</span>}
                </div>
                <div className="p-4">
                  <span className="text-xs text-slate-500">{p.tags.join(' · ')}</span>
                  <div className="mt-1 font-display font-bold text-slate-900 group-hover:text-primary-700">{p.name}</div>
                  <p className="mt-1 line-clamp-2 text-sm text-slate-600">{pick(p.tagline, locale)}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </article>
    </main>
  )
}
