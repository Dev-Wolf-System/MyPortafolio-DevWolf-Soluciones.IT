'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ChevronRight,
  Zap,
  Target,
  Shield,
  TrendingUp,
  Layers,
  Clock,
  Settings,
  Code2,
} from 'lucide-react'
import type { ServiceData } from '@/data/services'
import { services } from '@/data/services'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

// Per-service contextual images (Unsplash CDN)
const serviceImages: Record<string, { src: string; alt: string }> = {
  'transformacion-digital': {
    src: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80',
    alt: 'Profesional en planta industrial digital',
  },
  'automatizacion-ia': {
    src: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&w=1200&q=80',
    alt: 'Visualización de inteligencia artificial',
  },
  'desarrollo-software': {
    src: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80',
    alt: 'Desarrollador escribiendo código',
  },
  'iot-domotica': {
    src: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&w=1200&q=80',
    alt: 'Dispositivos IoT y domótica inteligente',
  },
  'infraestructura-it-ot': {
    src: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
    alt: 'Sala de servidores y datacenter',
  },
  'cloud-microservicios': {
    src: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=80',
    alt: 'Infraestructura cloud y microservicios',
  },
  'agentes-inteligentes': {
    src: 'https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&w=1200&q=80',
    alt: 'Agente de inteligencia artificial',
  },
  'analitica-predictiva': {
    src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    alt: 'Dashboard de analítica predictiva',
  },
  'automatizacion-cognitiva': {
    src: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&w=1200&q=80',
    alt: 'Automatización cognitiva de procesos',
  },
}

// Per-service hero metrics
const heroMetrics: Record<string, { value: string; label: string; color: string }[]> = {
  'transformacion-digital': [
    { value: '40%', label: 'Reducción de costos', color: 'from-blue-400 to-cyan-300' },
    { value: '3×', label: 'Eficiencia operativa', color: 'from-violet-400 to-purple-300' },
    { value: '99.9%', label: 'Uptime sistemas', color: 'from-emerald-400 to-green-300' },
  ],
  'automatizacion-ia': [
    { value: '70%', label: 'Menos tareas manuales', color: 'from-blue-400 to-cyan-300' },
    { value: '24/7', label: 'Operación continua', color: 'from-violet-400 to-purple-300' },
    { value: '60d', label: 'ROI garantizado', color: 'from-amber-400 to-orange-300' },
  ],
  'desarrollo-software': [
    { value: '3sem', label: 'MVP funcional', color: 'from-blue-400 to-cyan-300' },
    { value: '0', label: 'Bugs críticos en entrega', color: 'from-emerald-400 to-green-300' },
    { value: '100%', label: 'Código documentado', color: 'from-violet-400 to-purple-300' },
  ],
  'iot-domotica': [
    { value: '24/7', label: 'Monitoreo activo', color: 'from-blue-400 to-cyan-300' },
    { value: '30%', label: 'Ahorro energético', color: 'from-emerald-400 to-green-300' },
    { value: '<1s', label: 'Tiempo de alerta', color: 'from-amber-400 to-orange-300' },
  ],
  'infraestructura-it-ot': [
    { value: '99.9%', label: 'Uptime garantizado', color: 'from-blue-400 to-cyan-300' },
    { value: '0', label: 'Pérdida de datos', color: 'from-emerald-400 to-green-300' },
    { value: '360°', label: 'Visibilidad IT/OT', color: 'from-violet-400 to-purple-300' },
  ],
  'cloud-microservicios': [
    { value: '∞', label: 'Escalabilidad automática', color: 'from-blue-400 to-cyan-300' },
    { value: '0', label: 'Downtime en deploys', color: 'from-emerald-400 to-green-300' },
    { value: '50%', label: 'Ahorro en infraestructura', color: 'from-amber-400 to-orange-300' },
  ],
  'agentes-inteligentes': [
    { value: '24/7', label: 'Sin supervisión', color: 'from-blue-400 to-cyan-300' },
    { value: '95%', label: 'Precisión respuestas', color: 'from-violet-400 to-purple-300' },
    { value: '<2s', label: 'Tiempo de respuesta', color: 'from-emerald-400 to-green-300' },
  ],
  'analitica-predictiva': [
    { value: '30d', label: 'Anticipación de fallas', color: 'from-blue-400 to-cyan-300' },
    { value: '95%', label: 'Precisión del modelo', color: 'from-violet-400 to-purple-300' },
    { value: '30%', label: 'Menos paradas imprevistas', color: 'from-emerald-400 to-green-300' },
  ],
  'automatizacion-cognitiva': [
    { value: '90%', label: 'Reducción de errores', color: 'from-blue-400 to-cyan-300' },
    { value: '5×', label: 'Velocidad de proceso', color: 'from-amber-400 to-orange-300' },
    { value: '45d', label: 'ROI medible', color: 'from-emerald-400 to-green-300' },
  ],
}

const benefitIcons = [Target, Zap, Shield, TrendingUp, Layers, Clock, Settings, Code2]

