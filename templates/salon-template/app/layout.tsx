import type { Metadata } from 'next'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { WhatsAppButton } from '@/components/WhatsAppButton'
import './globals.css'

export const metadata: Metadata = {
  title: 'Beleza & Bem-estar | Serviços de Salão Premium',
  description: 'Descubra serviços elegantes de beleza e bem-estar. Tratamentos premium de salão incluindo manicure, pedicure, cabelo, unhas e spa.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-PT">
      <body className="bg-light-50 text-light-900">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
