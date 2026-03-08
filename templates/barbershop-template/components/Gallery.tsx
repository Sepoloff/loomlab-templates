'use client'

import Image from 'next/image'
import { useState } from 'react'

const galleryImages = [
  {
    id: 1,
    src: '/images/barbershop/gallery/gallery1.jpg',
    alt: 'Barbershop vintage',
  },
  {
    id: 2,
    src: '/images/barbershop/gallery/gallery2.jpg',
    alt: 'Corte de cabelo profissional',
  },
  {
    id: 3,
    src: '/images/barbershop/gallery/gallery3.jpg',
    alt: 'Aparo de barba',
  },
  {
    id: 4,
    src: '/images/barbershop/gallery/gallery4.jpg',
    alt: 'Styling profissional',
  },
  {
    id: 5,
    src: '/images/barbershop/gallery/gallery5.jpg',
    alt: 'Corte moderno',
  },
  {
    id: 6,
    src: '/images/barbershop/gallery/gallery6.jpg',
    alt: 'Barbear clássico',
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
            O Nosso Trabalho
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Galeria & <span className="gradient-text">Portfólio</span>
          </h2>
          <p className="text-dark-300 max-w-2xl mx-auto">
            Veja os nossos trabalhos mais recentes e inspire-se para o seu próximo look.
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
