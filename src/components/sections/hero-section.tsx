'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background gradient con colores DevWolf */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-background to-background" />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-radial from-primary/20 to-transparent animate-pulse" />
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-radial from-secondary/15 to-transparent animate-pulse" style={{ animationDelay: '1s' }} />
        {/* Línea decorativa roja */}
        <div className="absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent" />
        <div className="absolute bottom-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center"
        >
          {/* Logo de la empresa */}
          <img
            src="/images/logo-wide.png"
            alt="DevWolf Soluciones IT"
            className="h-20 md:h-24 lg:h-32 w-auto mb-4"
          />
          <h1 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            <span className="text-foreground">Soluciones IT</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto md:text-xl"
        >
          Impulsamos la transformación empresarial mediante tecnología de vanguardia, convirtiendo la innovación en resultados concretos, medibles y sostenibles.
          <br />
          Especialistas en Automatización, Inteligencia Artificial, Desarrollo de Software e Industria 4.0.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button size="lg" asChild>
            <a href="#servicios">Nuestros Servicios</a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="#contacto">Contáctanos</a>
          </Button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <svg
            className="h-6 w-6 text-muted-foreground"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  )
}