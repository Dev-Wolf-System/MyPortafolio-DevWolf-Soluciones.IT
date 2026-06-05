import { Header, Footer } from '@/components/layout'
import {
  HeroSection,
  StatsSection,
  TechnologiesSection,
  ServicesSection,
  ProcessSection,
  ProjectsSection,
  IndustriesSection,
  TestimonialsSection,
  AboutSection,
  ContactSection,
} from '@/components/sections'

export default function Home() {
  return (
    <>
      <Header />

      <main className="flex flex-col">
        <section id="hero" className="relative">
          <HeroSection />
        </section>

        <section id="stats" className="relative">
          <StatsSection />
        </section>

        <section id="tecnologias" className="relative">
          <TechnologiesSection />
        </section>

        <section id="servicios" className="relative">
          <ServicesSection />
        </section>

        <section id="proceso" className="relative">
          <ProcessSection />
        </section>

        <section id="proyectos" className="relative">
          <ProjectsSection />
        </section>

        <section id="industrias" className="relative">
          <IndustriesSection />
        </section>

        <section id="testimonios" className="relative">
          <TestimonialsSection />
        </section>

        <section id="nosotros" className="relative">
          <AboutSection />
        </section>

        <section id="contacto" className="relative">
          <ContactSection />
        </section>
      </main>

      <Footer />
    </>
  )
}
