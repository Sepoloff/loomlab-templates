import type { Metadata } from 'next'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { WhatsAppButton } from '@/components/WhatsAppButton'
import './globals.css'

export const metadata: Metadata = {
  title: 'Premium Salon | Beauty & Wellness Services',
  description: 'Discover elegant beauty and wellness services. Premium salon treatments including manicure, pedicure, hair, nails, and spa services.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-light-50 text-light-900">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
