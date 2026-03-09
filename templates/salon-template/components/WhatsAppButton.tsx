'use client'

import { MessageCircle } from 'lucide-react'

export function WhatsAppButton() {
  const phoneNumber = '+351912345678' // Substituir pelo número real de WhatsApp
  const message = encodeURIComponent(
    'Olá! Gostaria de marcar uma consulta no vosso salão de beleza.'
  )
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`

  return (
    <a
      href={whatsappURL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-40 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full p-4 shadow-lg hover:shadow-[0_0_20px_rgba(16,185,129,0.5)] hover:scale-110 transition-all duration-300 active:scale-95"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  )
}
