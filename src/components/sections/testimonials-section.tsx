'use client'

import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

const testimonials = [
  {
    quote: 'DevWolf transformó completamente cómo operamos nuestra planta. El sistema SCADA que implementaron nos da visibilidad total en tiempo real. Los resultados fueron inmediatos y medibles.',
    author: 'Gerente de Operaciones',
    company: 'Sector Industrial — Tucumán',
    initials: 'GO',
  },
  {
    quote: 'Automatizamos el 80% de nuestras consultas de clientes con el agente de WhatsApp que desarrollaron. Nuestro equipo ahora se enfoca en cerrar ventas, no en responder preguntas repetitivas.',
    author: 'Director Comercial',
    company: 'Empresa de Servicios — Argentina',
    initials: 'DC',
  },
  {
    quote: 'La integración IT/OT que diseñaron nos permitió conectar sistemas que llevaban 10 años aislados. La implementación fue impecable, sin afectar la operación en ningún momento.',
    author: 'CTO',
    company: 'Planta Productora — NOA',
    initials: 'CT',
  },
]

export function TestimonialsSection() {
  return (
    <section className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/3 to-background" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="text-sm uppercase tracking-widest text-primary font-medium">
            Testimonios
          </span>

          <h2 className="mt-3 font-heading text-4xl font-bold sm:text-5xl">
            Lo que dicen nuestros clientes
          </h2>
        </motion.div>

        <div className="mt-20 grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="relative rounded-2xl border border-border bg-card/60 backdrop-blur-xl p-8 flex flex-col"
            >
              <Quote className="h-8 w-8 text-primary/40 mb-4 flex-shrink-0" />

              <p className="text-muted-foreground leading-relaxed flex-1 italic">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              <div className="mt-8 flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary text-white text-sm font-bold flex-shrink-0">
                  {testimonial.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold">{testimonial.author}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.company}</p>
                </div>
              </div>

              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/3 via-transparent to-secondary/3 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
