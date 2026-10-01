import type { MouseEvent } from 'react'

// Feeds the pointer position into the `.spotlight` CSS vars so the glow follows it.
export function spotlightHandler(e: MouseEvent<HTMLElement>) {
  const el = e.currentTarget
  const rect = el.getBoundingClientRect()
  el.style.setProperty('--x', `${e.clientX - rect.left}px`)
  el.style.setProperty('--y', `${e.clientY - rect.top}px`)
}
