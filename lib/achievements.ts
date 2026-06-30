// Achievements — hackathon wins and other recognition. Event/organizer names and
// project names stay as-is; tracks, results, prizes and descriptions are Localized
// so Achievements.tsx can stay purely presentational.

import type { Localized } from '@/lib/i18n-content'

// A single result within an event (e.g. one hackathon track entry).
export interface AchievementEntry {
  name: string
  track?: Localized
  // Headline badge — the rank or award (e.g. "1st Place", "$5,000 credits").
  result: Localized
  // What was actually won, shown as a sub-line when present.
  prize?: Localized
  description: Localized
  tech?: string[]
  // Internal case-study link, when the entry is also a project on this site.
  projectSlug?: string
  // External link (demo, repo) — opens in a new tab.
  href?: string
  // Top result of its track — gets the featured (gold) styling.
  winner?: boolean
}

// An event that produced one or more achievements.
export interface AchievementItem {
  event: string
  organizer: string
  period: Localized
  entries: AchievementEntry[]
}

export const achievements: AchievementItem[] = [
  {
    event: 'Codex Community Hackathon',
    organizer: 'Codex Community Vietnam',
    period: { en: 'Jun 2026', vi: '06/2026' },
    entries: [
      {
        name: 'WonderLens',
        track: { en: 'Reach the Market', vi: 'Reach the Market' },
        result: { en: '1st Place', vi: 'Quán quân' },
        prize: { en: '1 year of Codex Pro ($200/mo)', vi: '1 năm Codex Pro ($200/tháng)' },
        winner: true,
        description: {
          en: 'An edtech app for curious kids: snap any everyday object and watch its origin story come alive — how it’s made and its place in history — as a narrated journey with images, voice and AI-generated video.',
          vi: 'Ứng dụng edtech cho trẻ ham khám phá: chụp bất kỳ đồ vật nào và xem câu chuyện ra đời của nó hiện lên sống động — cách làm ra và dấu ấn lịch sử — qua hình ảnh, giọng kể và video do AI sinh.',
        },
        tech: ['Flutter', 'OpenAI Vision', 'TTS', 'Sora video', 'Vercel'],
      },
      {
        name: 'VCareer',
        track: { en: 'Startup', vi: 'Startup' },
        result: { en: '$5,000 Codex credits', vi: '$5,000 credit Codex' },
        projectSlug: 'vcareer',
        description: {
          en: 'AI mock interviews you actually talk to — plus instant AI-built portfolios.',
          vi: 'Luyện phỏng vấn với AI bằng giọng nói thật — và portfolio do AI dựng chỉ trong tích tắc.',
        },
      },
    ],
  },
]
