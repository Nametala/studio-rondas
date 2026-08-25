import { motion } from 'motion/react'

const EASE = [0.16, 1, 0.3, 1]

export function Reveal({
  children,
  as: Component = motion.div,
  delay = 0,
  y = 24,
  className,
  once = true,
}) {
  return (
    <Component
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: '-80px' }}
      transition={{ duration: 0.6, delay, ease: EASE }}
      className={className}
    >
      {children}
    </Component>
  )
}

export function RevealGroup({ children, className, stagger = 0.08 }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function RevealItem({ children, className, y = 16 }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
