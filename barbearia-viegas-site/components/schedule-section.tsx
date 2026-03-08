"use client"

import { useConceptTheme, conceptStyles } from "@/lib/concept-context"
import { Clock } from "lucide-react"

const schedule = [
  { day: "Segunda-feira", hours: "09:00 - 19:00" },
  { day: "Terca-feira", hours: "09:00 - 19:00" },
  { day: "Quarta-feira", hours: "09:00 - 19:00" },
  { day: "Quinta-feira", hours: "09:00 - 19:00" },
  { day: "Sexta-feira", hours: "09:00 - 20:00" },
  { day: "Sabado", hours: "09:00 - 17:00" },
  { day: "Domingo", hours: "Encerrado" },
]

export function ScheduleSection() {
  const { concept } = useConceptTheme()
  const s = conceptStyles(concept)
  const isMinimal = concept === "minimal"

  return (
    <section id="horario" className={`py-24 md:py-32 ${isMinimal ? "bg-[#faf9f6]" : "bg-background"}`}>
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Info */}
          <div>
            <p className={`${s.sectionSubtitle} mb-4`}>Quando nos visitar</p>
            {concept === "classico" && (
              <h2 className={`${s.sectionTitle} text-foreground mb-6`}>
                Horario de <span className="text-gold-gradient">Funcionamento</span>
              </h2>
            )}
            {concept === "urbano" && (
              <>
                <h2 className={`${s.sectionTitle} text-foreground mb-4`}>Horario</h2>
                <div className="w-16 h-1 bg-primary mb-6" />
              </>
            )}
            {concept === "minimal" && (
              <h2 className={`${s.sectionTitle} text-[#2a2520] mb-6`}>Horario</h2>
            )}
            <p className={`text-base leading-relaxed mb-8 ${isMinimal ? "text-[#2a2520]/60" : "text-muted-foreground"}`}>
              Aconselhamos a marcacao previa para garantir o seu horario. Atendemos com pontualidade e dedicacao.
            </p>
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm ${s.badge}`}>
              <Clock className="h-4 w-4" />
              <span>Atendimento por marcacao</span>
            </div>
          </div>

          {/* Right - Schedule */}
          <div className={`${s.cardStyle} p-6 lg:p-8`}>
            <div className="flex flex-col gap-0">
              {schedule.map((item, i) => {
                const isClosed = item.hours === "Encerrado"
                return (
                  <div
                    key={item.day}
                    className={`flex items-center justify-between py-4 ${
                      i < schedule.length - 1
                        ? isMinimal
                          ? "border-b border-[#e5e0d8]"
                          : "border-b border-border"
                        : ""
                    }`}
                  >
                    <span className={`font-medium ${isMinimal ? "text-[#2a2520]" : "text-foreground"}`}>
                      {item.day}
                    </span>
                    <span
                      className={`text-sm ${
                        isClosed
                          ? isMinimal
                            ? "text-[#2a2520]/30"
                            : "text-muted-foreground/50"
                          : isMinimal
                            ? "text-[#8B7355]"
                            : "text-primary"
                      }`}
                    >
                      {item.hours}
                    </span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
