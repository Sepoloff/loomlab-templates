'use client'

import { useState } from 'react'
import { Button } from './ui/Button'

export function Booking() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'manicure',
    date: '',
    time: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Formulário submetido:', formData)
    alert(
      'Pedido de marcação enviado! Entraremos em contacto brevemente para confirmar.'
    )
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: 'manicure',
      date: '',
      time: '',
    })
  }

  const services = [
    'Manicure',
    'Pedicure',
    'Penteado',
    'Nail Art',
    'Tratamento Spa',
    'Massagem',
  ]

  const timeSlots = [
    '09:00',
    '10:00',
    '11:00',
    '12:00',
    '14:00',
    '15:00',
    '16:00',
    '17:00',
    '18:00',
  ]

  return (
    <section id="booking" className="py-20 bg-gradient-to-r from-rose-50 to-cream-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-rose-500 text-sm font-semibold uppercase tracking-wider mb-2">
            Reserve o Seu Lugar
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-light-900 mb-4">
            Marcar a Sua <span className="gradient-text">Consulta</span>
          </h2>
          <p className="text-light-700">
            Agende a sua consulta de beleza perfeita em apenas alguns minutos.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-lg p-8 border border-rose-200 shadow-lg"
        >
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {/* Name */}
            <div>
              <label className="block text-light-900 font-semibold mb-2">
                Nome Completo
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-light-50 border border-rose-100 rounded-lg text-light-900 placeholder-light-400 focus:border-rose-500 focus:outline-none focus:ring-2 focus:ring-rose-200 transition-colors"
                placeholder="Sara Andrade"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-light-900 font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-light-50 border border-rose-100 rounded-lg text-light-900 placeholder-light-400 focus:border-rose-500 focus:outline-none focus:ring-2 focus:ring-rose-200 transition-colors"
                placeholder="sara@exemplo.com"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-light-900 font-semibold mb-2">
                Telefone
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-light-50 border border-rose-100 rounded-lg text-light-900 placeholder-light-400 focus:border-rose-500 focus:outline-none focus:ring-2 focus:ring-rose-200 transition-colors"
                placeholder="+351 912 345 678"
              />
            </div>

            {/* Service */}
            <div>
              <label className="block text-light-900 font-semibold mb-2">
                Serviço
              </label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-light-50 border border-rose-100 rounded-lg text-light-900 focus:border-rose-500 focus:outline-none focus:ring-2 focus:ring-rose-200 transition-colors"
              >
                {services.map((service) => (
                  <option
                    key={service}
                    value={service.toLowerCase().replace(/ /g, '-')}
                    className="bg-white"
                  >
                    {service}
                  </option>
                ))}
              </select>
            </div>

            {/* Date */}
            <div>
              <label className="block text-light-900 font-semibold mb-2">
                Data Preferida
              </label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-light-50 border border-rose-100 rounded-lg text-light-900 focus:border-rose-500 focus:outline-none focus:ring-2 focus:ring-rose-200 transition-colors"
              />
            </div>

            {/* Time */}
            <div>
              <label className="block text-light-900 font-semibold mb-2">
                Horário Preferido
              </label>
              <select
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-light-50 border border-rose-100 rounded-lg text-light-900 focus:border-rose-500 focus:outline-none focus:ring-2 focus:ring-rose-200 transition-colors"
              >
                <option value="">Selecionar hora</option>
                {timeSlots.map((slot) => (
                  <option key={slot} value={slot} className="bg-white">
                    {slot}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Submit Button */}
          <Button type="submit" variant="primary" size="lg" className="w-full">
            Confirmar Marcação
          </Button>

          <p className="text-center text-light-600 text-sm mt-4">
            Entraremos em contacto dentro de 24 horas para confirmar a sua marcação.
          </p>
        </form>
      </div>
    </section>
  )
}
