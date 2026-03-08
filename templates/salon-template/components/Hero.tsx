import { Button } from './ui/Button'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden luxury-bg">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{
          backgroundImage: 'url(data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 1200 800%22%3E%3Crect fill=%22%23fffbf7%22 width=%221200%22 height=%22800%22/%3E%3Cdefs%3E%3ClinearGradient id=%22grad1%22 x1=%220%25%22 y1=%220%25%22 x2=%22100%25%22 y2=%22100%25%22%3E%3Cstop offset=%220%25%22 style=%22stop-color:%23ff80b8;stop-opacity:0.15%22 /%3E%3Cstop offset=%22100%25%22 style=%22stop-color:%23d4a574;stop-opacity:0.15%22 /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill=%22url(%23grad1)%22 width=%221200%22 height=%22800%22/%3E%3C/svg%3E)',
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-light-50/40 via-light-50/20 to-light-50/40" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fadeIn">
          <p className="text-rose-500 text-sm font-semibold uppercase tracking-wider mb-4">
            Welcome to Elegance
          </p>
          <h1 className="text-5xl md:text-7xl font-bold text-light-900 mb-6 leading-tight">
            Beauty & <span className="gradient-text">Wellness</span>
          </h1>
          <p className="text-lg md:text-xl text-light-700 max-w-2xl mx-auto mb-10">
            Discover the ultimate luxury salon experience with our premium beauty and wellness services.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg">
              <a href="#booking">Book Appointment</a>
            </Button>
            <Button variant="secondary" size="lg">
              <a href="#services">Explore Services</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-rose-500"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}
