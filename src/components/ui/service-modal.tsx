'use client'

import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  X, CheckCircle2, ChevronRight, ArrowUpRight,
  Zap, Target, Shield, TrendingUp, Layers, Clock, Settings, Code2,
} from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import type { ServiceData } from '@/data/services'

// ── Per-service visual config ───────────────────────────────────────
const serviceConfig: Record<string, {
  image: string
  gradient: string
  iconGradient: string
  glowColor: string
  accentHex: string
}> = {
  'transformacion-digital': {
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1400&q=85',
    gradient: 'from-blue-600 via-cyan-600 to-blue-700',
    iconGradient: 'from-blue-500 to-cyan-400',
    glowColor: 'rgba(59,130,246,0.35)',
    accentHex: '#3b82f6',
  },
  'automatizacion-ia': {
    image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&w=1400&q=85',
    gradient: 'from-violet-600 via-purple-600 to-indigo-700',
    iconGradient: 'from-violet-500 to-purple-400',
    glowColor: 'rgba(139,92,246,0.35)',
    accentHex: '#8b5cf6',
  },
  'desarrollo-software': {
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1400&q=85',
    gradient: 'from-cyan-600 via-teal-600 to-cyan-700',
    iconGradient: 'from-cyan-500 to-teal-400',
    glowColor: 'rgba(6,182,212,0.35)',
    accentHex: '#06b6d4',
  },
  'iot-domotica': {
    image: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&w=1400&q=85',
    gradient: 'from-emerald-600 via-green-600 to-teal-700',
    iconGradient: 'from-emerald-500 to-green-400',
    glowColor: 'rgba(16,185,129,0.35)',
    accentHex: '#10b981',
  },
  'infraestructura-it-ot': {
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1400&q=85',
    gradient: 'from-orange-600 via-amber-600 to-orange-700',
    iconGradient: 'from-orange-500 to-amber-400',
    glowColor: 'rgba(249,115,22,0.35)',
    accentHex: '#f97316',
  },
  'cloud-microservicios': {
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1400&q=85',
    gradient: 'from-sky-600 via-blue-600 to-sky-700',
    iconGradient: 'from-sky-500 to-blue-400',
    glowColor: 'rgba(14,165,233,0.35)',
    accentHex: '#0ea5e9',
  },
  'agentes-inteligentes': {
    image: 'https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&w=1400&q=85',
    gradient: 'from-purple-600 via-fuchsia-600 to-purple-700',
    iconGradient: 'from-purple-500 to-fuchsia-400',
    glowColor: 'rgba(168,85,247,0.35)',
    accentHex: '#a855f7',
  },
  'analitica-predictiva': {
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=85',
    gradient: 'from-emerald-600 via-teal-600 to-green-700',
    iconGradient: 'from-emerald-400 to-teal-300',
    glowColor: 'rgba(52,211,153,0.35)',
    accentHex: '#34d399',
  },
  'automatizacion-cognitiva': {
    image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&w=1400&q=85',
    gradient: 'from-amber-600 via-yellow-600 to-orange-600',
    iconGradient: 'from-amber-500 to-yellow-400',
    glowColor: 'rgba(245,158,11,0.35)',
    accentHex: '#f59e0b',
  },
}

const heroMetrics: Record<string, { value: string; label: string }[]> = {
  'transformacion-digital': [
    { value: '40%', label: 'Reducción costos' },
    { value: '3×', label: 'Eficiencia' },
    { value: '99.9%', label: 'Uptime' },
  ],
  'automatizacion-ia': [
    { value: '70%', label: 'Menos manual' },
    { value: '24/7', label: 'Operación' },
    { value: '60d', label: 'ROI' },
  ],
  'desarrollo-software': [
    { value: '3sem', label: 'MVP' },
    { value: '0', label: 'Bugs críticos' },
    { value: '100%', label: 'Documentado' },
  ],
  'iot-domotica': [
    { value: '24/7', label: 'Monitoreo' },
    { value: '30%', label: 'Ahorro energía' },
    { value: '<1s', label: 'Alertas' },
  ],
  'infraestructura-it-ot': [
    { value: '99.9%', label: 'Uptime' },
    { value: '0', label: 'Pérdida datos' },
    { value: '360°', label: 'Visibilidad' },
  ],
  'cloud-microservicios': [
    { value: '∞', label: 'Escalabilidad' },
    { value: '0', label: 'Downtime' },
    { value: '50%', label: 'Ahorro infra' },
  ],
  'agentes-inteligentes': [
    { value: '24/7', label: 'Autónomo' },
    { value: '95%', label: 'Precisión' },
    { value: '<2s', label: 'Respuesta' },
  ],
  'analitica-predictiva': [
    { value: '30d', label: 'Anticipación' },
    { value: '95%', label: 'Precisión' },
    { value: '30%', label: 'Menos paradas' },
  ],
  'automatizacion-cognitiva': [
    { value: '90%', label: 'Menos errores' },
    { value: '5×', label: 'Velocidad' },
    { value: '45d', label: 'ROI' },
  ],
}

