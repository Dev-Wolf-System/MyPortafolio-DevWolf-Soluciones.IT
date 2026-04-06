import { Linkedin, Mail, MapPin, Phone } from 'lucide-react'

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
  'Soporte tecnico especializado',
  'Consultorias personalizadas'
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <img
              src="/images/logo-wide.png"
              alt="DevWolf Soluciones IT"
              className="h-10 w-auto"
            />
            <p className="text-sm text-muted-foreground">
              Impulsamos la transformación de su empresa mediante soluciones tecnológicas de vanguardia, acompañándolo estratégicamente en cada etapa del camino hacia la Industria 4.0.

              Integramos innovación, automatización e inteligencia de datos para optimizar procesos, aumentar la eficiencia operativa y potenciar su competitividad en un entorno cada vez más digital. 🚀.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-muted text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  <link.icon className="h-5 w-5" />
                  <span className="sr-only">{link.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-semibold mb-4">Servicios</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-sm text-muted-foreground">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-semibold mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5" />
                <span className="text-sm text-muted-foreground">Argentina</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <a
                  href="mailto:contacto@devwolf.com.ar"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  devwolf.contacto@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} DevWolf Soluciones IT. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}