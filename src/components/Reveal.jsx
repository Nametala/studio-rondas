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

// Rótulo pequeno em mono acima do título de cada seção (ex: "02 · Modalidades").
export function SectionEyebrow({ children, delay = 0 }) {
  return (
    <Reveal delay={delay}>
      <span className="font-mono-label text-sm text-brand-green">
        {children}
      </span>
    </Reveal>
  )
}

// Título h2 padrão de seção. `className` permite ajustar margem/largura
// quando o layout da seção exige (ex.: sem mt-3 quando já está numa grid).
export function SectionHeading({ children, delay = 0.05, className = 'mt-3 max-w-lg' }) {
  return (
    <Reveal delay={delay}>
      <h2
        className={`font-display text-3xl font-semibold text-balance leading-tight tracking-tight text-ink sm:text-4xl ${className}`}
      >
        {children}
      </h2>
    </Reveal>
  )
}
