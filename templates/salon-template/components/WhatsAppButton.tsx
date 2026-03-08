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
      className="fixed bottom-8 right-8 z-40 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 animate-bounce"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  )
}
