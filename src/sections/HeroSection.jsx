import { motion } from 'framer-motion'
import { TECH_BADGES } from '../data/portfolio'

/* ── Animation variants ──────────────────────────────────────── */
const container = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.1 } },
}
const item = {
  hidden: { opacity: 0, y: 20 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

/* ── Sub-components ──────────────────────────────────────────── */
function TerminalLine({ prompt, cmd, children, className = '' }) {
  return (
    <div className={className}>
      {prompt && (
        <>
          <span className="text-text-3">afz@dev </span>
          <span className="text-text-3">~ </span>
          <span className="text-blue-a">{cmd}</span>
        </>
      )}
      {children}
    </div>
  )
}

function TerminalCard() {
  return (
    <div className="bg-surface-1 border border-white/[0.13] rounded-[14px] overflow-hidden">

      {/* Header */}
      <div className="flex items-center gap-2 px-4 py-[14px] border-b border-white/[0.07] bg-white/[0.02]">
        <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
        <span className="font-mono text-[11px] text-text-3 ml-2">~/dev/portfolio — bash</span>
      </div>

      {/* Body */}
      <div className="px-5 py-5 font-mono text-[13px] leading-[1.9]">
        <TerminalLine prompt cmd="whoami" />
        <div className="text-green-400">→ Full Stack Engineer</div>
        <br />
        <TerminalLine prompt cmd="cat status.json" />
        <div className="text-text-3">{'{'}</div>
        <div>
          &nbsp;&nbsp;<span className="text-yellow-400">"role"</span>
          {': '}<span className="text-green-400">"Backend + Frontend"</span>,
        </div>
        <div>
          &nbsp;&nbsp;<span className="text-yellow-400">"focus"</span>
          {': '}<span className="text-green-400">"Startups &amp; Products"</span>,
        </div>
        <div>
          &nbsp;&nbsp;<span className="text-yellow-400">"experience"</span>
          {': '}<span className="text-purple-400">"2+ years"</span>,
        </div>
        <div>
          &nbsp;&nbsp;<span className="text-yellow-400">"available"</span>
          {': '}<span className="text-green-400">true</span>
        </div>
        <div className="text-text-3">{'}'}</div>
        <br />
        <TerminalLine prompt cmd="ls ./projects" />
        <div className="text-text-3">snooplay/&nbsp; ecom-api/&nbsp; cyber-lab/&nbsp; saas-exp/</div>
        {/* Blinking cursor */}
        <div className="flex items-center gap-1 mt-0.5">
          <span className="text-text-3">afz@dev ~ </span>
          <span className="inline-block w-2 h-[14px] bg-blue-a/70 animate-blink" />
        </div>
      </div>

      {/* Tech badges */}
      <div className="flex flex-wrap gap-2 px-4 py-4 border-t border-white/[0.07]">
        {TECH_BADGES.map((b) => (
          <div
            key={b.name}
            className="flex items-center gap-1.5 bg-bg-3 border border-white/[0.13] hover:border-[rgba(59,130,246,0.4)] hover:bg-[rgba(59,130,246,0.08)] rounded-md px-3 py-1.5 text-[12px] font-medium text-text-1 transition-all duration-200 cursor-default"
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: b.color }} />
            {b.name}
          </div>
        ))}
      </div>
    </div>
  )
}

/* ── Hero section ────────────────────────────────────────────── */
export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative z-10 min-h-screen flex items-center px-6 md:px-10 pt-[120px] pb-20"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">

          {/* ── Left copy ── */}
          <motion.div variants={container} initial="hidden" animate="show">

            {/* Badge */}
            <motion.div variants={item} className="inline-flex items-center gap-2 bg-[rgba(59,130,246,0.1)] border border-[rgba(59,130,246,0.2)] rounded-full px-3.5 py-1.5 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 shadow-[0_0_8px_#22c55e] animate-pulse" />
              <span className="font-mono text-[11px] text-blue-a">Open to opportunities</span>
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={item}
              className="text-hero-name font-extrabold tracking-[-2px] leading-[1.05] text-text-1"
            >
              Afsal Shamsudeen
            </motion.h1>

            {/* Title */}
            <motion.p
              variants={item}
              className="font-mono text-hero-sub text-blue-a font-medium mt-3 mb-5 tracking-[-0.3px]"
            >
              Full Stack Engineer · Backend Systems · Startup Builder
            </motion.p>

            {/* Tagline */}
            <motion.p
              variants={item}
              className="text-[17px] text-text-2 leading-[1.7] mb-9 max-w-[440px]"
            >
              Building scalable web applications, backend systems, and digital
              products that ship to production and drive real business value.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={item} className="flex flex-wrap gap-3">
              <a
                href="#projects"
                className="bg-blue-a hover:opacity-[0.88] text-white text-sm font-semibold px-6 py-3 rounded-lg transition-all duration-200 hover:-translate-y-px no-underline"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="text-text-1 border border-white/[0.13] hover:border-white/25 hover:bg-surface-1 text-sm font-medium px-6 py-3 rounded-lg transition-all duration-200 hover:-translate-y-px no-underline"
              >
                Hire Me →
              </a>
            </motion.div>
          </motion.div>

          {/* ── Right terminal ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          >
            <TerminalCard />
          </motion.div>

        </div>
      </div>
    </section>
  )
}
