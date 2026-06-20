import Image from 'next/image'
import type { Project } from '@/lib/projects'
import { pick, type Locale } from '@/lib/i18n-content'

interface ProjectCoverProps {
  project: Project
  priority?: boolean
  // 'card' = compact thumbnail, 'detail' = larger hero on the case-study page
  variant?: 'card' | 'detail'
  // Passed in (not read via a hook) so this stays usable in both client cards
  // and server detail pages.
  locale: Locale
}

// Renders a project's visual: a screenshot framed in browser/phone chrome when one
// exists, otherwise a branded gradient cover built from the project accent + logo.
// Pure/presentational so it works in both client cards and server detail pages.
export default function ProjectCover({ project, priority = false, variant = 'card', locale }: ProjectCoverProps) {
  const { cover, accent, name } = project
  const hasShot = Boolean(cover.image)

  const gradient = {
    backgroundImage: `radial-gradient(120% 120% at 0% 0%, ${accent.from}1f, transparent 60%), linear-gradient(135deg, ${accent.from} 0%, ${accent.to} 100%)`,
  }

  // The visual "screen": a screenshot fills it, otherwise a soft tinted panel with the logo.
  const screen = hasShot ? (
    <Image
      src={cover.image as string}
      alt={`${name} screenshot`}
      fill
      sizes="(max-width: 1024px) 100vw, 640px"
      className="object-cover object-top"
      priority={priority}
    />
  ) : (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden" style={gradient}>
      <div className="absolute inset-0 bg-grid-faint [background-size:22px_22px] opacity-40" />
      <div className="relative flex flex-col items-center gap-3 px-4 text-center">
        {cover.logo && (
          <div className="rounded-2xl bg-white/90 p-3 shadow-lg backdrop-blur">
            <Image
              src={cover.logo}
              alt={`${name} logo`}
              width={variant === 'detail' ? 72 : 56}
              height={variant === 'detail' ? 72 : 56}
              className="h-14 w-14 object-contain"
            />
          </div>
        )}
        <span className="font-display text-xl font-bold text-white drop-shadow-sm">{name}</span>
        <span className="rounded-full bg-black/20 px-3 py-1 text-xs font-medium text-white/90 backdrop-blur">
          {project.tags[0]}
        </span>
      </div>
    </div>
  )

  // Branded gradient cover (projects with no screenshot) — no chrome, just the brand.
  if (cover.type === 'gradient') {
    return <div className="relative h-full w-full overflow-hidden">{screen}</div>
  }

  if (cover.type === 'mobile') {
    // Compose the app's real App Store screenshots as overlapping cards on the accent
    // gradient — reads like an app showcase rather than one flat image.
    const shots = project.screenshots.slice(0, 2)
    return (
      <div className="relative flex h-full w-full items-end justify-center overflow-hidden" style={gradient}>
        <div className="absolute inset-0 bg-grid-faint [background-size:22px_22px] opacity-25" />
        {cover.logo && (
          <div className="absolute left-4 top-4 z-20 rounded-xl bg-white/90 p-1.5 shadow-md backdrop-blur">
            <Image src={cover.logo} alt={`${name} logo`} width={28} height={28} className="h-7 w-7 rounded-md object-contain" />
          </div>
        )}
        {shots.length > 0 ? (
          <div className="relative flex h-[86%] items-end gap-3">
            {shots[1] && (
              <Image
                src={shots[1].src}
                alt={pick(shots[1].alt, locale)}
                width={300}
                height={650}
                className="h-[78%] w-auto -rotate-6 self-end rounded-xl shadow-xl ring-1 ring-black/5"
              />
            )}
            <Image
              src={shots[0].src}
              alt={pick(shots[0].alt, locale)}
              width={300}
              height={650}
              priority={priority}
              className="z-10 h-full w-auto rotate-3 rounded-xl shadow-2xl ring-1 ring-black/5"
            />
          </div>
        ) : (
          screen
        )}
      </div>
    )
  }

  // Browser frame (default for web apps).
  return (
    <div className="relative h-full w-full overflow-hidden" style={!hasShot ? undefined : gradient}>
      <div className="flex h-full w-full flex-col">
        {/* browser top bar */}
        <div className="flex items-center gap-2 border-b border-black/5 bg-white/80 px-3 py-2 backdrop-blur">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
          <span className="ml-2 hidden truncate rounded-md bg-slate-100 px-3 py-1 text-xs text-slate-500 sm:block">
            {project.links.find((l) => l.kind === 'live' || l.kind === 'web')?.href?.replace(/^https?:\/\//, '') ??
              `${project.slug}.app`}
          </span>
        </div>
        <div className="relative flex-1">{screen}</div>
      </div>
    </div>
  )
}
