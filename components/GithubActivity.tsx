import { getLocale, getTranslations } from 'next-intl/server'
import { site } from '@/lib/site'

// GitHub contribution heatmap, brand-themed (blue scale instead of GitHub green).
// Async server component: data is fetched server-side from a tokenless proxy and
// cached with hourly ISR, so it refreshes within ~1h of a push — no client token.

interface Day {
  date: string
  count: number
  level: 0 | 1 | 2 | 3 | 4
}
interface ContribResponse {
  total: Record<string, number>
  contributions: Day[]
}

const PROXY = `https://github-contributions-api.jogruber.de/v4/${site.githubUser}?y=last`

// Blue scale matching the site identity.
const levelClass = ['bg-slate-200/70', 'bg-primary-200', 'bg-primary-400', 'bg-primary-600', 'bg-primary-800']

async function getContributions(): Promise<ContribResponse | null> {
  try {
    const res = await fetch(PROXY, { next: { revalidate: 3600 } })
    if (!res.ok) return null
    return (await res.json()) as ContribResponse
  } catch {
    return null
  }
}

// Group days into week-columns (Sun→Sat), padding the first column.
function toWeeks(days: Day[]): (Day | null)[][] {
  const weeks: (Day | null)[][] = []
  let week: (Day | null)[] = []
  for (const d of days) {
    const wd = new Date(d.date).getUTCDay()
    if (wd === 0 && week.length) {
      weeks.push(week)
      week = []
    }
    if (!weeks.length && !week.length && wd !== 0) {
      for (let i = 0; i < wd; i++) week.push(null)
    }
    week.push(d)
  }
  if (week.length) weeks.push(week)
  return weeks
}

export default async function GithubActivity() {
  const t = await getTranslations('github')
  const locale = await getLocale()
  const MONTHS = t.raw('months') as string[]
  const weekdays = t.raw('weekdays') as string[]
  const data = await getContributions()

  // Graceful fallback if the proxy is unreachable — never break the page.
  if (!data || !data.contributions?.length) {
    return (
      <section className="relative z-10 py-10">
        <div className="section-shell">
          <div className="glass-card flex items-center justify-between p-6">
            <p className="text-slate-600">{t('fallback')}</p>
            <a
              href={`https://github.com/${site.githubUser}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-primary-700 hover:text-primary-800"
            >
              {t('viewGithub')} →
            </a>
          </div>
        </div>
      </section>
    )
  }

  const total = data.contributions.reduce((sum, d) => sum + d.count, 0)
  const weeks = toWeeks(data.contributions)

  // Month labels positioned by the column where each month first appears.
  const monthLabels: { col: number; label: string }[] = []
  let lastMonth = -1
  weeks.forEach((w, col) => {
    const first = w.find(Boolean)
    if (!first) return
    const m = new Date(first.date).getUTCMonth()
    if (m !== lastMonth) {
      monthLabels.push({ col, label: MONTHS[m] })
      lastMonth = m
    }
  })

  return (
    <section className="relative z-10 py-6 lg:py-8">
      <div className="section-shell">
        <div className="glass-card p-5 lg:p-6">
          <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
              <span className="eyebrow">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                {t('eyebrow')}
              </span>
              <h2 className="font-display text-2xl font-bold text-slate-900">
                {t.rich('contributions', {
                  count: total.toLocaleString(locale === 'vi' ? 'vi-VN' : 'en-US'),
                  g: (chunks) => <span className="text-gradient">{chunks}</span>,
                })}
              </h2>
            </div>
            <a
              href={`https://github.com/${site.githubUser}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary-700 transition-colors hover:text-primary-800"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              @{site.githubUser} ↗
            </a>
          </div>

          {/* Scrollable on small screens so the page body never overflows horizontally. */}
          <div className="overflow-x-auto pb-2">
            <div className="flex min-w-[960px] flex-col gap-2">
              {/* month labels — flex-1 slots stay aligned with the week columns below */}
              <div className="flex gap-1 text-xs text-slate-400">
                <div className="w-7 shrink-0" />
                {weeks.map((_, col) => {
                  const label = monthLabels.find((m) => m.col === col)?.label
                  return (
                    <div key={col} className="min-w-0 flex-1 whitespace-nowrap">
                      {label}
                    </div>
                  )
                })}
              </div>

              <div className="flex items-stretch gap-1">
                {/* weekday labels — flex rows stay aligned with the square cells */}
                <div className="flex w-7 shrink-0 flex-col gap-1 text-[10px] text-slate-400">
                  {weekdays.map((d, i) => (
                    <div key={i} className="flex flex-1 items-center">{d}</div>
                  ))}
                </div>
                {/* week columns — flex-1 so the grid stretches to fill the card width */}
                {weeks.map((week, col) => (
                  <div key={col} className="flex flex-1 flex-col gap-1">
                    {Array.from({ length: 7 }).map((_, row) => {
                      const day = week[row]
                      if (!day) return <div key={row} className="aspect-square w-full" />
                      return (
                        <div
                          key={row}
                          title={t('dayTooltip', { count: day.count, date: day.date })}
                          className={`aspect-square w-full rounded-sm ${levelClass[day.level]} ring-1 ring-inset ring-black/[0.03]`}
                        />
                      )
                    })}
                  </div>
                ))}
              </div>

              {/* legend */}
              <div className="flex items-center justify-end gap-1.5 pt-1 text-[11px] text-slate-400">
                <span>{t('less')}</span>
                {levelClass.map((c, i) => (
                  <span key={i} className={`h-4 w-4 rounded-sm ${c}`} />
                ))}
                <span>{t('more')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
