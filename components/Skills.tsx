'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import SectionHeader from './ui/SectionHeader'
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiRedux,
  SiReactquery,
  SiFramer,
  SiFlutter,
  SiExpo,
  SiNodedotjs,
  SiNestjs,
  SiPython,
  SiFlask,
  SiGraphql,
  SiWebrtc,
  SiPostgresql,
  SiPrisma,
  SiSupabase,
  SiMysql,
  SiRedis,
  SiOracle,
  SiFirebase,
  SiDocker,
  SiAmazonaws,
  SiCloudflare,
  SiVercel,
  SiNginx,
  SiLinux,
  SiGithubactions,
  SiGit,
} from 'react-icons/si'
import { LuMic, LuDatabase, LuBot, LuSparkles, LuScan, LuLayers } from 'react-icons/lu'

type IconType = React.ComponentType<{ className?: string }>

interface Tool {
  name: string
  Icon: IconType
  color?: string
}
interface Category {
  name: string
  ai?: boolean
  tools: Tool[]
}

// One source of truth for the stack — generalized AI capabilities first, then the
// concrete tools, each with its own icon.
const categories: Category[] = [
  {
    name: 'AI Engineering',
    ai: true,
    tools: [
      { name: 'Agent orchestration', Icon: LuBot },
      { name: 'RAG & evaluation', Icon: LuDatabase },
      { name: 'Realtime voice', Icon: LuMic },
      { name: 'OCR & vision', Icon: LuScan },
      { name: 'LLM app integration', Icon: LuSparkles },
    ],
  },
  {
    name: 'Frontend',
    tools: [
      { name: 'React', Icon: SiReact, color: 'text-cyan-500' },
      { name: 'Next.js', Icon: SiNextdotjs, color: 'text-white' },
      { name: 'TypeScript', Icon: SiTypescript, color: 'text-blue-400' },
      { name: 'Redux Toolkit', Icon: SiRedux, color: 'text-violet-400' },
      { name: 'TanStack Query', Icon: SiReactquery, color: 'text-rose-500' },
      { name: 'Tailwind CSS', Icon: SiTailwindcss, color: 'text-sky-500' },
      { name: 'Framer Motion', Icon: SiFramer, color: 'text-white' },
    ],
  },
  {
    name: 'Mobile',
    tools: [
      { name: 'Flutter', Icon: SiFlutter, color: 'text-blue-500' },
      { name: 'React Native', Icon: SiReact, color: 'text-cyan-500' },
      { name: 'Riverpod', Icon: LuLayers, color: 'text-indigo-300' },
      { name: 'Expo', Icon: SiExpo, color: 'text-white' },
    ],
  },
  {
    name: 'Backend',
    tools: [
      { name: 'Node.js', Icon: SiNodedotjs, color: 'text-green-400' },
      { name: 'NestJS', Icon: SiNestjs, color: 'text-rose-500' },
      { name: 'Python', Icon: SiPython, color: 'text-yellow-500' },
      { name: 'Flask', Icon: SiFlask, color: 'text-slate-300' },
      { name: 'GraphQL', Icon: SiGraphql, color: 'text-pink-400' },
      { name: 'WebRTC', Icon: SiWebrtc, color: 'text-blue-500' },
    ],
  },
  {
    name: 'Database',
    tools: [
      { name: 'PostgreSQL', Icon: SiPostgresql, color: 'text-sky-400' },
      { name: 'Prisma', Icon: SiPrisma, color: 'text-white' },
      { name: 'Drizzle ORM', Icon: LuDatabase, color: 'text-emerald-300' },
      { name: 'Supabase', Icon: SiSupabase, color: 'text-emerald-500' },
      { name: 'Redis', Icon: SiRedis, color: 'text-red-400' },
      { name: 'MySQL', Icon: SiMysql, color: 'text-blue-400' },
      { name: 'Oracle', Icon: SiOracle, color: 'text-red-400' },
      { name: 'Firebase', Icon: SiFirebase, color: 'text-orange-500' },
    ],
  },
  {
    name: 'DevOps & Cloud',
    tools: [
      { name: 'Docker', Icon: SiDocker, color: 'text-blue-500' },
      { name: 'AWS', Icon: SiAmazonaws, color: 'text-orange-500' },
      { name: 'Cloudflare', Icon: SiCloudflare, color: 'text-orange-500' },
      { name: 'Vercel', Icon: SiVercel, color: 'text-white' },
      { name: 'Nginx', Icon: SiNginx, color: 'text-green-400' },
      { name: 'Linux', Icon: SiLinux, color: 'text-slate-300' },
      { name: 'GitHub Actions', Icon: SiGithubactions, color: 'text-slate-100' },
      { name: 'Git', Icon: SiGit, color: 'text-orange-400' },
    ],
  },
]

export default function Skills() {
  const t = useTranslations('skillsSection')
  // The AI category lists capabilities (not branded tools), so its labels are
  // localized by index. Concrete tool names (React, Docker…) stay in English.
  const aiCapabilities = t.raw('aiCapabilities') as string[]
  const softSkills = t.raw('softSkills') as string[]

  return (
    <section id="skills" className="relative z-10 py-8 lg:py-12">
      <div className="section-shell">
        <SectionHeader
          index="05"
          eyebrow={t('eyebrow')}
          headingBefore={t('headingBefore')}
          headingHighlight={t('headingHighlight')}
          intro={t('intro')}
        />

        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: ci * 0.05 }}
              className={`glass-card p-5 ${cat.ai ? 'border-violet-400/20' : ''}`}
            >
              <h3 className="mb-4 flex items-center gap-2 font-display text-base font-bold text-white">
                <span className={`h-4 w-1 rounded-full ${cat.ai ? 'bg-ai-gradient' : 'bg-cyan-400'}`} />
                {cat.name}
                {cat.ai && <span className="ai-badge">AI</span>}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.tools.map((tool, ti) => {
                  const Icon = tool.Icon
                  const label = cat.ai ? aiCapabilities[ti] ?? tool.name : tool.name
                  return (
                    <span
                      key={tool.name}
                      className="inline-flex items-center gap-2 rounded-xl border border-white/[0.06] bg-white/[0.04] px-3 py-1.5 text-sm font-medium text-slate-300"
                    >
                      <Icon className={`text-base ${tool.color ?? (cat.ai ? 'text-violet-300' : 'text-cyan-300')}`} />
                      {label}
                    </span>
                  )
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Soft skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mt-6 rounded-2xl border border-cyan-400/15 bg-cyan-400/[0.04] p-6 backdrop-blur"
        >
          <h3 className="font-display text-xl font-bold text-white">{t('beyondTheCode')}</h3>
          <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {softSkills.map((s) => (
              <li key={s} className="flex items-start gap-3 text-slate-300">
                <svg className="mt-1 h-5 w-5 flex-shrink-0 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm leading-relaxed">{s}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  )
}
