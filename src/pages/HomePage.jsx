import HeroSection     from '../sections/HeroSection'
import AboutSection    from '../sections/AboutSection'
import BuildingSection from '../sections/BuildingSection'
import SkillsSection   from '../sections/SkillsSection'
import ServicesSection from '../sections/ServicesSection'
import ProjectsSection from '../sections/ProjectsSection'
import ArchiveSection  from '../sections/ArchiveSection'
import TimelineSection from '../sections/TimelineSection'
import GitHubSection   from '../sections/GitHubSection'
import ContactSection  from '../sections/ContactSection'

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <BuildingSection />
      <SkillsSection />
      <ServicesSection />
      <ProjectsSection />
      <ArchiveSection />
      <TimelineSection />
      <GitHubSection />
      <ContactSection />
    </main>
  )
}
