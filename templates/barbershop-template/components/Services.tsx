import Image from 'next/image'
import { Scissors, Zap, Wind, Droplet, Sparkles, Palette } from 'lucide-react'

const services = [
  {
    icon: Scissors,
    name: 'Corte de Cabelo',
    description: 'Cortes profissionais adaptados ao seu estilo e formato de rosto',
    image: 'https://images.unsplash.com/photo-1503387762996-74f5f009631e?w=400&h=300&fit=crop',
  },
  {
    icon: Zap,
    name: 'Aparo de Barba',
    description: 'Cuidado e modelagem especialista de barba',
    image: 'https://images.unsplash.com/photo-1621905167918-48416bd8575a?w=400&h=300&fit=crop',
  },
  {
    icon: Wind,
    name: 'Penteado',
    description: 'Estilos contemporâneos para qualquer ocasião',
    image: 'https://images.unsplash.com/photo-1562005555-c89fcb1e67c0?w=400&h=300&fit=crop',
  },
  {
    icon: Droplet,
    name: 'Barbear Quente',
    description: 'Barbear clássico com produtos premium',
    image: 'https://images.unsplash.com/photo-1585747860715-cd4628902d4a?w=400&h=300&fit=crop',
  },
  {
    icon: Sparkles,
    name: 'Lavagem de Cabelo',
    description: 'Lavagem relaxante com massagem ao couro cabeludo',
    image: 'https://images.unsplash.com/photo-1503387762996-74f5f009631e?w=400&h=300&fit=crop',
  },
  {
    icon: Palette,
    name: 'Coloração',
    description: 'Coloração profissional e mechas',
    image: 'https://images.unsplash.com/photo-1621905167918-48416bd8575a?w=400&h=300&fit=crop',
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
                className="bg-dark-900 rounded-lg border border-dark-700 hover:border-gold-500 transition-all duration-300 group overflow-hidden"
              >
                {/* Service Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-dark-900/30 group-hover:bg-dark-900/10 transition-colors" />
                </div>
                {/* Content */}
                <div className="p-6">
                  <div className="mb-4 p-3 bg-gold-500/10 rounded-lg w-fit group-hover:bg-gold-500/20 transition-colors">
                    <Icon className="w-8 h-8 text-gold-500" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                  <p className="text-dark-300">{service.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
