// Education history. School names stay as-is; program, period, status and bullet
// points are Localized so Education.tsx can stay purely presentational.

import type { Localized } from '@/lib/i18n-content'

export interface EducationItem {
  school: string
  program: Localized
  period: Localized
  status?: Localized
  highlights: Localized<string[]>
  ai?: boolean
}

export const education: EducationItem[] = [
  {
    school: 'VinUniversity',
    program: {
      en: '“AI in Actions” (AI20K) — Applied AI Program',
      vi: '“AI in Actions” (AI20K) — Chương trình AI ứng dụng',
    },
    period: { en: 'Apr 2026 — Present', vi: '04/2026 — Hiện tại' },
    status: { en: 'In progress', vi: 'Đang học' },
    ai: true,
    highlights: {
      en: [
        'Building real AI products end-to-end: LLMs, OCR, agentic workflows, and production deployment.',
        'Shipped GradeAI — an AI handwritten-essay grader — during the program’s build phase.',
        'Hands-on with rapid prototyping, evaluation, and going from idea to live SaaS.',
      ],
      vi: [
        'Xây dựng sản phẩm AI thực thụ từ đầu đến cuối: LLM, OCR, quy trình agentic và triển khai lên production.',
        'Hoàn thiện GradeAI — công cụ chấm bài tự luận viết tay bằng AI — ngay trong giai đoạn build của chương trình.',
        'Trực tiếp dựng prototype nhanh, đánh giá và đưa ý tưởng thành một sản phẩm SaaS chạy thật.',
      ],
    },
  },
  {
    school: 'Hanoi University of Science and Technology',
    program: {
      en: 'B.S. Computer Science · Graduation Grade: Very Good',
      vi: 'Cử nhân Khoa học Máy tính · Xếp loại tốt nghiệp: Giỏi',
    },
    period: { en: 'Oct 2020 — Jul 2024', vi: '10/2020 — 07/2024' },
    highlights: {
      en: [
        'Strong foundation in data structures, algorithms, and object-oriented programming.',
        'Coursework in database systems, computer networks, operating systems, and software engineering.',
        'Applied theory through hands-on web development and system-design projects.',
      ],
      vi: [
        'Nền tảng vững về cấu trúc dữ liệu, giải thuật và lập trình hướng đối tượng.',
        'Học các môn về hệ cơ sở dữ liệu, mạng máy tính, hệ điều hành và công nghệ phần mềm.',
        'Vận dụng lý thuyết qua các dự án thực hành về phát triển web và thiết kế hệ thống.',
      ],
    },
  },
]
