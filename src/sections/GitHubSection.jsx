import { useMemo } from 'react'
import FadeUp from '../components/ui/FadeUp'
import SectionLabel from '../components/ui/SectionLabel'
import SectionHeading from '../components/ui/SectionHeading'
import { GITHUB_STATS, LANG_BARS } from '../data/portfolio'

/* ── Seeded pseudo-random so graph is stable across renders ─── */
function seededRandom(seed) {
  let s = seed
  return () => {
    s = (s * 16807 + 0) % 2147483647
    return (s - 1) / 2147483646
  }
}

function useContribCells(count = 52 * 7) {
  return useMemo(() => {
    const rand = seededRandom(42)
    return Array.from({ length: count }, () => {
      const r = rand()
      if (r > 0.85) return 4
      if (r > 0.75) return 3
      if (r > 0.60) return 2
      if (r > 0.45) return 1
      return 0
    })
  }, [count])
}

const CELL_COLORS = [
  'bg-bg-3',                               // 0 – empty
  'bg-blue-a/20',                          // 1
  'bg-blue-a/40',                          // 2
  'bg-blue-a/65',                          // 3
  'bg-blue-a/90',                          // 4
]

function ContribGraph() {
  const cells = useContribCells()

  return (
    <div
      className="grid gap-[3px]"
      style={{ gridTemplateColumns: 'repeat(52, minmax(0, 1fr))' }}
    >
      {cells.map((level, i) => (
        <div
          key={i}
          className={`aspect-square rounded-[2px] ${CELL_COLORS[level]}`}
        />
      ))}
    </div>
  )
}

function LangBar({ name, pct, color }) {
  return (
    <div className="flex items-center gap-3">
      <span className="font-mono text-[12px] text-text-2 w-20 shrink-0">{name}</span>
      <div className="flex-1 h-1 bg-bg-3 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full"
          style={{ width: `${pct}%`, backgroundColor: color }}
        />
      </div>
      <span className="font-mono text-[12px] text-text-3 w-9 text-right">{pct}%</span>
    </div>
  )
}

export default function GitHubSection() {
  return (
    <section id="github" className="relative z-10 py-28 px-6 md:px-10 border-t border-white/[0.07]">
      <div className="max-w-6xl mx-auto">

        <FadeUp>
          <SectionLabel>GitHub</SectionLabel>
          <SectionHeading title="Consistent output,<br>visible work." />
        </FadeUp>

        <FadeUp delay={0.1} className="mt-14">
          <div className="bg-surface-1 border border-white/[0.13] rounded-[14px] overflow-hidden">

            {/* Dashboard header */}
            <div className="flex items-center gap-2.5 px-5 py-4 border-b border-white/[0.07] bg-white/[0.02]">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-text-2">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              <span className="font-mono text-[13px] text-text-2">
                <strong className="text-text-1">afsal shamsudeen</strong> · GitHub Activity
              </span>
            </div>

            {/* Dashboard body */}
            <div className="p-7">

              {/* Stat grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                {GITHUB_STATS.map((s) => (
                  <div key={s.label} className="bg-bg-3 border border-white/[0.07] rounded-[10px] p-[18px] text-center">
                    <div className="font-mono text-[26px] font-bold tracking-[-1px] text-text-1">{s.num}</div>
                    <div className="font-mono text-[12px] text-text-3 mt-1">{s.label}</div>
                  </div>
                ))}
              </div>

              {/* Contribution graph */}
              <p className="font-mono text-[12px] text-text-3 mb-3">
                Contribution activity · 2024
              </p>
              <ContribGraph />

              {/* Language bars */}
              <div className="flex flex-col gap-3 mt-7">
                {LANG_BARS.map((l) => (
                  <LangBar key={l.name} {...l} />
                ))}
              </div>

            </div>
          </div>
        </FadeUp>

      </div>
    </section>
  )
}
