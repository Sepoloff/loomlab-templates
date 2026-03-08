import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Barbearia Viegas | Mangualde',
  description:
    'Barbearia premium no coração de Mangualde. Cortes clássicos e modernos, barba e tratamentos. Atendimento por marcação.',
  keywords: ['barbearia', 'Mangualde', 'corte de cabelo', 'barba', 'barbeiro', 'Viegas'],
  openGraph: {
    title: 'Barbearia Viegas | Mangualde',
    description: 'Barbearia premium no coração de Mangualde.',
    type: 'website',
    locale: 'pt_PT',
  },
}

export const viewport: Viewport = {
  themeColor: '#1a1a1a',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-PT" className="dark">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
