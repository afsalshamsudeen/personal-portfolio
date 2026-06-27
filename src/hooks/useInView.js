import { useRef } from 'react'
import { useInView as useFramerInView } from 'framer-motion'

/**
 * Returns [ref, isInView].
 * Attach ref to the element you want to observe.
 * isInView becomes true once and stays true (once: true).
 */
export function useInView(margin = '-80px') {
  const ref = useRef(null)
  const isInView = useFramerInView(ref, { once: true, margin })
  return [ref, isInView]
}
