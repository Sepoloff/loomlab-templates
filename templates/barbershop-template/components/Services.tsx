import { Scissors, Zap, Wind, Droplet, Sparkles, Palette } from 'lucide-react'

const services = [
  {
    icon: Scissors,
    name: 'Haircut',
    description: 'Professional haircuts tailored to your style and face shape',
  },
  {
    icon: Zap,
    name: 'Beard Trim',
    description: 'Expert beard grooming and styling',
  },
  {
    icon: Wind,
    name: 'Hair Styling',
    description: 'Contemporary styling for any occasion',
  },
  {
    icon: Droplet,
    name: 'Hot Shave',
    description: 'Classic hot shave with premium products',
  },
  {
    icon: Sparkles,
    name: 'Hair Wash',
    description: 'Relaxing wash with scalp massage',
  },
  {
    icon: Palette,
    name: 'Hair Coloring',
    description: 'Professional coloring and highlights',
  },
]

export function Services() {
  return (
    <section id="services" className="py-20 bg-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-gold-500 text-sm font-semibold uppercase tracking-wider mb-2">
            Our Services
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Premium Grooming <span className="gradient-text">Solutions</span>
          </h2>
          <p className="text-dark-300 max-w-2xl mx-auto">
            We offer a comprehensive range of grooming services designed to make you look and feel your best.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="p-8 bg-dark-900 rounded-lg border border-dark-700 hover:border-gold-500 transition-all duration-300 group"
              >
                <div className="mb-4 p-3 bg-gold-500/10 rounded-lg w-fit group-hover:bg-gold-500/20 transition-colors">
                  <Icon className="w-8 h-8 text-gold-500" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                <p className="text-dark-300">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
