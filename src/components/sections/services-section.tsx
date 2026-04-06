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
    description: 'Diseño e implementación de estrategias de transformación digital para modernizar procesos, integrar sistemas y habilitar operaciones inteligentes alineadas a Industria 4.0.',
    icon: Cpu,
  },
  {
    title: 'Automatización Inteligente con IA',
    description: 'Implementación de soluciones de automatización avanzada potenciadas por inteligencia artificial para optimizar procesos, reducir costos operativos y mejorar la toma de decisiones.',
    icon: BrainCircuit,
  },
  {
    title: 'Desarrollo de Software Empresarial',
    description: 'Desarrollo Full Stack de aplicaciones empresariales a medida, integraciones complejas y plataformas escalables orientadas a negocio.',
    icon: Code2,
  },
  {
    title: 'IoT y Domótica Inteligente',
    description: 'Implementación de ecosistemas IoT para monitoreo, control y automatización de entornos industriales, comerciales y residenciales.',
    icon: Home,
  },
  {
    title: 'Arquitectura e Infraestructura IT/OT',
    description: 'Diseño de arquitecturas convergentes IT/OT, integración de sistemas SCADA y redes industriales con foco en seguridad, escalabilidad y alta disponibilidad.',
    icon: Server,
  },
  {
    title: 'Plataformas Cloud y Microservicios',
    description: 'Desarrollo de soluciones cloud-native basadas en microservicios, garantizando escalabilidad, resiliencia y despliegues ágiles.',
    icon: CloudCog,
  },

  // 🤖 NUEVOS - IA & AGENTES

  {
    title: 'Desarrollo de Agentes Inteligentes',
    description: 'Diseño e implementación de agentes autónomos capaces de interactuar con sistemas, procesar información en tiempo real y ejecutar acciones automatizadas en entornos empresariales e industriales.',
    icon: Bot,
  },
  {
    title: 'IA Predictiva y Analítica Avanzada',
    description: 'Implementación de modelos de inteligencia artificial para predicción de fallas, detección de anomalías y optimización de procesos basada en datos.',
    icon: LineChart,
  },
  {
    title: 'Automatización Cognitiva de Procesos',
    description: 'Orquestación de flujos de trabajo inteligentes mediante IA, integrando sistemas, APIs y plataformas para lograr automatización end-to-end con mínima intervención humana.',
    icon: Workflow,
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
    <section id="servicios" className="py-24 relative">
      <div className="container">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-sm uppercase tracking-widest text-primary font-medium">
            Capacidades
          </span>

          <h2 className="mt-2 font-heading text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Servicios Corporativos
          </h2>

          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Soluciones tecnológicas diseñadas para impulsar la eficiencia operativa,
            la innovación y la transformación digital en entornos empresariales.
          </p>
        </motion.div>

        {/* GRID */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card/80 backdrop-blur-sm p-6 transition-all duration-300 hover:-translate-y-2 hover:border-primary hover:shadow-2xl hover:shadow-primary/10"
            >
              {/* Glow dinámico */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />

              {/* Barra superior animada */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-secondary scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />

              {/* ICON */}
              <div className="relative mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 text-primary group-hover:from-primary group-hover:to-secondary group-hover:text-white transition-all duration-300 shadow-sm">
                <service.icon className="h-6 w-6" />
              </div>

              {/* TITLE */}
              <h3 className="font-heading text-xl font-semibold group-hover:text-primary transition-colors">
                {service.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>

              {/* CTA sutil */}
              <div className="mt-5 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition">
                Explorar solución →
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
