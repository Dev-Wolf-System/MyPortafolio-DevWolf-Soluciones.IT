import { Header, Footer } from '@/components/layout'
import {
  HeroSection,
  ServicesSection,
  StatsSection,
  ProjectsSection,
  AboutSection,
  ContactSection,
} from '@/components/sections'

export default function Home() {
  return (
    <>
      <Header />

      <main className="flex flex-col">
        {/* HERO - Impacto inicial */}
        <section id="hero" className="relative">
          <HeroSection />
        </section>

        {/* PRUEBA SOCIAL / MÉTRICAS */}
        <section id="stats" className="relative">
          <StatsSection />
        </section>

        {/* SERVICIOS - Qué haces */}
        <section id="servicios" className="relative">
          <ServicesSection />
        </section>

        {/* PROYECTOS - Validación */}
        <section id="proyectos" className="relative">
          <ProjectsSection />
        </section>

        {/* ABOUT - Confianza */}
        <section id="nosotros" className="relative">
          <AboutSection />
        </section>

        {/* CTA FINAL */}
        <section id="contacto" className="relative">
          <ContactSection />
        </section>
      </main>

      <Footer />
    </>
  )
}
