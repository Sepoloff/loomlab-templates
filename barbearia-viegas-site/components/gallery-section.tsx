"use client"

import { useState } from "react"
import Image from "next/image"
import { useConceptTheme, conceptStyles } from "@/lib/concept-context"
import { X } from "lucide-react"

const images = [
  { src: "/images/gallery-1.jpg", alt: "Corte moderno com fade" },
  { src: "/images/gallery-2.jpg", alt: "Ferramentas de barbearia" },
  { src: "/images/gallery-3.jpg", alt: "Barba bem aparada" },
  { src: "/images/gallery-4.jpg", alt: "Interior da barbearia" },
  { src: "/images/service-corte.jpg", alt: "Corte com tesoura" },
  { src: "/images/service-barba.jpg", alt: "Arranjo de barba" },
]

export function GallerySection() {
  const { concept } = useConceptTheme()
  const s = conceptStyles(concept)
  const isMinimal = concept === "minimal"
  const [lightbox, setLightbox] = useState<number | null>(null)

  return (
    <>
      <section id="galeria" className={`py-24 md:py-32 ${isMinimal ? "bg-[#faf9f6]" : "bg-background"}`}>
        <div className="mx-auto max-w-7xl px-6">
          {/* Section header */}
          <div className="text-center mb-16 md:mb-20">
            <p className={`${s.sectionSubtitle} mb-4`}>O nosso trabalho</p>
            {concept === "classico" && (
              <div className="ornamental-divider max-w-md mx-auto mb-6">
                <h2 className={`${s.sectionTitle} text-foreground`}>Galeria</h2>
              </div>
            )}
            {concept === "urbano" && (
              <>
                <h2 className={`${s.sectionTitle} text-foreground`}>Galeria</h2>
                <div className="w-16 h-1 bg-primary mx-auto mt-6" />
              </>
            )}
            {concept === "minimal" && (
              <h2 className={`${s.sectionTitle} text-[#2a2520]`}>Galeria</h2>
            )}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {images.map((img, i) => (
              <button
                key={img.src}
                onClick={() => setLightbox(i)}
                className={`group relative aspect-square overflow-hidden cursor-pointer ${
                  concept === "urbano" ? "rounded-none" : concept === "minimal" ? "rounded-xl" : "rounded-lg"
                }`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                <div className={`absolute inset-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100 flex items-center justify-center ${
                  isMinimal ? "bg-[#2a2520]/40" : "bg-background/50"
                }`}>
                  <span className={`text-xs uppercase tracking-widest ${isMinimal ? "text-[#faf9f6]" : "text-foreground"}`}>
                    Ver
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[200] bg-black/90 flex items-center justify-center p-6"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
            onClick={() => setLightbox(null)}
            aria-label="Fechar galeria"
          >
            <X className="h-8 w-8" />
          </button>
          <div className="relative max-w-4xl max-h-[80vh] w-full h-full">
            <Image
              src={images[lightbox].src}
              alt={images[lightbox].alt}
              fill
              className="object-contain"
              sizes="90vw"
            />
          </div>
        </div>
      )}
    </>
  )
}
