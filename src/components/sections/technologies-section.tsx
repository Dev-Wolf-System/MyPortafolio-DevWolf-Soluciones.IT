'use client'

import { motion } from 'framer-motion'

const techRow1 = [
  { name: 'n8n', color: '#EA4B71' },
  { name: 'Node.js', color: '#339933' },
  { name: 'React', color: '#61DAFB' },
  { name: 'Next.js', color: '#FFFFFF' },
  { name: 'TypeScript', color: '#3178C6' },
  { name: 'Python', color: '#3776AB' },
  { name: 'Docker', color: '#2496ED' },
  { name: 'Kubernetes', color: '#326CE5' },
]

const techRow2 = [
  { name: 'PostgreSQL', color: '#336791' },
  { name: 'SCADA', color: '#FF6B35' },
  { name: 'MQTT', color: '#660066' },
  { name: 'OPC-UA', color: '#4CAF50' },
  { name: 'AWS', color: '#FF9900' },
  { name: 'Grafana', color: '#F46800' },
  { name: 'Redis', color: '#DC382D' },
  { name: 'TensorFlow', color: '#FF6F00' },
]

function TechBadge({ name, color }: { name: string; color: string }) {
  return (
    <div className="flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 whitespace-nowrap">
      <span
        className="h-2.5 w-2.5 rounded-full flex-shrink-0"
        style={{ backgroundColor: color }}
      />
      <span className="text-sm font-medium text-muted-foreground">{name}</span>
    </div>
  )
}

function MarqueeRow({ items, reverse = false }: { items: typeof techRow1; reverse?: boolean }) {
  const doubled = [...items, ...items]

  return (
    <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
      <motion.div
        className="flex gap-4"
        animate={{ x: reverse ? ['0%', '50%'] : ['0%', '-50%'] }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        {doubled.map((tech, i) => (
          <TechBadge key={`${tech.name}-${i}`} name={tech.name} color={tech.color} />
        ))}
      </motion.div>
    </div>
  )
}

export function TechnologiesSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/10 to-background" />

      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="container text-center mb-14"
        >
          <span className="text-sm uppercase tracking-widest text-primary font-medium">
            Stack Tecnológico
          </span>

          <h2 className="mt-3 font-heading text-4xl font-bold sm:text-5xl">
            Tecnologías que dominamos
          </h2>

          <p className="mt-5 text-muted-foreground text-lg max-w-2xl mx-auto">
            Usamos las herramientas correctas para cada desafío. Sin dogmatismo tecnológico, siempre enfocados en el resultado.
          </p>
        </motion.div>

        <div className="flex flex-col gap-5">
          <MarqueeRow items={techRow1} />
          <MarqueeRow items={techRow2} reverse />
        </div>
      </div>
    </section>
  )
}
