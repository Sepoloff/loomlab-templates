import Image from 'next/image'
import { Star, Instagram, MessageCircle } from 'lucide-react'

const team = [
  {
    name: 'James Mitchell',
    specialty: 'Barbeiro Mestre',
    bio: 'Mais de 15 anos de experiência em cortes clássicos e modernos.',
    image: '/images/barbershop/team/team1.jpg',
    rating: 5,
    instagram: '#',
    whatsapp: '#',
  },
  {
    name: 'Marcus Johnson',
    specialty: 'Especialista em Penteados',
    bio: 'Mais de 10 anos dedicados a cortes modernos e tendência.',
    image: '/images/barbershop/team/team2.jpg',
    rating: 5,
    instagram: '#',
    whatsapp: '#',
  },
  {
    name: 'David Chen',
    specialty: 'Barbear Tradicional',
    bio: 'Especialista em técnicas clássicas de grooming e barbear.',
    image: '/images/barbershop/team/team3.jpg',
    rating: 4.8,
    instagram: '#',
    whatsapp: '#',
  },
  {
    name: 'Alex Rivera',
    specialty: 'Coloração & Styling',
    bio: 'Especialista criativo em coloração capilar e styling.',
    image: '/images/barbershop/team/team4.jpg',
    rating: 4.9,
    instagram: '#',
    whatsapp: '#',
  },
]

export function Team() {
  return (
    <section id="team" className="py-20 bg-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-gold-500 text-sm font-semibold uppercase tracking-wider mb-2">
            Conheça a Equipa
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Especialistas <span className="gradient-text">Profissionais</span>
          </h2>
          <p className="text-dark-300 max-w-2xl mx-auto">
            A nossa equipa qualificada está dedicada a proporcionar-lhe a melhor experiência de grooming.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="group bg-dark-900 rounded-xl overflow-hidden border border-gold-500/20 shadow-lg hover:shadow-xl hover:shadow-gold-500/10 hover:scale-105 hover:border-gold-500/40 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/20 to-transparent" />

                {/* Social icons - reveal on hover */}
                <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0">
                  <a
                    href={member.instagram}
                    className="bg-dark-900/80 backdrop-blur-sm p-2 rounded-full text-gold-500 hover:bg-gold-500 hover:text-dark-900 transition-colors shadow-md"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a
                    href={member.whatsapp}
                    className="bg-dark-900/80 backdrop-blur-sm p-2 rounded-full text-gold-500 hover:bg-gold-500 hover:text-dark-900 transition-colors shadow-md"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <MessageCircle className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Info */}
              <div className="p-5">
                <h3 className="text-lg font-bold text-white mb-1">{member.name}</h3>
                <p className="text-gold-500 text-sm font-semibold mb-2">{member.specialty}</p>
                <p className="text-dark-400 text-sm mb-4 leading-relaxed">{member.bio}</p>

                {/* Rating */}
                <div className="flex items-center gap-2">
                  <div className="flex gap-0.5">
                    {Array.from({ length: Math.floor(member.rating) }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-gold-500 text-gold-500" />
                    ))}
                    {member.rating % 1 !== 0 && (
                      <div className="relative w-4 h-4">
                        <Star className="absolute w-4 h-4 text-dark-600" />
                        <div className="absolute overflow-hidden w-2 h-4">
                          <Star className="w-4 h-4 fill-gold-500 text-gold-500" />
                        </div>
                      </div>
                    )}
                  </div>
                  <span className="text-dark-400 text-xs">{member.rating}/5</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
