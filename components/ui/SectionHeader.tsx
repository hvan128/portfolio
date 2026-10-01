'use client'

import { motion } from 'framer-motion'

interface SectionHeaderProps {
  index: string
  eyebrow: string
  headingBefore: string
  headingHighlight: string
  intro?: string
}

// Shared section heading: mono HUD index + eyebrow, display title with a gradient
// highlight, and an optional intro line.
export default function SectionHeader({ index, eyebrow, headingBefore, headingHighlight, intro }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="max-w-2xl"
    >
      <div className="flex items-center gap-3">
        <span className="font-mono text-xs text-slate-500">{index}</span>
        <span className="h-px w-10 bg-gradient-to-r from-cyan-400/60 to-transparent" />
        <span className="eyebrow">{eyebrow}</span>
      </div>
      <h2 className="mt-5 font-display text-4xl font-bold tracking-tight text-white lg:text-5xl">
        {headingBefore}
        <span className="text-gradient">{headingHighlight}</span>
      </h2>
      {intro && <p className="mt-4 text-lg leading-relaxed text-slate-400">{intro}</p>}
    </motion.div>
  )
}
