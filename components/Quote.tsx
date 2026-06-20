'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'

// about.ts — the "facts" rendered as a syntax-highlighted TypeScript object.
// Kept in English on purpose: it mimics a real source file, where code reads
// the same regardless of the UI language.
// Tokens are coloured by hand so it reads like a real editor, not a card grid.
const C = {
  com: 'italic text-slate-500',
  kw: 'text-fuchsia-400',
  type: 'text-amber-300',
  key: 'text-sky-300',
  str: 'text-emerald-300',
  num: 'text-orange-300',
  pun: 'text-slate-500',
  fn: 'text-violet-300',
  id: 'text-slate-200',
}

const codeLines: React.ReactNode[] = [
  <span key="l" className={C.com}>// what I do</span>,
  <>
    <span className={C.kw}>const</span> <span className={C.id}>haiVan</span>
    <span className={C.pun}>:</span> <span className={C.type}>Engineer</span> <span className={C.pun}>= {'{'}</span>
  </>,
  <>
    {'  '}<span className={C.key}>role</span><span className={C.pun}>:</span>{' '}
    <span className={C.str}>&quot;Full-Stack &amp; AI Engineer&quot;</span><span className={C.pun}>,</span>
  </>,
  <>
    {'  '}<span className={C.key}>based</span><span className={C.pun}>:</span>{' '}
    <span className={C.str}>&quot;Hanoi, VN&quot;</span><span className={C.pun}>,</span>
  </>,
  <>
    {'  '}<span className={C.key}>experience</span><span className={C.pun}>:</span>{' '}
    <span className={C.str}>&quot;4+ years&quot;</span><span className={C.pun}>,</span>
  </>,
  <>
    {'  '}<span className={C.key}>focus</span><span className={C.pun}>: [</span>
    <span className={C.str}>&quot;AI&quot;</span><span className={C.pun}>,</span>{' '}
    <span className={C.str}>&quot;Full-Stack&quot;</span><span className={C.pun}>],</span>
  </>,
  <>
    {'  '}<span className={C.key}>english</span><span className={C.pun}>:</span>{' '}
    <span className={C.str}>&quot;Working proficiency&quot;</span><span className={C.pun}>,</span>
  </>,
  <>
    {'  '}<span className={C.key}>shipped</span><span className={C.pun}>:</span>{' '}
    <span className={C.num}>9</span><span className={C.pun}>,</span> <span className={C.com}>//and more products in prod</span>
  </>,
  <span key="close" className={C.pun}>{'}'}</span>,
  <span key="blank">&nbsp;</span>,
  <>
    <span className={C.id}>haiVan</span><span className={C.pun}>.</span><span className={C.fn}>build</span>
    <span className={C.pun}>()</span> <span className={C.com}>// currently @ VinUni</span>
  </>,
]

export default function Quote() {
  const t = useTranslations('about')
  const builds = t.raw('highlights') as string[]

  return (
    <section id="about" className="relative z-10 pt-12 pb-8 lg:pt-20 lg:pb-12">
      <div className="section-shell">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Human — reads first on mobile, sits on the right on desktop */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="lg:order-last"
          >
            <h2 className="font-display text-3xl font-extrabold leading-[1.12] tracking-tight text-slate-900 lg:text-[2.6rem]">
              {t('headingBefore')}
              <span className="text-gradient">{t('headingHighlight')}</span>
              {t('headingAfter')}
            </h2>
            <p className="mt-5 max-w-md leading-relaxed text-slate-600">{t('intro')}</p>
            <ul className="mt-7 space-y-3">
              {builds.map((b) => (
                <li key={b} className="flex gap-3 text-slate-700">
                  <span className="mt-0.5 select-none font-mono font-bold text-primary-500">▹</span>
                  <span className="leading-relaxed">{b}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* about.ts editor window — sits on the left on desktop */}
          <motion.div
            initial={{ opacity: 0, y: 30, rotate: 1 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative"
          >
            {/* glow */}
            <div className="absolute -inset-2 rounded-3xl bg-ai-gradient opacity-20 blur-2xl" />
            <div className="relative overflow-hidden rounded-2xl border border-slate-700/60 bg-slate-900 shadow-2xl">
              {/* window chrome */}
              <div className="flex items-center gap-2 border-b border-white/5 px-4 py-3">
                <span className="h-3 w-3 rounded-full bg-red-400/90" />
                <span className="h-3 w-3 rounded-full bg-amber-400/90" />
                <span className="h-3 w-3 rounded-full bg-emerald-400/90" />
                <span className="ml-3 rounded-md bg-white/5 px-2.5 py-1 font-mono text-xs text-slate-300">
                  about.ts
                </span>
                <span className="ml-auto hidden font-mono text-[10px] tracking-wide text-slate-600 sm:block">
                  ~/ngohaivan
                </span>
              </div>
              {/* code */}
              <div className="flex gap-4 overflow-x-auto p-5 font-mono text-[13px] leading-[1.7]">
                <div aria-hidden className="select-none pr-1 text-right text-slate-700">
                  {codeLines.map((_, i) => (
                    <div key={i}>{i + 1}</div>
                  ))}
                </div>
                <pre className="flex-1 whitespace-pre text-slate-300">
                  {codeLines.map((line, i) => (
                    <div key={i} className="min-h-[1.7em]">
                      {line}
                      {i === codeLines.length - 1 && (
                        <span className="ml-0.5 inline-block h-[1.05em] w-[7px] translate-y-[2px] animate-pulse bg-primary-400" />
                      )}
                    </div>
                  ))}
                </pre>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
