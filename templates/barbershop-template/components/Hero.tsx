import { Button } from './ui/Button'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="/images/barbershop/hero.jpg"
          alt="Barbershop background"
          className="w-full h-full object-cover opacity-40"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900/80 via-dark-900/40 to-dark-900/80" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fadeIn">
          <p className="text-gold-500 text-sm font-semibold uppercase tracking-wider mb-4">
            Bem-vindo à Excelência
          </p>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Serviços de <span className="gradient-text">Grooming</span> Premium
          </h1>
          <p className="text-lg md:text-xl text-dark-300 max-w-2xl mx-auto mb-10">
            Experiencie os melhores serviços de barbearia com especialistas dedicados ao seu look perfeito.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg">
              <a href="#booking">Marcar Agora</a>
            </Button>
            <Button variant="secondary" size="lg">
              <a href="#services">Ver Serviços</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-gold-500"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}
