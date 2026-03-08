import { Button } from './ui/Button'

export function Hero() {
  return (
    <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden luxury-bg">
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="/images/salon/hero.jpg"
          alt="Salon background"
          className="w-full h-full object-cover opacity-35"
        />
      </div>

      {/* Gradient Overlay — soft but dramatic for light theme */}
      <div className="absolute inset-0 bg-gradient-to-b from-light-50/85 via-light-50/30 to-light-50/85" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fadeIn">
          <p className="text-rose-500 text-sm font-semibold uppercase tracking-widest mb-4 animate-slideUp">
            Bem-vinda à Elegância
          </p>
          <h1 className="text-6xl md:text-8xl font-black text-light-900 mb-6 leading-tight animate-slideUp">
            Beleza & <span className="gradient-text">Bem-estar</span>
          </h1>
          <p className="text-lg md:text-xl text-light-700 max-w-2xl mx-auto mb-10 animate-slideUp">
            Descubra a experiência de salão de luxo por excelência com os nossos serviços premium de beleza e bem-estar.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slideUp">
            <button className="group inline-flex items-center gap-2 px-8 py-4 bg-rose-500 text-white font-bold text-lg rounded-lg transition-all duration-300 hover:scale-105 hover:bg-rose-400 shadow-lg hover:shadow-[0_0_30px_rgba(244,63,110,0.5)] active:scale-95">
              <a href="#booking" className="flex items-center gap-2">
                📅 Marcar Consulta
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
            </button>
            <button className="group inline-flex items-center gap-2 px-8 py-4 border-2 border-rose-500 text-rose-500 font-bold text-lg rounded-lg transition-all duration-300 hover:scale-105 hover:bg-rose-500 hover:text-white shadow-lg active:scale-95">
              <a href="#services" className="flex items-center gap-2">
                Explorar Serviços
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce flex flex-col items-center gap-1">
        <span className="text-rose-500/60 text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-8 h-8 rounded-full border-2 border-rose-500/60 flex items-center justify-center">
          <svg
            className="w-4 h-4 text-rose-500"
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
