import { Zap } from 'lucide-react'

const offers = [
  {
    title: 'Especial de Verão',
    description: '20% de desconto em todos os serviços de cabelo',
    price: 'a partir de 48€',
    original: 'a partir de 60€',
  },
  {
    title: 'Pacote Spa',
    description: 'Experiência de spa de luxo de 3 horas',
    price: '120€',
    original: '160€',
  },
  {
    title: 'Pacote Noiva',
    description: 'Preparação de beleza completa para o grande dia',
    price: '250€',
    original: '350€',
  },
  {
    title: 'Recompensas de Fidelidade',
    description: 'Cada 5.º serviço tem 25% de desconto',
    price: 'Grátis',
    original: 'Normalmente 25%',
  },
]

export function SpecialOffers() {
  return (
    <section id="offers" className="py-20 bg-gradient-to-r from-rose-50 to-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-rose-500 text-sm font-semibold uppercase tracking-wider mb-2">
            Promoções Especiais
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-light-900 mb-4">
            Ofertas <span className="gradient-text">Exclusivas</span>
          </h2>
          <p className="text-light-700 max-w-2xl mx-auto">
            Aproveite os nossos pacotes e promoções especiais para o máximo de beleza e bem-estar.
          </p>
        </div>

        {/* Offers Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {offers.map((offer, index) => (
            <div
              key={index}
              className="p-8 bg-white rounded-lg border border-rose-200 hover:border-rose-500 hover:shadow-lg transition-all duration-300 relative overflow-hidden group"
            >
              {/* Decorative Background */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-rose-100 rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-3">
                  <Zap className="w-5 h-5 text-rose-500" />
                  <h3 className="text-xl font-bold text-light-900">
                    {offer.title}
                  </h3>
                </div>

                <p className="text-light-600 mb-4 text-sm">
                  {offer.description}
                </p>

                {/* Price */}
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold text-rose-600">
                    {offer.price}
                  </span>
                  {offer.original !== 'Normalmente 25%' && (
                    <span className="text-sm text-light-400 line-through">
                      {offer.original}
                    </span>
                  )}
                </div>

                {/* Save Badge */}
                {offer.original !== 'Normalmente 25%' && (
                  <div className="mt-4 inline-block bg-rose-100 text-rose-700 text-xs font-semibold px-3 py-1 rounded-full">
                    Poupe{' '}
                    {Math.round(
                      ((parseInt(offer.original) -
                        parseInt(offer.price)) /
                        parseInt(offer.original)) *
                        100
                    )}
                    %
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Loyalty Program Info */}
        <div className="mt-12 bg-white rounded-lg p-8 border border-rose-200 text-center">
          <h3 className="text-2xl font-bold text-light-900 mb-3">
            Junte-se ao Nosso Programa de Fidelidade
          </h3>
          <p className="text-light-600 max-w-2xl mx-auto mb-6">
            Torne-se membro e desfrute de descontos exclusivos, acesso antecipado a novos serviços e mimos especiais no seu aniversário.
          </p>
          <button className="inline-flex items-center justify-center bg-rose-500 text-white px-8 py-3.5 min-h-[48px] rounded-lg font-semibold hover:bg-rose-600 hover:shadow-lg hover:shadow-rose-500/30 transition-all duration-300 active:scale-[0.98]">
            Inscreva-se Hoje
          </button>
        </div>
      </div>
    </section>
  )
}
