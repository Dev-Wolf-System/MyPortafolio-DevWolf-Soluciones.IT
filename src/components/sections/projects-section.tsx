'use client'

import { motion } from 'framer-motion'
import { Building2, Cpu, Server, Settings, Database, Bot  } from 'lucide-react'

const projects = [
  {
    title: 'Plataforma SCADA Industrial Plant-wide',
    client: 'Ingenio La Corona',
    description: 'Diseño e implementación de plataforma SCADA de misión crítica para supervisión, control y analítica en tiempo real a nivel planta completa. Integración de sistemas IT/OT, asegurando alta disponibilidad, trazabilidad de datos y optimización continua de los procesos productivos.',
    tags: ['SCADA', 'Alta Disponibilidad', 'Integración IT/OT', 'Tiempo Real', 'Industria 4.0'],
    icon: Cpu,
  },
  {
    title: 'Arquitectura e Infraestructura IT/OT',
    client: 'Sector Industrial',
    description: 'Diseño e implementación de arquitecturas convergentes IT/OT, garantizando interoperabilidad, seguridad y escalabilidad. Integración de redes industriales, sistemas SCADA y plataformas empresariales para una operación conectada, eficiente y orientada a datos.',
    tags: ['IT/OT', 'Redes Industriales', 'Ciberseguridad', 'SCADA', 'Infraestructura Crítica'],
    icon: Server,
  },
  {
    title: 'Programa de Transformación Digital Industrial',
    client: 'Empresas Multisector',
    description: 'Ejecución de estrategias integrales de transformación digital, alineando tecnología, procesos y negocio. Implementación de soluciones de automatización, analítica avanzada e integración de sistemas para maximizar eficiencia operativa y competitividad.',
    tags: ['Transformación Digital', 'Automatización', 'Data Analytics', 'Industria 4.0', 'Consultoría Estratégica'],
    icon: Building2,
  },
  {
    title: 'Automatización de Procesos Industriales',
    client: 'Plantas Productivas',
    description: 'Implementación de soluciones de automatización avanzada para optimizar procesos productivos, reducir intervención manual y minimizar errores operativos, incrementando la eficiencia y la confiabilidad del sistema.',
    tags: ['Automatización', 'PLC', 'Optimización', 'Industria 4.0', 'Eficiencia Operativa'],
    icon: Settings,
  },
  {
    title: 'Plataforma de Integración y Orquestación de Datos',
    client: 'Ecosistemas Industriales',
    description: 'Diseño de arquitectura para integración y orquestación de datos entre sistemas industriales y empresariales, habilitando analítica avanzada, trazabilidad completa y decisiones estratégicas en tiempo real.',
    tags: ['Integración de Datos', 'ETL', 'APIs', 'Big Data', 'IT/OT'],
    icon: Database,
  },
  {
    title: 'Agentes Inteligentes e IA Aplicada a la Industria',
    client: 'Industria 4.0',
    description: 'Desarrollo e implementación de agentes inteligentes e inteligencia artificial para análisis predictivo, detección de anomalías y automatización de decisiones operativas. Integración con sistemas industriales para optimizar procesos, anticipar fallas y potenciar la eficiencia en tiempo real.',
    tags: ['Agentes IA', 'Inteligencia Artificial', 'Predictivo', 'Automatización Inteligente', 'Industria 4.0'],
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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

export function ProjectsSection() {
  return (
    <section id="proyectos" className="py-24 relative">
      <div className="container">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-sm font-medium text-primary tracking-widest uppercase">
            Portfolio
          </span>

          <h2 className="mt-2 font-heading text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Casos de Éxito
          </h2>

          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Proyectos estratégicos que reflejan nuestra capacidad para transformar
            operaciones industriales mediante tecnología, datos e inteligencia.
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
              {/* Glow effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />

              {/* Top bar animada */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-secondary scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />

              {/* ICON */}
              <div className="relative mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 text-primary group-hover:from-primary group-hover:to-secondary group-hover:text-white transition-all duration-300 shadow-sm">
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

              {/* CTA sutil */}
              <div className="mt-6 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition">
                Ver más →
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
