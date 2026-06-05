import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'
import { WhatsAppButton } from '@/components/ui'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://devwolf.com.ar'),

  title: {
    default: 'DevWolf Soluciones IT | Automatización con IA, Software a Medida e Industria 4.0 — Argentina',
    template: '%s | DevWolf Soluciones IT',
  },

  description:
    'Automatizamos procesos empresariales con IA, desarrollamos software a medida y modernizamos infraestructura IT/OT. Más del 70% de reducción de tareas manuales. Proyectos reales en Industria 4.0, SCADA e IoT. Argentina y Latinoamérica.',

  keywords: [
    'automatización de procesos con IA',
    'software a medida Argentina',
    'industria 4.0 Argentina',
    'transformación digital empresas',
    'agentes inteligentes IA',
    'desarrollo software empresarial',
    'automatización n8n',
    'sistemas SCADA Argentina',
    'IoT domótica industrial',
    'infraestructura IT OT',
    'cloud microservicios',
    'analítica predictiva',
    'automatización cognitiva',
    'DevWolf Soluciones IT',
    'reducir costos operativos IA',
    'integración sistemas ERP CRM',
    'Tucumán tecnología',
    'empresa tecnología Latinoamérica',
  ],

  authors: [{ name: 'DevWolf Soluciones IT', url: 'https://devwolf.com.ar' }],
  creator: 'DevWolf Soluciones IT',
  publisher: 'DevWolf Soluciones IT',
  category: 'technology',

  alternates: {
    canonical: 'https://devwolf.com.ar',
  },

  openGraph: {
    title: 'DevWolf Soluciones IT — Automatización con IA y Software a Medida',
    description:
      '¿Tu empresa pierde tiempo en tareas manuales? Automatizamos procesos, desarrollamos software a medida e implementamos IA para que escales sin aumentar costos. +70% eficiencia garantizada.',
    url: 'https://devwolf.com.ar',
    siteName: 'DevWolf Soluciones IT',
    locale: 'es_AR',
    type: 'website',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'DevWolf Soluciones IT — Automatización con IA e Industria 4.0',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'DevWolf Soluciones IT — Automatización con IA',
    description:
      'Automatizamos procesos, reducimos costos y escalamos negocios con IA y software a medida. Proyectos reales en Industria 4.0. Argentina.',
    images: ['/images/og-image.png'],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon.png', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${spaceGrotesk.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-background font-sans antialiased">

        {/* === BACKGROUND GLOBAL PRO === */}
        <div className="fixed inset-0 -z-10 noise">
          <div className="absolute inset-0 bg-background" />

          {/* Glow superior */}
          <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-primary/10 blur-3xl opacity-30" />

          {/* Glow inferior */}
          <div className="absolute bottom-[-200px] right-1/2 translate-x-1/2 w-[900px] h-[900px] bg-secondary/10 blur-3xl opacity-30" />
        </div>

        {/* JSON-LD Organization schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'DevWolf Soluciones IT',
              url: 'https://devwolf.com.ar',
              logo: 'https://devwolf.com.ar/images/logo-wide.png',
              description: 'Empresa especializada en automatización con IA, desarrollo de software a medida, Industria 4.0 e infraestructura IT/OT. Argentina y Latinoamérica.',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Aguilares',
                addressRegion: 'Tucumán',
                addressCountry: 'AR',
              },
              contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'customer service',
                email: 'devwolf.contacto@gmail.com',
                availableLanguage: 'Spanish',
              },
              sameAs: [
                'https://www.linkedin.com/in/nahuel-carlos-agustin-lobo-398230151',
              ],
              knowsAbout: [
                'Automatización de procesos con IA',
                'Industria 4.0',
                'Sistemas SCADA',
                'IoT',
                'Desarrollo de software empresarial',
                'Cloud computing',
                'Microservicios',
                'Agentes inteligentes',
                'Analítica predictiva',
              ],
            }),
          }}
        />
        {children}
        <WhatsAppButton />
      </body>
    </html>
  )
}
