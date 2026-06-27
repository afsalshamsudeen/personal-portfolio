import { motion } from 'framer-motion'
import { useInView } from '../../hooks/useInView'

/**
 * FadeUp
 * Wraps children in a scroll-triggered fade-up animation.
 *
 * Props:
 *   delay   – stagger delay in seconds (default 0)
 *   margin  – IntersectionObserver rootMargin (default '-80px')
 *   className – forwarded to the motion div
 */
export default function FadeUp({ children, delay = 0, margin = '-80px', className = '' }) {
  const [ref, isInView] = useInView(margin)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
