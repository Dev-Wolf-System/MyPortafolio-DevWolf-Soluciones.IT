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
    <section id="nosotros" className="relative py-24 overflow-hidden">
      {/* Fondo decorativo */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      <div className="absolute top-1/2 left-0 w-1/2 h-px bg-gradient-to-r from-primary/20 to-transparent" />
      <div className="absolute top-1/2 right-0 w-1/2 h-px bg-gradient-to-l from-secondary/20 to-transparent" />

      <div className="container relative z-10">
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
              <strong className="text-foreground">DevWolf Soluciones IT</strong> es una empresa especializada en transformación digital e implementación de tecnologías para la Industria 4.0.
            </p>

            <p className="mt-4 text-muted-foreground">
              Nuestra misión es liderar la evolución digital de las empresas mediante soluciones tecnológicas integrales, diseñadas para optimizar procesos, maximizar la eficiencia operativa y generar valor tangible en cada implementación.

              Acompañamos a nuestros clientes con una visión estratégica, combinando innovación, automatización e inteligencia de datos para transformar desafíos en oportunidades y resultados concretos.
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
              <h3 className="font-heading text-xl font-semibold">Prueba de Excelencia Operativa</h3>

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
                  <span className="text-muted-foreground">Implementaciones SCADA</span>
                  <span className="font-bold text-primary">Cobertura Plant-wide</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-muted-foreground">Incidentes Críticos</span>
                  <span className="font-bold text-primary">0 interrupciones</span>
                </div>
               <div className="flex justify-between items-center py-2">
                  <span className="text-muted-foreground">Automatización de Procesos</span>
                  <span className="font-bold text-primary">+75%</span>
                </div>
               <div className="flex justify-between items-center py-2">
                  <span className="text-muted-foreground">Monitoreo en Tiempo Real</span>
                  <span className="font-bold text-primary">+75%</span>
                </div>
               <div className="flex justify-between items-center py-2">
                  <span className="text-muted-foreground">Integración OT/IT</span>
                  <span className="font-bold text-primary">100% interoperable</span>
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