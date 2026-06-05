'use client'

import { motion } from 'framer-motion'
import { ContactForm } from '@/components/ui'
import { Linkedin, Mail } from 'lucide-react'

export function ContactSection() {
  return (
    <section id="contacto" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-primary/10 blur-3xl rounded-full" />

      <div className="container relative z-10 max-w-6xl mx-auto px-4">
        <div className="grid gap-16 lg:grid-cols-2 items-start">

          {/* LEFT — Copy */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-block mb-4 px-4 py-1 rounded-full border border-primary/20 text-sm text-primary bg-primary/5 backdrop-blur">
              Consultoría & Automatización IA
            </div>

            <h2 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl leading-tight">
              Automatizá tu empresa y
              <span className="text-primary"> escalá sin aumentar costos</span>
            </h2>

            <p className="mt-6 text-lg text-muted-foreground">
              Completá el formulario y te contactamos en menos de 24hs con un diagnóstico personalizado para tu negocio.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3 text-muted-foreground">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary text-sm flex-shrink-0">✔</span>
                <span>Diagnóstico estratégico sin costo</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary text-sm flex-shrink-0">✔</span>
                <span>Soluciones personalizadas — nada genérico</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary text-sm flex-shrink-0">✔</span>
                <span>Impacto medible desde el primer sprint</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary text-sm flex-shrink-0">✔</span>
                <span>Respuesta garantizada en menos de 24hs</span>
              </div>
            </div>

            <div className="mt-10 flex flex-col gap-3">
              <a
                href="https://www.linkedin.com/in/nahuel-carlos-agustin-lobo-398230151"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                Ver perfil profesional en LinkedIn
              </a>
              <a
                href="mailto:devwolf.contacto@gmail.com"
                className="inline-flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-5 w-5" />
                devwolf.contacto@gmail.com
              </a>
            </div>
          </motion.div>

          {/* RIGHT — Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="rounded-2xl border border-border bg-card/70 backdrop-blur-xl p-8">
              <ContactForm />
            </div>

            <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl blur-2xl -z-10" />
          </motion.div>

        </div>
      </div>
    </section>
  )
}
