'use client'

import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'

const values = [
  'Experiencia real en entornos industriales',
  'Automatización orientada a resultados',
  'Integración IT/OT sin fricción',
  'Soluciones escalables y medibles',
]

export function AboutSection() {
  return (
    <section id="nosotros" className="relative py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />

      <div className="container relative z-10">
        <div className="grid gap-16 lg:grid-cols-2 items-center">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-sm uppercase tracking-widest text-primary font-medium">
              Sobre DevWolf
            </span>

            <h2 className="mt-3 font-heading text-4xl font-bold tracking-tight sm:text-5xl leading-tight">
              Ingeniería aplicada a la
              <span className="text-primary"> transformación real</span>
            </h2>

            <p className="mt-6 text-muted-foreground text-lg">
              En <strong className="text-foreground">DevWolf</strong> ayudamos a empresas a
              automatizar procesos, integrar sistemas y escalar operaciones mediante
              tecnología, inteligencia artificial y arquitectura industrial moderna.
            </p>

            <p className="mt-4 text-muted-foreground">
              No trabajamos con soluciones genéricas. Diseñamos e implementamos
              sistemas adaptados a cada entorno, con foco en eficiencia operativa,
              reducción de costos y toma de decisiones basada en datos.
            </p>

            {/* VALUE POINTS */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {values.map((value, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm font-medium">{value}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT CARD */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="rounded-2xl border border-border bg-card/70 backdrop-blur-xl p-8">

              <h3 className="font-heading text-xl font-semibold">
                Impacto en implementaciones reales
              </h3>

              <div className="mt-6 space-y-5">

                <div className="flex justify-between items-start">
                  <span className="text-muted-foreground">
                    Automatización de procesos operativos
                  </span>
                  <span className="font-bold text-primary">+60%</span>
                </div>

                <div className="flex justify-between items-start">
                  <span className="text-muted-foreground">
                    Reducción de tareas manuales
                  </span>
                  <span className="font-bold text-primary">+70%</span>
                </div>

                <div className="flex justify-between items-start">
                  <span className="text-muted-foreground">
                    Integración de sistemas IT / OT
                  </span>
                  <span className="font-bold text-primary">End-to-end</span>
                </div>

                <div className="flex justify-between items-start">
                  <span className="text-muted-foreground">
                    Visibilidad en tiempo real
                  </span>
                  <span className="font-bold text-primary">100%</span>
                </div>

                <div className="flex justify-between items-start">
                  <span className="text-muted-foreground">
                    Escalabilidad de soluciones
                  </span>
                  <span className="font-bold text-primary">Alta</span>
                </div>

              </div>
            </div>

            {/* Glow */}
            <div className="absolute -inset-6 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-2xl -z-10" />
          </motion.div>

        </div>
      </div>
    </section>
  )
}
