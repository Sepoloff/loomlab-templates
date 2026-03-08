import { MapPin, Phone, Clock, Mail, Facebook, Instagram, Twitter, MessageCircle } from 'lucide-react'

const hours = [
  { day: 'Segunda', time: '10:00 - 19:00', open: true },
  { day: 'Terça', time: '10:00 - 19:00', open: true },
  { day: 'Quarta', time: '10:00 - 19:00', open: true },
  { day: 'Quinta', time: '10:00 - 19:00', open: true },
  { day: 'Sexta', time: '10:00 - 19:00', open: true },
  { day: 'Sábado', time: '10:00 - 18:00', open: true },
  { day: 'Domingo', time: '11:00 - 17:00', open: true },
]

export function Footer() {
  const today = new Date().getDay()
  const todayIndex = today === 0 ? 6 : today - 1

  return (
    <section className="py-20 bg-light-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-rose-500 text-sm font-semibold uppercase tracking-wider mb-2">
            Encontre-nos
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-light-900 mb-4">
            Visite o Nosso <span className="gradient-text">Salão</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Map */}
          <div className="rounded-xl overflow-hidden h-96 border border-rose-200 shadow-md">
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
          <div className="space-y-4">
            {/* Address */}
            <div className="flex gap-4 p-4 bg-white rounded-xl border border-rose-100 shadow-sm">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-11 w-11 rounded-lg bg-rose-50">
                  <MapPin className="h-5 w-5 text-rose-500" />
                </div>
              </div>
              <div>
                <h3 className="text-base font-bold text-light-900 mb-1">Morada</h3>
                <p className="text-light-600 text-sm">
                  Avenida da Beleza, 456<br />
                  Lisboa, 1000-001<br />
                  Portugal
                </p>
              </div>
            </div>

            {/* Hours */}
            <div className="p-4 bg-white rounded-xl border border-rose-100 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex items-center justify-center h-11 w-11 rounded-lg bg-rose-50 flex-shrink-0">
                  <Clock className="h-5 w-5 text-rose-500" />
                </div>
                <h3 className="text-base font-bold text-light-900">Horário</h3>
              </div>
              <div className="grid grid-cols-2 gap-1">
                {hours.map((h, i) => (
                  <div
                    key={h.day}
                    className={`flex justify-between text-sm px-3 py-1.5 rounded-lg ${
                      i === todayIndex
                        ? 'bg-rose-50 border border-rose-200'
                        : ''
                    }`}
                  >
                    <span className={`font-medium ${i === todayIndex ? 'text-rose-500' : 'text-light-700'}`}>
                      {h.day}
                      {i === todayIndex && <span className="ml-1 text-xs">(hoje)</span>}
                    </span>
                    <span className={h.open ? 'text-light-600' : 'text-light-400'}>
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
                className="flex flex-col items-center gap-2 p-3 bg-emerald-50 border border-emerald-200 rounded-xl hover:bg-emerald-100 hover:border-emerald-300 transition-all duration-200 text-emerald-600"
              >
                <MessageCircle className="w-5 h-5" />
                <span className="text-xs font-semibold">WhatsApp</span>
              </a>
              <a
                href="tel:+351912345678"
                className="flex flex-col items-center gap-2 p-3 bg-rose-50 border border-rose-200 rounded-xl hover:bg-rose-100 hover:border-rose-300 transition-all duration-200 text-rose-500"
              >
                <Phone className="w-5 h-5" />
                <span className="text-xs font-semibold">Ligar</span>
              </a>
              <a
                href="mailto:info@belezabemestar.pt"
                className="flex flex-col items-center gap-2 p-3 bg-light-100 border border-light-200 rounded-xl hover:border-rose-300 hover:text-rose-500 transition-all duration-200 text-light-600"
              >
                <Mail className="w-5 h-5" />
                <span className="text-xs font-semibold">Email</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-rose-200 mt-16 pt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div>
              <h3 className="text-2xl font-bold gradient-text mb-4">
                Beleza &amp; Bem-estar
              </h3>
              <p className="text-light-600 text-sm leading-relaxed">
                Serviços premium de beleza e bem-estar para a mulher moderna.
              </p>
              <div className="flex gap-3 mt-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-rose-50 rounded-full flex items-center justify-center text-rose-400 hover:bg-rose-500 hover:text-white transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-rose-50 rounded-full flex items-center justify-center text-rose-400 hover:bg-rose-500 hover:text-white transition-colors"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-rose-50 rounded-full flex items-center justify-center text-rose-400 hover:bg-rose-500 hover:text-white transition-colors"
                >
                  <Twitter className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-light-900 font-semibold mb-4">Links Rápidos</h4>
              <ul className="space-y-2">
                {[
                  { href: '#services', label: 'Serviços' },
                  { href: '#portfolio', label: 'Portfólio' },
                  { href: '#staff', label: 'Equipa' },
                  { href: '#booking', label: 'Marcação' },
                ].map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="text-light-600 hover:text-rose-500 transition-colors text-sm flex items-center gap-1 group">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-200 group-hover:bg-rose-500 transition-colors" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Loyalty */}
            <div>
              <h4 className="text-light-900 font-semibold mb-4">
                Programa de Fidelidade
              </h4>
              <ul className="space-y-2 text-light-600 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-rose-400 mt-0.5">✦</span>
                  Descontos exclusivos para membros
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-400 mt-0.5">✦</span>
                  Especiais de aniversário
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-400 mt-0.5">✦</span>
                  Acesso antecipado a serviços
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-400 mt-0.5">✦</span>
                  Pontos de recompensa
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-light-900 font-semibold mb-4">Contacto</h4>
              <ul className="space-y-2 text-light-600 text-sm">
                <li className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-rose-400 flex-shrink-0" />
                  Avenida da Beleza, 456, Lisboa
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-rose-400 flex-shrink-0" />
                  <a href="tel:+351912345678" className="hover:text-rose-500 transition-colors">
                    +351 912 345 678
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-rose-400 flex-shrink-0" />
                  <a href="mailto:info@belezabemestar.pt" className="hover:text-rose-500 transition-colors truncate">
                    info@belezabemestar.pt
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t border-rose-200 pt-8 flex flex-col md:flex-row justify-between items-center text-light-500 text-sm">
            <p>&copy; 2024 Beleza &amp; Bem-estar. Todos os direitos reservados.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-rose-500 transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="hover:text-rose-500 transition-colors">
                Termos de Serviço
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
