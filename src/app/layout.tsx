import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'

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
  metadataBase: new URL('https://devwolf.srv878399.hstgr.cloud'),

  title: {
    default: 'DevWolf Soluciones IT | Automatización, IA e Industria 4.0',
    template: '%s | DevWolf IT',
  },

  description:
    'Automatizamos procesos, reducimos costos y escalamos negocios mediante IA, automatización y software a medida. Especialistas en Industria 4.0.',

  keywords: [
    'automatización',
    'IA',
    'industria 4.0',
    'software a medida',
    'n8n',
    'SCADA',
    'IoT',
    'DevWolf',
    'automatizar negocios',
  ],

  authors: [{ name: 'DevWolf Soluciones IT' }],
  creator: 'DevWolf Soluciones IT',

  openGraph: {
    title: 'DevWolf Soluciones IT | Automatización e IA',
    description:
      'Transformamos empresas mediante automatización, inteligencia artificial y desarrollo de software.',
    url: '/',
    siteName: 'DevWolf Soluciones IT',
    locale: 'es_AR',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'DevWolf Soluciones IT',
    description:
      'Automatización, IA y software a medida para escalar tu negocio.',
  },

  robots: {
    index: true,
    follow: true,
  },

  // ✅ AQUÍ VA BIEN
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

        {children}
      </body>
    </html>
  )
}
