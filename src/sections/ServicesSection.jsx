import { motion } from 'framer-motion'
import FadeUp from '../components/ui/FadeUp'
import SectionLabel from '../components/ui/SectionLabel'
import SectionHeading from '../components/ui/SectionHeading'
import { useInView } from '../hooks/useInView'
import { SERVICES } from '../data/portfolio'

function ServiceCard({ service, index }) {
  const [ref, isInView] = useInView('-60px')

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.07, ease: 'easeOut' }}
      className="bg-surface-1 border border-white/[0.07] hover:border-white/[0.13] hover:bg-surface-2 rounded-[14px] p-[30px] flex flex-col gap-3.5 transition-all duration-[250ms] hover:-translate-y-0.5"
    >
      {/* Icon */}
      <div className={`w-11 h-11 rounded-[10px] border flex items-center justify-center text-xl ${service.iconClass}`}>
        {service.icon}
      </div>

      <h3 className="text-base font-bold tracking-[-0.2px] text-text-1">
        {service.title}
      </h3>

      <p className="text-sm text-text-2 leading-[1.7] flex-1">
        {service.desc}
      </p>

      <a
        href="#contact"
        className="text-[13px] text-blue-a font-medium hover:opacity-75 transition-opacity no-underline mt-auto"
      >
        {service.cta}
      </a>
    </motion.div>
  )
}

export default function ServicesSection() {
  return (
    <section id="services" className="relative z-10 py-28 px-6 md:px-10 border-t border-white/[0.07]">
      <div className="max-w-6xl mx-auto">

        <FadeUp>
          <SectionLabel>Services</SectionLabel>
          <SectionHeading title="What I can build<br>for you." />
        </FadeUp>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-14">
          {SERVICES.map((s, i) => (
            <ServiceCard key={s.title} service={s} index={i} />
          ))}
        </div>

      </div>
    </section>
  )
}
