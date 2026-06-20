// Landing-page data for the mobile apps that don't have their own website.
// Rendered by components/apps/AppLanding.tsx at /[locale]/apps/[slug]. Screenshots
// are the real App Store marketing shots (already framed) under
// /public/images/apps/<slug>. Prose fields are Localized<…>.

import type { Localized } from '@/lib/i18n-content'

export interface AppFeature {
  title: Localized
  desc: Localized
  // single-path SVG (viewBox 0 0 24 24, stroke=currentColor)
  icon: string
  ai?: boolean
}

export interface AppLanding {
  slug: string
  caseStudySlug: string
  name: string
  tagline: Localized
  intro: Localized
  logo: string
  category: Localized
  accent: { from: string; to: string }
  appStoreUrl: string
  features: AppFeature[]
  screenshots: { src: string; alt: Localized }[]
}

const ICONS = {
  sparkle: 'M12 2l1.9 5.1L19 9l-5.1 1.9L12 16l-1.9-5.1L5 9l5.1-1.9L12 2z',
  route: 'M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7',
  compass: 'M12 21a9 9 0 100-18 9 9 0 000 18zm2.5-11.5L13 13l-3.5 1.5L11 11l3.5-1.5z',
  users: 'M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m6-1.13a4 4 0 10-4 0M17 7a3 3 0 11-6 0 3 3 0 016 0z',
  map: 'M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4',
  pin: 'M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z',
  book: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.247m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.247',
  mic: 'M19 11a7 7 0 01-14 0m7 7v4m-4 0h8M12 1a3 3 0 00-3 3v7a3 3 0 006 0V4a3 3 0 00-3-3z',
  play: 'M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
  chart: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
  sync: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15',
}

