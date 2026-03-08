import {
  Sparkles,
  Palette,
  Wind,
  Zap,
  Waves,
  HeartHandshake,
} from 'lucide-react'

const services = [
  {
    icon: Sparkles,
    name: 'Manicure',
    description: 'Cuidado e design elegante das unhas',
    price: '35€',
  },
  {
    icon: Waves,
    name: 'Pedicure',
    description: 'Cuidado relaxante dos pés e nail art',
    price: '45€',
  },
  {
    icon: Wind,
    name: 'Penteado',
    description: 'Cortes e penteados profissionais',
    price: '60€',
  },
  {
    icon: Palette,
    name: 'Nail Art',
    description: 'Designs criativos e personalizados de unhas',
    price: '50€',
  },
  {
    icon: Zap,
    name: 'Tratamento Spa',
    description: 'Tratamentos rejuvenescedores de corpo e rosto',
    price: '85€',
  },
  {
    icon: HeartHandshake,
    name: 'Massagem',
    description: 'Massagem terapêutica de relaxamento',
    price: '70€',
  },
]

export function Services() {
  return (
    <section id="services" className="py-20 bg-light-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-rose-500 text-sm font-semibold uppercase tracking-wider mb-2">
            Os Nossos Serviços
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-light-900 mb-4">
            Soluções de Beleza <span className="gradient-text">Premium</span>
          </h2>
          <p className="text-light-700 max-w-2xl mx-auto">
            Desfrute da nossa gama completa de serviços de beleza e bem-estar pensados para a fazer sentir mimada e radiante.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="p-8 bg-white rounded-lg border border-rose-100 hover:border-rose-300 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="mb-4 p-3 bg-rose-50 rounded-lg w-fit group-hover:bg-rose-100 transition-colors">
                  <Icon className="w-8 h-8 text-rose-500" />
                </div>
                <h3 className="text-xl font-bold text-light-900 mb-2">
                  {service.name}
                </h3>
                <p className="text-light-600 mb-4">{service.description}</p>
                <p className="text-rose-600 font-semibold text-lg">
                  {service.price}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
