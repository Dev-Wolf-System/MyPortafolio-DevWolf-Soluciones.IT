'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'

const navItems = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Contacto', href: '#contacto' },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-background/70 backdrop-blur-xl border-b border-border shadow-sm'
          : 'bg-transparent'
      )}
    >
      <nav className="container flex h-16 items-center justify-between">

        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <img
            src="/images/logo-wide.png"
            alt="DevWolf Soluciones IT"
            className="h-8 w-auto transition-transform duration-300 group-hover:scale-105"
          />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.label}

              {/* underline animado */}
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
          ))}

          {/* CTA PRINCIPAL */}
          <Button
            size="sm"
            className="shadow-md hover:shadow-primary/30 transition-all"
            asChild
          >
            <a href="#contacto">🚀 Agendar llamada</a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </Button>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border"
          >
            <div className="container py-6 flex flex-col gap-4">

              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}

              {/* CTA MOBILE */}
              <Button className="w-full mt-2" asChild>
                <a href="#contacto">🚀 Agendar llamada</a>
              </Button>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
