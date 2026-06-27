import { motion } from 'framer-motion'
import FadeUp from '../components/ui/FadeUp'
import SectionLabel from '../components/ui/SectionLabel'
import SectionHeading from '../components/ui/SectionHeading'
import { useInView } from '../hooks/useInView'
import { TIMELINE } from '../data/portfolio'

function TimelineItem({ milestone, index }) {
  const [ref, isInView] = useInView('-60px')

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.1, ease: 'easeOut' }}
      className="relative group"
    >
      {/* Timeline dot */}
      <div
        className={[
          'absolute -left-[34px] top-1 w-3 h-3 rounded-full border-2 transition-colors duration-300',
          milestone.isNow
            ? 'bg-blue-a border-blue-a shadow-[0_0_10px_rgba(59,130,246,0.5)]'
            : 'bg-bg-base border-blue-a group-hover:border-purple-a',
        ].join(' ')}
      />

      <div className="font-mono text-2xs tracking-[0.05em] text-blue-a mb-1.5">
        {milestone.year}
      </div>
      <h3 className="text-[17px] font-bold tracking-tight text-text-1 mb-2">
        {milestone.event}
      </h3>
      <p className="text-sm text-text-2 leading-[1.7]">
        {milestone.detail}
      </p>
    </motion.div>
  )
}

export default function TimelineSection() {
  return (
    <section id="timeline" className="relative z-10 py-28 px-6 md:px-10 border-t border-white/[0.07]">
      <div className="max-w-3xl mx-auto">

        <FadeUp>
          <SectionLabel>Journey</SectionLabel>
          <SectionHeading title="The road so far." />
        </FadeUp>

        {/* Track */}
        <div className="relative pl-10 mt-14">
          {/* Vertical gradient line */}
          <div
            className="absolute left-[10px] top-0 bottom-0 w-px"
            style={{ background: 'linear-gradient(to bottom, #3B82F6, #8B5CF6, transparent)' }}
          />

          <div className="space-y-10">
            {TIMELINE.map((m, i) => (
              <TimelineItem key={m.year} milestone={m} index={i} />
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
