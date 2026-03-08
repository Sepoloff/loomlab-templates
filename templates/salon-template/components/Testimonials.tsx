import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Sara Andrade',
    role: 'Cliente Regular',
    content: 'A experiência de salão mais luxuosa! A equipa é incrivelmente talentosa e a atmosfera é tão relaxante.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
  },
  {
    name: 'Jessica Martins',
    role: 'Cliente de Noiva',
    content: 'A minha beleza no dia do casamento ficou absolutamente perfeita. A equipa fez-me sentir confiante e deslumbrante!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
  },
  {
    name: 'Amanda Chen',
    role: 'Entusiasta de Beleza',
    content: 'O melhor nail art que já vi. A criatividade da Emma é incrível e a atenção ao detalhe é extraordinária.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
  },
  {
    name: 'Michèle Leite',
    role: 'Cliente de Bem-estar',
    content: 'Os tratamentos de spa são transformadores. Saio sempre a sentir-me completamente renovada.',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1517411901427-2e0b2a55b846?w=100&h=100&fit=crop',
  },
  {
    name: 'Raquel Thompson',
    role: 'Cliente Regular',
    content: 'Profissional, simpática e sempre entrega resultados incríveis. O meu sítio preferido para todas as necessidades de beleza!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
  },
]

export function Testimonials() {
  return (
    <section className="py-20 bg-light-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-rose-500 text-sm font-semibold uppercase tracking-wider mb-2">
            Avaliações de Clientes
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-light-900 mb-4">
            O Que Dizem As <span className="gradient-text">Nossas Clientes</span>
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 bg-white rounded-lg border border-rose-100 hover:border-rose-300 hover:shadow-lg transition-all duration-300"
            >
              {/* Quote Icon */}
              <Quote className="w-8 h-8 text-rose-200 mb-3" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: Math.floor(testimonial.rating) }).map(
                  (_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-rose-500 text-rose-500"
                    />
                  )
                )}
                {testimonial.rating % 1 !== 0 && (
                  <div className="relative w-5 h-5">
                    <Star className="absolute w-5 h-5 text-light-300" />
                    <div className="absolute overflow-hidden w-2.5 h-5">
                      <Star className="w-5 h-5 fill-rose-500 text-rose-500" />
                    </div>
                  </div>
                )}
              </div>

              {/* Content */}
              <p className="text-light-700 mb-6 text-lg leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-rose-100">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-bold text-light-900">{testimonial.name}</p>
                  <p className="text-rose-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
