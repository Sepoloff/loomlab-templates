import { MapPin, Phone, Clock, Mail } from 'lucide-react'

export function Location() {
  return (
    <section className="py-20 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-gold-500 text-sm font-semibold uppercase tracking-wider mb-2">
            Find Us
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Visit Our <span className="gradient-text">Location</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Map */}
          <div className="rounded-lg overflow-hidden h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.1234567890!2d-74.0060!3d40.7128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQyJzQ2LjEiTiA3NMOiMDAzNicwLjAiVw!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Address */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gold-500/10">
                  <MapPin className="h-6 w-6 text-gold-500" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Address</h3>
                <p className="text-dark-300">
                  123 Main Street<br />
                  New York, NY 10001<br />
                  United States
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gold-500/10">
                  <Phone className="h-6 w-6 text-gold-500" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Phone</h3>
                <p className="text-dark-300">
                  <a href="tel:+15551234567" className="hover:text-gold-500 transition-colors">
                    +1 (555) 123-4567
                  </a>
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gold-500/10">
                  <Mail className="h-6 w-6 text-gold-500" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Email</h3>
                <p className="text-dark-300">
                  <a href="mailto:info@barbershop.com" className="hover:text-gold-500 transition-colors">
                    info@barbershop.com
                  </a>
                </p>
              </div>
            </div>

            {/* Hours */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gold-500/10">
                  <Clock className="h-6 w-6 text-gold-500" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Hours</h3>
                <div className="text-dark-300 space-y-1">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 9:00 AM - 5:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
