'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-background" />

      {/* Glow effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-radial from-primary/20 to-transparent blur-3xl" />
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-radial from-secondary/20 to-transparent blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 container max-w-6xl mx-auto text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center"
        >

          {/* Badge */}
          <span className="mb-6 inline-block rounded-full border border-primary/30 px-4 py-1 text-sm text-primary">
            Automatización · IA · Sistemas a medida
          </span>

          {/* Logo */}
          <img
            src="/images/logo-wide.png"
            alt="DevWolf Soluciones IT"
            className="h-20 md:h-24 lg:h-28 w-auto mb-6"
          />

          {/* HEADLINE (🔥 clave total) */}
          <h1 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl md:text-6xl leading-tight max-w-4xl">
            <span className="text-foreground">
              Reducí costos operativos y automatizá tu empresa
            </span>
            <br />
            <span className="text-primary">
              con IA y sistemas diseñados a medida
            </span>
          </h1>

          {/* SUBHEAD (más concreto) */}
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto md:text-xl">
            Implemento automatización, inteligencia artificial y software
            personalizado para empresas que buscan escalar sin aumentar estructura.
          </p>

          {/* PROOF / STACK */}
          <div className="mt-6 flex flex-col items-center gap-2 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="text-primary">✔</span>
              <span>Automatización con n8n + IA + agentes inteligentes</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-primary">✔</span>
              <span>Sistemas a medida (React, Node.js, PostgreSQL)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-primary">✔</span>
              <span>Integraciones con WhatsApp, APIs y entornos industriales</span>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="text-base px-8 py-6 shadow-lg hover:shadow-primary/30"
              asChild
            >
              <a href="#contacto">
                🚀 Agendar diagnóstico gratuito
              </a>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="text-base px-8 py-6"
              asChild
            >
              <a href="#proyectos">
                Ver casos reales
              </a>
            </Button>
          </div>

          {/* MICRO TRUST */}
          <p className="mt-6 text-xs text-muted-foreground">
            Enfoque en resultados medibles • Sin soluciones genéricas
          </p>

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
