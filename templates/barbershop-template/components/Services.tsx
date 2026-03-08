import Image from 'next/image'
import { Scissors, Zap, Wind, Droplet, Sparkles, Palette } from 'lucide-react'

const services = [
  {
    icon: Scissors,
    name: 'Corte de Cabelo',
    description: 'Cortes profissionais adaptados ao seu estilo e formato de rosto',
    image: '/images/barbershop/services/haircut.jpg',
  },
  {
    icon: Zap,
    name: 'Aparo de Barba',
    description: 'Cuidado e modelagem especialista de barba',
    image: '/images/barbershop/services/beard.jpg',
  },
  {
    icon: Wind,
    name: 'Penteado',
    description: 'Estilos contemporâneos para qualquer ocasião',
    image: '/images/barbershop/services/styling.jpg',
  },
  {
    icon: Droplet,
    name: 'Barbear Quente',
    description: 'Barbear clássico com produtos premium',
    image: '/images/barbershop/services/shave.jpg',
  },
  {
    icon: Sparkles,
    name: 'Lavagem de Cabelo',
    description: 'Lavagem relaxante com massagem ao couro cabeludo',
    image: '/images/barbershop/services/wash.jpg',
  },
  {
    icon: Palette,
    name: 'Coloração',
    description: 'Coloração profissional e mechas',
    image: '/images/barbershop/services/coloring.jpg',
  },
]

export function Services() {
  return (
    <section id="services" className="py-20 bg-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-gold-500 text-sm font-semibold uppercase tracking-widest mb-2">
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
                className="bg-dark-900 rounded-xl border border-dark-700 shadow-lg hover:border-gold-500/40 hover:scale-105 hover:shadow-2xl hover:shadow-gold-500/10 transition-all duration-300 group overflow-hidden cursor-pointer"
              >
                {/* Service Image */}
                <div className="relative h-56 overflow-hidden rounded-t-xl">
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-dark-900/30 group-hover:bg-dark-900/10 transition-colors duration-300" />
                </div>
                {/* Content */}
                <div className="p-6">
                  <div className="mb-4 p-3 bg-gold-500/10 rounded-lg w-fit group-hover:bg-gold-500/20 transition-colors duration-300">
                    <Icon className="w-7 h-7 text-gold-500" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                  <p className="text-sm text-dark-400">{service.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
