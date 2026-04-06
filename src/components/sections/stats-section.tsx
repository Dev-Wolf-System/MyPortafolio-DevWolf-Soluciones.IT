'use client'

import { motion } from 'framer-motion'

const stats = [
  { value: '99.9%', label: 'Uptime garantizado', color: 'text-primary' },
  { value: '0', label: 'Pérdidas de datos', color: 'text-secondary' },
  { value: '100%', label: 'Proyectos completados', color: 'text-primary' },
  { value: '24/7', label: 'Soporte técnico', color: 'text-secondary' },
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
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5 },
  },
}

export function StatsSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Fondo con gradiente DevWolf */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-background to-secondary/5" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-center font-heading text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Resultados Comprobados
          </h2>
          <p className="mt-4 text-center text-muted-foreground max-w-2xl mx-auto">
            Métricas que demuestran nuestro compromiso con la excelencia
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center"
            >
              <div className={`font-heading text-4xl font-bold sm:text-5xl lg:text-6xl ${stat.color}`}>
                {stat.value}
              </div>
              <p className="mt-2 text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}