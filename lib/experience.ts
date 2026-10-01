// Work history. Company names stay as-is; titles, periods and bullet points are
// Localized so Experience.tsx can stay purely presentational.

import type { Localized } from '@/lib/i18n-content'

export interface ExperienceItem {
  company: string
  position: Localized
  period: Localized
  details: Localized<string[]>
}

export const experiences: ExperienceItem[] = [
  {
    company: 'VinUniversity — VLearn, AI Learning Platform',
    position: { en: 'Tech Lead', vi: 'Tech Lead' },
    period: { en: 'Jul 2026 — Present', vi: '07/2026 — Hiện tại' },
    details: {
      en: [
        'Lead system architecture and technical delivery across core learning workflows, AI integrations, SSO and production infrastructure.',
        'Drive production readiness with Vingroup architecture, security and infrastructure teams across technical reviews and deployment.',
      ],
      vi: [
        'Dẫn dắt kiến trúc hệ thống và triển khai kỹ thuật cho các luồng học tập cốt lõi, tích hợp AI, SSO và hạ tầng production.',
        'Cùng các đội kiến trúc, bảo mật và hạ tầng của Vingroup đưa hệ thống đạt chuẩn production, từ review kỹ thuật đến triển khai.',
      ],
    },
  },
  {
    company: 'GarageViet — Automotive Service Platform',
    position: { en: 'Full-Stack & Mobile Engineer', vi: 'Kỹ sư Full-Stack & Mobile' },
    period: { en: 'Feb 2025 — Present', vi: '02/2025 — Hiện tại' },
    details: {
      en: [
        '25K users · 1,000+ partner garages on a live automotive service marketplace.',
        'Built and shipped the mobile app and backend powering booking, quotation and service workflows.',
      ],
      vi: [
        '25K người dùng · 1.000+ gara đối tác trên một sàn dịch vụ ô tô đang vận hành.',
        'Xây dựng và phát hành app mobile cùng backend cho các luồng đặt lịch, báo giá và dịch vụ.',
      ],
    },
  },
  {
    company: 'EPOSO AI',
    position: { en: 'AI Engineer', vi: 'AI Engineer' },
    period: { en: 'Nov 2024 — Jan 2025', vi: '11/2024 — 01/2025' },
    details: {
      en: ['Built an edge AI voice system with an on-device speech pipeline designed for low-latency, offline operation.'],
      vi: ['Xây dựng hệ thống AI giọng nói chạy trên thiết bị edge, với pipeline xử lý tiếng nói ngay trên máy, độ trễ thấp và hoạt động offline.'],
    },
  },
  {
    company: 'OpenWay Vietnam',
    position: {
      en: 'Associate Implementation Engineer · Frontend & Mobile Developer',
      vi: 'Kỹ sư Triển khai · Lập trình viên Frontend & Mobile',
    },
    period: { en: 'Oct 2022 — Nov 2024', vi: '10/2022 — 11/2024' },
    details: {
      en: [
        'Increased face-verification onboarding completion by ~10% for DK Bank’s mobile banking app.',
        'Improved core banking experiences across foreign exchange, OTP authentication and ATM services for DK Bank.',
      ],
      vi: [
        'Tăng ~10% tỷ lệ hoàn tất onboarding xác thực khuôn mặt trên app ngân hàng di động DK Bank.',
        'Cải thiện các trải nghiệm ngân hàng cốt lõi của DK Bank: ngoại hối, xác thực OTP và dịch vụ ATM.',
      ],
    },
  },
]
