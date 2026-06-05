import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import { services, getServiceBySlug } from '@/data/services'
import { Button } from '@/components/ui/button'
import { CheckCircle2, ArrowLeft, ArrowRight } from 'lucide-react'

interface Props {
  params: { slug: string }
}

export function generateStaticParams() {
  return services.map(s => ({ slug: s.slug }))
}

export function generateMetadata({ params }: Props): Metadata {
  const service = getServiceBySlug(params.slug)
  if (!service) return {}

  return {
    title: service.title,
    description: service.shortDescription,
    openGraph: {
      title: `${service.title} | DevWolf Soluciones IT`,
      description: service.shortDescription,
    },
  }
}

export default function ServicePage({ params }: Props) {
  const service = getServiceBySlug(params.slug)
  if (!service) notFound()

  const ServiceIcon = service.icon

  return (
    <div className="min-h-screen bg-background">

      {/* NAV BACK */}
      <div className="container pt-24 pb-4">
        <Link
          href="/#servicios"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Volver a Servicios
        </Link>
      </div>

      {/* HERO */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 blur-3xl opacity-40 rounded-full" />

        <div className="container relative z-10 max-w-4xl mx-auto text-center">
          <div className="mb-8 inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-accent shadow-2xl shadow-primary/30">
            <ServiceIcon className="h-10 w-10 text-white" />
          </div>

          <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            {service.title}
          </h1>

          <p className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {service.longDescription}
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-base px-8 py-6" asChild>
              <a href="/#contacto">🚀 Agendar diagnóstico gratuito</a>
            </Button>
            <Button variant="outline" size="lg" className="text-base px-8 py-6 border-primary/30 hover:bg-primary/10" asChild>
              <Link href="/#servicios">Ver otros servicios</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* BENEFICIOS */}
      <section className="py-20">
        <div className="container max-w-5xl mx-auto">
          <h2 className="font-heading text-3xl font-bold text-center mb-14">
            ¿Por qué elegirnos para esto?
          </h2>

          <div className="grid gap-6 sm:grid-cols-2">
            {service.benefits.map((benefit, i) => (
              <div
                key={i}
                className="flex gap-4 rounded-2xl border border-border bg-card p-6 hover:border-primary/30 transition-colors"
              >
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold">{benefit.title}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CASOS DE USO */}
      <section className="py-20 bg-muted/20">
        <div className="container max-w-5xl mx-auto">
          <h2 className="font-heading text-3xl font-bold text-center mb-14">
            Casos de uso reales
          </h2>

          <div className="grid gap-8 md:grid-cols-2">
            {service.useCases.map((useCase, i) => (
              <div key={i} className="relative rounded-2xl border border-border bg-card p-8 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary" />
                <h3 className="font-heading text-xl font-semibold">{useCase.title}</h3>
                <p className="mt-3 text-muted-foreground">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section className="py-20">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="font-heading text-3xl font-bold mb-10">
            Stack tecnológico
          </h2>

          <div className="flex flex-wrap gap-3 justify-center">
            {service.techStack.map(tech => (
              <span
                key={tech}
                className="rounded-full border border-primary/20 bg-primary/5 px-5 py-2 text-sm font-medium text-primary"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESO */}
      <section className="py-20 bg-muted/20">
        <div className="container max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl font-bold text-center mb-14">
            Cómo lo implementamos
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            {service.processSteps.map((step, i) => (
              <div key={i} className="text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-accent text-white font-bold text-xl">
                  {step.step}
                </div>
                <h3 className="font-semibold text-lg">{step.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/15 blur-3xl rounded-full" />

        <div className="container relative z-10 max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-4xl font-bold">
            ¿Listo para implementar{' '}
            <span className="text-primary">{service.title}?</span>
          </h2>

          <p className="mt-5 text-lg text-muted-foreground">
            Agendá un diagnóstico gratuito. Analizamos tu caso específico y te proponemos la solución óptima.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-base px-8 py-6" asChild>
              <a href="/#contacto">
                🚀 Agendar diagnóstico gratuito
              </a>
            </Button>
          </div>

          <p className="mt-4 text-xs text-muted-foreground">
            Sin costo • Sin compromiso • Respuesta en menos de 24hs
          </p>
        </div>
      </section>

      {/* NAVEGACIÓN A OTROS SERVICIOS */}
      <div className="container py-12 border-t border-border">
        <div className="flex items-center justify-between">
          <Link
            href="/#servicios"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Todos los servicios
          </Link>

          {(() => {
            const currentIndex = services.findIndex(s => s.slug === params.slug)
            const nextService = services[(currentIndex + 1) % services.length]
            return (
              <Link
                href={`/servicios/${nextService.slug}`}
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {nextService.title}
                <ArrowRight className="h-4 w-4" />
              </Link>
            )
          })()}
        </div>
      </div>
    </div>
  )
}
