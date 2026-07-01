// Single source of truth for project data.
// Drives the home-page cards (Projects.tsx) and the case-study detail pages
// (app/[locale]/projects/[slug]). Keep all project copy here — components stay
// presentational. Prose fields are Localized<…>; structural fields (slug, tech,
// links, accent, images) are shared across locales.

import type { Localized } from '@/lib/i18n-content'

export type ProjectTag = 'AI' | 'Full-Stack' | 'Mobile' | 'Backend' | 'Web'

export type ProjectLinkKind = 'live' | 'web' | 'playstore' | 'appstore' | 'github' | 'demo' | 'facebook'

export interface ProjectLink {
  label: Localized
  href: string
  kind: ProjectLinkKind
}

export interface ProjectMetric {
  value: Localized
  label: Localized
}

export interface ProjectScreenshot {
  src: string
  alt: Localized
}

// Cover decides how the thumbnail renders:
// - 'browser': screenshot framed in a browser chrome (web apps)
// - 'mobile' : screenshot/icon framed in a phone (mobile apps)
// - 'gradient': branded gradient cover with the logo (fallback when no screenshot yet)
export interface ProjectCover {
  type: 'browser' | 'mobile' | 'gradient'
  image?: string // screenshot path under /public
  logo?: string // logo path under /public
}

export interface Project {
  slug: string
  name: string
  tagline: Localized
  tags: ProjectTag[]
  ai: boolean // surface the AI badge + glow
  featured: boolean // top grid vs. "more projects"
  period: Localized
  role: Localized
  // accent feeds the cover gradient + detail-page theming. Tailwind-friendly hex pair.
  accent: { from: string; to: string }
  summary: Localized
  problem: Localized
  solution: Localized
  impact: Localized
  highlights: Localized<string[]>
  metrics: ProjectMetric[]
  tech: string[]
  cover: ProjectCover
  screenshots: ProjectScreenshot[]
  links: ProjectLink[]
  demoUrl?: string
}

