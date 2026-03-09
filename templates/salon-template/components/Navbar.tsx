'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Moon, Sun } from 'lucide-react'
import Link from 'next/link'

export function Navbar() {
  const [isOpen, setIsOpen]     = useState(false)
  const [isDark, setIsDark]     = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDark])

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when screen expands to md
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false)
    }
    window.addEventListener('resize', handleResize, { passive: true })
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const navLinks = [
    { href: '#services',  label: 'Serviços' },
    { href: '#portfolio', label: 'Portfólio' },
    { href: '#staff',     label: 'Equipa' },
    { href: '#offers',    label: 'Promoções' },
    { href: '#booking',   label: 'Marcação' },
  ]

  return (
    <nav
      className={`sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-rose-100 transition-shadow duration-300 ${
        scrolled ? 'shadow-md shadow-rose-100' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-xl sm:text-2xl font-bold gradient-text shrink-0">
            Beleza &amp; Bem-estar
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-5 lg:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-light-700 hover:text-rose-500 transition-colors duration-300 font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right Controls */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Theme Toggle */}
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2.5 min-w-[44px] min-h-[44px] rounded-lg bg-rose-50 hover:bg-rose-100 transition-colors flex items-center justify-center"
              aria-label={isDark ? 'Mudar para tema claro' : 'Mudar para tema escuro'}
            >
              {isDark ? (
                <Sun className="w-5 h-5 text-gold-500" />
              ) : (
                <Moon className="w-5 h-5 text-light-700" />
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2.5 min-w-[44px] min-h-[44px] rounded-lg bg-rose-50 hover:bg-rose-100 transition-colors flex items-center justify-center"
              aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={isOpen}
              aria-controls="mobile-nav"
            >
              {isOpen ? (
                <X className="w-5 h-5 text-light-800" />
              ) : (
                <Menu className="w-5 h-5 text-light-800" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div
            id="mobile-nav"
            className="md:hidden pb-4 space-y-1 mobile-nav-enter"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="flex items-center px-4 min-h-[48px] text-light-700 hover:text-rose-500 hover:bg-rose-50 rounded-lg transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}

            {/* Mobile CTA */}
            <div className="pt-2 border-t border-rose-100 mt-2">
              <a
                href="#booking"
                className="flex items-center justify-center min-h-[48px] px-4 bg-rose-500 text-white font-bold rounded-lg hover:bg-rose-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Marcar Consulta
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
