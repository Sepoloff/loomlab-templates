import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-dark-950 border-t border-dark-800 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-4">Barbearia Premium</h3>
            <p className="text-dark-400 text-sm leading-relaxed">
              Serviços de grooming premium para o homem moderno. Qualidade, estilo e tradição.
            </p>
            <div className="flex gap-3 mt-5">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-dark-800 rounded-full flex items-center justify-center text-dark-400 hover:bg-gold-500 hover:text-dark-900 transition-all duration-200"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-dark-800 rounded-full flex items-center justify-center text-dark-400 hover:bg-gold-500 hover:text-dark-900 transition-all duration-200"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-dark-800 rounded-full flex items-center justify-center text-dark-400 hover:bg-gold-500 hover:text-dark-900 transition-all duration-200"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-5">Links Rápidos</h4>
            <ul className="space-y-2.5">
              {[
                { href: '#services', label: 'Serviços' },
                { href: '#gallery', label: 'Galeria' },
                { href: '#team', label: 'Equipa' },
                { href: '#booking', label: 'Marcação' },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-dark-400 hover:text-gold-500 transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-dark-700 group-hover:bg-gold-500 transition-colors" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-5">Serviços</h4>
            <ul className="space-y-2.5">
              {[
                'Corte de Cabelo',
                'Aparo de Barba',
                'Barbear Quente',
                'Penteado',
                'Coloração',
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-dark-400 hover:text-gold-500 transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-dark-700 group-hover:bg-gold-500 transition-colors" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-5">Contacto</h4>
            <ul className="space-y-3 text-dark-400 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-gold-500 mt-0.5 flex-shrink-0" />
                Rua Principal, 123<br />Lisboa, 1000-001
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-gold-500 flex-shrink-0" />
                <a href="tel:+351912345678" className="hover:text-gold-500 transition-colors">
                  +351 912 345 678
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-gold-500 flex-shrink-0" />
                <a href="mailto:info@barbeariapremium.pt" className="hover:text-gold-500 transition-colors truncate">
                  info@barbeariapremium.pt
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-dark-800 pt-8 flex flex-col md:flex-row justify-between items-center text-dark-500 text-sm">
          <p>&copy; 2024 Barbearia Premium. Todos os direitos reservados.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-gold-500 transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="hover:text-gold-500 transition-colors">
              Termos de Serviço
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