const dotBg = {
  backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.045) 1px, transparent 1px)',
  backgroundSize: '30px 30px',
}

interface Props {
  service: ServiceData
  slug: string
}

export function ServicePageContent({ service, slug }: Props) {
  const ServiceIcon = service.icon
  const metrics = heroMetrics[slug] ?? []
  const image = serviceImages[slug]
  const currentIndex = services.findIndex(s => s.slug === slug)
  const nextService = services[(currentIndex + 1) % services.length]

  return (
    <div className="min-h-screen bg-background">

      {/* ── BACK NAV ─────────────────────────────────── */}
      <div className="container pt-24 pb-0">
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.35 }}
        >
          <Link
            href="/#servicios"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group"
          >
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-0.5 transition-transform" />
            Servicios
          </Link>
        </motion.div>
      </div>

      {/* ── HERO ─────────────────────────────────────── */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden py-20">
        <div className="absolute inset-0" style={dotBg} />
        <div className="absolute -top-40 left-1/4 w-[560px] h-[560px] rounded-full bg-primary/15 blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/5 w-[400px] h-[400px] rounded-full bg-accent/10 blur-[90px] pointer-events-none" />

        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-14 items-center max-w-6xl mx-auto">

            {/* Left — text */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.05 }}
                className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/8 px-4 py-1.5 text-xs font-medium text-primary"
              >
                <Zap className="h-3.5 w-3.5" />
                DevWolf Soluciones IT
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.15, type: 'spring', bounce: 0.3 }}
                className="font-heading text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl leading-[1.1]"
              >
                {service.title}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-xl"
              >
                {service.longDescription}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.45 }}
                className="mt-8 flex flex-wrap gap-3"
              >
                <Button size="lg" className="px-8 font-semibold shadow-lg shadow-primary/20" asChild>
                  <a href="/#contacto">
                    Agendar diagnóstico
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-border/50 hover:bg-card"
                  asChild
                >
                  <Link href="/#servicios">Ver todos los servicios</Link>
                </Button>
              </motion.div>
            </div>

            {/* Right — image frame + metrics */}
            <div className="flex flex-col items-center gap-6">

              {/* Image frame with icon badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.88, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.25, type: 'spring', bounce: 0.3 }}
                className="relative w-full max-w-md"
              >
                {/* Glow behind frame */}
                <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-primary/25 to-accent/15 blur-2xl" />

                {/* Image container */}
                <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-primary/20 aspect-[4/3]">
                  {image ? (
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/10" />
                  )}
                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-background/10 to-transparent" />
                </div>

                {/* Icon badge floating top-left */}
                <div className="absolute -top-4 -left-4 z-10">
                  <div className="relative">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary to-accent blur-lg opacity-60" />
                    <div className="relative h-16 w-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-xl shadow-primary/30">
                      <ServiceIcon className="h-8 w-8 text-white" strokeWidth={1.5} />
                    </div>
                  </div>
                </div>

                {/* Bottom-right label */}
                <div className="absolute bottom-3 right-3 z-10 rounded-xl border border-white/10 bg-black/50 backdrop-blur-md px-3 py-1.5">
                  <span className="text-xs font-medium text-white/80">{service.title}</span>
                </div>
              </motion.div>

              {/* Metrics grid */}
              <div className="grid grid-cols-3 gap-3 w-full max-w-md">
                {metrics.map((metric, i) => (
                  <motion.div
                    key={metric.label}
                    initial={{ opacity: 0, y: 18, scale: 0.88 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.55 + i * 0.12, type: 'spring', bounce: 0.35 }}
                    className="rounded-2xl border border-white/8 bg-white/4 backdrop-blur-xl px-3 py-4 text-center"
                  >
                    <div className={cn(
                      'text-xl font-bold font-heading bg-gradient-to-r bg-clip-text text-transparent',
                      metric.color
                    )}>
                      {metric.value}
                    </div>
                    <div className="text-[10px] text-muted-foreground mt-1 leading-tight">{metric.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── BENEFITS ─────────────────────────────────── */}
      <section className="py-24">
        <div className="container max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-70px' }}
            transition={{ duration: 0.55 }}
            className="mb-14 text-center"
          >
            <h2 className="font-heading text-3xl font-bold sm:text-4xl">
              ¿Por qué DevWolf para esto?
            </h2>
            <p className="mt-4 text-muted-foreground max-w-lg mx-auto">
              Resultados concretos con metodología probada en entornos industriales y empresariales reales.
            </p>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2">
            {service.benefits.map((benefit, i) => {
              const BenefitIcon = benefitIcons[i % benefitIcons.length]
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                  className="group relative rounded-2xl border border-border/60 bg-card/40 backdrop-blur-sm p-6 overflow-hidden hover:border-primary/35 transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  <div className="relative flex items-start gap-4">
                    <div className="flex-shrink-0 h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <BenefitIcon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{benefit.title}</h3>
                      <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── USE CASES ────────────────────────────────── */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/5 via-muted/20 to-muted/5 pointer-events-none" />
        <div className="container relative z-10 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-70px' }}
            transition={{ duration: 0.55 }}
            className="mb-14 text-center"
          >
            <h2 className="font-heading text-3xl font-bold sm:text-4xl">
              Casos de uso reales
            </h2>
            <p className="mt-4 text-muted-foreground max-w-lg mx-auto">
              Implementaciones probadas en entornos productivos con resultados medibles.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2">
            {service.useCases.map((useCase, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i === 0 ? -24 : 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.55, delay: i * 0.12 }}
                className="group relative rounded-2xl border border-border bg-card overflow-hidden hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
              >
                <div className="h-[3px] bg-gradient-to-r from-primary via-accent to-primary" />
                <div className="p-7">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-heading text-xl font-semibold leading-tight">{useCase.title}</h3>
                    <div className="flex-shrink-0 h-9 w-9 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <ArrowUpRight className="h-4 w-4 text-primary" />
                    </div>
                  </div>
                  <p className="mt-4 text-muted-foreground leading-relaxed text-sm">{useCase.description}</p>
                  <div className="mt-5 inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 text-xs font-medium text-emerald-400">
                    <CheckCircle2 className="h-3 w-3" />
                    Caso implementado
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS TIMELINE ─────────────────────────── */}
      <section className="py-24">
        <div className="container max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-70px' }}
            transition={{ duration: 0.55 }}
            className="mb-16 text-center"
          >
            <h2 className="font-heading text-3xl font-bold sm:text-4xl">
              Metodología de implementación
            </h2>
            <p className="mt-4 text-muted-foreground">
              Proceso estructurado, sin sorpresas, con resultados medibles en cada fase.
            </p>
          </motion.div>

          <div className="relative space-y-6">
            {/* Vertical line (desktop only) */}
            <div className="absolute left-[21px] top-5 bottom-5 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent hidden sm:block" />

            {service.processSteps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="relative flex items-start gap-5 sm:gap-7"
              >
                {/* Step badge */}
                <div className="relative z-10 flex-shrink-0 h-11 w-11 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold shadow-lg shadow-primary/25">
                  {step.step}
                </div>

                {/* Content */}
                <div className="flex-1 rounded-2xl border border-border/60 bg-card/50 backdrop-blur-sm p-5 mt-0.5">
                  <h3 className="font-heading font-semibold text-base">{step.title}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TECH STACK ───────────────────────────────── */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/5 via-muted/15 to-muted/5 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/8 blur-3xl rounded-full pointer-events-none" />

        <div className="container relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-70px' }}
            transition={{ duration: 0.55 }}
            className="mb-12"
          >
            <h2 className="font-heading text-3xl font-bold sm:text-4xl">
              Stack tecnológico
            </h2>
            <p className="mt-4 text-muted-foreground">
              Tecnologías probadas en producción, en entornos de alta criticidad.
            </p>
          </motion.div>

          <div className="flex flex-wrap gap-3 justify-center">
            {service.techStack.map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.06 }}
                whileHover={{ scale: 1.08, y: -2 }}
                className="rounded-xl border border-primary/20 bg-primary/5 px-5 py-2.5 text-sm font-medium text-primary hover:border-primary/50 hover:bg-primary/10 transition-all cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ────────────────────────────────── */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/18 via-background to-accent/8 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[420px] bg-primary/18 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute inset-0 pointer-events-none" style={dotBg} />

        <div className="container relative z-10 max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.65, type: 'spring', bounce: 0.25 }}
          >
            <h2 className="font-heading text-4xl font-bold sm:text-5xl leading-tight">
              ¿Listo para implementar{' '}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                {service.title}?
              </span>
            </h2>

            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Agendá un diagnóstico gratuito. Analizamos tu caso y presentamos la solución óptima con ROI proyectado.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="text-base px-10 py-6 font-semibold shadow-xl shadow-primary/25"
                asChild
              >
                <a href="/#contacto">
                  Agendar diagnóstico gratuito
                  <ChevronRight className="ml-1.5 h-5 w-5" />
                </a>
              </Button>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-5 text-xs text-muted-foreground">
              {['Sin costo', 'Sin compromiso', 'Respuesta en <24hs'].map(text => (
                <span key={text} className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-primary flex-shrink-0" />
                  {text}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── BOTTOM NAV ───────────────────────────────── */}
      <div className="container py-10 border-t border-border">
        <div className="flex items-center justify-between gap-4">
          <Link
            href="/#servicios"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group"
          >
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-0.5 transition-transform" />
            Todos los servicios
          </Link>

          <Link
            href={`/servicios/${nextService.slug}`}
            className="inline-flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors group"
          >
            <div className="text-right hidden sm:block">
              <div className="text-[11px] opacity-50">Siguiente servicio</div>
              <div className="font-medium text-sm text-foreground group-hover:text-primary transition-colors">{nextService.title}</div>
            </div>
            <div className="h-9 w-9 rounded-xl bg-card border border-border flex items-center justify-center group-hover:border-primary/40 group-hover:bg-primary/5 transition-all">
              <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </Link>
        </div>
      </div>

    </div>
  )
}
