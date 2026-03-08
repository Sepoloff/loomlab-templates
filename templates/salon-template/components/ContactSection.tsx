import { MapPin, Phone, Clock, Mail, Facebook, Instagram, Twitter } from 'lucide-react'

export function Footer() {
  return (
    <section className="py-20 bg-light-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-rose-500 text-sm font-semibold uppercase tracking-wider mb-2">
            Find Us
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-light-900 mb-4">
            Visit Our <span className="gradient-text">Salon</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Map */}
          <div className="rounded-lg overflow-hidden h-96 border border-rose-200">
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
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-rose-100">
                  <MapPin className="h-6 w-6 text-rose-500" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-light-900 mb-2">
                  Address
                </h3>
                <p className="text-light-600">
                  456 Beauty Lane<br />
                  New York, NY 10001<br />
                  United States
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-rose-100">
                  <Phone className="h-6 w-6 text-rose-500" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-light-900 mb-2">
                  Phone
                </h3>
                <p className="text-light-600">
                  <a
                    href="tel:+15551234567"
                    className="hover:text-rose-500 transition-colors"
                  >
                    +1 (555) 123-4567
                  </a>
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-rose-100">
                  <Mail className="h-6 w-6 text-rose-500" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-light-900 mb-2">
                  Email
                </h3>
                <p className="text-light-600">
                  <a
                    href="mailto:info@salon.com"
                    className="hover:text-rose-500 transition-colors"
                  >
                    info@salon.com
                  </a>
                </p>
              </div>
            </div>

            {/* Hours */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-rose-100">
                  <Clock className="h-6 w-6 text-rose-500" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-light-900 mb-2">
                  Hours
                </h3>
                <div className="text-light-600 space-y-1">
                  <p>Monday - Friday: 10:00 AM - 7:00 PM</p>
                  <p>Saturday: 10:00 AM - 6:00 PM</p>
                  <p>Sunday: 11:00 AM - 5:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-rose-200 mt-16 pt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div>
              <h3 className="text-2xl font-bold gradient-text mb-4">
                Beauty Salon
              </h3>
              <p className="text-light-600">
                Premium beauty and wellness services for the modern woman.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-light-900 font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#services" className="text-light-600 hover:text-rose-500 transition-colors">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#portfolio" className="text-light-600 hover:text-rose-500 transition-colors">
                    Portfolio
                  </a>
                </li>
                <li>
                  <a href="#staff" className="text-light-600 hover:text-rose-500 transition-colors">
                    Staff
                  </a>
                </li>
                <li>
                  <a href="#booking" className="text-light-600 hover:text-rose-500 transition-colors">
                    Booking
                  </a>
                </li>
              </ul>
            </div>

            {/* Loyalty */}
            <div>
              <h4 className="text-light-900 font-semibold mb-4">
                Loyalty Program
              </h4>
              <ul className="space-y-2 text-light-600 text-sm">
                <li>• Exclusive member discounts</li>
                <li>• Birthday specials</li>
                <li>• Early service access</li>
                <li>• Rewards points</li>
              </ul>
            </div>

            {/* Social */}
            <div>
              <h4 className="text-light-900 font-semibold mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light-600 hover:text-rose-500 transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light-600 hover:text-rose-500 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light-600 hover:text-rose-500 transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t border-rose-200 pt-8 flex flex-col md:flex-row justify-between items-center text-light-600 text-sm">
            <p>&copy; 2024 Premium Beauty Salon. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-rose-500 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-rose-500 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
