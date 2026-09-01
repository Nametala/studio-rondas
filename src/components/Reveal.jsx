import { motion } from 'motion/react'
import { EASE } from '../lib/motion'

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
      transition={{ duration: 0.7, delay, ease: EASE }}
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

export function RevealItem({ children, className, y = 18 }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Rótulo condensado em versalete acima do título de cada seção,
// com um tracinho de régua antes do texto (classe .eyebrow no CSS).
export function SectionEyebrow({ children, delay = 0 }) {
  return (
    <Reveal delay={delay}>
      <span className="eyebrow text-accent">{children}</span>
    </Reveal>
  )
}

// Título h2 padrão de seção — condensado, grande, tinta.
export function SectionHeading({
  children,
  delay = 0.05,
  className = 'mt-4 max-w-xl',
}) {
  return (
    <Reveal delay={delay}>
      <h2
        className={`font-display text-4xl leading-[1.05] text-balance text-ink sm:text-5xl ${className}`}
      >
        {children}
      </h2>
    </Reveal>
  )
}
