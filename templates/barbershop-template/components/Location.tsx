import { MapPin, Phone, Clock, Mail, MessageCircle } from 'lucide-react'

const hours = [
  { day: 'Segunda', time: '09:00 - 18:00', open: true },
  { day: 'Terça', time: '09:00 - 18:00', open: true },
  { day: 'Quarta', time: '09:00 - 18:00', open: true },
  { day: 'Quinta', time: '09:00 - 18:00', open: true },
  { day: 'Sexta', time: '09:00 - 18:00', open: true },
  { day: 'Sábado', time: '09:00 - 17:00', open: true },
  { day: 'Domingo', time: 'Fechado', open: false },
]

export function Location() {
  const today = new Date().getDay() // 0=Sun, 1=Mon, ...
  // Map JS day to our array (Mon=0...Sun=6)
  const todayIndex = today === 0 ? 6 : today - 1

  return (
    <section className="py-20 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-gold-500 text-sm font-semibold uppercase tracking-wider mb-2">
            Encontre-nos
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Visite a Nossa <span className="gradient-text">Localização</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Map */}
          <div className="rounded-xl overflow-hidden h-96 border border-dark-700 shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.1234567890!2d-74.0060!3d40.7128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQyJzQ2LjEiTiA3NMOiMDAzNicwLjAiVw!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            {/* Address */}
            <div className="flex gap-4 p-4 bg-dark-800 rounded-xl border border-dark-700">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-11 w-11 rounded-lg bg-gold-500/10">
                  <MapPin className="h-5 w-5 text-gold-500" />
                </div>
              </div>
              <div>
                <h3 className="text-base font-bold text-white mb-1">Morada</h3>
                <p className="text-dark-300 text-sm">
                  Rua Principal, 123<br />
                  Lisboa, 1000-001<br />
                  Portugal
                </p>
              </div>
            </div>

            {/* Hours */}
            <div className="p-4 bg-dark-800 rounded-xl border border-dark-700">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex items-center justify-center h-11 w-11 rounded-lg bg-gold-500/10 flex-shrink-0">
                  <Clock className="h-5 w-5 text-gold-500" />
                </div>
                <h3 className="text-base font-bold text-white">Horário</h3>
              </div>
              <div className="grid grid-cols-2 gap-1">
                {hours.map((h, i) => (
                  <div
                    key={h.day}
                    className={`flex justify-between text-sm px-3 py-1.5 rounded-lg ${
                      i === todayIndex
                        ? 'bg-gold-500/15 border border-gold-500/30'
                        : ''
                    }`}
                  >
                    <span className={`font-medium ${i === todayIndex ? 'text-gold-500' : 'text-dark-300'}`}>
                      {h.day}
                      {i === todayIndex && <span className="ml-1 text-xs">(hoje)</span>}
                    </span>
                    <span className={h.open ? 'text-dark-200' : 'text-dark-500'}>
                      {h.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Buttons */}
            <div className="grid grid-cols-3 gap-3">
              <a
                href="https://wa.me/351912345678"
                className="flex flex-col items-center gap-2 p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-xl hover:bg-emerald-500/20 hover:border-emerald-500/40 transition-all duration-200 text-emerald-400 hover:text-emerald-300"
              >
                <MessageCircle className="w-5 h-5" />
                <span className="text-xs font-semibold">WhatsApp</span>
              </a>
              <a
                href="tel:+351912345678"
                className="flex flex-col items-center gap-2 p-3 bg-gold-500/10 border border-gold-500/20 rounded-xl hover:bg-gold-500/20 hover:border-gold-500/40 transition-all duration-200 text-gold-500 hover:text-gold-400"
              >
                <Phone className="w-5 h-5" />
                <span className="text-xs font-semibold">Ligar</span>
              </a>
              <a
                href="mailto:info@barbeariapremium.pt"
                className="flex flex-col items-center gap-2 p-3 bg-dark-800 border border-dark-700 rounded-xl hover:border-gold-500/30 transition-all duration-200 text-dark-300 hover:text-gold-500"
              >
                <Mail className="w-5 h-5" />
                <span className="text-xs font-semibold">Email</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
