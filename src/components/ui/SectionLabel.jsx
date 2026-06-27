/**
 * SectionLabel
 * The small eyebrow label used above every section heading.
 * Renders: ── LABEL TEXT
 */
export default function SectionLabel({ children }) {
  return (
    <div className="inline-flex items-center gap-2 mb-4">
      <span className="block w-4 h-px bg-blue-a" aria-hidden="true" />
      <span className="font-mono text-2xs tracking-[0.1em] text-blue-a uppercase">
        {children}
      </span>
    </div>
  )
}
