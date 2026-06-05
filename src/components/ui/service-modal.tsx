'use client'

import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, CheckCircle2, ChevronRight, ArrowUpRight, Zap, Target, Shield, TrendingUp, Layers, Clock, Settings, Code2 } from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import type { ServiceData } from '@/data/services'

const heroMetrics: Record<string, { value: string; label: string; color: string }[]> = {
  'transformacion-digital': [
    { value: '40%', label: 'Reducción costos', color: 'from-blue-400 to-cyan-300' },
    { value: '3×', label: 'Eficiencia', color: 'from-violet-400 to-purple-300' },
    { value: '99.9%', label: 'Uptime', color: 'from-emerald-400 to-green-300' },
  ],
  'automatizacion-ia': [
    { value: '70%', label: 'Menos trabajo manual', color: 'from-blue-400 to-cyan-300' },
    { value: '24/7', label: 'Operación continua', color: 'from-violet-400 to-purple-300' },
    { value: '60d', label: 'ROI garantizado', color: 'from-amber-400 to-orange-300' },
  ],
  'desarrollo-software': [
    { value: '3sem', label: 'MVP funcional', color: 'from-blue-400 to-cyan-300' },
    { value: '0', label: 'Bugs críticos', color: 'from-emerald-400 to-green-300' },
    { value: '100%', label: 'Documentado', color: 'from-violet-400 to-purple-300' },
  ],
  'iot-domotica': [
    { value: '24/7', label: 'Monitoreo activo', color: 'from-blue-400 to-cyan-300' },
    { value: '30%', label: 'Ahorro energético', color: 'from-emerald-400 to-green-300' },
    { value: '<1s', label: 'Tiempo alerta', color: 'from-amber-400 to-orange-300' },
  ],
  'infraestructura-it-ot': [
    { value: '99.9%', label: 'Uptime', color: 'from-blue-400 to-cyan-300' },
    { value: '0', label: 'Pérdida datos', color: 'from-emerald-400 to-green-300' },
    { value: '360°', label: 'Visibilidad IT/OT', color: 'from-violet-400 to-purple-300' },
  ],
  'cloud-microservicios': [
    { value: '∞', label: 'Escalabilidad', color: 'from-blue-400 to-cyan-300' },
    { value: '0', label: 'Downtime', color: 'from-emerald-400 to-green-300' },
    { value: '50%', label: 'Ahorro infra', color: 'from-amber-400 to-orange-300' },
  ],
  'agentes-inteligentes': [
    { value: '24/7', label: 'Sin supervisión', color: 'from-blue-400 to-cyan-300' },
    { value: '95%', label: 'Precisión', color: 'from-violet-400 to-purple-300' },
    { value: '<2s', label: 'Respuesta', color: 'from-emerald-400 to-green-300' },
  ],
  'analitica-predictiva': [
    { value: '30d', label: 'Anticipación fallas', color: 'from-blue-400 to-cyan-300' },
    { value: '95%', label: 'Precisión modelo', color: 'from-violet-400 to-purple-300' },
    { value: '30%', label: 'Menos paradas', color: 'from-emerald-400 to-green-300' },
  ],
  'automatizacion-cognitiva': [
    { value: '90%', label: 'Menos errores', color: 'from-blue-400 to-cyan-300' },
    { value: '5×', label: 'Velocidad', color: 'from-amber-400 to-orange-300' },
    { value: '45d', label: 'ROI medible', color: 'from-emerald-400 to-green-300' },
  ],
}

const serviceImages: Record<string, string> = {
  'transformacion-digital': 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80',
  'automatizacion-ia': 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&w=1200&q=80',
  'desarrollo-software': 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80',
  'iot-domotica': 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&w=1200&q=80',
  'infraestructura-it-ot': 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
  'cloud-microservicios': 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=80',
  'agentes-inteligentes': 'https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&w=1200&q=80',
  'analitica-predictiva': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
  'automatizacion-cognitiva': 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&w=1200&q=80',
}

const benefitIcons = [Target, Zap, Shield, TrendingUp, Layers, Clock, Settings, Code2]

interface Props {
  service: ServiceData | null
  onClose: () => void
}

