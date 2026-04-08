'use client'

import { motion } from 'framer-motion'
import { Linkedin, Mail, MapPin } from 'lucide-react'

const socialLinks = [
  {
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/nahuel-carlos-agustin-lobo-398230151',
    label: 'LinkedIn',
  },
]

const quickLinks = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Contacto', href: '#contacto' },
]

const services = [
  'Transformación Digital',
  'Automatización con IA',
  'Desarrollo de Software',
  'Domótica e IoT',
  'Infraestructura IT/OT',
  'SaaS y Microservicios',
  'Soporte técnico especializado',
  'Consultorías personalizadas',
]

export function Footer() {
  return (
    <footer className="relative border-t border-border overflow-hidden">
      {/* Fondo PRO */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card to-background" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-primary/10 blur-3xl opacity-20" />

      <div className="container relative z-10 py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-5"
          >
            <img
              src="/images/logo-wide.png"
              alt="DevWolf Soluciones IT"
              className="h-10 w-auto"
            />

            <p className="text-sm text-muted-foreground leading-relaxed">
              Impulsamos la transformación digital mediante automatización,
              inteligencia artificial y software a medida, ayudando a empresas a
              escalar, optimizar costos y ganar competitividad en la era digital.
            </p>

            <div className="flex gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex h-10 w-10 items-center justify-center rounded-xl bg-muted/50 backdrop-blur transition-all hover:bg-primary hover:scale-110"
                >
                  <link.icon className="h-5 w-5 text-muted-foreground group-hover:text-white transition-colors" />
                  <span className="sr-only">{link.label}</span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-heading font-semibold mb-4 text-lg">
              Enlaces
            </h3>

            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="font-heading font-semibold mb-4 text-lg">
              Servicios
            </h3>

            <ul className="space-y-3">
              {services.map((service) => (
                <li
                  key={service}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {service}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="font-heading font-semibold mb-4 text-lg">
              Contacto
            </h3>

            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5" />
                <span className="text-sm text-muted-foreground">
                  Argentina
                </span>
              </li>

              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <a
                  href="mailto:devwolf.contacto@gmail.com"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  devwolf.contacto@gmail.com
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="mt-14 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} DevWolf Soluciones IT — Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
