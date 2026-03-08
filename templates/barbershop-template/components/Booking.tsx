'use client'

import { useState } from 'react'
import { Button } from './ui/Button'

export function Booking() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'haircut',
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
    console.log('Form submitted:', formData)
    // Here you would typically send the data to a backend
    alert('Booking request submitted! We will contact you shortly.')
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: 'haircut',
      date: '',
      time: '',
    })
  }

  const services = [
    'Haircut',
    'Beard Trim',
    'Hair Styling',
    'Hot Shave',
    'Hair Wash',
    'Hair Coloring',
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
            Reserve Your Spot
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Book an <span className="gradient-text">Appointment</span>
          </h2>
          <p className="text-dark-300">
            Fill out the form below and we'll confirm your booking shortly.
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
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded text-white focus:border-gold-500 focus:outline-none transition-colors"
                placeholder="John Doe"
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
                placeholder="john@example.com"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-white font-semibold mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded text-white focus:border-gold-500 focus:outline-none transition-colors"
                placeholder="+1 (555) 123-4567"
              />
            </div>

            {/* Service */}
            <div>
              <label className="block text-white font-semibold mb-2">
                Service
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
                    value={service.toLowerCase()}
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
                Preferred Date
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
                Preferred Time
              </label>
              <select
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded text-white focus:border-gold-500 focus:outline-none transition-colors"
              >
                <option value="">Select time</option>
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
            Confirm Booking
          </Button>
        </form>
      </div>
    </section>
  )
}