export function ServiceModal({ service, onClose }: Props) {
  // Lock body scroll
  useEffect(() => {
    if (service) {
      document.body.style.overflow = 'hidden'
    }
    return () => { document.body.style.overflow = '' }
  }, [service])

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  return (
    <AnimatePresence>
      {service && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-background/75 backdrop-blur-md"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              key="modal"
              initial={{ opacity: 0, scale: 0.92, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 12 }}
              transition={{ type: 'spring', bounce: 0.25, duration: 0.45 }}
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl border border-border bg-card shadow-2xl shadow-black/40"
              onClick={e => e.stopPropagation()}
            >
              {/* ── HERO HEADER ── */}
              <div className="relative h-52 overflow-hidden rounded-t-3xl">
                {serviceImages[service.slug] ? (
                  <img
                    src={serviceImages[service.slug]}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-primary/30 to-accent/20" />
                )}
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />

                {/* Icon badge */}
                <div className="absolute bottom-4 left-6">
                  <div className="relative">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary to-accent blur-lg opacity-50" />
                    <div className="relative h-14 w-14 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-xl">
                      <service.icon className="h-7 w-7 text-white" strokeWidth={1.5} />
                    </div>
                  </div>
                </div>

                {/* Close button */}
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 h-9 w-9 rounded-xl bg-black/40 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-black/60 transition-all"
                  aria-label="Cerrar"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* ── CONTENT ── */}
              <div className="px-6 pb-8 pt-4 sm:px-8">

                {/* Title */}
                <h2 className="font-heading text-2xl font-bold sm:text-3xl">{service.title}</h2>
                <p className="mt-2 text-muted-foreground leading-relaxed">{service.longDescription}</p>

                {/* Metrics */}
                {heroMetrics[service.slug] && (
                  <div className="mt-5 grid grid-cols-3 gap-3">
                    {heroMetrics[service.slug].map((m) => (
                      <div
                        key={m.label}
                        className="rounded-2xl border border-white/8 bg-white/4 px-3 py-3 text-center"
                      >
                        <div className={cn(
                          'text-lg font-bold font-heading bg-gradient-to-r bg-clip-text text-transparent',
                          m.color
                        )}>
                          {m.value}
                        </div>
                        <div className="text-[10px] text-muted-foreground mt-0.5 leading-tight">{m.label}</div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Benefits */}
                <div className="mt-8">
                  <h3 className="font-heading font-semibold text-sm uppercase tracking-wider text-muted-foreground/60 mb-4">
                    Beneficios clave
                  </h3>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {service.benefits.map((b, i) => {
                      const Icon = benefitIcons[i % benefitIcons.length]
                      return (
                        <div
                          key={i}
                          className="flex items-start gap-3 rounded-xl border border-border/50 bg-muted/20 p-4"
                        >
                          <div className="flex-shrink-0 h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center">
                            <Icon className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <p className="text-sm font-medium">{b.title}</p>
                            <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">{b.description}</p>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>

                {/* Use cases */}
                <div className="mt-8">
                  <h3 className="font-heading font-semibold text-sm uppercase tracking-wider text-muted-foreground/60 mb-4">
                    Casos de uso
                  </h3>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {service.useCases.map((uc, i) => (
                      <div key={i} className="relative rounded-xl border border-border bg-card/60 overflow-hidden p-4">
                        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary to-accent" />
                        <div className="flex items-start justify-between gap-2">
                          <p className="text-sm font-semibold leading-tight">{uc.title}</p>
                          <ArrowUpRight className="h-3.5 w-3.5 text-primary flex-shrink-0 mt-0.5" />
                        </div>
                        <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed">{uc.description}</p>
                        <div className="mt-3 inline-flex items-center gap-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 text-[10px] font-medium text-emerald-400">
                          <CheckCircle2 className="h-2.5 w-2.5" />
                          Implementado
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech stack */}
                <div className="mt-8">
                  <h3 className="font-heading font-semibold text-sm uppercase tracking-wider text-muted-foreground/60 mb-4">
                    Stack tecnológico
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {service.techStack.map(tech => (
                      <span
                        key={tech}
                        className="rounded-lg border border-primary/20 bg-primary/5 px-3 py-1.5 text-xs font-medium text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <Button size="lg" className="flex-1 font-semibold shadow-lg shadow-primary/20" asChild>
                    <a href="/#contacto" onClick={onClose}>
                      Agendar diagnóstico gratuito
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </a>
                  </Button>
                  <Button variant="outline" size="lg" className="border-border/60" asChild>
                    <Link href={`/servicios/${service.slug}`} onClick={onClose}>
                      Ver página completa
                    </Link>
                  </Button>
                </div>

                <p className="mt-3 text-center text-xs text-muted-foreground">
                  Sin costo · Sin compromiso · Respuesta en &lt;24hs
                </p>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}
