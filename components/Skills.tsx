'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
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
    name: 'AI & LLM',
    ai: true,
    tools: [
      { name: 'Voice agents (realtime)', Icon: LuMic },
      { name: 'RAG / retrieval', Icon: LuDatabase },
      { name: 'Agentic chatbots', Icon: LuBot },
      { name: 'LLM app integration', Icon: LuSparkles },
      { name: 'OCR & vision', Icon: LuScan },
    ],
  },
  {
    name: 'Frontend',
    tools: [
      { name: 'React', Icon: SiReact, color: 'text-cyan-500' },
      { name: 'Next.js', Icon: SiNextdotjs, color: 'text-slate-900' },
      { name: 'TypeScript', Icon: SiTypescript, color: 'text-blue-600' },
      { name: 'Redux Toolkit', Icon: SiRedux, color: 'text-violet-600' },
      { name: 'TanStack Query', Icon: SiReactquery, color: 'text-rose-500' },
      { name: 'Tailwind CSS', Icon: SiTailwindcss, color: 'text-sky-500' },
      { name: 'Framer Motion', Icon: SiFramer, color: 'text-slate-900' },
    ],
  },
  {
    name: 'Mobile',
    tools: [
      { name: 'Flutter', Icon: SiFlutter, color: 'text-blue-500' },
      { name: 'React Native', Icon: SiReact, color: 'text-cyan-500' },
      { name: 'Riverpod', Icon: LuLayers, color: 'text-indigo-500' },
      { name: 'Expo', Icon: SiExpo, color: 'text-slate-900' },
    ],
  },
  {
    name: 'Backend',
    tools: [
      { name: 'Node.js', Icon: SiNodedotjs, color: 'text-green-600' },
      { name: 'NestJS', Icon: SiNestjs, color: 'text-rose-500' },
      { name: 'Python', Icon: SiPython, color: 'text-yellow-500' },
      { name: 'Flask', Icon: SiFlask, color: 'text-slate-700' },
      { name: 'GraphQL', Icon: SiGraphql, color: 'text-pink-600' },
      { name: 'WebRTC', Icon: SiWebrtc, color: 'text-blue-500' },
    ],
  },
  {
    name: 'Database',
    tools: [
      { name: 'PostgreSQL', Icon: SiPostgresql, color: 'text-sky-700' },
      { name: 'Prisma', Icon: SiPrisma, color: 'text-slate-900' },
      { name: 'Drizzle ORM', Icon: LuDatabase, color: 'text-emerald-600' },
      { name: 'Supabase', Icon: SiSupabase, color: 'text-emerald-500' },
      { name: 'Redis', Icon: SiRedis, color: 'text-red-600' },
      { name: 'MySQL', Icon: SiMysql, color: 'text-blue-600' },
      { name: 'Oracle', Icon: SiOracle, color: 'text-red-700' },
      { name: 'Firebase', Icon: SiFirebase, color: 'text-orange-500' },
    ],
  },
  {
    name: 'DevOps & Cloud',
    tools: [
      { name: 'Docker', Icon: SiDocker, color: 'text-blue-500' },
      { name: 'AWS', Icon: SiAmazonaws, color: 'text-orange-500' },
      { name: 'Cloudflare', Icon: SiCloudflare, color: 'text-orange-500' },
      { name: 'Vercel', Icon: SiVercel, color: 'text-slate-900' },
      { name: 'Nginx', Icon: SiNginx, color: 'text-green-700' },
      { name: 'Linux', Icon: SiLinux, color: 'text-slate-700' },
      { name: 'GitHub Actions', Icon: SiGithubactions, color: 'text-slate-800' },
      { name: 'Git', Icon: SiGit, color: 'text-orange-600' },
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="max-w-2xl"
        >
          <span className="eyebrow">
            <span className="h-1.5 w-1.5 rounded-full bg-primary-500" />
            {t('eyebrow')}
          </span>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-slate-900 lg:text-5xl">
            {t('headingBefore')}
            <span className="text-gradient">{t('headingHighlight')}</span>
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">{t('intro')}</p>
        </motion.div>

        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: ci * 0.05 }}
              className={`glass-card p-5 ${cat.ai ? 'border-indigo-200/70' : ''}`}
            >
              <h3 className="mb-4 flex items-center gap-2 font-display text-base font-bold text-slate-900">
                <span className={`h-4 w-1 rounded-full ${cat.ai ? 'bg-ai-gradient' : 'bg-primary-500'}`} />
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
                      className="inline-flex items-center gap-2 rounded-xl border border-white/70 bg-white/70 px-3 py-1.5 text-sm font-medium text-slate-700 shadow-sm"
                    >
                      <Icon className={`text-base ${tool.color ?? (cat.ai ? 'text-indigo-500' : 'text-primary-600')}`} />
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
          className="mt-6 rounded-2xl border border-primary-100 bg-primary-50/60 p-6 backdrop-blur"
        >
          <h3 className="font-display text-xl font-bold text-slate-900">{t('beyondTheCode')}</h3>
          <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {softSkills.map((s) => (
              <li key={s} className="flex items-start gap-3 text-slate-700">
                <svg className="mt-1 h-5 w-5 flex-shrink-0 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
