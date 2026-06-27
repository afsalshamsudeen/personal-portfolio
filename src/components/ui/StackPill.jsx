/**
 * StackPill
 * Tiny monospace badge for tech stack items.
 */
export default function StackPill({ children }) {
  return (
    <span className="font-mono text-2xs text-text-3 bg-bg-3 border border-white/[0.07] rounded px-2 py-0.5">
      {children}
    </span>
  )
}
