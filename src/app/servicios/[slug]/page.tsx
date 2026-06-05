import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { services, getServiceBySlug } from '@/data/services'
import { ServicePageContent } from './service-page-content'

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
    title: `${service.title} | DevWolf Soluciones IT`,
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

  return <ServicePageContent service={service} slug={params.slug} />
}
