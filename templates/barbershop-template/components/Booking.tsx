'use client'

import { useState } from 'react'
import { Button } from './ui/Button'

export function Booking() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'corte-de-cabelo',
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
    alert('Pedido de marcação enviado! Entraremos em contacto brevemente.')
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: 'corte-de-cabelo',
      date: '',
      time: '',
    })
  }

  const services = [
    'Corte de Cabelo',
    'Aparo de Barba',
    'Penteado',
    'Barbear Quente',
    'Lavagem de Cabelo',
    'Coloração',
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
  ]

  return (
    <section id="booking" className="py-20 bg-dark-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-gold-500 text-sm font-semibold uppercase tracking-wider mb-2">
            Reserve o Seu Lugar
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Marcar uma <span className="gradient-text">Consulta</span>
          </h2>
          <p className="text-dark-300">
            Preencha o formulário abaixo e confirmamos a sua marcação brevemente.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-dark-900 rounded-lg p-8 border border-dark-700"
        >
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {/* Name */}
            <div>
              <label className="block text-white font-semibold mb-2">
                Nome Completo
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded text-white focus:border-gold-500 focus:outline-none transition-colors"
                placeholder="João Silva"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-white font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded text-white focus:border-gold-500 focus:outline-none transition-colors"
                placeholder="joao@exemplo.com"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-white font-semibold mb-2">
                Telefone
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded text-white focus:border-gold-500 focus:outline-none transition-colors"
                placeholder="+351 912 345 678"
              />
            </div>

            {/* Service */}
            <div>
              <label className="block text-white font-semibold mb-2">
                Serviço
              </label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded text-white focus:border-gold-500 focus:outline-none transition-colors"
              >
                {services.map((service) => (
                  <option
                    key={service}
                    value={service.toLowerCase().replace(/ /g, '-')}
                    className="bg-dark-900"
                  >
                    {service}
                  </option>
                ))}
              </select>
            </div>

            {/* Date */}
            <div>
              <label className="block text-white font-semibold mb-2">
                Data Preferida
              </label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded text-white focus:border-gold-500 focus:outline-none transition-colors"
              />
            </div>

            {/* Time */}
            <div>
              <label className="block text-white font-semibold mb-2">
                Horário Preferido
              </label>
              <select
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded text-white focus:border-gold-500 focus:outline-none transition-colors"
              >
                <option value="">Selecionar hora</option>
                {timeSlots.map((slot) => (
                  <option key={slot} value={slot} className="bg-dark-900">
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
        </form>
      </div>
    </section>
  )
}
