'use client'

import { motion } from 'framer-motion'
import { Factory, Wheat, ShoppingBag, Heart, Truck, Building2 } from 'lucide-react'

const industries = [
  {
    icon: Factory,
    title: 'Industrial / Manufactura',
    description: 'SCADA, automatización de planta, convergencia IT/OT y monitoreo de procesos productivos.',
    gradient: 'from-blue-500/10 to-primary/5',
  },
  {
    icon: Wheat,
    title: 'Agroindustria',
    description: 'Monitoreo de silos, telemetría de campo, trazabilidad y control de procesos agrícolas.',
    gradient: 'from-green-500/10 to-emerald-500/5',
  },
  {
    icon: ShoppingBag,
    title: 'Comercio / Retail',
    description: 'Automatización de ventas, CRM, gestión de stock y analytics de comportamiento de clientes.',
    gradient: 'from-purple-500/10 to-pink-500/5',
  },
  {
    icon: Heart,
    title: 'Salud',
    description: 'Sistemas de gestión de turnos, reportes clínicos automatizados e integración con equipos médicos.',
    gradient: 'from-red-500/10 to-rose-500/5',
  },
  {
    icon: Truck,
    title: 'Logística',
    description: 'Tracking en tiempo real, optimización de rutas, gestión de flotas y automatización de reportes.',
    gradient: 'from-orange-500/10 to-amber-500/5',
  },
  {
    icon: Building2,
    title: 'Construcción / Real Estate',
    description: 'Domótica, BMS para edificios inteligentes, control de acceso y automatización de instalaciones.',
    gradient: 'from-cyan-500/10 to-sky-500/5',
  },
]

export function IndustriesSection() {
  return (
    <section className="relative py-28 overflow-hidden">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="text-sm uppercase tracking-widest text-primary font-medium">
            Industrias
          </span>

          <h2 className="mt-3 font-heading text-4xl font-bold sm:text-5xl">
            Sectores que atendemos
          </h2>

          <p className="mt-5 text-muted-foreground text-lg">
            Experiencia real en entornos exigentes. Conocemos los desafíos específicos de cada industria.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.07, duration: 0.5 }}
              className={`group rounded-2xl border border-border bg-gradient-to-br ${industry.gradient} p-6 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300`}
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-card border border-border text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <industry.icon className="h-6 w-6" />
              </div>

              <h3 className="font-heading text-lg font-semibold">{industry.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{industry.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
