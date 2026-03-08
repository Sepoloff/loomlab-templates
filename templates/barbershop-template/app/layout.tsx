import type { Metadata } from 'next'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { WhatsAppButton } from '@/components/WhatsAppButton'
import './globals.css'

export const metadata: Metadata = {
  title: 'Barbearia Premium | Serviços Especializados de Grooming',
  description: 'Experiencie grooming premium na nossa barbearia. Cortes de cabelo, aparos de barba e serviços de styling por especialistas.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-PT">
      <body className="bg-dark-900 text-dark-100">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
