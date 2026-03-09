export function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/barbershop/hero.jpg"
          alt=""
          aria-hidden="true"
          fetchPriority="high"
          className="w-full h-full object-cover opacity-35"
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-950/90 via-dark-900/50 to-dark-950/90" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fadeIn">
          <p className="text-gold-500 text-xs sm:text-sm font-semibold uppercase tracking-widest mb-3 sm:mb-4">
            Bem-vindo à Excelência
          </p>

          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white mb-5 sm:mb-6 leading-tight">
            Serviços de{' '}
            <span className="gradient-text">Grooming</span>{' '}
            Premium
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-dark-300 max-w-2xl mx-auto mb-8 sm:mb-10">
            Experiencie os melhores serviços de barbearia com especialistas dedicados ao seu look perfeito.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <a
              href="#booking"
              className="group inline-flex items-center gap-2 w-full sm:w-auto min-h-[52px] px-8 py-3.5 bg-gold-500 text-dark-900 font-bold text-base sm:text-lg rounded-lg transition-all duration-300 hover:scale-105 hover:bg-gold-300 shadow-lg hover:shadow-[0_0_30px_rgba(212,165,116,0.6)] active:scale-95 justify-center"
            >
              📅 Marcar Agora
              <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">→</span>
            </a>
            <a
              href="#services"
              className="group inline-flex items-center gap-2 w-full sm:w-auto min-h-[52px] px-8 py-3.5 border-2 border-gold-500 text-gold-500 font-bold text-base sm:text-lg rounded-lg transition-all duration-300 hover:scale-105 hover:bg-gold-500 hover:text-dark-900 shadow-lg active:scale-95 justify-center"
            >
              Ver Serviços
              <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 animate-bounce flex flex-col items-center gap-1"
        aria-hidden="true"
      >
        <span className="text-gold-500/60 text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-8 h-8 rounded-full border-2 border-gold-500/60 flex items-center justify-center">
          <svg
            className="w-4 h-4 text-gold-500"
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
      </div>
    </section>
  )
}
