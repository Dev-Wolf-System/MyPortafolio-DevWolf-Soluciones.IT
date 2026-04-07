'use client'

import { motion } from 'framer-motion'
import CountUp from 'react-countup'

const stats = [
  {
    value: 99.9,
    suffix: '%',
    label: 'Uptime en sistemas críticos',
    description: 'Infraestructura diseñada para alta disponibilidad',
  },
  {
    value: 40,
    suffix: '%+',
    label: 'Mejora en eficiencia operativa',
    description: 'Optimización de procesos industriales',
  },
  {
    value: 60,
    suffix: '%+',
    label: 'Reducción de tareas manuales',
    description: 'Automatización inteligente aplicada',
  },
  {
    value: 24,
    suffix: '/7',
    label: 'Monitoreo y control continuo',
    description: 'Visibilidad total en tiempo real',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

export function StatsSection() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-primary/5 to-background" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-primary/10 blur-3xl opacity-30" />

      <div className="container relative z-10">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="text-sm uppercase tracking-widest text-primary font-medium">
            Impacto Real
          </span>

          <h2 className="mt-3 font-heading text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl leading-tight">
            Resultados medibles en
            <span className="text-primary"> entornos reales</span>
          </h2>

          <p className="mt-5 text-muted-foreground text-lg">
            No hablamos de promesas, sino de métricas concretas obtenidas en
            implementaciones reales de automatización, IA y sistemas industriales.
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
              className="group relative rounded-3xl border border-border bg-card/60 backdrop-blur-xl p-8 text-center transition-all duration-500 hover:-translate-y-3 hover:border-primary hover:shadow-2xl hover:shadow-primary/20"
            >
              {/* Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 rounded-3xl" />

              {/* VALUE */}
              <div className="relative font-heading text-5xl font-bold sm:text-6xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                <CountUp
                  end={stat.value}
                  duration={2.2}
                  decimals={stat.value % 1 !== 0 ? 1 : 0}
                />
                {stat.suffix}
              </div>

              {/* LABEL */}
              <p className="mt-3 text-sm font-medium text-foreground">
                {stat.label}
              </p>

              {/* DESCRIPTION (🔥 NUEVO) */}
              <p className="mt-2 text-xs text-muted-foreground">
                {stat.description}
              </p>

              {/* Divider */}
              <div className="mt-5 h-[2px] w-10 mx-auto bg-gradient-to-r from-primary to-secondary opacity-50 group-hover:w-16 transition-all duration-300" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
