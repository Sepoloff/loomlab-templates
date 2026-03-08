"use client"

import { useState } from "react"
import { useConceptTheme, conceptStyles } from "@/lib/concept-context"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Joao Ferreira",
    text: "Vou a Barbearia Viegas ha mais de 3 anos. O Ricardo tem uma atencao ao detalhe impressionante. Nunca sai de la sem me sentir renovado.",
    rating: 5,
    location: "Mangualde",
  },
  {
    name: "Miguel Santos",
    text: "A melhor barbearia da regiao, sem duvida. Ambiente impecavel, servico de excelencia. Recomendo a toda a gente.",
    rating: 5,
    location: "Viseu",
  },
  {
    name: "Pedro Almeida",
    text: "Profissionalismo de outro nivel. O Tiago percebe exactamente o que quero, mesmo quando nao sei explicar. Top!",
    rating: 5,
    location: "Nelas",
  },
  {
    name: "Andre Oliveira",
    text: "A minha barbearia de confianca. Preco justo, resultado sempre perfeito. A combinacao corte + barba e incrivel.",
    rating: 5,
    location: "Mangualde",
  },
]

export function TestimonialsSection() {
  const { concept } = useConceptTheme()
  const s = conceptStyles(concept)
  const isMinimal = concept === "minimal"
  const [current, setCurrent] = useState(0)

  const goNext = () => setCurrent((c) => (c + 1) % testimonials.length)
  const goPrev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)

  const t = testimonials[current]

  return (
    <section id="testemunhos" className={`py-24 md:py-32 ${isMinimal ? "bg-[#f5f3ef]" : "bg-secondary"}`}>
      <div className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="text-center mb-16 md:mb-20">
          <p className={`${s.sectionSubtitle} mb-4`}>O que dizem de nos</p>
          {concept === "classico" && (
            <div className="ornamental-divider max-w-md mx-auto mb-6">
              <h2 className={`${s.sectionTitle} text-foreground`}>Testemunhos</h2>
            </div>
          )}
          {concept === "urbano" && (
            <>
              <h2 className={`${s.sectionTitle} text-foreground`}>Testemunhos</h2>
              <div className="w-16 h-1 bg-primary mx-auto mt-6" />
            </>
          )}
          {concept === "minimal" && (
            <h2 className={`${s.sectionTitle} text-[#2a2520]`}>Testemunhos</h2>
          )}
        </div>

        {/* Testimonial carousel */}
        <div className="max-w-2xl mx-auto text-center">
          <Quote className={`h-10 w-10 mx-auto mb-8 ${isMinimal ? "text-[#8B7355]/30" : "text-primary/30"}`} />

          <blockquote
            className={`text-xl md:text-2xl leading-relaxed mb-8 ${s.headingFont} ${
              isMinimal ? "text-[#2a2520] font-light" : "text-foreground"
            }`}
          >
            {`"${t.text}"`}
          </blockquote>

          {/* Stars */}
          <div className="flex items-center justify-center gap-1 mb-4">
            {Array.from({ length: t.rating }).map((_, i) => (
              <Star key={i} className={`h-4 w-4 fill-current ${isMinimal ? "text-[#8B7355]" : "text-primary"}`} />
            ))}
          </div>

          <p className={`font-semibold ${isMinimal ? "text-[#2a2520]" : "text-foreground"}`}>
            {t.name}
          </p>
          <p className={`text-sm ${isMinimal ? "text-[#8B7355]" : "text-muted-foreground"}`}>
            {t.location}
          </p>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-10">
            <button
              onClick={goPrev}
              className={`p-3 rounded-full border transition-colors ${
                isMinimal
                  ? "border-[#e5e0d8] text-[#8B7355] hover:bg-[#8B7355] hover:text-[#faf9f6]"
                  : "border-border text-primary hover:bg-primary hover:text-primary-foreground"
              }`}
              aria-label="Testemunho anterior"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === current
                      ? `w-6 ${isMinimal ? "bg-[#8B7355]" : "bg-primary"}`
                      : `w-2 ${isMinimal ? "bg-[#8B7355]/30" : "bg-primary/30"}`
                  }`}
                  aria-label={`Testemunho ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={goNext}
              className={`p-3 rounded-full border transition-colors ${
                isMinimal
                  ? "border-[#e5e0d8] text-[#8B7355] hover:bg-[#8B7355] hover:text-[#faf9f6]"
                  : "border-border text-primary hover:bg-primary hover:text-primary-foreground"
              }`}
              aria-label="Proximo testemunho"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
