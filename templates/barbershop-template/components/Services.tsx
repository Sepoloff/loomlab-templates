import { Scissors, Zap, Wind, Droplet, Sparkles, Palette } from 'lucide-react'

const services = [
  {
    icon: Scissors,
    name: 'Corte de Cabelo',
    description: 'Cortes profissionais adaptados ao seu estilo e formato de rosto',
  },
  {
    icon: Zap,
    name: 'Aparo de Barba',
    description: 'Cuidado e modelagem especialista de barba',
  },
  {
    icon: Wind,
    name: 'Penteado',
    description: 'Estilos contemporâneos para qualquer ocasião',
  },
  {
    icon: Droplet,
    name: 'Barbear Quente',
    description: 'Barbear clássico com produtos premium',
  },
  {
    icon: Sparkles,
    name: 'Lavagem de Cabelo',
    description: 'Lavagem relaxante com massagem ao couro cabeludo',
  },
  {
    icon: Palette,
    name: 'Coloração',
    description: 'Coloração profissional e mechas',
  },
]

export function Services() {
  return (
    <section id="services" className="py-20 bg-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-gold-500 text-sm font-semibold uppercase tracking-wider mb-2">
            Os Nossos Serviços
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Soluções de Grooming <span className="gradient-text">Premium</span>
          </h2>
          <p className="text-dark-300 max-w-2xl mx-auto">
            Oferecemos uma gama completa de serviços de grooming para que se sinta e pareça no seu melhor.
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
