"use client"

import { useConceptTheme, conceptStyles } from "@/lib/concept-context"
import { Scissors, Instagram, Facebook, MapPin } from "lucide-react"

export function Footer() {
  const { concept } = useConceptTheme()
  const s = conceptStyles(concept)
  const isMinimal = concept === "minimal"

  return (
    <footer className={`${isMinimal ? "bg-[#2a2520]" : "bg-background"} ${isMinimal ? "border-t border-[#3a3530]" : "border-t border-border"}`}>
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Scissors className={`h-6 w-6 ${isMinimal ? "text-[#8B7355]" : "text-primary"}`} />
              <div className="flex flex-col">
                <span className={`${s.headingFont} text-lg font-bold ${isMinimal ? "text-[#faf9f6]" : "text-foreground"} leading-none`}>
                  Barbearia
                </span>
                <span className={`${s.headingFont} text-lg ${isMinimal ? "text-[#8B7355]" : "text-primary"} leading-none`}>
                  Viegas
                </span>
              </div>
            </div>
            <p className={`text-sm leading-relaxed max-w-xs ${isMinimal ? "text-[#faf9f6]/50" : "text-muted-foreground"}`}>
              Barbearia de referencia em Mangualde. Dedicacao, profissionalismo e paixao pela arte do barbeiro desde 2010.
            </p>
            <div className="flex items-center gap-3 mt-6">
              <a
                href="#"
                aria-label="Instagram"
                className={`p-2.5 rounded-full border transition-colors ${
                  isMinimal
                    ? "border-[#3a3530] text-[#8B7355] hover:bg-[#8B7355] hover:text-[#faf9f6]"
                    : "border-border text-primary hover:bg-primary hover:text-primary-foreground"
                }`}
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className={`p-2.5 rounded-full border transition-colors ${
                  isMinimal
                    ? "border-[#3a3530] text-[#8B7355] hover:bg-[#8B7355] hover:text-[#faf9f6]"
                    : "border-border text-primary hover:bg-primary hover:text-primary-foreground"
                }`}
              >
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className={`text-sm uppercase tracking-widest font-medium mb-6 ${isMinimal ? "text-[#8B7355]" : "text-primary"}`}>
              Navegacao
            </h4>
            <div className="flex flex-col gap-3">
              {[
                { href: "#servicos", label: "Servicos" },
                { href: "#equipa", label: "Equipa" },
                { href: "#galeria", label: "Galeria" },
                { href: "#testemunhos", label: "Testemunhos" },
                { href: "#horario", label: "Horario" },
                { href: "#contactos", label: "Contactos" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`text-sm transition-colors ${
                    isMinimal
                      ? "text-[#faf9f6]/50 hover:text-[#8B7355]"
                      : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact info */}
          <div>
            <h4 className={`text-sm uppercase tracking-widest font-medium mb-6 ${isMinimal ? "text-[#8B7355]" : "text-primary"}`}>
              Contactos
            </h4>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <MapPin className={`h-4 w-4 mt-0.5 flex-shrink-0 ${isMinimal ? "text-[#8B7355]" : "text-primary"}`} />
                <p className={`text-sm ${isMinimal ? "text-[#faf9f6]/50" : "text-muted-foreground"}`}>
                  R. 25 de Abril 125
                  <br />
                  3530-140 Mangualde
                </p>
              </div>
              <p className={`text-sm ${isMinimal ? "text-[#faf9f6]/50" : "text-muted-foreground"}`}>
                Tel: +351 232 622 000
              </p>
              <p className={`text-sm ${isMinimal ? "text-[#faf9f6]/50" : "text-muted-foreground"}`}>
                geral@barbeariaviegas.pt
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className={`mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 ${
          isMinimal ? "border-t border-[#3a3530]" : "border-t border-border"
        }`}>
          <p className={`text-xs ${isMinimal ? "text-[#faf9f6]/30" : "text-muted-foreground/60"}`}>
            {`\u00A9 ${new Date().getFullYear()} Barbearia Viegas. Todos os direitos reservados.`}
          </p>
          <p className={`text-xs ${isMinimal ? "text-[#faf9f6]/30" : "text-muted-foreground/60"}`}>
            No coracao de Mangualde desde 2010
          </p>
        </div>
      </div>
    </footer>
  )
}
