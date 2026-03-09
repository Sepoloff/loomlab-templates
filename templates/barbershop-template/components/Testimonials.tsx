import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'João Silva',
    role: 'Cliente Regular',
    content: 'A melhor barbearia da cidade! A equipa é profissional, simpática e entrega resultados incríveis todas as vezes.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
  },
  {
    name: 'Miguel Santos',
    role: 'Empresário',
    content: 'Venho todos os meses para os meus cortes e barbear. Saio sempre a sentir-me renovado e confiante.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
  },
  {
    name: 'Roberto Ferreira',
    role: 'Cliente',
    content: 'Serviço excecional! Os barbeiros ouvem realmente o que quer e executam na perfeição.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop',
  },
  {
    name: 'Tiago Oliveira',
    role: 'Regular',
    content: 'Qualidade premium a preços razoáveis. Recomendo vivamente a quem procura grooming profissional.',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1507009750519-e21cc028cb29?w=100&h=100&fit=crop',
  },
]

export function Testimonials() {
  return (
    <section className="py-20 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-gold-500 text-sm font-semibold uppercase tracking-wider mb-2">
            Avaliações de Clientes
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            O Que Dizem Os <span className="gradient-text">Nossos Clientes</span>
          </h2>
          <p className="text-dark-300 max-w-2xl mx-auto">
            A opinião dos nossos clientes é o nosso maior orgulho.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative p-8 bg-dark-800 rounded-xl border border-dark-700 hover:border-gold-500/40 shadow-md hover:shadow-xl hover:shadow-gold-500/5 transition-all duration-300 group"
            >
              {/* Quote icon */}
              <Quote className="w-10 h-10 text-gold-500/20 mb-4 group-hover:text-gold-500/40 transition-colors duration-300" />

              {/* Rating */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex gap-0.5">
                  {Array.from({ length: Math.floor(testimonial.rating) }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-gold-500 text-gold-500" />
                  ))}
                  {testimonial.rating % 1 !== 0 && (
                    <div className="relative w-5 h-5">
                      <Star className="absolute w-5 h-5 text-dark-600" />
                      <div className="absolute overflow-hidden w-2.5 h-5">
                        <Star className="w-5 h-5 fill-gold-500 text-gold-500" />
                      </div>
                    </div>
                  )}
                </div>
                <span className="text-gold-500 text-sm font-semibold">{testimonial.rating}/5</span>
              </div>

              {/* Content */}
              <p className="text-dark-200 mb-6 text-lg leading-relaxed italic">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-dark-700 ring-2 ring-gold-500/30 flex-shrink-0">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-bold text-white">{testimonial.name}</p>
                  <p className="text-gold-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
