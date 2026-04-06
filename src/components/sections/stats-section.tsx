'use client'

import { motion } from 'framer-motion'
import CountUp from 'react-countup'

const stats = [
  { value: '99.9', suffix: '%', label: 'Disponibilidad de Sistemas' },
  { value: '100', suffix: '%', label: 'Integridad de Datos' },
  { value: '0', suffix: '', label: 'Incidentes Críticos' },
  { value: '24', suffix: '/7', label: 'Monitoreo Continuo' },
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
    <section className="relative py-32 overflow-hidden">
      {/* Fondo avanzado */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-background to-secondary/5" />
      <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/10 blur-3xl opacity-30" />

      <div className="container relative z-10">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <span className="text-sm uppercase tracking-widest text-primary font-medium">
            Performance & Reliability
          </span>

          <h2 className="mt-3 font-heading text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Resultados que Hablan por Sí Solos
          </h2>

          <p className="mt-5 text-muted-foreground max-w-2xl mx-auto text-lg">
            Indicadores clave que reflejan la calidad, confiabilidad y el impacto
            real de nuestras soluciones en entornos industriales y empresariales.
          </p>
        </motion.div>

        {/* STATS */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-24 grid gap-10 sm:grid-cols-2 lg:grid-cols-4"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative rounded-3xl border border-border bg-card/60 backdrop-blur-xl p-10 text-center transition-all duration-500 hover:-translate-y-3 hover:border-primary hover:shadow-2xl hover:shadow-primary/20"
            >
              {/* Glow dinámico */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 rounded-3xl" />

              {/* Valor con animación */}
              <div className="relative font-heading text-5xl font-bold sm:text-6xl lg:text-7xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                <CountUp
                  end={parseFloat(stat.value)}
                  duration={2.5}
                  decimals={stat.value.includes('.') ? 1 : 0}
                />
                {stat.suffix}
              </div>

              {/* Label */}
              <p className="mt-4 text-sm text-muted-foreground tracking-wide uppercase">
                {stat.label}
              </p>

              {/* Divider animado */}
              <div className="mt-5 h-[2px] w-12 mx-auto bg-gradient-to-r from-primary to-secondary opacity-50 group-hover:w-20 transition-all duration-300" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}