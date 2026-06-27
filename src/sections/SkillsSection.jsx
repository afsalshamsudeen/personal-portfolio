import { motion } from 'framer-motion'
import FadeUp from '../components/ui/FadeUp'
import SectionLabel from '../components/ui/SectionLabel'
import SectionHeading from '../components/ui/SectionHeading'
import { useInView } from '../hooks/useInView'
import { SKILL_CATEGORIES } from '../data/portfolio'

function SkillCard({ cat, index }) {
  const [ref, isInView] = useInView('-60px')

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.07, ease: 'easeOut' }}
      className="bg-surface-1 border border-white/[0.07] hover:border-white/[0.13] rounded-[14px] p-7 transition-all duration-200"
    >
      {/* Icon */}
      <div
        className="w-10 h-10 rounded-[10px] flex items-center justify-center text-lg mb-4 border"
        style={{ background: cat.iconBg, borderColor: cat.iconBorder }}
      >
        {cat.icon}
      </div>

      <h3 className="text-sm font-semibold text-text-1 tracking-[-0.2px] mb-4">
        {cat.title}
      </h3>

      <div className="flex flex-wrap gap-2">
        {cat.skills.map((s) => (
          <span
            key={s}
            className="font-mono text-[12px] text-text-2 hover:text-text-1 bg-bg-3 border border-white/[0.07] hover:border-white/[0.13] rounded-[5px] px-2.5 py-1 transition-all duration-200 cursor-default"
          >
            {s}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

export default function SkillsSection() {
  return (
    <section id="skills" className="relative z-10 py-28 px-6 md:px-10 border-t border-white/[0.07]">
      <div className="max-w-6xl mx-auto">

        <FadeUp>
          <SectionLabel>Expertise</SectionLabel>
          <SectionHeading title="Full-stack capabilities,<br>production-ready." />
        </FadeUp>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-14">
          {SKILL_CATEGORIES.map((cat, i) => (
            <SkillCard key={cat.title} cat={cat} index={i} />
          ))}
        </div>

      </div>
    </section>
  )
}
