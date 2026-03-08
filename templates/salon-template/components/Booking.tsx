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
    console.log('Form submitted:', formData)
    // Here you would typically send the data to a backend
    alert(
      'Appointment request submitted! We will contact you shortly to confirm.'
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
    'Hair Styling',
    'Nail Art',
    'Spa Treatment',
    'Massage',
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
            Reserve Your Spot
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-light-900 mb-4">
            Book Your <span className="gradient-text">Appointment</span>
          </h2>
          <p className="text-light-700">
            Schedule your perfect beauty appointment in just a few minutes.
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
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-light-50 border border-rose-100 rounded-lg text-light-900 placeholder-light-400 focus:border-rose-500 focus:outline-none focus:ring-2 focus:ring-rose-200 transition-colors"
                placeholder="Sarah Anderson"
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
                placeholder="sarah@example.com"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-light-900 font-semibold mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-light-50 border border-rose-100 rounded-lg text-light-900 placeholder-light-400 focus:border-rose-500 focus:outline-none focus:ring-2 focus:ring-rose-200 transition-colors"
                placeholder="+1 (555) 123-4567"
              />
            </div>

            {/* Service */}
            <div>
              <label className="block text-light-900 font-semibold mb-2">
                Service
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
                    value={service.toLowerCase()}
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
                Preferred Date
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
                Preferred Time
              </label>
              <select
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-light-50 border border-rose-100 rounded-lg text-light-900 focus:border-rose-500 focus:outline-none focus:ring-2 focus:ring-rose-200 transition-colors"
              >
                <option value="">Select time</option>
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
            Confirm Appointment
          </Button>

          <p className="text-center text-light-600 text-sm mt-4">
            We will contact you within 24 hours to confirm your appointment.
          </p>
        </form>
      </div>
    </section>
  )
}
