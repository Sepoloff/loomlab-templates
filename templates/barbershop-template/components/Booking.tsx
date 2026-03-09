'use client'

import { useState } from 'react'
import { CheckCircle, Calendar, Clock } from 'lucide-react'

export function Booking() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'corte-de-cabelo',
    date: '',
    time: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Formulário submetido:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: 'corte-de-cabelo',
        date: '',
        time: '',
      })
    }, 5000)
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

  const inputClass =
    'w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-lg text-white placeholder-dark-500 focus:border-gold-500 focus:outline-none focus:ring-2 focus:ring-gold-500/20 transition-all duration-200'

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
        <div className="bg-dark-900 rounded-2xl p-5 sm:p-8 border border-dark-700 shadow-2xl">
          {submitted ? (
            /* Success State */
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <div className="w-20 h-20 bg-gold-500/10 rounded-full flex items-center justify-center mb-6">
                <CheckCircle className="w-10 h-10 text-gold-500" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                Marcação Enviada!
              </h3>
              <p className="text-dark-300 max-w-sm">
                Obrigado! Entraremos em contacto brevemente para confirmar a sua marcação.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-5 mb-5">
                {/* Name */}
                <div>
                  <label className="block text-white text-sm font-semibold mb-2">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={inputClass}
                    placeholder="João Silva"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-white text-sm font-semibold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={inputClass}
                    placeholder="joao@exemplo.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-white text-sm font-semibold mb-2">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className={inputClass}
                    placeholder="+351 912 345 678"
                  />
                </div>

                {/* Service */}
                <div>
                  <label className="block text-white text-sm font-semibold mb-2">
                    Serviço
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className={inputClass}
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
                  <label className="block text-white text-sm font-semibold mb-2">
                    <Calendar className="inline w-4 h-4 mr-1 text-gold-500" />
                    Data Preferida
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className={inputClass}
                  />
                </div>

                {/* Time */}
                <div>
                  <label className="block text-white text-sm font-semibold mb-2">
                    <Clock className="inline w-4 h-4 mr-1 text-gold-500" />
                    Horário Preferido
                  </label>
                  <select
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                    className={inputClass}
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
              <button
                type="submit"
                className="w-full py-4 px-8 bg-gold-500 hover:bg-gold-400 text-dark-900 font-bold text-lg rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-gold-500/30 active:scale-[0.98]"
              >
                Confirmar Marcação
              </button>

              <p className="text-center text-dark-500 text-sm mt-4">
                Entraremos em contacto dentro de 24 horas para confirmar a sua marcação.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
