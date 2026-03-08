import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-dark-950 border-t border-dark-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-4">Barbearia Premium</h3>
            <p className="text-dark-400">
              Serviços de grooming premium para o homem moderno.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-dark-400 hover:text-gold-500 transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-dark-400 hover:text-gold-500 transition-colors">
                  Galeria
                </a>
              </li>
              <li>
                <a href="#team" className="text-dark-400 hover:text-gold-500 transition-colors">
                  Equipa
                </a>
              </li>
              <li>
                <a href="#booking" className="text-dark-400 hover:text-gold-500 transition-colors">
                  Marcação
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contacto</h4>
            <ul className="space-y-2 text-dark-400">
              <li>Rua Principal, 123</li>
              <li>Lisboa, 1000-001</li>
              <li>
                <a href="tel:+351912345678" className="hover:text-gold-500 transition-colors">
                  +351 912 345 678
                </a>
              </li>
              <li>
                <a href="mailto:info@barbeariapremium.pt" className="hover:text-gold-500 transition-colors">
                  info@barbeariapremium.pt
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white font-semibold mb-4">Siga-nos</h4>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark-400 hover:text-gold-500 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark-400 hover:text-gold-500 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark-400 hover:text-gold-500 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark-400 hover:text-gold-500 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-dark-800 pt-8 flex flex-col md:flex-row justify-between items-center text-dark-400 text-sm">
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
