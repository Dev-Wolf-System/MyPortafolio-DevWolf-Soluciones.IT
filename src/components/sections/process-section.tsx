'use client'

import { motion } from 'framer-motion'
import { Search, FileCode2, Rocket, HeartHandshake, CalendarCheck } from 'lucide-react'

const steps = [
  {
    step: '01',
    icon: Search,
    title: 'Diagnóstico gratuito',
    description: 'Analizamos tus procesos actuales, identificamos cuellos de botella y calculamos el ROI potencial de la automatización. Sin costo, sin compromiso.',
    color: 'from-primary to-accent',
  },
  {
    step: '02',
    icon: FileCode2,
    title: 'Propuesta a medida',
    description: 'Diseñamos una solución específica para tu negocio: arquitectura, tecnologías, timeline y presupuesto. Nada genérico.',
    color: 'from-accent to-secondary',
  },
  {
    step: '03',
    icon: Rocket,
    title: 'Implementación ágil',
    description: 'Desarrollamos e implementamos en sprints cortos con entregables visibles desde la primera semana. Vos vés el avance en todo momento.',
    color: 'from-secondary to-primary',
  },
  {
    step: '04',
    icon: HeartHandshake,
    title: 'Soporte continuo',
    description: 'Monitoreo, mantenimiento y evolución del sistema. Somos el socio tecnológico a largo plazo, no el proveedor que desaparece.',
    color: 'from-primary to-secondary',
  },
]

export function ProcessSection() {
  return (
    <section className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/3 to-background" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="text-sm uppercase tracking-widest text-primary font-medium">
            Proceso
          </span>

          <h2 className="mt-3 font-heading text-4xl font-bold sm:text-5xl">
            Cómo trabajamos
          </h2>

          <p className="mt-5 text-muted-foreground text-lg">
            Un proceso probado que garantiza resultados medibles desde el primer sprint.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 relative">
          <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-[1px] bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="relative flex flex-col items-center text-center"
            >
              <div className={`relative mb-6 flex h-24 w-24 items-center justify-center rounded-2xl bg-gradient-to-br ${step.color} shadow-lg shadow-primary/20`}>
                <step.icon className="h-10 w-10 text-white" />
                <span className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-background border border-border text-xs font-bold text-primary">
                  {step.step}
                </span>
              </div>

              <h3 className="font-heading text-xl font-semibold">{step.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-6 py-3 text-sm font-medium text-primary hover:bg-primary/10 transition-colors"
          >
            <CalendarCheck className="h-4 w-4" />
            Empezar con el diagnóstico gratuito
          </a>
        </motion.div>
      </div>
    </section>
  )
}
