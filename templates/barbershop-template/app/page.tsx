import { Hero } from '@/components/Hero'
import { Services } from '@/components/Services'
import { Gallery } from '@/components/Gallery'
import { Team } from '@/components/Team'
import { Testimonials } from '@/components/Testimonials'
import { Booking } from '@/components/Booking'
import { Location } from '@/components/Location'

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Gallery />
      <Team />
      <Testimonials />
      <Booking />
      <Location />
    </>
  )
}
