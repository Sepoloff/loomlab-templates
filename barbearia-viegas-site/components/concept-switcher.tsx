"use client"

import { useConceptTheme, conceptStyles, type Concept } from "@/lib/concept-context"

const concepts: { id: Concept; label: string; desc: string }[] = [
  { id: "classico", label: "Luxo Classico", desc: "Elegancia intemporal" },
  { id: "urbano", label: "Urbano Moderno", desc: "Ousado e contemporaneo" },
  { id: "minimal", label: "Minimal Clean", desc: "Pureza e requinte" },
]

export function ConceptSwitcher() {
  const { concept, setConcept } = useConceptTheme()
  const s = conceptStyles(concept)

  return (
    <div className="fixed top-4 right-4 z-[100]">
      <div className={`${concept === "minimal" ? "bg-[#faf9f6] border-[#e5e0d8] text-[#2a2520]" : "bg-card border-border text-foreground"} border rounded-xl p-2 shadow-2xl shadow-black/40`}>
        <p className={`text-[10px] uppercase tracking-[0.2em] px-3 pt-1 pb-2 ${concept === "minimal" ? "text-[#8B7355]" : "text-muted-foreground"}`}>
          Conceito visual
        </p>
        <div className="flex flex-col gap-1">
          {concepts.map((c) => (
            <button
              key={c.id}
              onClick={() => setConcept(c.id)}
              className={`px-4 py-2 rounded-lg text-left transition-all duration-300 text-sm ${
                concept === c.id
                  ? concept === "minimal"
                    ? "bg-[#8B7355] text-[#faf9f6]"
                    : `${s.accentBg} text-primary-foreground`
                  : concept === "minimal"
                    ? "hover:bg-[#8B7355]/10 text-[#2a2520]"
                    : "hover:bg-secondary text-foreground"
              }`}
            >
              <span className="font-medium">{c.label}</span>
              <span className={`block text-[10px] mt-0.5 ${
                concept === c.id
                  ? concept === "minimal" ? "text-[#faf9f6]/70" : "text-primary-foreground/70"
                  : concept === "minimal" ? "text-[#8B7355]" : "text-muted-foreground"
              }`}>
                {c.desc}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