const benefitIcons = [Target, Zap, Shield, TrendingUp, Layers, Clock, Settings, Code2]

const stagger = (i: number) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4, delay: 0.15 + i * 0.07, type: 'spring' as const, bounce: 0.2 },
})

interface Props {
  service: ServiceData | null
  onClose: () => void
}

export function ServiceModal({ service, onClose }: Props) {
  useEffect(() => {
    document.body.style.overflow = service ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [service])

  useEffect(() => {
    const fn = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', fn)
    return () => window.removeEventListener('keydown', fn)
  }, [onClose])

  const cfg = service ? (serviceConfig[service.slug] ?? serviceConfig['desarrollo-software']) : null
  const metrics = service ? (heroMetrics[service.slug] ?? []) : []

  return (
    <AnimatePresence>
      {service && cfg && (
        <>
          {/* Backdrop */}
          <motion.div
            key="bd"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-lg"
          />

          {/* Scroll container */}
          <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 sm:p-6">
              <motion.div
                key="modal"
                initial={{ opacity: 0, scale: 0.9, y: 32 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.93, y: 16 }}
                transition={{ type: 'spring', bounce: 0.28, duration: 0.5 }}
                onClick={e => e.stopPropagation()}
                className="relative w-full max-w-3xl rounded-3xl overflow-hidden border border-white/10 bg-[#0d0d12] shadow-2xl"
                style={{ boxShadow: `0 32px 80px -12px ${cfg.accentHex}44, 0 0 0 1px rgba(255,255,255,0.06)` }}
              >

                {/* ══ HERO ══════════════════════════════════════════ */}
                <div className="relative h-72 overflow-hidden">
                  {/* Service image */}
                  <img
                    src={cfg.image}
                    alt={service.title}
                    className="w-full h-full object-cover scale-105"
                    style={{ filter: 'brightness(0.55) saturate(1.2)' }}
                  />

                  {/* Cinematic overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d12] via-[#0d0d12]/30 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0d0d12]/60 via-transparent to-transparent" />

                  {/* Dot grid overlay */}
                  <div className="absolute inset-0 opacity-20" style={{
                    backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)',
                    backgroundSize: '28px 28px',
                  }} />

                  {/* Ambient glow */}
                  <div
                    className="absolute -bottom-20 left-1/3 w-[400px] h-[200px] rounded-full blur-[80px] opacity-50"
                    style={{ background: cfg.accentHex }}
                  />

                  {/* Category badge */}
                  <div className="absolute top-5 left-6">
                    <div
                      className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold text-white border border-white/20 backdrop-blur-sm"
                      style={{ background: `${cfg.accentHex}33` }}
                    >
                      <Zap className="h-3 w-3" />
                      DevWolf · Servicio
                    </div>
                  </div>

                  {/* Close button */}
                  <button
                    onClick={onClose}
                    className="absolute top-5 right-5 h-9 w-9 rounded-xl bg-black/50 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-black/70 transition-all"
                  >
                    <X className="h-4 w-4" />
                  </button>

                  {/* Icon + Title overlaid on hero */}
                  <div className="absolute bottom-5 left-6 right-6 flex items-end gap-4">
                    {/* Icon badge */}
                    <div className="relative flex-shrink-0">
                      <div
                        className="absolute inset-0 rounded-2xl blur-xl opacity-70"
                        style={{ background: cfg.accentHex }}
                      />
                      <div
                        className={cn('relative h-16 w-16 rounded-2xl bg-gradient-to-br flex items-center justify-center shadow-xl', cfg.iconGradient)}
                      >
                        <service.icon className="h-8 w-8 text-white" strokeWidth={1.5} />
                      </div>
                    </div>

                    <div className="flex-1 min-w-0">
                      <h2 className="font-heading text-2xl font-bold text-white leading-tight sm:text-3xl drop-shadow-lg">
                        {service.title}
                      </h2>
                    </div>
                  </div>
                </div>

                {/* ══ METRICS BAND ════════════════════════════════ */}
                <div className="px-6 pt-5 sm:px-8">
                  <div className="grid grid-cols-3 gap-3">
                    {metrics.map((m, i) => (
                      <motion.div key={m.label} {...stagger(i)}
                        className="relative rounded-2xl overflow-hidden border border-white/8 p-4 text-center"
                        style={{ background: `${cfg.accentHex}12` }}
                      >
                        <div className="absolute inset-x-0 top-0 h-[2px]" style={{ background: `linear-gradient(to right, transparent, ${cfg.accentHex}, transparent)` }} />
                        <div className="text-2xl font-bold font-heading text-white">{m.value}</div>
                        <div className="text-[11px] text-white/50 mt-0.5">{m.label}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* ══ DESCRIPTION ══════════════════════════════════ */}
                <div className="px-6 pt-6 sm:px-8">
                  <div className="flex gap-4">
                    <div className="w-[3px] rounded-full flex-shrink-0 self-stretch" style={{ background: `linear-gradient(to bottom, ${cfg.accentHex}, transparent)` }} />
                    <p className="text-[15px] text-white/70 leading-relaxed">{service.longDescription}</p>
                  </div>
                </div>

                {/* ══ BENEFITS ═════════════════════════════════════ */}
                <div className="px-6 pt-8 sm:px-8">
                  <h3 className="text-xs font-semibold uppercase tracking-widest mb-5" style={{ color: cfg.accentHex }}>
                    Beneficios clave
                  </h3>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {service.benefits.map((b, i) => {
                      const Icon = benefitIcons[i % benefitIcons.length]
                      return (
                        <motion.div key={i} {...stagger(i)}
                          className="group relative rounded-2xl border border-white/6 p-4 overflow-hidden hover:border-white/12 transition-colors"
                          style={{ background: 'rgba(255,255,255,0.03)' }}
                        >
                          <div
                            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                            style={{ background: `radial-gradient(ellipse at top left, ${cfg.accentHex}15, transparent 70%)` }}
                          />
                          <div className="relative flex items-start gap-3">
                            <div
                              className="flex-shrink-0 h-9 w-9 rounded-xl flex items-center justify-center"
                              style={{ background: `${cfg.accentHex}20` }}
                            >
                              <Icon className="h-4 w-4" style={{ color: cfg.accentHex }} />
                            </div>
                            <div>
                              <p className="text-sm font-semibold text-white/90">{b.title}</p>
                              <p className="text-xs text-white/50 mt-1 leading-relaxed">{b.description}</p>
                            </div>
                          </div>
                        </motion.div>
                      )
                    })}
                  </div>
                </div>

                {/* ══ USE CASES ════════════════════════════════════ */}
                <div className="px-6 pt-8 sm:px-8">
                  <h3 className="text-xs font-semibold uppercase tracking-widest mb-5" style={{ color: cfg.accentHex }}>
                    Casos de uso implementados
                  </h3>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {service.useCases.map((uc, i) => (
                      <motion.div key={i} {...stagger(i)}
                        className="relative rounded-2xl border border-white/6 overflow-hidden p-5"
                        style={{ background: 'rgba(255,255,255,0.02)' }}
                      >
                        <div className="absolute top-0 inset-x-0 h-[2px]" style={{ background: `linear-gradient(to right, ${cfg.accentHex}, transparent)` }} />
                        <div className="flex items-start justify-between gap-2 mb-3">
                          <p className="text-sm font-semibold text-white/90 leading-tight">{uc.title}</p>
                          <div
                            className="flex-shrink-0 h-7 w-7 rounded-lg flex items-center justify-center"
                            style={{ background: `${cfg.accentHex}20` }}
                          >
                            <ArrowUpRight className="h-3.5 w-3.5" style={{ color: cfg.accentHex }} />
                          </div>
                        </div>
                        <p className="text-xs text-white/50 leading-relaxed">{uc.description}</p>
                        <div className="mt-3 inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-semibold border"
                          style={{ color: '#34d399', borderColor: '#34d39930', background: '#34d39910' }}>
                          <CheckCircle2 className="h-2.5 w-2.5" />
                          Implementado
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* ══ TECH STACK ═══════════════════════════════════ */}
                <div className="px-6 pt-8 sm:px-8">
                  <h3 className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: cfg.accentHex }}>
                    Stack tecnológico
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {service.techStack.map((tech, i) => (
                      <motion.span key={tech} {...stagger(i)}
                        className="rounded-xl border px-3 py-1.5 text-xs font-medium transition-colors"
                        style={{ borderColor: `${cfg.accentHex}30`, background: `${cfg.accentHex}10`, color: cfg.accentHex }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* ══ CTA ══════════════════════════════════════════ */}
                <div className="px-6 pt-8 pb-8 sm:px-8">
                  <div
                    className="relative rounded-2xl p-6 overflow-hidden"
                    style={{ background: `linear-gradient(135deg, ${cfg.accentHex}18, ${cfg.accentHex}08)`, border: `1px solid ${cfg.accentHex}25` }}
                  >
                    {/* Ambient orb */}
                    <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full blur-3xl opacity-30" style={{ background: cfg.accentHex }} />

                    <div className="relative">
                      <p className="font-heading text-lg font-bold text-white mb-1">
                        ¿Listo para implementarlo?
                      </p>
                      <p className="text-sm text-white/50 mb-5">
                        Diagnóstico gratuito · Sin compromiso · Respuesta en &lt;24hs
                      </p>
                      <div className="flex flex-col sm:flex-row gap-3">
                        <Button
                          size="lg"
                          className="flex-1 font-semibold text-white'border-0"
                          style={{ background: `linear-gradient(135deg, ${cfg.accentHex}, ${cfg.accentHex}cc)` }}
                          asChild
                        >
                          <a href="/#contacto" onClick={onClose}>
                            Agendar diagnóstico
                            <ChevronRight className="ml-1 h-4 w-4" />
                          </a>
                        </Button>
                        <Button
                          variant="outline"
                          size="lg"
                          className="border-white/10 text-white/70 hover:text-white hover:bg-white/5"
                          asChild
                        >
                          <Link href={`/servicios/${service.slug}`} onClick={onClose}>
                            Ver página completa
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

              </motion.div>
            </div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}
