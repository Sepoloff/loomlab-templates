"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

export type Concept = "classico" | "urbano" | "minimal"

interface ConceptContextType {
  concept: Concept
  setConcept: (c: Concept) => void
}

const ConceptContext = createContext<ConceptContextType>({
  concept: "classico",
  setConcept: () => {},
})

export function useConceptTheme() {
  return useContext(ConceptContext)
}

export function ConceptProvider({ children }: { children: ReactNode }) {
  const [concept, setConcept] = useState<Concept>("classico")
  return (
    <ConceptContext.Provider value={{ concept, setConcept }}>
      {children}
    </ConceptContext.Provider>
  )
}

/* ---------- styling helpers per concept ---------- */

export function conceptStyles(concept: Concept) {
  switch (concept) {
    case "classico":
      return {
        headingFont: "font-serif",
        bodyFont: "font-sans",
        bg: "bg-background",
        cardBg: "bg-card",
        accent: "text-primary",
        accentBg: "bg-primary",
        border: "border-border",
        heroOverlay: "from-background/90 via-background/70 to-background/40",
        badge: "bg-primary/10 text-primary border border-primary/30",
        sectionTitle: "font-serif text-4xl md:text-5xl lg:text-6xl tracking-tight",
        sectionSubtitle: "text-muted-foreground tracking-widest uppercase text-sm",
        buttonPrimary: "bg-primary text-primary-foreground hover:bg-primary/90",
        buttonOutline: "border-primary text-primary hover:bg-primary hover:text-primary-foreground",
        separator: "ornamental-divider text-primary",
        cardStyle: "border border-border bg-card rounded-lg",
        navStyle: "bg-background/80 backdrop-blur-xl border-b border-border",
      }
    case "urbano":
      return {
        headingFont: "font-sans",
        bodyFont: "font-sans",
        bg: "bg-background",
        cardBg: "bg-secondary",
        accent: "text-primary",
        accentBg: "bg-primary",
        border: "border-border",
        heroOverlay: "from-background via-background/80 to-transparent",
        badge: "bg-primary text-primary-foreground",
        sectionTitle: "font-sans text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter",
        sectionSubtitle: "text-primary font-bold uppercase text-sm tracking-[0.3em]",
        buttonPrimary: "bg-primary text-primary-foreground hover:bg-primary/90 uppercase tracking-wider font-bold",
        buttonOutline: "border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground uppercase tracking-wider font-bold",
        separator: "w-16 h-1 bg-primary mx-auto",
        cardStyle: "bg-secondary border-none rounded-none",
        navStyle: "bg-background/90 backdrop-blur-xl border-b-2 border-primary",
      }
    case "minimal":
      return {
        headingFont: "font-serif",
        bodyFont: "font-sans",
        bg: "bg-[#faf9f6]",
        cardBg: "bg-[#f5f3ef]",
        accent: "text-[#8B7355]",
        accentBg: "bg-[#8B7355]",
        border: "border-[#e5e0d8]",
        heroOverlay: "from-[#faf9f6]/95 via-[#faf9f6]/60 to-transparent",
        badge: "bg-[#8B7355]/10 text-[#8B7355]",
        sectionTitle: "font-serif text-4xl md:text-5xl lg:text-6xl font-light tracking-tight",
        sectionSubtitle: "text-[#8B7355] tracking-[0.4em] uppercase text-xs font-light",
        buttonPrimary: "bg-[#8B7355] text-[#faf9f6] hover:bg-[#7a6349]",
        buttonOutline: "border border-[#8B7355] text-[#8B7355] hover:bg-[#8B7355] hover:text-[#faf9f6]",
        separator: "w-12 h-px bg-[#8B7355]/40 mx-auto",
        cardStyle: "bg-[#f5f3ef] border border-[#e5e0d8] rounded-xl",
        navStyle: "bg-[#faf9f6]/90 backdrop-blur-xl border-b border-[#e5e0d8]",
      }
  }
}
