import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'John Doe',
    role: 'Regular Customer',
    content: 'Best barbershop in town! The team is professional, friendly, and delivers amazing results every time.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
  },
  {
    name: 'Michael Smith',
    role: 'Business Owner',
    content: 'I visit every month for my monthly cuts and shaves. Always leave feeling refreshed and confident.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
  },
  {
    name: 'Robert Williams',
    role: 'Client',
    content: 'Outstanding service! The barbers really listen to what you want and execute perfectly.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop',
  },
  {
    name: 'James Taylor',
    role: 'Regular',
    content: 'Premium quality at reasonable prices. Highly recommend to anyone looking for professional grooming.',
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
            Client Reviews
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 bg-dark-800 rounded-lg border border-dark-700 hover:border-gold-500 transition-all duration-300"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
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

              {/* Content */}
              <p className="text-dark-200 mb-6 text-lg leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-dark-700">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
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
