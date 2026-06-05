'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { services } from '@/data/services'

export function ServicesSection() {
  return (
    <section id="servicios" className="py-28 relative">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="text-sm uppercase tracking-widest text-primary font-medium">
            Servicios
          </span>

          <h2 className="mt-3 font-heading text-4xl font-bold sm:text-5xl">
            Soluciones tecnológicas de alto impacto
          </h2>

          <p className="mt-6 text-lg text-muted-foreground">
            Ayudamos a empresas a escalar, automatizar y evolucionar mediante tecnología avanzada.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <Link
                href={`/servicios/${service.slug}`}
                className="group block rounded-2xl border border-border bg-card p-6 hover:shadow-xl hover:shadow-primary/5 hover:border-primary/30 transition-all duration-300 h-full"
              >
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <service.icon className="h-6 w-6" />
                </div>

                <h3 className="text-xl font-semibold">{service.title}</h3>

                <p className="mt-3 text-muted-foreground text-sm leading-relaxed">
                  {service.shortDescription}
                </p>

                <div className="mt-5 text-sm font-medium text-primary opacity-70 group-hover:opacity-100 transition flex items-center gap-1">
                  Saber más <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
