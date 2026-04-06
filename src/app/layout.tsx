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
  title: 'DevWolf Soluciones IT | Transformación Digital e Industria 4.0',
  description: 'Empresa especializada en transformación digital, automatización con IA, desarrollo de software, domótica, infraestructura IT/OT, soluciones SaaS y Soporte tecnico especializado. Implementación de tecnologías para Industria 4.0.',
  keywords: ['transformación digital', 'industria 4.0', 'automatización', 'IA', 'desarrollo de software', 'SCADA', 'IoT', 'DevWolf', 'soporte'],
  authors: [{ name: 'DevWolf Soluciones IT' }],
  openGraph: {  
    title: 'DevWolf Soluciones IT | Transformación Digital e Industria 4.0',
    description: 'Empresa especializada en transformación digital, automatización con IA, desarrollo de software, domótica, infraestructura IT/OT y soluciones SaaS.',
    url: 'https://devwolf.srv878399.hstgr.cloud/',
    siteName: 'DevWolf Soluciones IT',
    type: 'website',
    locale: 'es_AR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DevWolf Soluciones IT',
    description: 'Transformación Digital e Industria 4.0',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="min-h-screen bg-background font-sans">
        {children}
      </body>
    </html>
  )
}