'use client'

import Image from 'next/image'
import { useState } from 'react'

const portfolioImages = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=500&h=400&fit=crop',
    alt: 'Manicure elegante',
    category: 'Unhas',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1552087405-20bcad00228b?w=500&h=400&fit=crop',
    alt: 'Pedicure e nail art',
    category: 'Unhas',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1563212388-319f694cab57?w=500&h=400&fit=crop',
    alt: 'Penteado profissional',
    category: 'Cabelo',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1522929084246-ce4e7b7f6718?w=500&h=400&fit=crop',
    alt: 'Beauty & wellness',
    category: 'Bem-estar',
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1544161515-81e8b1dd2a4f?w=500&h=400&fit=crop',
    alt: 'Tratamento relaxante',
    category: 'Tratamento',
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=500&h=400&fit=crop',
    alt: 'Nail art criativa',
    category: 'Unhas',
  },
]

export function Portfolio() {
  const [selectedId, setSelectedId] = useState<number | null>(null)
  const [filter, setFilter] = useState('Todos')

  const categories = ['Todos', 'Unhas', 'Cabelo', 'Tratamento', 'Bem-estar']
  const filteredImages =
    filter === 'Todos'
      ? portfolioImages
      : portfolioImages.filter((img) => img.category === filter)

  return (
    <section id="portfolio" className="py-20 bg-light-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-rose-500 text-sm font-semibold uppercase tracking-wider mb-2">
            O Nosso Trabalho
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-light-900 mb-4">
            Portfólio & <span className="gradient-text">Galeria</span>
          </h2>
          <p className="text-light-700 max-w-2xl mx-auto">
            Explore as nossas transformações de beleza e a nossa arte de salão.
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
                    Ver
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
                alt="Imagem da galeria"
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
