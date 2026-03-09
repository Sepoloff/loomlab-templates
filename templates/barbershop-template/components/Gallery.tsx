'use client'

import { useState } from 'react'
import { Search, X } from 'lucide-react'

const galleryImages = [
  {
    id: 1,
    src: '/images/barbershop/gallery/gallery1.jpg',
    alt: 'Barbershop vintage',
    category: 'Ambiente',
  },
  {
    id: 2,
    src: '/images/barbershop/gallery/gallery2.jpg',
    alt: 'Corte de cabelo profissional',
    category: 'Cortes',
  },
  {
    id: 3,
    src: '/images/barbershop/gallery/gallery3.jpg',
    alt: 'Aparo de barba',
    category: 'Barba',
  },
  {
    id: 4,
    src: '/images/barbershop/gallery/gallery4.jpg',
    alt: 'Styling profissional',
    category: 'Styling',
  },
  {
    id: 5,
    src: '/images/barbershop/gallery/gallery5.jpg',
    alt: 'Corte moderno',
    category: 'Cortes',
  },
  {
    id: 6,
    src: '/images/barbershop/gallery/gallery6.jpg',
    alt: 'Barbear clássico',
    category: 'Barba',
  },
]

const categories = ['Tudo', 'Cortes', 'Barba', 'Styling', 'Ambiente']

export function Gallery() {
  const [selectedId, setSelectedId] = useState<number | null>(null)
  const [activeFilter, setActiveFilter] = useState('Tudo')

  const filtered =
    activeFilter === 'Tudo'
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeFilter)

  const selectedImage = galleryImages.find((img) => img.id === selectedId)

  return (
    <section id="gallery" className="py-20 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-gold-500 text-sm font-semibold uppercase tracking-wider mb-2">
            O Nosso Trabalho
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Galeria &amp; <span className="gradient-text">Portfólio</span>
          </h2>
          <p className="text-dark-300 max-w-2xl mx-auto">
            Veja os nossos trabalhos mais recentes e inspire-se para o seu próximo look.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-2 sm:gap-3 mb-10 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 sm:px-5 py-2.5 min-h-[44px] rounded-full text-sm font-semibold transition-all duration-300 ${
                activeFilter === cat
                  ? 'bg-gold-500 text-dark-900 shadow-lg shadow-gold-500/30'
                  : 'bg-dark-800 text-dark-300 border border-dark-700 hover:border-gold-500 hover:text-gold-500'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filtered.map((image) => (
            <div
              key={image.id}
              className="group cursor-pointer rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-gold-500/10 transition-all duration-300"
              onClick={() => setSelectedId(image.id)}
            >
              <div className="relative aspect-square overflow-hidden bg-dark-800">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-dark-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {/* View icon */}
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  <div className="bg-gold-500 rounded-full p-3 mb-2 shadow-xl">
                    <Search className="w-5 h-5 text-dark-900" />
                  </div>
                  <span className="text-white text-sm font-semibold tracking-wide">Ver Imagem</span>
                </div>
                {/* Category badge */}
                <div className="absolute top-3 left-3 bg-dark-900/80 backdrop-blur-sm text-gold-500 text-xs font-semibold px-3 py-1 rounded-full border border-gold-500/30">
                  {image.category}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedId && selectedImage && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={() => setSelectedId(null)}
          >
            <button
              className="absolute top-6 right-6 text-white hover:text-gold-500 transition-colors"
              onClick={() => setSelectedId(null)}
            >
              <X className="w-8 h-8" />
            </button>
            <div className="max-w-3xl w-full" onClick={(e) => e.stopPropagation()}>
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={selectedImage.src}
                  alt="Imagem da galeria"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-dark-300 text-center mt-4 text-sm">
                {selectedImage.alt}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
