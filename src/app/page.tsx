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
      <main>
        <HeroSection />
        <ServicesSection />
        <StatsSection />
        <ProjectsSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}