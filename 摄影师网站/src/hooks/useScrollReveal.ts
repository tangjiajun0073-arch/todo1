'use client'

import { useEffect, useRef } from 'react'

export function useScrollReveal(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('opacity-0', 'translate-y-[30px]')
            entry.target.classList.add('animate-fade-up')
          }
        })
      },
      { threshold }
    )

    const items = el.querySelectorAll<HTMLElement>('.reveal-item')
    items.forEach(item => observer.observe(item))
    return () => observer.disconnect()
  }, [threshold])

  return ref
}
