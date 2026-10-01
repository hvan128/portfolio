'use client'

import { useEffect, useState } from 'react'

const GLYPHS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#%&*+<>/'

interface DecryptTextProps {
  text: string
  className?: string
  // ms before the reveal starts, and ms per revealed character
  delay?: number
  speed?: number
}

// Scrambles the string with random glyphs, then resolves it left to right.
// Renders the final text on the server and for reduced-motion users.
export default function DecryptText({ text, className, delay = 400, speed = 35 }: DecryptTextProps) {
  const [shown, setShown] = useState(text)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let frame = 0
    let id: ReturnType<typeof setInterval>
    const scramble = (revealed: number) =>
      text
        .split('')
        .map((ch, i) => (i < revealed || ch === ' ' ? ch : GLYPHS[Math.floor(Math.random() * GLYPHS.length)]))
        .join('')
    setShown(scramble(0))
    const start = setTimeout(() => {
      id = setInterval(() => {
        frame += 1
        setShown(scramble(frame))
        if (frame >= text.length) clearInterval(id)
      }, speed)
    }, delay)
    return () => {
      clearTimeout(start)
      clearInterval(id)
    }
  }, [text, delay, speed])

  return (
    <span className={className} aria-label={text}>
      <span aria-hidden>{shown}</span>
    </span>
  )
}
