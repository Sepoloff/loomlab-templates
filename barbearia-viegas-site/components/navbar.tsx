"use client"

import { useState } from "react"
import { useConceptTheme, conceptStyles } from "@/lib/concept-context"
import { Menu, X, Scissors } from "lucide-react"

const links = [
  { href: "#servicos", label: "Servicos" },
  { href: "#equipa", label: "Equipa" },
  { href: "#galeria", label: "Galeria" },
  { href: "#testemunhos", label: "Testemunhos" },
  { href: "#horario", label: "Horario" },
  { href: "#contactos", label: "Contactos" },
]

export function Navbar() {
  const { concept } = useConceptTheme()
  const s = conceptStyles(concept)
  const [open, setOpen] = useState(false)

  const isMinimal = concept === "minimal"
  const textColor = isMinimal ? "text-[#2a2520]" : "text-foreground"
  const accentColor = isMinimal ? "text-[#8B7355]" : "text-primary"

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 ${s.navStyle} transition-all duration-500`}>
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <Scissors className={`h-6 w-6 ${accentColor} transition-transform group-hover:rotate-45`} />
          <div className="flex flex-col">
            <span className={`${s.headingFont} text-lg font-bold ${textColor} leading-none`}>
              Barbearia
            </span>
            <span className={`${s.headingFont} text-lg ${accentColor} leading-none`}>
              Viegas
            </span>
          </div>
        </a>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm ${concept === "urbano" ? "uppercase tracking-wider font-bold" : "tracking-wide"} ${isMinimal ? "text-[#2a2520]/70 hover:text-[#8B7355]" : "text-muted-foreground hover:text-primary"} transition-colors`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#marcar"
            className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${s.buttonPrimary}`}
          >
            Marcar agora
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className={`lg:hidden p-2 ${textColor}`}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className={`lg:hidden ${isMinimal ? "bg-[#faf9f6] border-t border-[#e5e0d8]" : "bg-background border-t border-border"} px-6 py-6`}>
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`text-base ${isMinimal ? "text-[#2a2520]/80 hover:text-[#8B7355]" : "text-muted-foreground hover:text-primary"} transition-colors`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#marcar"
              onClick={() => setOpen(false)}
              className={`mt-2 inline-block text-center px-5 py-3 rounded-lg text-sm font-medium transition-all ${s.buttonPrimary}`}
            >
              Marcar agora
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
