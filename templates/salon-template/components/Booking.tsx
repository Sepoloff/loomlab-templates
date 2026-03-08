'use client'

import { useState } from 'react'
import { CheckCircle, Calendar, Clock } from 'lucide-react'

export function Booking() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'manicure',
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
        service: 'manicure',
        date: '',
        time: '',
      })
    }, 5000)
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

  const inputClass =
    'w-full px-4 py-3 bg-light-50 border border-rose-100 rounded-lg text-light-900 placeholder-light-400 focus:border-rose-500 focus:outline-none focus:ring-2 focus:ring-rose-200 transition-all duration-200'

  return (
    <section id="booking" className="py-20 bg-gradient-to-br from-rose-50 to-pink-50">
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
        <div className="bg-white rounded-2xl p-8 border border-rose-100 shadow-xl shadow-rose-500/5">
          {submitted ? (
            /* Success State */
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <div className="w-20 h-20 bg-rose-50 rounded-full flex items-center justify-center mb-6">
                <CheckCircle className="w-10 h-10 text-rose-500" />
              </div>
              <h3 className="text-2xl font-bold text-light-900 mb-3">
                Marcação Enviada!
              </h3>
              <p className="text-light-600 max-w-sm">
                Obrigado! Entraremos em contacto brevemente para confirmar a sua marcação de beleza.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-5 mb-5">
                {/* Name */}
                <div>
                  <label className="block text-light-900 text-sm font-semibold mb-2">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={inputClass}
                    placeholder="Sara Andrade"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-light-900 text-sm font-semibold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={inputClass}
                    placeholder="sara@exemplo.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-light-900 text-sm font-semibold mb-2">
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
                  <label className="block text-light-900 text-sm font-semibold mb-2">
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
                        className="bg-white"
                      >
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Date */}
                <div>
                  <label className="block text-light-900 text-sm font-semibold mb-2">
                    <Calendar className="inline w-4 h-4 mr-1 text-rose-500" />
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
                  <label className="block text-light-900 text-sm font-semibold mb-2">
                    <Clock className="inline w-4 h-4 mr-1 text-rose-500" />
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
                      <option key={slot} value={slot} className="bg-white">
                        {slot}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-4 px-8 bg-rose-500 hover:bg-rose-600 text-white font-bold text-lg rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-rose-500/30 active:scale-[0.98]"
              >
                Confirmar Marcação
              </button>

              <p className="text-center text-light-500 text-sm mt-4">
                Entraremos em contacto dentro de 24 horas para confirmar a sua marcação.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
