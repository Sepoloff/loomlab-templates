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
    description: 'Elegant nail care and design',
    price: '$35',
  },
  {
    icon: Waves,
    name: 'Pedicure',
    description: 'Relaxing foot care and nail art',
    price: '$45',
  },
  {
    icon: Wind,
    name: 'Hair Styling',
    description: 'Professional haircuts and styling',
    price: '$60',
  },
  {
    icon: Palette,
    name: 'Nail Art',
    description: 'Creative custom nail designs',
    price: '$50',
  },
  {
    icon: Zap,
    name: 'Spa Treatment',
    description: 'Rejuvenating body and face treatments',
    price: '$85',
  },
  {
    icon: HeartHandshake,
    name: 'Massage',
    description: 'Therapeutic relaxation massage',
    price: '$70',
  },
]

export function Services() {
  return (
    <section id="services" className="py-20 bg-light-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-rose-500 text-sm font-semibold uppercase tracking-wider mb-2">
            Our Services
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-light-900 mb-4">
            Premium Beauty <span className="gradient-text">Solutions</span>
          </h2>
          <p className="text-light-700 max-w-2xl mx-auto">
            Indulge in our comprehensive range of beauty and wellness services designed to make you feel pampered and beautiful.
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
