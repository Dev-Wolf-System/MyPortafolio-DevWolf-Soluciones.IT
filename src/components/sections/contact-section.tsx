'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Linkedin, Send } from 'lucide-react'

export function ContactSection() {
  return (
    <section id="contacto" className="relative py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-primary/10 blur-3xl rounded-full" />

      <div className="container relative z-10 max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          {/* BADGE */}
          <div className="inline-block mb-4 px-4 py-1 rounded-full border border-primary/20 text-sm text-primary bg-primary/5 backdrop-blur">
            Consultoría & Automatización IA
          </div>

          {/* HEADLINE */}
          <h2 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl leading-tight">
            Automatizá tu empresa y
            <span className="text-primary"> escalá sin aumentar costos</span>
          </h2>

          {/* SUBTEXT */}
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            Diseñamos e implementamos soluciones tecnológicas que optimizan procesos,
            reducen costos operativos y aumentan la eficiencia real del negocio.
          </p>

          {/* BENEFITS */}
          <div className="mt-6 flex flex-col items-center gap-2 text-sm text-muted-foreground">
            <span>✔ Diagnóstico estratégico sin costo</span>
            <span>✔ Soluciones personalizadas (no genéricas)</span>
            <span>✔ Impacto medible en operaciones</span>
          </div>

          {/* CTA */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="text-base px-8 py-6 bg-primary text-white shadow-xl hover:shadow-primary/30 transition-all"
              asChild
            >
              <a href="mailto:devwolf.contacto@gmail.com">
                🚀 Agendar diagnóstico gratuito
              </a>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="text-base px-8 py-6 hover:border-primary hover:shadow-md transition-all"
              asChild
            >
              <a
                href="https://www.linkedin.com/in/nahuel-carlos-agustin-lobo-398230151"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                <Linkedin className="h-5 w-5" />
                Ver perfil profesional
              </a>
            </Button>
          </div>

          {/* ICON VISUAL */}
          <motion.div
            initial={{ scale: 0, rotate: -10 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, type: 'spring', stiffness: 120 }}
            className="mt-16 flex justify-center"
          >
            <div className="p-6 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur-xl border border-white/10 shadow-xl">
              <Send className="h-12 w-12 text-primary" />
            </div>
          </motion.div>

          {/* TRUST */}
          <p className="mt-6 text-xs text-muted-foreground">
            Respuesta en menos de 24hs • Sin compromiso
          </p>
        </motion.div>
      </div>
    </section>
  )
}
