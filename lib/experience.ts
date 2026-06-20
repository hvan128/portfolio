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
    company: 'VinUniversity — AI in Actions (AI20K)',
    position: { en: 'Applied AI Builder', vi: 'Nhà phát triển AI ứng dụng' },
    period: { en: 'Apr 2026 — Present', vi: '04/2026 — Hiện tại' },
    details: {
      en: [
        'Building real AI products end-to-end — LLMs, OCR, agentic workflows, and production deployment.',
        'Shipped GradeAI, an AI handwritten-essay grader, during the program’s build phase.',
        'Rapid prototyping from idea to live product, with hands-on evaluation and iteration.',
      ],
      vi: [
        'Xây dựng sản phẩm AI thực thụ từ đầu đến cuối — LLM, OCR, quy trình agentic và triển khai lên production.',
        'Hoàn thiện GradeAI — công cụ chấm bài tự luận viết tay bằng AI — ngay trong giai đoạn build của chương trình.',
        'Dựng prototype nhanh từ ý tưởng đến sản phẩm chạy thật, trực tiếp đánh giá và cải tiến liên tục.',
      ],
    },
  },
  {
    company: 'Automotive Service Platform (GarageViet)',
    position: { en: 'Full-Stack Web & Mobile Developer', vi: 'Lập trình viên Web & Mobile Full-Stack' },
    period: { en: 'Feb 2025 — Present', vi: '02/2025 — Hiện tại' },
    details: {
      en: [
        'Built a two-sided marketplace mobile app in Flutter with Clean Architecture and Riverpod state management.',
        'Implemented booking workflows, quotation requests, and real-time push notifications via Firebase Cloud Messaging.',
        'Automated CI/CD with Fastlane and GitHub Actions to streamline mobile and backend releases.',
      ],
      vi: [
        'Xây dựng ứng dụng mobile dạng sàn hai chiều bằng Flutter, theo Clean Architecture và quản lý state với Riverpod.',
        'Triển khai luồng đặt lịch, xin báo giá và thông báo đẩy theo thời gian thực qua Firebase Cloud Messaging.',
        'Tự động hoá CI/CD bằng Fastlane và GitHub Actions để việc phát hành mobile lẫn backend trơn tru hơn.',
      ],
    },
  },
  {
    company: 'EPOSO AI',
    position: { en: 'Full-Stack Developer (Remote)', vi: 'Lập trình viên Full-Stack (Remote)' },
    period: { en: 'Nov 2024 — Jan 2025', vi: '11/2024 — 01/2025' },
    details: {
      en: [
        'Delivered the Energy Simulator web app that calculates cost savings for new HVAC models.',
        'Partnered with distributed teams on UX flows, Nest.js APIs, and Redux Toolkit state.',
        'Packaged the solution with Docker for parity from local development to production demos.',
      ],
      vi: [
        'Hoàn thiện web app Energy Simulator giúp tính toán mức tiết kiệm chi phí cho các dòng máy HVAC mới.',
        'Phối hợp cùng các nhóm ở nhiều nơi về luồng UX, API Nest.js và quản lý state bằng Redux Toolkit.',
        'Đóng gói giải pháp bằng Docker để môi trường local và bản demo production luôn đồng nhất.',
      ],
    },
  },
  {
    company: 'OpenWay Vietnam',
    position: { en: 'Associate Implementation Engineer', vi: 'Kỹ sư Triển khai' },
    period: { en: 'Jul 2024 — Nov 2024', vi: '07/2024 — 11/2024' },
    details: {
      en: [
        'Integrated Way4 ATM flows for withdrawals, balance inquiry, and fund transfers across test → prod.',
        'Mapped ISO-like routing between core banking services and Way4, ensuring compliance and resilience.',
        'Accelerated incident resolution by ≈45% through improved transaction-log tracing and documentation.',
      ],
      vi: [
        'Tích hợp các luồng ATM trên Way4 cho rút tiền, tra cứu số dư và chuyển khoản, từ môi trường test đến prod.',
        'Thiết lập định tuyến theo chuẩn ISO giữa các dịch vụ core banking và Way4, đảm bảo tuân thủ và ổn định.',
        'Rút ngắn khoảng 45% thời gian xử lý sự cố nhờ cải thiện việc lần vết log giao dịch và tài liệu hoá.',
      ],
    },
  },
  {
    company: 'OpenWay Vietnam',
    position: { en: 'Frontend Web & Hybrid Mobile Developer', vi: 'Lập trình viên Frontend Web & Mobile Hybrid' },
    period: { en: 'Oct 2022 — Jul 2024', vi: '10/2022 — 07/2024' },
    details: {
      en: [
        'Developed banking mobile apps and admin portals using React, React Native, Flutter, and Next.js.',
        'Built reusable UI for card management, transaction history, and role-based admin controls.',
        'Collaborated with backend, QA, and product to optimize GraphQL integrations and performance.',
      ],
      vi: [
        'Phát triển ứng dụng ngân hàng trên mobile và các cổng quản trị bằng React, React Native, Flutter và Next.js.',
        'Xây dựng các thành phần UI tái sử dụng cho quản lý thẻ, lịch sử giao dịch và phân quyền quản trị theo vai trò.',
        'Phối hợp với backend, QA và product để tối ưu tích hợp GraphQL và hiệu năng.',
      ],
    },
  },
]
