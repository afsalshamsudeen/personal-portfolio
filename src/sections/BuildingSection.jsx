import { motion } from 'framer-motion'
import FadeUp from '../components/ui/FadeUp'
import SectionLabel from '../components/ui/SectionLabel'
import SectionHeading from '../components/ui/SectionHeading'
import StackPill from '../components/ui/StackPill'
import { useInView } from '../hooks/useInView'
import { BUILDING_PROJECTS } from '../data/portfolio'

const TAG_STYLES = {
  green:  'text-blue-a  bg-[rgba(59,130,246,0.12)] border-[rgba(59,130,246,0.2)]',
  blue:   'text-blue-a  bg-[rgba(59,130,246,0.12)] border-[rgba(59,130,246,0.2)]',
  purple: 'text-purple-a bg-[rgba(139,92,246,0.10)] border-[rgba(139,92,246,0.2)]',
}

function BuildCard({ project, index }) {
  const [ref, isInView] = useInView('-60px')

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.08, ease: 'easeOut' }}
      className="card-shimmer bg-surface-1 border border-white/[0.07] hover:border-white/[0.13] hover:bg-surface-2 rounded-[14px] p-7 transition-all duration-[250ms] hover:-translate-y-[3px]"
    >
      {/* Tag */}
      <div className={`inline-flex items-center gap-1.5 font-mono text-2xs tracking-[0.05em] border rounded px-2 py-1 mb-4 ${TAG_STYLES[project.color]}`}>
        {project.color === 'green' && (
          <span className="w-[5px] h-[5px] rounded-full bg-green-400 shadow-[0_0_6px_#22c55e] animate-pulse" />
        )}
        {project.tag}
      </div>

      <h3 className="text-[18px] font-bold tracking-[-0.3px] text-text-1 mb-2">
        {project.title}
      </h3>
      <p className="text-sm text-text-2 leading-[1.7] mb-5">
        {project.desc}
      </p>
      <div className="flex flex-wrap gap-1.5">
        {project.stack.map((s) => <StackPill key={s}>{s}</StackPill>)}
      </div>
    </motion.div>
  )
}

export default function BuildingSection() {
  return (
    <section id="building" className="relative z-10 py-28 px-6 md:px-10 border-t border-white/[0.07]">
      <div className="max-w-6xl mx-auto">

        <FadeUp>
          <SectionLabel>Currently Building</SectionLabel>
          <SectionHeading
            title="Active work, shipping now."
            sub="These are not side projects. These are products in active development — with real architecture decisions, real users, and real deadlines."
          />
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-14">
          {BUILDING_PROJECTS.map((p, i) => (
            <BuildCard key={p.title} project={p} index={i} />
          ))}
        </div>

      </div>
    </section>
  )
}
