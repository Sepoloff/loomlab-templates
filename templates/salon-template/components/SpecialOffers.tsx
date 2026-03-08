import { Zap } from 'lucide-react'

const offers = [
  {
    title: 'Summer Special',
    description: 'Get 20% off all hair services',
    price: 'from $48',
    original: 'from $60',
  },
  {
    title: 'Spa Package',
    description: '3-hour luxury spa experience',
    price: '$120',
    original: '$160',
  },
  {
    title: 'Bridal Package',
    description: 'Complete beauty prep for the big day',
    price: '$250',
    original: '$350',
  },
  {
    title: 'Loyalty Rewards',
    description: 'Every 5th service is 25% off',
    price: 'Free',
    original: 'Usually 25%',
  },
]

export function SpecialOffers() {
  return (
    <section id="offers" className="py-20 bg-gradient-to-r from-rose-50 to-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-rose-500 text-sm font-semibold uppercase tracking-wider mb-2">
            Special Promotions
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-light-900 mb-4">
            Exclusive <span className="gradient-text">Offers</span>
          </h2>
          <p className="text-light-700 max-w-2xl mx-auto">
            Take advantage of our special packages and promotions for ultimate beauty and wellness.
          </p>
        </div>

        {/* Offers Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {offers.map((offer, index) => (
            <div
              key={index}
              className="p-8 bg-white rounded-lg border border-rose-200 hover:border-rose-500 hover:shadow-lg transition-all duration-300 relative overflow-hidden group"
            >
              {/* Decorative Background */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-rose-100 rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-3">
                  <Zap className="w-5 h-5 text-rose-500" />
                  <h3 className="text-xl font-bold text-light-900">
                    {offer.title}
                  </h3>
                </div>

                <p className="text-light-600 mb-4 text-sm">
                  {offer.description}
                </p>

                {/* Price */}
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold text-rose-600">
                    {offer.price}
                  </span>
                  {offer.original !== 'Usually 25%' && (
                    <span className="text-sm text-light-400 line-through">
                      {offer.original}
                    </span>
                  )}
                </div>

                {/* Save Badge */}
                {offer.original !== 'Usually 25%' && (
                  <div className="mt-4 inline-block bg-rose-100 text-rose-700 text-xs font-semibold px-3 py-1 rounded-full">
                    Save{' '}
                    {Math.round(
                      ((parseInt(offer.original) -
                        parseInt(offer.price)) /
                        parseInt(offer.original)) *
                        100
                    )}
                    %
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Loyalty Program Info */}
        <div className="mt-12 bg-white rounded-lg p-8 border border-rose-200 text-center">
          <h3 className="text-2xl font-bold text-light-900 mb-3">
            Join Our Loyalty Program
          </h3>
          <p className="text-light-600 max-w-2xl mx-auto mb-6">
            Become a valued member and enjoy exclusive discounts, early access to new services, and special birthday treats.
          </p>
          <button className="bg-rose-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-rose-600 transition-colors">
            Sign Up Today
          </button>
        </div>
      </div>
    </section>
  )
}
