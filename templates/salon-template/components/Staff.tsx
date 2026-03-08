import Image from 'next/image'
import { Star, Instagram, MessageCircle } from 'lucide-react'

const staff = [
  {
    name: 'Sophia Williams',
    specialty: 'Especialista em Unhas & Beleza',
    bio: 'Mais de 8 anos de experiência em design de unhas e beleza.',
    image: '/images/salon/team/staff1.jpg',
    rating: 5,
    instagram: '#',
    whatsapp: '#',
  },
  {
    name: 'Emma Davis',
    specialty: 'Especialista em Cabelo',
    bio: 'Especializada em cortes, coloração e tratamentos capilares.',
    image: '/images/salon/team/staff2.jpg',
    rating: 5,
    instagram: '#',
    whatsapp: '#',
  },
  {
    name: 'Olivia Martinez',
    specialty: 'Spa & Bem-estar',
    bio: 'Terapeuta certificada de massagem e tratamentos de spa.',
    image: '/images/salon/team/staff3.jpg',
    rating: 4.9,
    instagram: '#',
    whatsapp: '#',
  },
  {
    name: 'Ava Johnson',
    specialty: 'Consultora de Beleza',
    bio: 'Especialista em cuidados de pele e consultoria personalizada.',
    image: '/images/salon/team/staff4.jpg',
    rating: 4.8,
    instagram: '#',
    whatsapp: '#',
  },
]

export function Staff() {
  return (
    <section id="staff" className="py-20 bg-light-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-rose-500 text-sm font-semibold uppercase tracking-wider mb-2">
            Conheça a Equipa
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-light-900 mb-4">
            Especialistas de Beleza <span className="gradient-text">Profissionais</span>
          </h2>
          <p className="text-light-700 max-w-2xl mx-auto">
            A nossa talentosa equipa de especialistas de beleza está dedicada a fazer com que se sinta bonita e confiante.
          </p>
        </div>

        {/* Staff Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {staff.map((member, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl overflow-hidden border border-rose-100 shadow-md hover:shadow-xl hover:shadow-rose-500/10 hover:scale-105 hover:border-rose-300 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-rose-900/40 via-transparent to-transparent" />

                {/* Social icons - reveal on hover */}
                <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0">
                  <a
                    href={member.instagram}
                    className="bg-white/90 backdrop-blur-sm p-2 rounded-full text-rose-500 hover:bg-rose-500 hover:text-white transition-colors shadow-md"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a
                    href={member.whatsapp}
                    className="bg-white/90 backdrop-blur-sm p-2 rounded-full text-rose-500 hover:bg-rose-500 hover:text-white transition-colors shadow-md"
                  >
                    <MessageCircle className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Info */}
              <div className="p-5">
                <h3 className="text-lg font-bold text-light-900 mb-1">{member.name}</h3>
                <p className="text-rose-500 text-sm font-semibold mb-2">{member.specialty}</p>
                <p className="text-light-600 text-sm mb-4 leading-relaxed">{member.bio}</p>

                {/* Rating */}
                <div className="flex items-center gap-2">
                  <div className="flex gap-0.5">
                    {Array.from({ length: Math.floor(member.rating) }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-rose-500 text-rose-500" />
                    ))}
                    {member.rating % 1 !== 0 && (
                      <div className="relative w-4 h-4">
                        <Star className="absolute w-4 h-4 text-light-300" />
                        <div className="absolute overflow-hidden w-2 h-4">
                          <Star className="w-4 h-4 fill-rose-500 text-rose-500" />
                        </div>
                      </div>
                    )}
                  </div>
                  <span className="text-light-500 text-xs">{member.rating}/5</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
