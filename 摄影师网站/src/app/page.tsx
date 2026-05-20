'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Gallery from '@/components/Gallery'
import Lightbox from '@/components/Lightbox'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import { IMAGES, CATEGORIES, type CategoryKey } from '@/data/images'

export default function Home() {
  const [activeFilter, setActiveFilter] = useState<CategoryKey>('all')
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const filtered = activeFilter === 'all'
    ? IMAGES
    : IMAGES.filter(img => img.category === activeFilter)

  const openLightbox = (id: number) => {
    const idx = filtered.findIndex(img => img.id === id)
    setLightboxIndex(idx)
  }

  const closeLightbox = () => setLightboxIndex(null)

  const prevImage = () => {
    setLightboxIndex(i => (i! - 1 + filtered.length) % filtered.length)
  }

  const nextImage = () => {
    setLightboxIndex(i => (i! + 1) % filtered.length)
  }

  return (
    <>
      <Navbar />
      <Hero />
      <Gallery
        images={filtered}
        categories={CATEGORIES}
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
        onImageClick={openLightbox}
      />
      <About />
      <Contact />
      <Footer />
      {lightboxIndex !== null && (
        <Lightbox
          images={filtered}
          index={lightboxIndex}
          onClose={closeLightbox}
          onPrev={prevImage}
          onNext={nextImage}
        />
      )}
    </>
  )
}
