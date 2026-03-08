"use client"

import { useConceptTheme, conceptStyles } from "@/lib/concept-context"
import { MapPin, Phone, Mail, Navigation } from "lucide-react"

export function LocationSection() {
  const { concept } = useConceptTheme()
  const s = conceptStyles(concept)
  const isMinimal = concept === "minimal"

  return (
    <section id="contactos" className={`py-24 md:py-32 ${isMinimal ? "bg-[#f5f3ef]" : "bg-secondary"}`}>
      <div className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="text-center mb-16 md:mb-20">
          <p className={`${s.sectionSubtitle} mb-4`}>Onde estamos</p>
          {concept === "classico" && (
            <div className="ornamental-divider max-w-md mx-auto mb-6">
              <h2 className={`${s.sectionTitle} text-foreground`}>Localizacao & Contactos</h2>
            </div>
          )}
          {concept === "urbano" && (
            <>
              <h2 className={`${s.sectionTitle} text-foreground`}>Encontra-nos</h2>
              <div className="w-16 h-1 bg-primary mx-auto mt-6" />
            </>
          )}
          {concept === "minimal" && (
            <h2 className={`${s.sectionTitle} text-[#2a2520]`}>Contactos</h2>
          )}
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Map embed */}
          <div className={`overflow-hidden ${concept === "urbano" ? "rounded-none" : concept === "minimal" ? "rounded-xl" : "rounded-lg"}`}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2!2d-7.7617!3d40.6047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDM2JzE3LjAiTiA3wrA0NSc0Mi4xIlc!5e0!3m2!1spt-PT!2spt!4v1700000000000!5m2!1spt-PT!2spt"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localizacao da Barbearia Viegas em Mangualde"
              className="w-full h-80 lg:h-full min-h-[320px]"
            />
          </div>

          {/* Contact info */}
          <div className="flex flex-col justify-center gap-8">
            {/* Address */}
            <div className="flex gap-4">
              <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${isMinimal ? "bg-[#8B7355]/10" : "bg-primary/10"}`}>
                <MapPin className={`h-5 w-5 ${isMinimal ? "text-[#8B7355]" : "text-primary"}`} />
              </div>
              <div>
                <h3 className={`font-semibold mb-1 ${isMinimal ? "text-[#2a2520]" : "text-foreground"}`}>Morada</h3>
                <p className={`text-sm leading-relaxed ${isMinimal ? "text-[#2a2520]/60" : "text-muted-foreground"}`}>
                  R. 25 de Abril 125
                  <br />
                  3530-140 Mangualde
                </p>
                <a
                  href="https://maps.google.com/?q=R.+25+de+Abril+125,+3530-140+Mangualde"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-1 mt-2 text-sm font-medium ${isMinimal ? "text-[#8B7355] hover:text-[#7a6349]" : "text-primary hover:text-primary/80"} transition-colors`}
                >
                  <Navigation className="h-3.5 w-3.5" />
                  Obter direcoes
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-4">
              <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${isMinimal ? "bg-[#8B7355]/10" : "bg-primary/10"}`}>
                <Phone className={`h-5 w-5 ${isMinimal ? "text-[#8B7355]" : "text-primary"}`} />
              </div>
              <div>
                <h3 className={`font-semibold mb-1 ${isMinimal ? "text-[#2a2520]" : "text-foreground"}`}>Telefone</h3>
                <a
                  href="tel:+351232622000"
                  className={`text-sm ${isMinimal ? "text-[#2a2520]/60 hover:text-[#8B7355]" : "text-muted-foreground hover:text-primary"} transition-colors`}
                >
                  +351 232 622 000
                </a>
                <p className={`text-xs mt-1 ${isMinimal ? "text-[#2a2520]/40" : "text-muted-foreground/60"}`}>
                  Chamada para rede fixa nacional
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex gap-4">
              <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${isMinimal ? "bg-[#8B7355]/10" : "bg-primary/10"}`}>
                <Mail className={`h-5 w-5 ${isMinimal ? "text-[#8B7355]" : "text-primary"}`} />
              </div>
              <div>
                <h3 className={`font-semibold mb-1 ${isMinimal ? "text-[#2a2520]" : "text-foreground"}`}>E-mail</h3>
                <a
                  href="mailto:geral@barbeariaviegas.pt"
                  className={`text-sm ${isMinimal ? "text-[#2a2520]/60 hover:text-[#8B7355]" : "text-muted-foreground hover:text-primary"} transition-colors`}
                >
                  geral@barbeariaviegas.pt
                </a>
              </div>
            </div>

            {/* CTA */}
            <div id="marcar" className={`mt-4 p-6 rounded-xl ${isMinimal ? "bg-[#8B7355]/5 border border-[#8B7355]/20" : "bg-primary/5 border border-primary/20"}`}>
              <h3 className={`${s.headingFont} text-lg font-semibold mb-2 ${isMinimal ? "text-[#2a2520]" : "text-foreground"}`}>
                Pronto para marcar?
              </h3>
              <p className={`text-sm mb-4 ${isMinimal ? "text-[#2a2520]/60" : "text-muted-foreground"}`}>
                Ligue-nos ou envie mensagem pelo WhatsApp para agendar o seu horario.
              </p>
              <a
                href="https://wa.me/351232622000?text=Ola%2C%20gostaria%20de%20marcar%20um%20horario%20na%20Barbearia%20Viegas."
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium transition-all hover:scale-105 ${s.buttonPrimary}`}
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Marcar pelo WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
