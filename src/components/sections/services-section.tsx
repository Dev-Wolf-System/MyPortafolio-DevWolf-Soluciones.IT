'use client'

import { motion } from 'framer-motion'
import {
  Cpu,
  BrainCircuit,
  Code2,
  Home,
  Server,
  CloudCog,
  Bot,
  LineChart,
  Workflow
} from 'lucide-react'

const services = [
  {
    title: 'Transformación Digital Industrial',
    description: 'Modernización de procesos y sistemas mediante estrategias digitales que integran tecnología, datos y automatización.',
    icon: Cpu,
  },
  {
    title: 'Automatización Inteligente con IA',
    description: 'Optimización de operaciones mediante automatización avanzada impulsada por inteligencia artificial.',
    icon: BrainCircuit,
  },
  {
    title: 'Desarrollo de Software Empresarial',
    description: 'Aplicaciones escalables y soluciones a medida orientadas a necesidades reales de negocio.',
    icon: Code2,
  },
  {
    title: 'IoT y Domótica Inteligente',
    description: 'Ecosistemas conectados para monitoreo, control y automatización en tiempo real.',
    icon: Home,
  },
  {
    title: 'Arquitectura IT/OT',
    description: 'Infraestructura robusta que conecta sistemas industriales y tecnológicos con seguridad y escalabilidad.',
    icon: Server,
  },
  {
    title: 'Cloud & Microservicios',
    description: 'Soluciones cloud-native diseñadas para alta disponibilidad y crecimiento continuo.',
    icon: CloudCog,
  },
  {
    title: 'Agentes Inteligentes',
    description: 'Sistemas autónomos capaces de ejecutar tareas, analizar datos y tomar decisiones.',
    icon: Bot,
  },
  {
    title: 'Analítica Predictiva',
    description: 'Modelos de IA para anticipar eventos, optimizar procesos y reducir riesgos.',
    icon: LineChart,
  },
  {
    title: 'Automatización Cognitiva',
    description: 'Orquestación inteligente de procesos empresariales con mínima intervención humana.',
    icon: Workflow,
  },
]

export function ServicesSection() {
  return (
    <section id="servicios" className="py-28 relative">
      <div className="container">
        {/* HEADER */}
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

        {/* GRID */}
        <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group rounded-2xl border border-border bg-card p-6 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
            >
              {/* ICON */}
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all">
                <service.icon className="h-6 w-6" />
              </div>

              {/* TITLE */}
              <h3 className="text-xl font-semibold">
                {service.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="mt-3 text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>

              {/* CTA */}
              <div className="mt-5 text-sm font-medium text-primary opacity-70 group-hover:opacity-100 transition">
                Saber más →
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
