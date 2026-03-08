"use client"

import { type ReactNode } from "react"
import { useConceptTheme } from "@/lib/concept-context"

export function PageWrapper({ children }: { children: ReactNode }) {
  const { concept } = useConceptTheme()

  // For the minimal concept, override the body-level background
  const bgClass =
    concept === "minimal" ? "bg-[#faf9f6] text-[#2a2520]" : "bg-background text-foreground"

  return (
    <div className={`min-h-screen transition-colors duration-500 ${bgClass}`}>
      {children}
    </div>
  )
}
