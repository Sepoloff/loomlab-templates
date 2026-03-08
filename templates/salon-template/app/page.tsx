import { Hero } from '@/components/Hero'
import { Services } from '@/components/Services'
import { Portfolio } from '@/components/Portfolio'
import { Staff } from '@/components/Staff'
import { Testimonials } from '@/components/Testimonials'
import { SpecialOffers } from '@/components/SpecialOffers'
import { Booking } from '@/components/Booking'
import { Footer as ContactFooter } from '@/components/ContactSection'

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Portfolio />
      <Staff />
      <SpecialOffers />
      <Testimonials />
      <Booking />
      <ContactFooter />
    </>
  )
}
