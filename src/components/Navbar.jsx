import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useScrolled } from '../hooks/useScrolled'
import { NAV_LINKS } from '../data/portfolio'

export default function Navbar() {
  const [open, setOpen]   = useState(false)
  const scrolled          = useScrolled(20)

  const close = () => setOpen(false)

  return (
    <>
      {/* ── Main bar ──────────────────────────────────── */}
      <nav
        className={[
          'fixed top-0 left-0 right-0 z-50 h-[60px]',
          'flex items-center justify-between px-6 md:px-10',
          'transition-all duration-300',
          scrolled
            ? 'bg-[rgba(8,12,16,0.85)] backdrop-blur-xl border-b border-white/[0.07]'
            : 'bg-transparent',
        ].join(' ')}
      >
        {/* Logo */}
        <a
          href="#"
          className="font-mono text-[15px] tracking-[-0.5px] text-text-1 hover:opacity-80 transition-opacity"
        >
          Afsal<span className="text-blue-a">.</span>Shamsudeen
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8 list-none m-0 p-0">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-text-2 hover:text-text-1 text-sm transition-colors duration-200 no-underline"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA + hamburger */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden md:inline-flex bg-blue-a hover:opacity-85 text-white text-[13px] font-medium px-[18px] py-[7px] rounded-md transition-opacity duration-200 no-underline"
          >
            Hire Me
          </a>
          <button
            className="md:hidden text-text-2 hover:text-text-1 transition-colors p-1"
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* ── Mobile drawer ─────────────────────────────── */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[60px] left-0 right-0 z-40 flex flex-col gap-5 px-6 py-5 bg-[rgba(8,12,16,0.97)] backdrop-blur-xl border-b border-white/[0.07] md:hidden"
          >
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={close}
                className="text-text-2 hover:text-text-1 text-[15px] transition-colors no-underline"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={close}
              className="bg-blue-a text-white text-sm font-medium px-4 py-3 rounded-md text-center no-underline"
            >
              Hire Me
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
