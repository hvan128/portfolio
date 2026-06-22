'use client'

import { useEffect, useRef, useState } from 'react'

interface DemoFrameProps {
  src: string
  title: string
}

// Embeds the self-contained HTML demo in an iframe so its dark theme and scripts
// stay isolated from the page, but listens for the height it posts back and sizes
// the frame to fit — so the demo scrolls with the page instead of trapping scroll
// inside a nested scrollbar.
export default function DemoFrame({ src, title }: DemoFrameProps) {
  const ref = useRef<HTMLIFrameElement>(null)
  const [height, setHeight] = useState(680)

  useEffect(() => {
    function onMessage(e: MessageEvent) {
      if (e.source !== ref.current?.contentWindow) return
      const h = (e.data as { __demoHeight?: number } | null)?.__demoHeight
      if (typeof h === 'number' && h > 0) setHeight(h)
    }
    window.addEventListener('message', onMessage)
    return () => window.removeEventListener('message', onMessage)
  }, [])

  return (
    <iframe
      ref={ref}
      src={src}
      title={title}
      scrolling="no"
      className="w-full border-0 block"
      style={{ height }}
      allow="autoplay"
    />
  )
}
