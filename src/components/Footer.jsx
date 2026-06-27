import { NAV_LINKS } from '../data/portfolio'

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/[0.07] px-6 md:px-10 py-10">
      <div className="max-w-6xl mx-auto flex flex-col gap-6">

        {/* Top row */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 flex-wrap">
          <span className="font-mono text-[15px] tracking-[-0.5px] text-text-1">
            afsal<span className="text-blue-a">.</span>shamsudeen
          </span>
          <div className="flex flex-wrap gap-6">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-[13px] text-text-3 hover:text-text-2 transition-colors no-underline"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pt-5 border-t border-white/[0.07]">
          <div className="font-mono text-[12px] text-text-3 flex items-center gap-2">
            <span className="text-blue-a">$</span>
            <span>Still building. Still learning. Still shipping.</span>
          </div>
          <span className="text-[12px] text-text-3">
            © 2026 Afsal Shamsudeen. All rights reserved.
          </span>
        </div>

      </div>
    </footer>
  )
}
