"use client"

import Image from "next/image"
import { useConceptTheme, conceptStyles } from "@/lib/concept-context"
import { Instagram } from "lucide-react"

const team = [
  {
    name: "Ricardo Viegas",
    role: "Fundador & Master Barber",
    bio: "Com mais de 15 anos de experiencia, o Ricardo e a alma da barbearia. Especialista em cortes classicos e estilos contemporaneos.",
    image: "/images/barber-1.jpg",
    instagram: "#",
  },
  {
    name: "Tiago Mendes",
    role: "Barber",
    bio: "Formacao internacional e olho apurado para tendencias. Especializado em fades e desenhos de precisao.",
    image: "/images/barber-2.jpg",
    instagram: "#",
  },
]

export function TeamSection() {
  const { concept } = useConceptTheme()
  const s = conceptStyles(concept)
  const isMinimal = concept === "minimal"

  return (
    <section id="equipa" className={`py-24 md:py-32 ${isMinimal ? "bg-[#f5f3ef]" : "bg-secondary"}`}>
      <div className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="text-center mb-16 md:mb-20">
          <p className={`${s.sectionSubtitle} mb-4`}>Quem somos</p>
          {concept === "classico" && (
            <div className="ornamental-divider max-w-md mx-auto mb-6">
              <h2 className={`${s.sectionTitle} text-foreground`}>A Nossa Equipa</h2>
            </div>
          )}
          {concept === "urbano" && (
            <>
              <h2 className={`${s.sectionTitle} text-foreground`}>A Equipa</h2>
              <div className="w-16 h-1 bg-primary mx-auto mt-6" />
            </>
          )}
          {concept === "minimal" && (
            <h2 className={`${s.sectionTitle} text-[#2a2520]`}>A Nossa Equipa</h2>
          )}
        </div>

        {/* Team grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto">
          {team.map((member) => (
            <div key={member.name} className={`group overflow-hidden transition-all duration-500 ${s.cardStyle}`}>
              {/* Portrait */}
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={member.image}
                  alt={`${member.name} - ${member.role}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${isMinimal ? "from-[#f5f3ef] via-transparent" : "from-card via-transparent"} to-transparent`} />
              </div>

              {/* Info */}
              <div className="p-6 lg:p-8">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className={`${s.headingFont} text-xl font-semibold ${isMinimal ? "text-[#2a2520]" : "text-foreground"}`}>
                      {member.name}
                    </h3>
                    <p className={`text-sm mt-1 ${isMinimal ? "text-[#8B7355]" : "text-primary"}`}>
                      {member.role}
                    </p>
                  </div>
                  <a
                    href={member.instagram}
                    aria-label={`Instagram de ${member.name}`}
                    className={`p-2 rounded-full transition-colors ${isMinimal ? "text-[#8B7355] hover:bg-[#8B7355]/10" : "text-primary hover:bg-primary/10"}`}
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                </div>
                <p className={`mt-4 text-sm leading-relaxed ${isMinimal ? "text-[#2a2520]/60" : "text-muted-foreground"}`}>
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
