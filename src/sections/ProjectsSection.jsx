import { motion } from 'framer-motion'
import FadeUp from '../components/ui/FadeUp'
import SectionLabel from '../components/ui/SectionLabel'
import SectionHeading from '../components/ui/SectionHeading'
import StackPill from '../components/ui/StackPill'
import { useInView } from '../hooks/useInView'
import { FEATURED_PROJECTS } from '../data/portfolio'

function ProjectCard({ project, index }) {
  const [ref, isInView] = useInView('-60px')

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.1, ease: 'easeOut' }}
      className="group bg-surface-1 border border-white/[0.07] hover:border-white/[0.13] rounded-[14px] overflow-hidden transition-all duration-[250ms] hover:-translate-y-[3px]"
    >
      {/* Thumbnail */}
      <div className="h-[180px] bg-bg-3 flex items-center justify-center relative border-b border-white/[0.07] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.08),transparent)]" />
        <div className="absolute inset-0 bg-[rgba(59,130,246,0.05)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="relative z-10 text-center font-mono">
          <div className="text-[32px] mb-2">{project.emoji}</div>
          <div className="text-[12px] text-text-3">{project.codename}</div>
        </div>
      </div>

      {/* Body */}
      <div className="p-6">
        <h3 className="text-[17px] font-bold tracking-tight text-text-1 mb-2">
          {project.title}
        </h3>
        <p className="text-sm text-text-2 leading-[1.7] mb-4">
          {project.desc}
        </p>
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.stack.map((s) => <StackPill key={s}>{s}</StackPill>)}
        </div>
        <div className="flex gap-2.5">
          <a
            href={project.github}
            className="flex items-center gap-1.5 text-[12px] font-medium text-text-2 hover:text-text-1 border border-white/[0.13] hover:border-white/20 rounded-md px-3.5 py-2 transition-all duration-200 no-underline"
          >
            {/* GitHub icon */}
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            GitHub
          </a>
          <a
            href={project.demo}
            className="flex items-center gap-1.5 text-[12px] font-medium text-white bg-blue-a hover:opacity-85 rounded-md px-3.5 py-2 transition-opacity duration-200 no-underline"
          >
            {/* External link icon */}
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
              <polyline points="15,3 21,3 21,9"/>
              <line x1="10" y1="14" x2="21" y2="3"/>
            </svg>
            {project.demoLabel}
          </a>
        </div>
      </div>
    </motion.div>
  )
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative z-10 py-28 px-6 md:px-10 border-t border-white/[0.07]">
      <div className="max-w-6xl mx-auto">

        <FadeUp>
          <SectionLabel>Featured Work</SectionLabel>
          <SectionHeading title="Projects built for production,<br>not portfolios." />
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
          {FEATURED_PROJECTS.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>

      </div>
    </section>
  )
}
