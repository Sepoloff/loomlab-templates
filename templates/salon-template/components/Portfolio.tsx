'use client'

import Image from 'next/image'
import { useState } from 'react'

const portfolioImages = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&h=600&fit=crop',
    alt: 'Nail art design 1',
    category: 'Nails',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1607779591378-361bfdfaed8f?w=600&h=600&fit=crop',
    alt: 'Nail art design 2',
    category: 'Nails',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1596728322284-4ec344c28735?w=600&h=600&fit=crop',
    alt: 'Hair styling 1',
    category: 'Hair',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1605328159405-b035a1a3e3b1?w=600&h=600&fit=crop',
    alt: 'Hair styling 2',
    category: 'Hair',
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1596728322282-9b6b7f26d6c4?w=600&h=600&fit=crop',
    alt: 'Before and after treatment',
    category: 'Treatment',
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1595777707802-41d339d60280?w=600&h=600&fit=crop',
    alt: 'Spa and wellness',
    category: 'Wellness',
  },
]

export function Portfolio() {
  const [selectedId, setSelectedId] = useState<number | null>(null)
  const [filter, setFilter] = useState('All')

  const categories = ['All', 'Nails', 'Hair', 'Treatment', 'Wellness']
  const filteredImages =
    filter === 'All'
      ? portfolioImages
      : portfolioImages.filter((img) => img.category === filter)

  return (
    <section id="portfolio" className="py-20 bg-light-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-rose-500 text-sm font-semibold uppercase tracking-wider mb-2">
            Our Work
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-light-900 mb-4">
            Portfolio & <span className="gradient-text">Gallery</span>
          </h2>
          <p className="text-light-700 max-w-2xl mx-auto">
            Explore our latest beauty transformations and salon artistry.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                filter === category
                  ? 'bg-rose-500 text-white'
                  : 'bg-white text-light-700 border border-rose-200 hover:border-rose-500'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredImages.map((image) => (
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
                <div className="absolute inset-0 bg-rose-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="bg-white text-rose-500 px-4 py-2 rounded-full font-semibold">
                    View
                  </span>
                </div>
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
                  portfolioImages.find((img) => img.id === selectedId)?.src ||
                  ''
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
