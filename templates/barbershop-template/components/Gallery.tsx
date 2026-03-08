'use client'

import Image from 'next/image'
import { useState } from 'react'

const galleryImages = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1599407839000-4c5f1134a268?w=600&h=600&fit=crop',
    alt: 'Haircut style 1',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1621905167918-48416bd8575a?w=600&h=600&fit=crop',
    alt: 'Haircut style 2',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1605497788044-e4a10ae5c5a4?w=600&h=600&fit=crop',
    alt: 'Beard trim',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1605328159405-b035a1a3e3b1?w=600&h=600&fit=crop',
    alt: 'Styling service',
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1599407839559-c2835db00ba7?w=600&h=600&fit=crop',
    alt: 'Professional haircut',
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1620331379026-1342b604fc6b?w=600&h=600&fit=crop',
    alt: 'Classic shave',
  },
]

export function Gallery() {
  const [selectedId, setSelectedId] = useState<number | null>(null)

  return (
    <section id="gallery" className="py-20 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-gold-500 text-sm font-semibold uppercase tracking-wider mb-2">
            Our Work
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Gallery & <span className="gradient-text">Showcase</span>
          </h2>
          <p className="text-dark-300 max-w-2xl mx-auto">
            See our latest work and get inspired for your next look.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="group cursor-pointer overflow-hidden rounded-lg"
              onClick={() => setSelectedId(image.id)}
            >
              <div className="relative h-64 md:h-72 overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gold-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedId && (
          <div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedId(null)}
          >
            <div className="max-w-2xl w-full">
              <Image
                src={
                  galleryImages.find((img) => img.id === selectedId)?.src || ''
                }
                alt="Gallery image"
                width={600}
                height={600}
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
