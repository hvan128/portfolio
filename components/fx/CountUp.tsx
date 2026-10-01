'use client'

import { useEffect, useRef } from 'react'
import { animate, useInView } from 'framer-motion'

interface CountUpProps {
  to: number
  duration?: number
  className?: string
}

// Counts from 0 to `to` the first time it scrolls into view.
export default function CountUp({ to, duration = 1.6, className }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.6 })

  useEffect(() => {
    const el = ref.current
    if (!el || !inView) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.textContent = String(to)
      return
    }
    const controls = animate(0, to, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => {
        el.textContent = String(Math.round(v))
      },
    })
    return () => controls.stop()
  }, [inView, to, duration])

  return (
    <span ref={ref} className={className} aria-label={String(to)}>
      0
    </span>
  )
}
