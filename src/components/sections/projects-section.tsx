'use client'

import { motion } from 'framer-motion'
import { Building2, Cpu, Server } from 'lucide-react'

const projects = [
  {
    title: 'Sistema SCADA Industrial',
    client: 'Ingenio La Corona',
    description: 'Implementación completa de sistema SCADA para control y monitoreo de procesos industriales a nivel planta.',
    tags: ['SCADA', 'IT/OT', 'Industria 4.0'],
    icon: Cpu,
  },
  {
    title: 'Transformación Digital',
    client: 'Empresas Varias',
    description: 'Modernización de infraestructura y procesos para adopción de tecnologías de Industria 4.0.',
    tags: ['Digitalización', 'Automatización', 'Consultoría'],
    icon: Building2,
  },
  {
    title: 'Infraestructura IT/OT',
    client: 'Sector Industrial',
    description: 'Convergencia de tecnologías de información y operación para optimización de procesos productivos.',
    tags: ['IT/OT', 'Redes Industriales', 'SCADA'],
    icon: Server,
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
    <section id="proyectos" className="py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-center font-heading text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Casos de Éxito
          </h2>
          <p className="mt-4 text-center text-muted-foreground max-w-2xl mx-auto">
            Proyectos que demuestran nuestra experiencia y resultados tangibles
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-xl border border-border bg-card p-6 transition-all hover:border-primary hover:shadow-lg hover:shadow-primary/5"
            >
              {/* Barra decorativa */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-secondary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />

              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 text-primary group-hover:from-primary group-hover:to-secondary group-hover:text-white transition-all">
                <project.icon className="h-6 w-6" />
              </div>

              <span className="text-sm text-primary font-medium">{project.client}</span>
              <h3 className="font-heading text-xl font-semibold mt-1">{project.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{project.description}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium text-muted-foreground"
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