export const projects: Project[] = [
  {
    slug: 'keothom',
    name: 'hoantien.shop',
    tagline: {
      en: 'Shopee cashback for shoppers — on web and mobile.',
      vi: 'Hoàn tiền Shopee cho người mua sắm — trên cả web và mobile.',
    },
    tags: ['Full-Stack', 'Mobile'],
    ai: false,
    featured: true,
    period: { en: '2026', vi: '2026' },
    role: { en: 'Full-Stack & Mobile Engineer', vi: 'Kỹ sư Full-Stack & Mobile' },
    accent: { from: '#f97316', to: '#2563eb' },
    summary: {
      en: 'A cashback platform for Shopee shoppers, with a web app and a mobile app that share one backend — so features stay in sync.',
      vi: 'Nền tảng hoàn tiền cho người mua sắm Shopee, gồm web app và mobile app dùng chung một backend — nên tính năng luôn đồng bộ.',
    },
    problem: {
      en: 'Shoppers want cashback on their Shopee purchases and affiliates need a reliable platform to track activity and pay out — without a released app breaking on every change.',
      vi: 'Người mua muốn được hoàn tiền cho đơn Shopee, còn affiliate cần một nền tảng đáng tin để theo dõi hoạt động và chi trả — mà không làm hỏng ứng dụng đã phát hành mỗi lần cập nhật.',
    },
    solution: {
      en: 'Built the web app and a matching mobile app on a shared backend, with secure sign-in for both. Kept the API carefully versioned so updates never break the app already in users’ hands.',
      vi: 'Xây dựng web app và một mobile app tương ứng trên cùng một backend, với đăng nhập an toàn cho cả hai. Quản lý phiên bản API cẩn thận để mỗi bản cập nhật không làm hỏng ứng dụng đang nằm trong tay người dùng.',
    },
    impact: {
      en: 'Shoppers get the same cashback experience on web and mobile, and updates ship safely without breaking the live app.',
      vi: 'Người dùng có cùng một trải nghiệm hoàn tiền trên web lẫn mobile, và các bản cập nhật được phát hành an toàn mà không làm gián đoạn ứng dụng đang chạy.',
    },
    highlights: {
      en: [
        'A web app on a fast cloud database, with branded transactional emails.',
        'Secure sign-in for the website and dedicated endpoints for the mobile app.',
        'Careful API versioning so the released app never breaks on updates.',
        'A companion mobile app powered by the same backend.',
      ],
      vi: [
        'Web app trên cơ sở dữ liệu đám mây tốc độ cao, kèm email giao dịch mang nhận diện thương hiệu.',
        'Đăng nhập an toàn cho website và các endpoint riêng cho ứng dụng mobile.',
        'Quản lý phiên bản API kỹ lưỡng để ứng dụng đã phát hành không bao giờ hỏng khi cập nhật.',
        'Một ứng dụng mobile đồng hành, vận hành trên cùng backend.',
      ],
    },
    metrics: [
      { value: { en: '900+', vi: '900+' }, label: { en: 'shoppers', vi: 'người dùng' } },
      { value: { en: 'Web + App', vi: 'Web + App' }, label: { en: 'one experience', vi: 'một trải nghiệm' } },
      { value: { en: 'Secure', vi: 'Bảo mật' }, label: { en: 'sign-in everywhere', vi: 'đăng nhập ở mọi nơi' } },
      { value: { en: 'Reliable', vi: 'Đáng tin' }, label: { en: 'cashback & payouts', vi: 'hoàn tiền & rút tiền' } },
    ],
    tech: ['Next.js', 'Prisma', 'Neon Postgres', 'Auth.js', 'Flutter', 'React Email'],
    cover: {
      type: 'browser',
      image: '/images/projects/keothom-cover.png',
      logo: '/images/projects/keothom-logo.svg',
    },
    screenshots: [
      { src: '/images/apps/keothom/00-dashboard.webp', alt: { en: 'hoantien.shop — cashback wallet', vi: 'hoantien.shop — ví hoàn tiền' } },
      { src: '/images/apps/keothom/01-link.webp', alt: { en: 'hoantien.shop — paste a Shopee link for cashback', vi: 'hoantien.shop — dán link Shopee để nhận hoàn tiền' } },
      { src: '/images/apps/keothom/02-savedlinks.webp', alt: { en: 'hoantien.shop — saved links with sale reminders', vi: 'hoantien.shop — lưu link kèm nhắc giờ sale' } },
      { src: '/images/apps/keothom/03-flashsale.webp', alt: { en: 'hoantien.shop — flash sale deals', vi: 'hoantien.shop — săn flash sale hoàn tiền' } },
      { src: '/images/apps/keothom/04-orders.webp', alt: { en: 'hoantien.shop — order & cashback tracking', vi: 'hoantien.shop — theo dõi đơn & hoàn tiền' } },
      { src: '/images/apps/keothom/05-finance.webp', alt: { en: 'hoantien.shop — withdraw to bank', vi: 'hoantien.shop — rút tiền về ngân hàng' } },
    ],
    demoUrl: '/onboarding-demo.html',
    links: [
      { label: { en: 'Visit live', vi: 'Truy cập' }, href: 'https://hoantien.shop', kind: 'live' },
      { label: { en: 'App Store', vi: 'App Store' }, href: 'https://apps.apple.com/vn/app/hoantien-mua-s%E1%BA%AFm-ho%C3%A0n-ti%E1%BB%81n/id6782406077?l=vi', kind: 'appstore' },
    ],
  },
  {
    slug: 'gradeai',
    name: 'GradeAI',
    tagline: {
      en: 'Turn a stack of handwritten exams into a reviewable grade sheet in minutes.',
      vi: 'Biến cả tập bài thi viết tay thành bảng điểm có thể rà soát chỉ trong vài phút.',
    },
    tags: ['AI', 'Full-Stack'],
    ai: true,
    featured: true,
    period: { en: '2026 · AI in Actions (AI20K)', vi: '2026 · AI in Actions (AI20K)' },
    role: { en: 'Builder · VinUni "AI in Actions"', vi: 'Nhà phát triển · VinUni "AI in Actions"' },
    accent: { from: '#0ea5e9', to: '#14b8a6' },
    summary: {
      en: 'An AI grading assistant that reads handwritten Vietnamese essay exams, drafts scores against a rubric, and hands teachers a reviewable grade sheet.',
      vi: 'Trợ lý chấm bài bằng AI: đọc bài thi tự luận viết tay tiếng Việt, chấm nháp theo ba-rem rồi đưa cho giáo viên một bảng điểm sẵn sàng để rà soát.',
    },
    problem: {
      en: 'Teachers spend hours manually grading handwritten essay exams. Turnaround is slow and scoring drifts in consistency across a large class set.',
      vi: 'Giáo viên mất hàng giờ chấm tay từng bài tự luận. Trả điểm thì chậm, mà độ nhất quán lại dễ lệch khi chấm cả một lớp đông.',
    },
    solution: {
      en: 'Built the full flow: the app cleans up photographed exam pages, reads the handwriting, and uses AI to draft a score against the teacher’s rubric. A review screen lets the teacher check or adjust every grade before it’s final.',
      vi: 'Xây dựng trọn luồng: ứng dụng làm sạch ảnh chụp bài thi, đọc chữ viết tay rồi dùng AI chấm nháp theo ba-rem của giáo viên. Màn hình rà soát cho phép giáo viên kiểm tra hoặc chỉnh từng điểm trước khi chốt.',
    },
    impact: {
      en: 'Cuts grading of a full class set from hours to minutes while keeping the teacher in control — built and shipped during the VinUni AI in Actions (AI20K) build phase.',
      vi: 'Rút thời gian chấm cả lớp từ hàng giờ xuống còn vài phút mà giáo viên vẫn là người quyết định — xây dựng và đưa vào dùng ngay trong giai đoạn build của chương trình VinUni AI in Actions (AI20K).',
    },
    highlights: {
      en: [
        'Reads messy, photographed handwriting — even at awkward angles or lighting.',
        'AI drafts a grade against the teacher’s rubric, with the teacher always in control.',
        'Multi-tenant design with secure accounts and storage — ready to onboard schools.',
        'Built end-to-end and live at gradeai.site, developed during the AI20K program.',
      ],
      vi: [
        'Đọc được chữ viết tay lộn xộn từ ảnh chụp — kể cả khi góc nghiêng hay thiếu sáng.',
        'AI chấm nháp theo ba-rem của giáo viên, còn quyền quyết định luôn thuộc về giáo viên.',
        'Thiết kế đa người dùng với tài khoản và lưu trữ an toàn — sẵn sàng đưa vào các trường.',
        'Hoàn thiện đầu-cuối và chạy thật tại gradeai.site, phát triển trong chương trình AI20K.',
      ],
    },
    metrics: [
      { value: { en: 'Hours → min', vi: 'Giờ → phút' }, label: { en: 'grading per class', vi: 'chấm mỗi lớp' } },
      { value: { en: 'Handwriting', vi: 'Chữ viết tay' }, label: { en: 'reads VN essays', vi: 'đọc bài tự luận tiếng Việt' } },
      { value: { en: 'Rubric', vi: 'Ba-rem' }, label: { en: 'AI scoring', vi: 'AI chấm điểm' } },
      { value: { en: 'Live', vi: 'Đang chạy' }, label: { en: 'gradeai.site', vi: 'gradeai.site' } },
    ],
    tech: ['Next.js', 'Supabase', 'OCR', 'LLM Grading', 'PostgreSQL', 'Tailwind CSS'],
    cover: {
      type: 'browser',
      image: '/images/projects/gradeai-cover.png',
      logo: '/images/projects/gradeai-logo.png',
    },
    screenshots: [],
    links: [{ label: { en: 'Visit live', vi: 'Truy cập' }, href: 'https://gradeai.site', kind: 'live' }],
  },
  {
    slug: 'garageviet',
    name: 'GarageViet',
    tagline: {
      en: 'An app that connects car owners with trusted garages.',
      vi: 'Ứng dụng kết nối chủ xe với những gara uy tín.',
    },
    tags: ['Full-Stack', 'Mobile'],
    ai: false,
    featured: true,
    period: { en: '2025 — Present', vi: '2025 — Hiện tại' },
    role: { en: 'Full-Stack & Mobile Engineer', vi: 'Kỹ sư Full-Stack & Mobile' },
    accent: { from: '#2563eb', to: '#0ea5e9' },
    summary: {
      en: 'An app that connects car owners with trusted garages — owners book services and request quotes, garages manage their jobs. Delivered across mobile, web, and a backend.',
      vi: 'Ứng dụng kết nối chủ xe với những gara uy tín — chủ xe đặt lịch dịch vụ và xin báo giá, gara quản lý công việc của mình. Triển khai trọn vẹn trên mobile, web và backend.',
    },
    problem: {
      en: 'Car owners and garages lack a streamlined way to book services, exchange quotations, and track service history — communication is fragmented and slow.',
      vi: 'Chủ xe và gara thiếu một cách làm gọn gàng để đặt lịch, trao đổi báo giá và theo dõi lịch sử bảo dưỡng — việc liên lạc thì rời rạc và chậm chạp.',
    },
    solution: {
      en: 'Built the mobile app with a clean, maintainable architecture for booking and quote requests, with instant push notifications. Added a web client and a containerized backend, plus automated releases for both the app and the server.',
      vi: 'Xây dựng ứng dụng mobile theo kiến trúc gọn gàng, dễ bảo trì cho luồng đặt lịch và xin báo giá, kèm thông báo đẩy tức thì. Bổ sung bản web và một backend đóng gói container, cùng quy trình phát hành tự động cho cả ứng dụng lẫn máy chủ.',
    },
    impact: {
      en: 'Connects owners and garages seamlessly with faster bookings and 24/7 availability through the mobile app.',
      vi: 'Kết nối chủ xe và gara liền mạch, đặt lịch nhanh hơn và phục vụ 24/7 qua ứng dụng mobile.',
    },
    highlights: {
      en: [
        'A maintainable mobile app built to scale as features grow.',
        'Booking and quote flows with instant push notifications.',
        'A containerized backend with car-model-aware sign-up and validation.',
        'Automated releases for both the app and the server.',
      ],
      vi: [
        'Ứng dụng mobile dễ bảo trì, sẵn sàng mở rộng khi tính năng nhiều dần lên.',
        'Luồng đặt lịch và báo giá kèm thông báo đẩy tức thì.',
        'Backend đóng gói container, đăng ký và kiểm tra dữ liệu theo từng dòng xe.',
        'Tự động hoá phát hành cho cả ứng dụng lẫn máy chủ.',
      ],
    },
    metrics: [
      { value: { en: '5,000+', vi: '5,000+' }, label: { en: 'downloads', vi: 'lượt tải' } },
      { value: { en: '400+', vi: '400+' }, label: { en: 'partner garages', vi: 'gara đối tác' } },
      { value: { en: '3,000+', vi: '3,000+' }, label: { en: 'booking & quote requests', vi: 'lượt đặt & báo giá' } },
      { value: { en: 'Realtime', vi: 'Thời gian thực' }, label: { en: 'push notifications', vi: 'thông báo đẩy' } },
    ],
    tech: ['Flutter', 'Riverpod', 'Flask', 'Docker', 'Firebase FCM', 'Next.js', 'REST API'],
    cover: {
      type: 'browser',
      image: '/images/projects/garaviet-cover.png',
      logo: '/images/projects/garaviet-logo.png',
    },
    // (slug 'garageviet' — web-cover asset keeps the legacy 'garaviet-' prefix)
    screenshots: [
      { src: '/images/apps/garageviet/00.webp', alt: { en: 'GarageViet — find a garage', vi: 'GarageViet — tìm gara' } },
      { src: '/images/apps/garageviet/01.webp', alt: { en: 'GarageViet — garage profile', vi: 'GarageViet — hồ sơ gara' } },
      { src: '/images/apps/garageviet/02.webp', alt: { en: 'GarageViet — booking', vi: 'GarageViet — đặt lịch' } },
      { src: '/images/apps/garageviet/03.webp', alt: { en: 'GarageViet — quotation', vi: 'GarageViet — báo giá' } },
    ],
    links: [
      { label: { en: 'Visit website', vi: 'Xem website' }, href: 'https://garageviet.vn', kind: 'web' },
      { label: { en: 'App Store', vi: 'App Store' }, href: 'https://apps.apple.com/vn/app/garage-vi%E1%BB%87t/id6754981981?l=vi', kind: 'appstore' },
      { label: { en: 'Google Play', vi: 'Google Play' }, href: 'https://play.google.com/store/apps/details?id=com.garageviet.app', kind: 'playstore' },
      { label: { en: 'Facebook', vi: 'Facebook' }, href: 'https://www.facebook.com/garageviet.vn', kind: 'facebook' },
    ],
  },
  {
    slug: 'vcareer',
    name: 'VCareer',
    tagline: {
      en: 'AI mock interviews you actually talk to — plus instant AI-built portfolios.',
      vi: 'Luyện phỏng vấn với AI bằng giọng nói thật — và portfolio do AI dựng chỉ trong tích tắc.',
    },
    tags: ['AI', 'Full-Stack'],
    ai: true,
    featured: true,
    period: { en: '2026 — Present', vi: '2026 — Hiện tại' },
    role: {
      en: 'Full-Stack Engineer · VinUni CECS flagship',
      vi: 'Kỹ sư Full-Stack · Dự án chủ lực VinUni CECS',
    },
    accent: { from: '#6366f1', to: '#22d3ee' },
    summary: {
      en: 'A platform where candidates rehearse spoken interviews with a voice AI that listens and replies in real time, then turns their profile into a polished portfolio site — automatically.',
      vi: 'Nền tảng giúp ứng viên luyện phỏng vấn bằng giọng nói cùng một trợ lý AI biết lắng nghe và đối đáp theo thời gian thực, rồi tự động biến hồ sơ của họ thành một trang portfolio chỉn chu.',
    },
    problem: {
      en: 'Students rehearse interviews with no realistic, spoken feedback, and building a portfolio to showcase their work is slow and intimidating — so they walk into real interviews under-prepared.',
      vi: 'Sinh viên luyện phỏng vấn mà chẳng có phản hồi thực tế bằng lời, còn việc dựng một portfolio để khoe năng lực thì vừa chậm vừa ngại — nên bước vào phỏng vấn thật trong tâm thế chưa sẵn sàng.',
    },
    solution: {
      en: 'Built the live voice-interview experience so candidates can speak naturally and get instant AI feedback, plus an AI flow that generates a ready-to-share portfolio from their profile. Behind it: a modern web app, a fast cloud database, secure sign-in with Google, and cloud storage for interview audio.',
      vi: 'Xây dựng trải nghiệm phỏng vấn bằng giọng nói trực tiếp để ứng viên nói thật tự nhiên và nhận phản hồi tức thì từ AI, cùng một luồng AI tạo portfolio sẵn sàng chia sẻ ngay từ hồ sơ. Phía sau là một web app hiện đại, cơ sở dữ liệu đám mây tốc độ cao, đăng nhập an toàn bằng Google và lưu trữ âm thanh phỏng vấn trên đám mây.',
    },
    impact: {
      en: 'Candidates practice spoken interviews with instant AI feedback and ship a portfolio in minutes instead of days — the flagship MVP for VinUni CECS.',
      vi: 'Ứng viên luyện phỏng vấn nói với phản hồi AI tức thì và hoàn thiện portfolio trong vài phút thay vì vài ngày — sản phẩm MVP chủ lực của VinUni CECS.',
    },
    highlights: {
      en: [
        'A voice AI that listens and responds in real time, so interviews feel like a real conversation.',
        'A fast, globally-available database that keeps the app responsive everywhere.',
        'Secure sign-in with email and Google, including connecting a calendar for scheduling.',
        'An AI generator that turns a profile into a polished portfolio site in one step.',
      ],
      vi: [
        'Trợ lý AI lắng nghe và đáp lời theo thời gian thực, khiến buổi phỏng vấn như một cuộc trò chuyện thật.',
        'Cơ sở dữ liệu nhanh, phủ toàn cầu, giúp ứng dụng luôn mượt ở khắp mọi nơi.',
        'Đăng nhập an toàn bằng email và Google, kèm kết nối lịch để đặt hẹn.',
        'Bộ tạo bằng AI biến hồ sơ thành một trang portfolio chỉn chu chỉ trong một bước.',
      ],
    },
    metrics: [
      { value: { en: '120+', vi: '120+' }, label: { en: 'students practiced', vi: 'sinh viên luyện tập' } },
      { value: { en: 'Realtime', vi: 'Thời gian thực' }, label: { en: 'voice AI mock interviews', vi: 'phỏng vấn thử AI giọng nói' } },
      { value: { en: 'Flagship MVP', vi: 'MVP chủ lực' }, label: { en: 'for VinUni CECS', vi: 'cho VinUni CECS' } },
      { value: { en: '1-click', vi: '1 chạm' }, label: { en: 'AI portfolio', vi: 'portfolio bằng AI' } },
    ],
    tech: [
      'Next.js 16',
      'TypeScript',
      'GPT-4o Realtime',
      'WebRTC / LiveKit',
      'Neon Postgres',
      'Drizzle ORM',
      'Better Auth',
      'AWS S3 / R2',
      'Resend',
      'Tailwind CSS',
    ],
    cover: {
      type: 'browser',
      image: '/images/projects/vcareer-cover.png',
      logo: '/images/projects/vcareer-logo.svg',
    },
    screenshots: [],
    links: [{ label: { en: 'Visit live', vi: 'Truy cập' }, href: 'https://topportfolio-sage.vercel.app/vi', kind: 'live' }],
  },
  {
    slug: 'dk-bank',
    name: 'DK Bank',
    tagline: {
      en: 'A digital bank for Bhutan — mobile banking and admin, built to scale.',
      vi: 'Ngân hàng số cho Bhutan — mobile banking và quản trị, xây dựng để mở rộng.',
    },
    tags: ['Full-Stack', 'Mobile'],
    ai: false,
    featured: false,
    period: { en: '2022 — 2024', vi: '2022 — 2024' },
    role: { en: 'Frontend & Mobile Developer · OpenWay', vi: 'Lập trình viên Frontend & Mobile · OpenWay' },
    accent: { from: '#13294b', to: '#2563eb' },
    summary: {
      en: 'Digital Kidu (DK Bank) is one of Bhutan’s pioneering digital banks. I built the customer-facing banking apps and internal admin portals across React, React Native, Flutter and Next.js.',
      vi: 'Digital Kidu (DK Bank) là một trong những ngân hàng số tiên phong của Bhutan. Mình xây dựng các ứng dụng ngân hàng cho khách hàng và cổng quản trị nội bộ, dùng React, React Native, Flutter và Next.js.',
    },
    problem: {
      en: 'Customers needed a consistent, dependable banking experience across devices, while staff needed fast internal tools — and the apps had to be reliable enough for real money.',
      vi: 'Khách hàng cần một trải nghiệm ngân hàng nhất quán, đáng tin trên mọi thiết bị, còn nhân viên cần công cụ nội bộ nhanh gọn — và mọi ứng dụng phải đủ tin cậy để xử lý tiền thật.',
    },
    solution: {
      en: 'Built reusable UI for the mobile and web apps and optimized them with GraphQL, delivering a consistent experience across every channel, plus admin portals for back-office operations.',
      vi: 'Xây dựng các thành phần UI tái sử dụng cho ứng dụng mobile và web, tối ưu bằng GraphQL để mang lại trải nghiệm nhất quán trên mọi kênh, cùng các cổng quản trị cho nghiệp vụ back-office.',
    },
    impact: {
      en: 'Shipped a live digital bank used by real customers in Bhutan, with noticeably faster apps and smoother back-office tools.',
      vi: 'Đưa vào vận hành một ngân hàng số thực thụ, có khách hàng thật tại Bhutan, với ứng dụng nhanh hơn rõ rệt và công cụ back-office mượt mà hơn.',
    },
    highlights: {
      en: [
        'Customer apps for sign-up, transfers, eATM and account management.',
        'Reusable UI for card management, transaction history and admin controls.',
        'Performance work that cut re-renders and load time by around 40%.',
        'Admin portals for faster back-office operations.',
      ],
      vi: [
        'Ứng dụng khách hàng cho đăng ký, chuyển khoản, eATM và quản lý tài khoản.',
        'Thành phần UI tái sử dụng cho quản lý thẻ, lịch sử giao dịch và bảng điều khiển quản trị.',
        'Tối ưu hiệu năng, giảm khoảng 40% số lần re-render và thời gian tải.',
        'Cổng quản trị giúp nghiệp vụ back-office nhanh hơn.',
      ],
    },
    metrics: [
      { value: { en: 'Live', vi: 'Đang vận hành' }, label: { en: 'digital bank in Bhutan', vi: 'ngân hàng số tại Bhutan' } },
      { value: { en: '-40%', vi: '-40%' }, label: { en: 'app load time', vi: 'thời gian tải ứng dụng' } },
      { value: { en: '3×', vi: '3×' }, label: { en: 'faster admin ops', vi: 'nghiệp vụ quản trị nhanh hơn' } },
      { value: { en: 'Omni-channel', vi: 'Đa kênh' }, label: { en: 'consistent UI', vi: 'giao diện nhất quán' } },
    ],
    tech: ['React', 'React Native', 'Flutter', 'Next.js', 'GraphQL'],
    cover: { type: 'mobile', logo: '/images/projects/dkbank-logo.png' },
    screenshots: [
      { src: '/images/apps/dkbank/01.webp', alt: { en: 'DK Bank — home', vi: 'DK Bank — trang chủ' } },
      { src: '/images/apps/dkbank/02.webp', alt: { en: 'DK Bank — accounts', vi: 'DK Bank — tài khoản' } },
      { src: '/images/apps/dkbank/03.webp', alt: { en: 'DK Bank — transfers', vi: 'DK Bank — chuyển khoản' } },
    ],
    links: [
      { label: { en: 'App Store', vi: 'App Store' }, href: 'https://apps.apple.com/vn/app/dk-bank/id6462849899?l=vi', kind: 'appstore' },
      { label: { en: 'Google Play', vi: 'Google Play' }, href: 'https://play.google.com/store/apps/details?id=bt.digitalkidu.DigitalKiduApp', kind: 'playstore' },
    ],
  },
  {
    slug: 'ondetour',
    name: 'OnDetour',
    tagline: {
      en: 'Plan trips, split budgets and travel together — a social trip planner.',
      vi: 'Lên kế hoạch chuyến đi, chia chi phí và cùng nhau khám phá — một app du lịch mang tính cộng đồng.',
    },
    tags: ['Mobile'],
    ai: false,
    featured: false,
    period: { en: '2026 · Released', vi: '2026 · Đã phát hành' },
    role: { en: 'Mobile Engineer (Flutter)', vi: 'Kỹ sư Mobile (Flutter)' },
    accent: { from: '#10b981', to: '#0ea5e9' },
    summary: {
      en: 'A travel companion app for planning trips, booking activities, splitting budgets and sharing the journey — built in Flutter and released to production.',
      vi: 'Ứng dụng đồng hành cho mỗi chuyến đi: lên lịch trình, đặt hoạt động, chia chi phí và chia sẻ hành trình — viết bằng Flutter và đã phát hành chính thức.',
    },
    problem: {
      en: 'Planning a group trip is scattered across chat threads, notes and spreadsheets, so budgets and plans drift out of sync.',
      vi: 'Lên kế hoạch cho một chuyến đi nhóm thường rải rác khắp các đoạn chat, ghi chú và bảng tính, khiến ngân sách và lịch trình lệch nhau lúc nào không hay.',
    },
    solution: {
      en: 'Built the app with collaborative trips, budget splitting, activity booking, a social feed, maps and reviews — and shipped it to the App Store, privacy policy and all.',
      vi: 'Xây dựng ứng dụng với chuyến đi chung, chia chi phí, đặt hoạt động, bảng tin cộng đồng, bản đồ và đánh giá — rồi đưa lên App Store, đầy đủ cả chính sách bảo mật.',
    },
    impact: {
      en: 'One place to plan, book, budget and share a trip with friends.',
      vi: 'Một nơi duy nhất để lên lịch, đặt chỗ, tính chi phí và chia sẻ chuyến đi cùng bạn bè.',
    },
    highlights: {
      en: [
        'Collaborative trips with shared budgets and activity booking.',
        'Social feed, in-app maps, reviews and trip notes.',
        'Shipped to the App Store with a full store listing and assets.',
      ],
      vi: [
        'Chuyến đi chung với ngân sách dùng chung và đặt hoạt động.',
        'Bảng tin cộng đồng, bản đồ ngay trong app, đánh giá và ghi chú chuyến đi.',
        'Đã lên App Store với trang giới thiệu và bộ tài nguyên đầy đủ.',
      ],
    },
    metrics: [
      { value: { en: '300+', vi: '300+' }, label: { en: 'travelers', vi: 'người dùng' } },
      { value: { en: 'Released', vi: 'Đã phát hành' }, label: { en: 'in production', vi: 'đang chạy chính thức' } },
      { value: { en: 'Collaborative', vi: 'Cộng tác' }, label: { en: 'shared trips', vi: 'chuyến đi chung' } },
    ],
    tech: ['Flutter', 'Google Maps', 'Firebase', 'REST API'],
    cover: { type: 'mobile', logo: '/images/projects/ondetour-logo.png' },
    screenshots: [
      { src: '/images/apps/ondetour/01-ai-planner.webp', alt: { en: 'OnDetour — AI trip planner', vi: 'OnDetour — lập kế hoạch chuyến đi bằng AI' } },
      { src: '/images/apps/ondetour/03-trip-timeline.webp', alt: { en: 'OnDetour — trip timeline', vi: 'OnDetour — dòng thời gian chuyến đi' } },
      { src: '/images/apps/ondetour/04-budget.webp', alt: { en: 'OnDetour — shared budget', vi: 'OnDetour — ngân sách dùng chung' } },
    ],
    links: [
      { label: { en: 'Landing page', vi: 'Trang giới thiệu' }, href: '/apps/ondetour', kind: 'live' },
      { label: { en: 'App Store', vi: 'App Store' }, href: 'https://apps.apple.com/vn/app/ondetour/id6775022752?l=vi', kind: 'appstore' },
    ],
  },
  {
    slug: 'vocaberry',
    name: 'Vocaberry',
    tagline: {
      en: 'Speak a new language — pronunciation, shadowing and AI conversation.',
      vi: 'Nói một ngôn ngữ mới — luyện phát âm, nói nhại và hội thoại cùng AI.',
    },
    tags: ['Mobile', 'AI'],
    ai: true,
    featured: false,
    period: { en: '2026', vi: '2026' },
    role: { en: 'Mobile Engineer (Flutter & React Native)', vi: 'Kỹ sư Mobile (Flutter & React Native)' },
    accent: { from: '#ec4899', to: '#6366f1' },
    summary: {
      en: 'A speaking-first English app — pronunciation scoring, shadowing with real videos, AI conversation, a visual dictionary, and smart review that times itself to how you learn.',
      vi: 'Ứng dụng học tiếng Anh đặt việc nói lên hàng đầu — chấm điểm phát âm, luyện nói nhại với video thật, hội thoại cùng AI, từ điển hình ảnh và ôn tập thông minh tự điều chỉnh theo cách bạn học.',
    },
    problem: {
      en: 'Learners struggle to practice speaking and rarely get feedback on their pronunciation, so confidence stalls.',
      vi: 'Người học khó luyện nói và hiếm khi nhận được phản hồi về phát âm, nên mãi chẳng tự tin lên được.',
    },
    solution: {
      en: 'Built the app across two platforms with pronunciation practice, shadowing, AI conversation, a visual dictionary and smart review — plus optional sign-in to sync progress and in-app purchases.',
      vi: 'Xây dựng ứng dụng trên hai nền tảng với luyện phát âm, nói nhại, hội thoại AI, từ điển hình ảnh và ôn tập thông minh — kèm đăng nhập tuỳ chọn để đồng bộ tiến độ và mua hàng trong ứng dụng.',
    },
    impact: {
      en: 'Speaking-first English practice with real feedback, right in your pocket.',
      vi: 'Luyện tiếng Anh ưu tiên kỹ năng nói, có phản hồi thật, gọn trong túi của bạn.',
    },
    highlights: {
      en: [
        'Pronunciation scoring on all 44 sounds, with mouth-movement videos and AI feedback.',
        'Shadowing and AI conversation practice for natural, confident speaking.',
        'Optional sign-in to sync progress across devices, plus in-app purchases.',
      ],
      vi: [
        'Chấm điểm phát âm cho cả 44 âm, kèm video khẩu hình và phản hồi từ AI.',
        'Luyện nói nhại và hội thoại với AI để nói tự nhiên, tự tin hơn.',
        'Đăng nhập tuỳ chọn để đồng bộ tiến độ giữa các thiết bị, kèm mua hàng trong ứng dụng.',
      ],
    },
    metrics: [
      { value: { en: '400+', vi: '400+' }, label: { en: 'learners', vi: 'người học' } },
      { value: { en: 'Speaking-first', vi: 'Ưu tiên nói' }, label: { en: 'pronunciation + shadowing', vi: 'phát âm + nói nhại' } },
      { value: { en: 'AI chat', vi: 'Hội thoại AI' }, label: { en: 'conversation practice', vi: 'luyện giao tiếp' } },
    ],
    tech: ['Flutter', 'React Native', 'AI Speech', 'Apple Sign-In', 'In-app Payments'],
    cover: { type: 'mobile', logo: '/images/projects/vocaberry-logo.png' },
    screenshots: [
      { src: '/images/apps/vocaberry/01-learn.webp', alt: { en: 'Vocaberry — vocabulary learning', vi: 'Vocaberry — học từ vựng' } },
      { src: '/images/apps/vocaberry/02-pronunciation.webp', alt: { en: 'Vocaberry — pronunciation training', vi: 'Vocaberry — luyện phát âm' } },
      { src: '/images/apps/vocaberry/03-practice.webp', alt: { en: 'Vocaberry — practice', vi: 'Vocaberry — luyện tập' } },
    ],
    links: [
      { label: { en: 'Landing page', vi: 'Trang giới thiệu' }, href: '/apps/vocaberry', kind: 'live' },
      { label: { en: 'App Store', vi: 'App Store' }, href: 'https://apps.apple.com/vn/app/vocaberry/id6757450822?l=vi', kind: 'appstore' },
    ],
  },
  {
    slug: 'energy-simulator',
    name: 'Energy Simulator',
    tagline: {
      en: 'A web app that shows customers their energy savings in real time.',
      vi: 'Web app cho khách hàng thấy ngay mức tiết kiệm năng lượng theo thời gian thực.',
    },
    tags: ['Full-Stack', 'Web'],
    ai: false,
    featured: false,
    period: { en: '2024 — 2025', vi: '2024 — 2025' },
    role: { en: 'Full-Stack Developer · EPOSO AI', vi: 'Lập trình viên Full-Stack · EPOSO AI' },
    accent: { from: '#0ea5e9', to: '#22d3ee' },
    summary: {
      en: 'A responsive web app that lets sales teams calculate and demonstrate energy savings on the spot, kept in sync across devices.',
      vi: 'Một web app responsive giúp đội sales tính toán và trình bày mức tiết kiệm năng lượng ngay tại chỗ, luôn đồng bộ trên mọi thiết bị.',
    },
    problem: {
      en: 'Sales teams had no easy, shared way to calculate and show customers their energy savings — which slowed down decisions in the field.',
      vi: 'Đội sales không có một công cụ chung, dễ dùng để tính và trình bày mức tiết kiệm cho khách — khiến quyết định ngoài hiện trường bị chậm lại.',
    },
    solution: {
      en: 'Built a responsive web app that runs the savings calculations instantly and keeps them in sync across devices, packaged so demos work reliably anywhere.',
      vi: 'Xây dựng một web app responsive tính toán mức tiết kiệm tức thì và giữ đồng bộ trên các thiết bị, đóng gói để buổi demo chạy ổn định ở bất cứ đâu.',
    },
    impact: {
      en: 'Gave remote sales teams accurate numbers on the go — helping lift conversion and speed up customer decisions.',
      vi: 'Mang lại cho đội sales từ xa những con số chính xác mọi lúc — góp phần tăng tỷ lệ chốt và rút ngắn thời gian khách ra quyết định.',
    },
    highlights: {
      en: [
        'Instant, real-time energy-savings calculations.',
        'State synced across devices for a consistent demo.',
        'Packaged for reliable demos from laptop to production.',
      ],
      vi: [
        'Tính toán mức tiết kiệm năng lượng tức thì, theo thời gian thực.',
        'Trạng thái đồng bộ giữa các thiết bị để buổi demo luôn nhất quán.',
        'Đóng gói để demo chạy ổn định, từ laptop đến môi trường production.',
      ],
    },
    metrics: [
      { value: { en: '+30%', vi: '+30%' }, label: { en: 'conversion rate', vi: 'tỷ lệ chuyển đổi' } },
      { value: { en: 'Realtime', vi: 'Thời gian thực' }, label: { en: 'savings calculations', vi: 'tính toán tiết kiệm' } },
      { value: { en: 'Synced', vi: 'Đồng bộ' }, label: { en: 'across devices', vi: 'trên mọi thiết bị' } },
    ],
    tech: ['Next.js', 'Tailwind CSS', 'Redux Toolkit', 'NestJS', 'MySQL', 'Docker'],
    cover: { type: 'gradient' },
    screenshots: [],
    links: [],
  },
  {
    slug: 'way4-atm',
    name: 'Way4 ATM Payments',
    tagline: {
      en: 'ATM transaction flows on the Way4 payment platform — built for reliability.',
      vi: 'Luồng giao dịch ATM trên nền tảng thanh toán Way4 — xây dựng để vận hành đáng tin cậy.',
    },
    tags: ['Backend'],
    ai: false,
    featured: false,
    period: { en: '2024', vi: '2024' },
    role: { en: 'Associate Implementation Engineer · OpenWay', vi: 'Kỹ sư Triển khai · OpenWay' },
    accent: { from: '#475569', to: '#2563eb' },
    summary: {
      en: 'Integrated and troubleshot ATM transaction flows between core banking and the Way4 payment platform, across test and production.',
      vi: 'Tích hợp và xử lý sự cố cho các luồng giao dịch ATM giữa hệ thống core banking và nền tảng thanh toán Way4, trên cả môi trường test lẫn production.',
    },
    problem: {
      en: 'ATM transaction processing was slow to debug — complex routing between core banking and the Way4 platform caused delays in financial operations.',
      vi: 'Việc xử lý giao dịch ATM rất khó debug — định tuyến phức tạp giữa core banking và nền tảng Way4 gây chậm trễ cho các nghiệp vụ tài chính.',
    },
    solution: {
      en: 'Configured ISO-style transaction routing and added thorough logging so issues could be isolated and resolved much faster.',
      vi: 'Cấu hình định tuyến giao dịch theo chuẩn ISO và bổ sung log chi tiết để khoanh vùng và xử lý sự cố nhanh hơn hẳn.',
    },
    impact: {
      en: 'Cut issue-isolation time by about 45% and kept transactions compliant across every environment.',
      vi: 'Giảm khoảng 45% thời gian khoanh vùng sự cố và giữ cho giao dịch tuân thủ chuẩn trên mọi môi trường.',
    },
    highlights: {
      en: [
        'ISO-style routing between core banking and the Way4 platform.',
        'Detailed transaction logging for fast issue isolation.',
        'Validated flows from test all the way to production.',
      ],
      vi: [
        'Định tuyến theo chuẩn ISO giữa core banking và nền tảng Way4.',
        'Ghi log giao dịch chi tiết để khoanh vùng sự cố nhanh chóng.',
        'Kiểm thử các luồng từ môi trường test cho tới tận production.',
      ],
    },
    metrics: [
      { value: { en: '-45%', vi: '-45%' }, label: { en: 'issue isolation time', vi: 'thời gian khoanh vùng sự cố' } },
      { value: { en: 'Compliant', vi: 'Tuân thủ' }, label: { en: 'across environments', vi: 'trên mọi môi trường' } },
      { value: { en: 'Test → Prod', vi: 'Test → Prod' }, label: { en: 'end-to-end', vi: 'đầu cuối' } },
    ],
    tech: ['Way4', 'Oracle', 'PL/SQL', 'ISO 8583'],
    cover: { type: 'gradient' },
    screenshots: [],
    links: [],
  },
]

export const featuredProjects = projects.filter((p) => p.featured)
export const moreProjects = projects.filter((p) => !p.featured)

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}

export function getProjectSlugs(): string[] {
  return projects.map((p) => p.slug)
}
