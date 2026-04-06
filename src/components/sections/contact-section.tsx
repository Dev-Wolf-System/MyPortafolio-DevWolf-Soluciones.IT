'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Linkedin, Mail, Send } from 'lucide-react'

export function ContactSection() {
  return (
    <section id="contacto" className="relative py-24 overflow-hidden">
      {/* Fondo decorativo */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            ¿Listo para transformar tu empresa?
          </h2>
          <p className="mt-4 text-muted-foreground">
            Contáctanos y descubre cómo podemos ayudarte a implementar estas tecnologías y avanzar por el camino de la Trasformacion Digital y la Industria 4.0.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            {/* Botón CTA principal con color secundario (rojo DevWolf) */}
            <Button variant="secondary" size="lg" asChild className="hover:shadow-lg hover:shadow-secondary/25">
              <a
                href="https://www.linkedin.com/in/nahuel-carlos-agustin-lobo-398230151"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                <Linkedin className="h-5 w-5" />
                LinkedIn
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="mailto:devwolf.contacto@gmail.com" className="inline-flex items-center gap-2">
                <Mail className="h-5 w-5" />
                Email
              </a>
            </Button>
          </div>

          {/* Decorative element */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: 'spring' }}
            className="mt-16 inline-flex items-center justify-center rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 p-6"
          >
            <Send className="h-12 w-12 text-primary" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}