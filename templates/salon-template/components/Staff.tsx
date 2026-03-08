import Image from 'next/image'
import { Star } from 'lucide-react'

const staff = [
  {
    name: 'Sophia Williams',
    specialty: 'Especialista em Unhas & Beleza',
    bio: 'Mais de 8 anos de experiência em design de unhas',
    image: '/images/salon/team/staff1.jpg',
    rating: 5,
  },
  {
    name: 'Emma Davis',
    specialty: 'Especialista em Cabelo',
    bio: 'Especializada em cortes, coloração e tratamentos',
    image: '/images/salon/team/staff2.jpg',
    rating: 5,
  },
  {
    name: 'Olivia Martinez',
    specialty: 'Spa & Bem-estar',
    bio: 'Terapeuta certificada de massagem e spa',
    image: '/images/salon/team/staff3.jpg',
    rating: 4.9,
  },
  {
    name: 'Ava Johnson',
    specialty: 'Consultora de Beleza',
    bio: 'Especialista em cuidados de pele e consultoria de beleza',
    image: '/images/salon/team/staff4.jpg',
    rating: 4.8,
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
              className="group text-center hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="relative mb-4 overflow-hidden rounded-lg h-64">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-rose-500/40 via-transparent to-transparent" />
              </div>
              <h3 className="text-xl font-bold text-light-900">
                {member.name}
              </h3>
              <p className="text-rose-500 font-semibold mb-2">
                {member.specialty}
              </p>
              <p className="text-light-600 text-sm mb-3">{member.bio}</p>

              {/* Rating */}
              <div className="flex justify-center gap-1">
                {Array.from({ length: Math.floor(member.rating) }).map(
                  (_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-rose-500 text-rose-500"
                    />
                  )
                )}
                {member.rating % 1 !== 0 && (
                  <div className="relative w-4 h-4">
                    <Star className="absolute w-4 h-4 text-light-300" />
                    <div className="absolute overflow-hidden w-2 h-4">
                      <Star className="w-4 h-4 fill-rose-500 text-rose-500" />
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