export const appLandings: AppLanding[] = [
  {
    slug: 'ondetour',
    caseStudySlug: 'ondetour',
    name: 'OnDetour',
    tagline: {
      en: 'Travel like a local — not a tourist.',
      vi: 'Đi như người bản địa — chứ không như khách du lịch.',
    },
    intro: {
      en: 'OnDetour surfaces hidden gems and authentic local spots, then helps you turn them into a real trip you can actually follow — plan, discover, and travel together.',
      vi: 'OnDetour gợi ý những điểm đến ẩn mình và chốn địa phương đúng chất, rồi giúp bạn biến chúng thành một hành trình thật sự có thể đi theo — lên kế hoạch, khám phá và cùng nhau lên đường.',
    },
    logo: '/images/projects/ondetour-logo.png',
    category: { en: 'Travel · iOS', vi: 'Du lịch · iOS' },
    accent: { from: '#fb7185', to: '#8b5cf6' },
    appStoreUrl: 'https://apps.apple.com/vn/app/ondetour/id6775022752?l=vi',
    features: [
      {
        title: { en: 'AI trip planner', vi: 'Lập kế hoạch bằng AI' },
        desc: {
          en: 'A full day-by-day itinerary generated in seconds.',
          vi: 'Lịch trình chi tiết từng ngày, được tạo ra chỉ trong vài giây.',
        },
        icon: ICONS.sparkle,
        ai: true,
      },
      {
        title: { en: 'Plan your trip', vi: 'Lên lịch chuyến đi' },
        desc: {
          en: 'Add places, food stops and notes, then optimize your route to spend less time in transit.',
          vi: 'Thêm điểm đến, quán ăn và ghi chú, rồi tối ưu lộ trình để bớt thời gian di chuyển.',
        },
        icon: ICONS.route,
      },
      {
        title: { en: 'Discover like a local', vi: 'Khám phá như dân địa phương' },
        desc: {
          en: 'Hidden gems and local favourites — not the same crowded tourist hotspots.',
          vi: 'Những điểm đến ẩn mình và chốn yêu thích của dân bản địa — không phải mấy điểm check-in đông nghịt.',
        },
        icon: ICONS.compass,
      },
      {
        title: { en: 'Travel together', vi: 'Cùng nhau lên đường' },
        desc: {
          en: 'Collaborate on trips in real time, split expenses and keep everyone on budget.',
          vi: 'Cùng lên kế hoạch theo thời gian thực, chia chi phí và giữ cả nhóm không vượt ngân sách.',
        },
        icon: ICONS.users,
      },
      {
        title: { en: 'Maps & reviews', vi: 'Bản đồ & đánh giá' },
        desc: {
          en: 'See every place on the map with details, photos and reviews.',
          vi: 'Xem mọi địa điểm trên bản đồ, kèm chi tiết, hình ảnh và đánh giá.',
        },
        icon: ICONS.pin,
      },
      {
        title: { en: 'On the go', vi: 'Mang theo bên mình' },
        desc: {
          en: 'Check in at the places you visit and keep your whole trip in your pocket.',
          vi: 'Check-in tại những nơi bạn ghé qua và giữ trọn cả chuyến đi trong túi.',
        },
        icon: ICONS.map,
      },
    ],
    screenshots: [
      { src: '/images/apps/ondetour/00-home.webp', alt: { en: 'OnDetour — discover local places', vi: 'OnDetour — khám phá địa điểm địa phương' } },
      { src: '/images/apps/ondetour/01-ai-planner.webp', alt: { en: 'OnDetour — AI trip planner', vi: 'OnDetour — lập kế hoạch chuyến đi bằng AI' } },
      { src: '/images/apps/ondetour/02-explore.webp', alt: { en: 'OnDetour — explore', vi: 'OnDetour — khám phá' } },
      { src: '/images/apps/ondetour/03-trip-timeline.webp', alt: { en: 'OnDetour — trip timeline', vi: 'OnDetour — dòng thời gian chuyến đi' } },
      { src: '/images/apps/ondetour/04-budget.webp', alt: { en: 'OnDetour — shared budget', vi: 'OnDetour — ngân sách dùng chung' } },
    ],
  },
  {
    slug: 'vocaberry',
    caseStudySlug: 'vocaberry',
    name: 'Vocaberry',
    tagline: {
      en: 'Learn English naturally — vocabulary, pronunciation, listening.',
      vi: 'Học tiếng Anh thật tự nhiên — từ vựng, phát âm, nghe.',
    },
    intro: {
      en: 'Vocaberry combines visual vocabulary learning, IPA pronunciation training and real-content listening so you build English the natural way — with AI speech feedback.',
      vi: 'Vocaberry kết hợp học từ vựng bằng hình ảnh, luyện phát âm theo IPA và nghe nội dung thật để bạn tiến bộ tiếng Anh một cách tự nhiên — cùng phản hồi giọng nói từ AI.',
    },
    logo: '/images/projects/vocaberry-logo.png',
    category: { en: 'Education · iOS', vi: 'Giáo dục · iOS' },
    accent: { from: '#ec4899', to: '#6366f1' },
    appStoreUrl: 'https://apps.apple.com/vn/app/vocaberry/id6757450822?l=vi',
    features: [
      {
        title: { en: 'Visual vocabulary', vi: 'Từ vựng qua hình ảnh' },
        desc: {
          en: 'Learn words with real images and categorized topics; smart reminders refresh them before you forget.',
          vi: 'Học từ qua hình ảnh thật và chủ đề được phân loại; nhắc nhở thông minh ôn lại đúng lúc trước khi bạn kịp quên.',
        },
        icon: ICONS.book,
      },
      {
        title: { en: 'Pronunciation training', vi: 'Luyện phát âm' },
        desc: {
          en: 'All 44 IPA phonemes with mouth-movement videos and AI pronunciation feedback.',
          vi: 'Đủ 44 âm IPA kèm video khẩu hình và phản hồi phát âm từ AI.',
        },
        icon: ICONS.mic,
        ai: true,
      },
      {
        title: { en: 'Shadowing practice', vi: 'Luyện nói nhại' },
        desc: {
          en: 'Practice with real speeches and conversations to improve rhythm and natural pronunciation.',
          vi: 'Luyện cùng bài nói và hội thoại thật để cải thiện nhịp điệu và phát âm tự nhiên.',
        },
        icon: ICONS.play,
      },
      {
        title: { en: 'Smart learning system', vi: 'Hệ thống học thông minh' },
        desc: {
          en: 'Streaks, progress stats and spaced review timed for long-term memory.',
          vi: 'Chuỗi ngày học, thống kê tiến độ và ôn tập ngắt quãng canh đúng nhịp để nhớ lâu.',
        },
        icon: ICONS.chart,
      },
      {
        title: { en: 'AI speech', vi: 'Giọng nói AI' },
        desc: {
          en: 'AI speech recognition and text-to-speech power the pronunciation training.',
          vi: 'Nhận diện giọng nói và đọc văn bản bằng AI làm nền cho phần luyện phát âm.',
        },
        icon: ICONS.sparkle,
        ai: true,
      },
      {
        title: { en: 'Sync across devices', vi: 'Đồng bộ giữa các thiết bị' },
        desc: {
          en: 'Login is optional — sign in any time to sync your progress everywhere.',
          vi: 'Đăng nhập là tuỳ chọn — đăng nhập bất cứ lúc nào để đồng bộ tiến độ ở mọi nơi.',
        },
        icon: ICONS.sync,
      },
    ],
    screenshots: [
      { src: '/images/apps/vocaberry/00-home.webp', alt: { en: 'Vocaberry — home', vi: 'Vocaberry — trang chủ' } },
      { src: '/images/apps/vocaberry/01-learn.webp', alt: { en: 'Vocaberry — vocabulary learning', vi: 'Vocaberry — học từ vựng' } },
      { src: '/images/apps/vocaberry/02-pronunciation.webp', alt: { en: 'Vocaberry — pronunciation training', vi: 'Vocaberry — luyện phát âm' } },
      { src: '/images/apps/vocaberry/03-practice.webp', alt: { en: 'Vocaberry — practice', vi: 'Vocaberry — luyện tập' } },
    ],
  },
]

export function getAppLanding(slug: string): AppLanding | undefined {
  return appLandings.find((a) => a.slug === slug)
}

export function getAppSlugs(): string[] {
  return appLandings.map((a) => a.slug)
}
