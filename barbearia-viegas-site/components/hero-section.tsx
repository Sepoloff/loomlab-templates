"use client"

import Image from "next/image"
import { useConceptTheme, conceptStyles } from "@/lib/concept-context"
import { MapPin, Clock, ChevronDown } from "lucide-react"

export function HeroSection() {
  const { concept } = useConceptTheme()
  const s = conceptStyles(concept)
  const isMinimal = concept === "minimal"

  return (
    <section id="hero" className={`relative min-h-screen flex items-center overflow-hidden ${isMinimal ? "bg-[#faf9f6]" : "bg-background"}`}>
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-barbershop.jpg"
          alt="Interior da Barbearia Viegas"
          fill
          className={`object-cover ${isMinimal ? "opacity-20" : "opacity-30"}`}
          priority
          sizes="100vw"
        />
        <div className={`absolute inset-0 bg-gradient-to-r ${s.heroOverlay}`} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-32 pb-20 w-full">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs tracking-widest uppercase mb-8 ${s.badge}`}>
            <MapPin className="h-3.5 w-3.5" />
            <span>No coracao de Mangualde</span>
          </div>

          {/* Heading - varies by concept */}
          {concept === "classico" && (
            <>
              <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-foreground leading-[0.95] mb-6">
                A arte de ser
                <span className="block text-gold-gradient">cavalheiro</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed mb-10">
                Desde 2010 a cuidar da imagem do homem moderno. Tradicao, requinte e atencao ao detalhe em cada servico.
              </p>
            </>
          )}
          {concept === "urbano" && (
            <>
              <h1 className="font-sans text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter text-foreground leading-[0.9] mb-6">
                O teu
                <span className="block text-primary">estilo.</span>
                <span className="block text-foreground/50">A nossa arte.</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed mb-10">
                Cortes com atitude. Barba impecavel. A barbearia de referencia em Mangualde.
              </p>
            </>
          )}
          {concept === "minimal" && (
            <>
              <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light text-[#2a2520] leading-[0.95] mb-6">
                Barbearia
                <span className="block text-[#8B7355] font-normal">Viegas</span>
              </h1>
              <p className="text-lg md:text-xl text-[#2a2520]/60 max-w-lg leading-relaxed font-light mb-10">
                Experiencia de barbearia com atencao ao detalhe. Servico personalizado em ambiente acolhedor.
              </p>
            </>
          )}

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <a
              href="#marcar"
              className={`inline-flex items-center px-8 py-4 rounded-lg text-base font-medium transition-all duration-300 hover:scale-105 ${s.buttonPrimary}`}
            >
              Marcar agora
            </a>
            <a
              href="#servicos"
              className={`inline-flex items-center px-8 py-4 rounded-lg text-base font-medium transition-all duration-300 border ${s.buttonOutline}`}
            >
              Ver servicos
            </a>
          </div>

          {/* Micro-info */}
          <div className={`mt-14 flex flex-wrap gap-8 text-sm ${isMinimal ? "text-[#2a2520]/50" : "text-muted-foreground"}`}>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>Atendimento por marcacao</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>R. 25 de Abril 125, Mangualde</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <a href="#servicos" className={`flex flex-col items-center gap-2 group ${isMinimal ? "text-[#8B7355]" : "text-primary"}`}>
          <span className="text-xs tracking-widest uppercase">Explorar</span>
          <ChevronDown className="h-5 w-5 animate-bounce" />
        </a>
      </div>
    </section>
  )
}
