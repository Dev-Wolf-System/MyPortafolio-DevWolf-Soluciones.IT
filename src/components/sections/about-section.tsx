'use client'

import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'

const values = [
  'Experiencia Industrial Real',
  'Enfoque Integral',
  'Tecnología de Punta',
  'Resultados Tangibles',
]

export function AboutSection() {
  return (
    <section id="nosotros" className="py-24 bg-muted/30">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Sobre Nosotros
            </h2>

            <p className="mt-6 text-muted-foreground">
              <strong className="text-foreground">DevWolf Soluciones IT</strong> es una empresa especializada en transformación digital e implementación de tecnologías para la Industria 4.0, con sede en Argentina.
            </p>

            <p className="mt-4 text-muted-foreground">
              Nuestra misión es impulsar la evolución digital de las empresas mediante soluciones tecnológicas integrales que optimizan procesos, aumentan la eficiencia operativa y generan valor medible en cada implementación.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {values.map((value, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm font-medium">{value}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Stats Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="rounded-xl border border-border bg-card p-8">
              <h3 className="font-heading text-xl font-semibold">Proof de Empresa</h3>

              <div className="mt-6 space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-border">
                  <span className="text-muted-foreground">Disponibilidad de Sistemas</span>
                  <span className="font-bold text-primary">99.9%</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-border">
                  <span className="text-muted-foreground">Integridad de Datos</span>
                  <span className="font-bold text-primary">100%</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-border">
                  <span className="text-muted-foreground">Proyectos SCADA</span>
                  <span className="font-bold text-primary">Plant-wide</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-muted-foreground">Caídas Críticas</span>
                  <span className="font-bold text-primary">0</span>
                </div>
              </div>
            </div>

            {/* Decorative gradient */}
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl blur-xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}