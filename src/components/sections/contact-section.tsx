'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Linkedin, Mail, Send } from 'lucide-react'

export function ContactSection() {
  return (
    <section id="contacto" className="py-24">
      <div className="container">
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
            Contáctanos y descubre cómo podemos ayudarte a implementar las tecnologías de la Industria 4.0
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
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
              <a href="mailto:contacto@devwolf.com.ar" className="inline-flex items-center gap-2">
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
            className="mt-16 inline-flex items-center justify-center rounded-full bg-primary/10 p-6"
          >
            <Send className="h-12 w-12 text-primary" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}