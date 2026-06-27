import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import FadeUp from '../components/ui/FadeUp'
import SectionLabel from '../components/ui/SectionLabel'
import SectionHeading from '../components/ui/SectionHeading'
import StackPill from '../components/ui/StackPill'
import { ARCHIVE_TABS, ARCHIVE_DATA } from '../data/portfolio'

function ArchiveItem({ item, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="bg-surface-1 border border-white/[0.07] hover:border-white/[0.13] hover:bg-surface-2 rounded-[10px] p-5 transition-all duration-200"
    >
      <h3 className="text-[15px] font-semibold text-text-1 mb-1.5">{item.title}</h3>
      <p className="text-[13px] text-text-2 leading-[1.6] mb-4">{item.desc}</p>
      <div className="flex flex-wrap gap-1.5">
        {item.stack.map((s) => <StackPill key={s}>{s}</StackPill>)}
      </div>
    </motion.div>
  )
}

export default function ArchiveSection() {
  const [active, setActive] = useState('fullstack')
  const items = ARCHIVE_DATA[active] ?? []

  return (
    <section id="archive" className="relative z-10 py-28 px-6 md:px-10 border-t border-white/[0.07]">
      <div className="max-w-6xl mx-auto">

        <FadeUp>
          <SectionLabel>Project Archive</SectionLabel>
          <SectionHeading title="Everything I've built." />
        </FadeUp>

        {/* Tabs */}
        <div className="flex flex-wrap gap-1.5 mt-10 mb-6">
          {ARCHIVE_TABS.map((t) => (
            <button
              key={t.id}
              onClick={() => setActive(t.id)}
              className={[
                'font-mono text-[13px] px-4 py-2 rounded-md border transition-all duration-200',
                active === t.id
                  ? 'text-text-1 bg-surface-1 border-white/[0.13]'
                  : 'text-text-3 border-transparent hover:text-text-2 hover:border-white/[0.07]',
              ].join(' ')}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.22 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {items.map((item, i) => (
              <ArchiveItem key={item.title} item={item} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  )
}
