'use client'

import Image from 'next/image'
import { useState } from 'react'
import { Search, X } from 'lucide-react'

const portfolioImages = [
  {
    id: 1,
    src: '/images/salon/portfolio/portfolio1.jpg',
    alt: 'Manicure elegante',
    category: 'Unhas',
  },
  {
    id: 2,
    src: '/images/salon/portfolio/portfolio2.jpg',
    alt: 'Pedicure e nail art',
    category: 'Unhas',
  },
  {
    id: 3,
    src: '/images/salon/portfolio/portfolio3.jpg',
    alt: 'Penteado profissional',
    category: 'Cabelo',
  },
  {
    id: 4,
    src: '/images/salon/portfolio/portfolio4.jpg',
    alt: 'Beauty & wellness',
    category: 'Bem-estar',
  },
  {
    id: 5,
    src: '/images/salon/portfolio/portfolio5.jpg',
    alt: 'Tratamento relaxante',
    category: 'Tratamento',
  },
  {
    id: 6,
    src: '/images/salon/portfolio/portfolio6.jpg',
    alt: 'Nail art criativa',
    category: 'Unhas',
  },
]

const categories = ['Todos', 'Unhas', 'Cabelo', 'Tratamento', 'Bem-estar']

export function Portfolio() {
  const [selectedId, setSelectedId] = useState<number | null>(null)
  const [filter, setFilter] = useState('Todos')

  const filteredImages =
    filter === 'Todos'
      ? portfolioImages
      : portfolioImages.filter((img) => img.category === filter)

  return (
    <section id="portfolio" className="py-20 bg-light-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-rose-500 text-sm font-semibold uppercase tracking-wider mb-2">
            O Nosso Trabalho
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-light-900 mb-4">
            Portfólio &amp; <span className="gradient-text">Galeria</span>
          </h2>
          <p className="text-light-700 max-w-2xl mx-auto">
            Explore as nossas transformações de beleza e a nossa arte de salão.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-3 mb-10 flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                filter === category
                  ? 'bg-rose-500 text-white shadow-lg shadow-rose-500/30'
                  : 'bg-white text-light-700 border border-rose-200 hover:border-rose-400 hover:text-rose-500'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="group cursor-pointer rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:shadow-rose-500/10 transition-all duration-300"
              onClick={() => setSelectedId(image.id)}
            >
              <div className="relative aspect-square overflow-hidden bg-rose-50">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-rose-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {/* View icon */}
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  <div className="bg-rose-500 rounded-full p-3 mb-2 shadow-xl">
                    <Search className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-white text-sm font-semibold tracking-wide">Ver Imagem</span>
                </div>
                {/* Category badge */}
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-rose-500 text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
                  {image.category}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedId && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={() => setSelectedId(null)}
          >
            <button
              className="absolute top-6 right-6 text-white hover:text-rose-400 transition-colors"
              onClick={() => setSelectedId(null)}
            >
              <X className="w-8 h-8" />
            </button>
            <div className="max-w-3xl w-full" onClick={(e) => e.stopPropagation()}>
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={portfolioImages.find((img) => img.id === selectedId)?.src || ''}
                  alt="Imagem da galeria"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-white/70 text-center mt-4 text-sm">
                {portfolioImages.find((img) => img.id === selectedId)?.alt}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
