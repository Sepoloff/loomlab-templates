import { Button } from './ui/Button'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden luxury-bg">
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1576126213369-97a306d36557?w=1200&h=600&fit=crop"
          alt="Salon background"
          className="w-full h-full object-cover opacity-40"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-light-50/40 via-light-50/20 to-light-50/40" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fadeIn">
          <p className="text-rose-500 text-sm font-semibold uppercase tracking-wider mb-4">
            Bem-vinda à Elegância
          </p>
          <h1 className="text-5xl md:text-7xl font-bold text-light-900 mb-6 leading-tight">
            Beleza & <span className="gradient-text">Bem-estar</span>
          </h1>
          <p className="text-lg md:text-xl text-light-700 max-w-2xl mx-auto mb-10">
            Descubra a experiência de salão de luxo por excelência com os nossos serviços premium de beleza e bem-estar.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg">
              <a href="#booking">Marcar Consulta</a>
            </Button>
            <Button variant="secondary" size="lg">
              <a href="#services">Explorar Serviços</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-rose-500"
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
