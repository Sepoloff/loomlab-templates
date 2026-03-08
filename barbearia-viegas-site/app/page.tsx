"use client"

import { ConceptProvider } from "@/lib/concept-context"
import { ConceptSwitcher } from "@/components/concept-switcher"
import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { TeamSection } from "@/components/team-section"
import { GallerySection } from "@/components/gallery-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ScheduleSection } from "@/components/schedule-section"
import { LocationSection } from "@/components/location-section"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { PageWrapper } from "@/components/page-wrapper"

export default function Home() {
  return (
    <ConceptProvider>
      <PageWrapper>
        <ConceptSwitcher />
        <Navbar />
        <main>
          <HeroSection />
          <ServicesSection />
          <TeamSection />
          <GallerySection />
          <TestimonialsSection />
          <ScheduleSection />
          <LocationSection />
        </main>
        <Footer />
        <WhatsAppButton />
      </PageWrapper>
    </ConceptProvider>
  )
}
