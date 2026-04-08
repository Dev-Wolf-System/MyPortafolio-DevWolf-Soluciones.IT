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
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >

          {/* Badge */}
          <span className="mb-6 inline-block rounded-full border border-primary/30 px-4 py-1 text-xs md:text-sm text-primary backdrop-blur-sm bg-primary/5">
            Automatización · IA · Sistemas a medida
          </span>

          {/* Logo */}
          <img
            src="/images/logo-wide.png"
            alt="DevWolf Soluciones IT"
            className="h-20 md:h-24 lg:h-28 w-auto mb-6"
          />

          {/* Headline */}
          <h1 className="font-heading text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight leading-tight max-w-4xl">
            <span className="block">
              Transformá tu empresa con
            </span>
            <span className="text-gradient block mt-2">
              automatización inteligente y sistemas a medida
            </span>
          </h1>

          {/* Subhead */}
          <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-2xl">
            Ayudamos a empresas a reducir costos, eliminar tareas manuales y escalar
            operaciones mediante inteligencia artificial, automatización y desarrollo de software profesional personalizado.
          </p>

          {/* Features */}
          <div className="mt-8 grid gap-3 text-sm text-muted-foreground max-w-xl">
            <div className="flex items-center gap-2 justify-center">
              <span className="text-primary">✔</span>
              <span>Automatización de procesos con IA + agentes inteligentes</span>
            </div>

            <div className="flex items-center gap-2 justify-center">
              <span className="text-primary">✔</span>
              <span>Integraciones con APIs, WhatsApp y sistemas industriales</span>
            </div>

            <div className="flex items-center gap-2 justify-center">
              <span className="text-primary">✔</span>
              <span>Desarrollo de sistemas a medida (CRM, ERP, SaaS)</span>
            </div>

            <div className="flex items-center gap-2 justify-center">
              <span className="text-primary">✔</span>
              <span>SCADA, PLCs y Soluciones Industriales</span>
            </div>
          </div>

          {/* CTA (fuera del grid ✔️) */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="text-base px-8 py-6 shadow-lg hover:shadow-primary/30"
              asChild
            >
              <a href="#contacto">
                🚀 Diagnóstico gratuito
              </a>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto text-base px-8 py-6 border-primary/30 hover:bg-primary/10"
              asChild
            >
              <a href="#proyectos">
                Ver proyectos
              </a>
            </Button>
          </div>

          {/* Micro trust */}
          <p className="mt-6 text-xs text-muted-foreground">
            Resultados medibles • Automatización real • Escalabilidad garantizada • Monitoreo Realtime
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
