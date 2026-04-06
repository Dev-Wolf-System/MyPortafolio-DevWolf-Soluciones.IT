'use client'

import { motion } from 'framer-motion'
import {
  Cpu,
  BrainCircuit,
  Code2,
  Home,
  Server,
  CloudCog,
} from 'lucide-react'

const services = [
  {
    title: 'Transformación Digital',
    description: 'Modernización de procesos industriales y digitalización de operaciones para la Industria 4.0.',
    icon: Cpu,
  },
  {
    title: 'Automatización con IA',
    description: 'Implementación de inteligencia artificial y automatización de flujos de trabajo empresariales.',
    icon: BrainCircuit,
  },
  {
    title: 'Desarrollo de Software',
    description: 'Desarrollo Full Stack a medida, aplicaciones web empresariales e integración de sistemas.',
    icon: Code2,
  },
  {
    title: 'Domótica e IoT',
    description: 'Sistemas inteligentes para hogares y empresas, integración de dispositivos conectados.',
    icon: Home,
  },
  {
    title: 'Infraestructura IT/OT',
    description: 'Convergencia TI-Tecnología Operacional, sistemas SCADA y arquitectura de redes industriales.',
    icon: Server,
  },
  {
    title: 'SaaS y Microservicios',
    description: 'Desarrollo de plataformas cloud-native y arquitecturas de microservicios escalables.',
    icon: CloudCog,
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

export function ServicesSection() {
  return (
    <section id="servicios" className="py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-center font-heading text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Servicios Corporativos
          </h2>
          <p className="mt-4 text-center text-muted-foreground max-w-2xl mx-auto">
            Soluciones integrales para la transformación digital de tu empresa
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-xl border border-border bg-card p-6 transition-all hover:border-primary hover:shadow-lg hover:shadow-primary/10"
            >
              {/* Barra decorativa con color secundario (rojo DevWolf) */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />

              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="font-heading text-xl font-semibold">{service.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}