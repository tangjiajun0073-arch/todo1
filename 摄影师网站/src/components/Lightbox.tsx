'use client'

import { useEffect } from 'react'
import type { ImageItem } from '@/data/images'

interface LightboxProps {
  images: ImageItem[]
  index: number
  onClose: () => void
  onPrev: () => void
  onNext: () => void
}

export default function Lightbox({ images, index, onClose, onPrev, onNext }: LightboxProps) {
  const img = images[index]

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose, onPrev, onNext])

  if (!img) return null

  return (
    <div
      className="fixed inset-0 z-[2000] bg-black/95 flex items-center justify-center opacity-100 pointer-events-auto transition-opacity duration-400"
      onClick={e => { if (e.target === e.currentTarget) onClose() }}
    >
      <button
        onClick={onClose}
        className="absolute top-6 right-8 text-[32px] text-text-dim hover:text-white transition-colors duration-300 bg-transparent border-none cursor-pointer"
      >
        &times;
      </button>
      <button
        onClick={onPrev}
        className="absolute top-1/2 -translate-y-1/2 left-6 text-[40px] text-text-dim hover:text-white transition-colors duration-300 bg-transparent border-none cursor-pointer z-10 max-md:hidden"
      >
        &#8249;
      </button>
      <button
        onClick={onNext}
        className="absolute top-1/2 -translate-y-1/2 right-6 text-[40px] text-text-dim hover:text-white transition-colors duration-300 bg-transparent border-none cursor-pointer z-10 max-md:hidden"
      >
        &#8250;
      </button>
      <img
        src={img.full}
        alt={img.title}
        className="max-w-[90vw] max-h-[85vh] object-contain scale-100 transition-transform duration-400"
      />
    </div>
  )
}
