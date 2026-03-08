import Image from 'next/image'
import { Star } from 'lucide-react'

const staff = [
  {
    name: 'Sophia Williams',
    specialty: 'Nail & Beauty Expert',
    bio: '8+ years of experience in nail design',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
    rating: 5,
  },
  {
    name: 'Emma Davis',
    specialty: 'Hair Stylist',
    bio: 'Specializing in cuts, colors, and treatments',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    rating: 5,
  },
  {
    name: 'Olivia Martinez',
    specialty: 'Spa & Wellness',
    bio: 'Certified massage and spa therapist',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
    rating: 4.9,
  },
  {
    name: 'Ava Johnson',
    specialty: 'Beauty Consultant',
    bio: 'Expert in skincare and beauty advice',
    image: 'https://images.unsplash.com/photo-1517411901427-2e0b2a55b846?w=400&h=400&fit=crop',
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
            Meet The Team
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-light-900 mb-4">
            Expert Beauty <span className="gradient-text">Professionals</span>
          </h2>
          <p className="text-light-700 max-w-2xl mx-auto">
            Our talented team of beauty experts is dedicated to making you feel beautiful and confident.
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
