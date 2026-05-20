'use client'

import type { ImageItem, CategoryKey } from '@/data/images'
import { useScrollReveal } from '@/hooks/useScrollReveal'

interface GalleryProps {
  images: ImageItem[]
  categories: ReadonlyArray<{ key: CategoryKey; label: string }>
  activeFilter: CategoryKey
  onFilterChange: (key: CategoryKey) => void
  onImageClick: (id: number) => void
}

export default function Gallery({ images, categories, activeFilter, onFilterChange, onImageClick }: GalleryProps) {
  const gridRef = useScrollReveal(0.15)

  return (
    <section id="gallery" className="max-w-[1200px] mx-auto px-6 py-[100px]">
      <h2 className="text-[clamp(28px,5vw,48px)] font-normal tracking-[0.05em] text-white text-center mb-[60px] relative after:block after:w-[60px] after:h-0.5 after:bg-accent after:mx-auto after:mt-4">
        作品集
      </h2>

      <div className="flex justify-center gap-8 flex-wrap mb-10">
        {categories.map(cat => (
          <button
            key={cat.key}
            onClick={() => onFilterChange(cat.key)}
            className={`relative bg-transparent border-none text-[13px] uppercase tracking-[0.12em] cursor-pointer py-1 px-0 transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-px after:bg-accent after:transition-transform after:duration-300 ${
              activeFilter === cat.key
                ? 'text-accent after:scale-x-100'
                : 'text-text-dim hover:text-accent after:scale-x-0 hover:after:scale-x-100'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div ref={gridRef} className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-1 max-w-[1400px] mx-auto max-md:grid-cols-[repeat(auto-fill,minmax(250px,1fr))] max-[480px]:grid-cols-2 max-[480px]:gap-0.5">
        {images.map(img => (
          <div
            key={img.id}
            className="reveal-item opacity-0 translate-y-[30px] relative overflow-hidden aspect-[4/3] cursor-pointer group"
            onClick={() => onImageClick(img.id)}
          >
            <img
              src={img.thumb}
              alt={img.title}
              loading="lazy"
              className="w-full h-full object-cover transition-all duration-600 group-hover:scale-[1.08] group-hover:brightness-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end p-6">
              <div>
                <h4 className="text-[15px] font-normal tracking-[0.05em] text-white">{img.title}</h4>
                <p className="text-xs text-accent tracking-[0.1em]">{img.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
