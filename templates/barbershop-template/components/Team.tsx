import Image from 'next/image'
import { Star } from 'lucide-react'

const team = [
  {
    name: 'James Mitchell',
    specialty: 'Barbeiro Mestre',
    bio: 'Mais de 15 anos de experiência',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    rating: 5,
  },
  {
    name: 'Marcus Johnson',
    specialty: 'Especialista em Penteados',
    bio: 'Mais de 10 anos em cortes modernos',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
    rating: 5,
  },
  {
    name: 'David Chen',
    specialty: 'Barbear Tradicional',
    bio: 'Especialista em técnicas clássicas de grooming',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop',
    rating: 4.8,
  },
  {
    name: 'Alex Rivera',
    specialty: 'Coloração & Styling',
    bio: 'Especialista criativo em coloração capilar',
    image: 'https://images.unsplash.com/photo-1519345291346-1f6a18511dad?w=400&h=400&fit=crop',
    rating: 4.9,
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
              className="group text-center hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="relative mb-4 overflow-hidden rounded-lg h-64">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent" />
              </div>
              <h3 className="text-xl font-bold text-white">{member.name}</h3>
              <p className="text-gold-500 font-semibold mb-2">{member.specialty}</p>
              <p className="text-dark-300 text-sm mb-3">{member.bio}</p>

              {/* Rating */}
              <div className="flex justify-center gap-1">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
