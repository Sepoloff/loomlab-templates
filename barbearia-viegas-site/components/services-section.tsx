"use client"

import Image from "next/image"
import { useConceptTheme, conceptStyles } from "@/lib/concept-context"
import { Scissors, Wind } from "lucide-react"

const services = [
  {
    title: "Corte de Cabelo",
    desc: "Corte personalizado, adequado ao formato do rosto e estilo pessoal. Inclui lavagem e styling.",
    price: "15",
    image: "/images/service-corte.jpg",
    icon: Scissors,
    duration: "45 min",
  },
  {
    title: "Arranjo de Barba",
    desc: "Aparar, definir contornos e tratamento com toalha quente. Para uma barba impecavel.",
    price: "10",
    image: "/images/service-barba.jpg",
    icon: Wind,
    duration: "30 min",
  },
  {
    title: "Corte + Barba",
    desc: "A combinacao perfeita: corte completo e arranjo de barba. O tratamento mais procurado.",
    price: "22",
    image: "/images/hero-barbershop.jpg",
    icon: Scissors,
    duration: "1h 15min",
    popular: true,
  },
]

export function ServicesSection() {
  const { concept } = useConceptTheme()
  const s = conceptStyles(concept)
  const isMinimal = concept === "minimal"

  return (
    <section id="servicos" className={`py-24 md:py-32 ${isMinimal ? "bg-[#faf9f6]" : "bg-background"}`}>
      <div className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="text-center mb-16 md:mb-20">
          <p className={`${s.sectionSubtitle} mb-4`}>O que fazemos</p>
          {concept === "classico" && (
            <div className="ornamental-divider max-w-md mx-auto mb-6">
              <h2 className={`${s.sectionTitle} text-foreground`}>Servicos & Precos</h2>
            </div>
          )}
          {concept === "urbano" && (
            <>
              <h2 className={`${s.sectionTitle} text-foreground`}>Servicos & Precos</h2>
              <div className="w-16 h-1 bg-primary mx-auto mt-6" />
            </>
          )}
          {concept === "minimal" && (
            <h2 className={`${s.sectionTitle} text-[#2a2520]`}>
              Servicos <span className="text-[#8B7355]">&</span> Precos
            </h2>
          )}
        </div>

        {/* Service cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className={`group relative overflow-hidden transition-all duration-500 hover:-translate-y-1 ${s.cardStyle} ${
                service.popular ? (isMinimal ? "ring-2 ring-[#8B7355]" : "ring-2 ring-primary") : ""
              }`}
            >
              {/* Popular badge */}
              {service.popular && (
                <div className={`absolute top-4 right-4 z-10 px-3 py-1 rounded-full text-[10px] uppercase tracking-widest font-medium ${s.badge}`}>
                  Mais popular
                </div>
              )}

              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className={`absolute inset-0 ${isMinimal ? "bg-[#2a2520]/20" : "bg-background/40"}`} />
              </div>

              {/* Content */}
              <div className="p-6 lg:p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className={`${s.headingFont} text-xl font-semibold ${isMinimal ? "text-[#2a2520]" : "text-foreground"}`}>
                      {service.title}
                    </h3>
                    <span className={`text-xs ${isMinimal ? "text-[#8B7355]" : "text-muted-foreground"}`}>
                      {service.duration}
                    </span>
                  </div>
                  <div className={`text-3xl font-bold ${isMinimal ? "text-[#8B7355]" : ""} ${concept === "classico" ? "text-gold-gradient" : concept === "urbano" ? "text-primary" : ""}`}>
                    {service.price}
                    <span className="text-sm font-normal align-top ml-0.5">EUR</span>
                  </div>
                </div>
                <p className={`text-sm leading-relaxed ${isMinimal ? "text-[#2a2520]/60" : "text-muted-foreground"}`}>
                  {service.desc}
                </p>
                <a
                  href="#marcar"
                  className={`mt-6 inline-flex w-full items-center justify-center px-4 py-3 rounded-lg text-sm font-medium transition-all ${s.buttonOutline}`}
                >
                  Marcar agora
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
