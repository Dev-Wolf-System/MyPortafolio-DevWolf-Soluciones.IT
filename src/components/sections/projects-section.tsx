'use client'

import { motion } from 'framer-motion'
import { Building2, Cpu, Server, Settings, Database, Bot } from 'lucide-react'

const projects = [
  {
    title: 'Sistema SCADA de Alta Disponibilidad',
    client: 'Sector Industrial y Plantas Productoras',
    description:
      'Implementación de plataforma SCADA plant-wide con monitoreo y control en tiempo real, integrando sistemas IT/OT para una operación centralizada y altamente eficiente.',
    result: '↑ +30% eficiencia operativa | ↓ fallas críticas',
    tags: ['SCADA', 'Alta Disponibilidad', 'IT/OT', 'Tiempo Real'],
    icon: Cpu,
  },
  {
    title: 'Arquitectura IT/OT Escalable',
    client: 'Planta Industrial',
    description:
      'Diseño de infraestructura convergente IT/OT con redes industriales seguras y escalables, integrando sistemas productivos con plataformas empresariales.',
    result: '↑ escalabilidad | ↑ seguridad | ↓ cuellos de botella',
    tags: ['IT/OT', 'Redes', 'Ciberseguridad'],
    icon: Server,
  },
  {
    title: 'Transformación Digital End-to-End',
    client: 'Empresas Multisector',
    description:
      'Estrategia integral de digitalización combinando automatización, analítica avanzada e integración de sistemas para maximizar competitividad.',
    result: '↑ productividad | ↓ costos operativos',
    tags: ['Transformación Digital', 'Automatización', 'Data'],
    icon: Building2,
  },
  {
    title: 'Automatización de Procesos Productivos',
    client: 'Plantas Industriales',
    description:
      'Automatización avanzada con PLC y sistemas inteligentes para eliminar tareas manuales y mejorar la confiabilidad operativa.',
    result: '↓ errores humanos | ↑ eficiencia continua',
    tags: ['PLC', 'Automatización', 'Optimización'],
    icon: Settings,
  },
  {
    title: 'Integración y Orquestación de Datos',
    client: 'Ecosistemas Industriales',
    description:
      'Arquitectura de integración de datos entre sistemas industriales y empresariales para decisiones estratégicas en tiempo real.',
    result: '↑ trazabilidad | ↑ decisiones en tiempo real',
    tags: ['ETL', 'APIs', 'Big Data'],
    icon: Database,
  },
  {
    title: 'IA Aplicada a Procesos Industriales',
    client: 'Industria 4.0',
    description:
      'Desarrollo de agentes inteligentes para análisis predictivo, detección de anomalías y automatización de decisiones operativas.',
    result: '↓ fallas | ↑ anticipación | ↑ eficiencia',
    tags: ['IA', 'Predictivo', 'Automatización'],
    icon: Bot,
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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

export function ProjectsSection() {
  return (
    <section id="proyectos" className="py-24 relative">
      <div className="container max-w-6xl mx-auto px-4">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-sm font-medium text-primary tracking-widest uppercase">
            Casos reales
          </span>

          <h2 className="mt-2 font-heading text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Resultados que generan impacto
          </h2>

          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Proyectos diseñados para optimizar procesos, reducir costos y escalar operaciones mediante tecnología, automatización e inteligencia artificial.
          </p>
        </motion.div>

        {/* GRID */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-2 hover:border-primary hover:shadow-2xl hover:shadow-primary/10"
            >
              {/* Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />

              {/* Top bar */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-secondary scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />

              {/* ICON */}
              <div className="relative mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 text-primary group-hover:from-primary group-hover:to-secondary group-hover:text-white transition-all duration-300">
                <project.icon className="h-6 w-6" />
              </div>

              {/* CLIENT */}
              <span className="text-xs uppercase tracking-wider text-muted-foreground">
                {project.client}
              </span>

              {/* TITLE */}
              <h3 className="font-heading text-xl font-semibold mt-1 group-hover:text-primary transition-colors">
                {project.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                {project.description}
              </p>

              {/* RESULT (🔥 clave de venta) */}
              <div className="mt-4 text-sm font-semibold text-primary">
                {project.result}
              </div>

              {/* TAGS */}
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center rounded-md border border-border bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground transition group-hover:border-primary/30 group-hover:text-primary"
                  >
                    {tag}
                  </span>
                ))}
              </div>

            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
