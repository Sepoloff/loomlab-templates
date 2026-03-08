import { MapPin, Phone, Clock, Mail, Facebook, Instagram, Twitter } from 'lucide-react'

export function Footer() {
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
          <div className="rounded-lg overflow-hidden h-96 border border-rose-200">
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
          <div className="space-y-8">
            {/* Address */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-rose-100">
                  <MapPin className="h-6 w-6 text-rose-500" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-light-900 mb-2">
                  Morada
                </h3>
                <p className="text-light-600">
                  Avenida da Beleza, 456<br />
                  Lisboa, 1000-001<br />
                  Portugal
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-rose-100">
                  <Phone className="h-6 w-6 text-rose-500" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-light-900 mb-2">
                  Telefone
                </h3>
                <p className="text-light-600">
                  <a
                    href="tel:+351912345678"
                    className="hover:text-rose-500 transition-colors"
                  >
                    +351 912 345 678
                  </a>
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-rose-100">
                  <Mail className="h-6 w-6 text-rose-500" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-light-900 mb-2">
                  Email
                </h3>
                <p className="text-light-600">
                  <a
                    href="mailto:info@belezabemestar.pt"
                    className="hover:text-rose-500 transition-colors"
                  >
                    info@belezabemestar.pt
                  </a>
                </p>
              </div>
            </div>

            {/* Hours */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-rose-100">
                  <Clock className="h-6 w-6 text-rose-500" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-light-900 mb-2">
                  Horário
                </h3>
                <div className="text-light-600 space-y-1">
                  <p>Segunda - Sexta: 10:00 - 19:00</p>
                  <p>Sábado: 10:00 - 18:00</p>
                  <p>Domingo: 11:00 - 17:00</p>
                </div>
              </div>
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
                Beleza & Bem-estar
              </h3>
              <p className="text-light-600">
                Serviços premium de beleza e bem-estar para a mulher moderna.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-light-900 font-semibold mb-4">Links Rápidos</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#services" className="text-light-600 hover:text-rose-500 transition-colors">
                    Serviços
                  </a>
                </li>
                <li>
                  <a href="#portfolio" className="text-light-600 hover:text-rose-500 transition-colors">
                    Portfólio
                  </a>
                </li>
                <li>
                  <a href="#staff" className="text-light-600 hover:text-rose-500 transition-colors">
                    Equipa
                  </a>
                </li>
                <li>
                  <a href="#booking" className="text-light-600 hover:text-rose-500 transition-colors">
                    Marcação
                  </a>
                </li>
              </ul>
            </div>

            {/* Loyalty */}
            <div>
              <h4 className="text-light-900 font-semibold mb-4">
                Programa de Fidelidade
              </h4>
              <ul className="space-y-2 text-light-600 text-sm">
                <li>• Descontos exclusivos para membros</li>
                <li>• Especiais de aniversário</li>
                <li>• Acesso antecipado a serviços</li>
                <li>• Pontos de recompensa</li>
              </ul>
            </div>

            {/* Social */}
            <div>
              <h4 className="text-light-900 font-semibold mb-4">Siga-nos</h4>
              <div className="flex gap-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light-600 hover:text-rose-500 transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light-600 hover:text-rose-500 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light-600 hover:text-rose-500 transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t border-rose-200 pt-8 flex flex-col md:flex-row justify-between items-center text-light-600 text-sm">
            <p>&copy; 2024 Beleza & Bem-estar. Todos os direitos reservados.</p>
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
