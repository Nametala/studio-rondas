import { Fragment } from 'react'
import { motion } from 'motion/react'
import { EASE, staggerContainer } from '../lib/motion'

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
      variants={staggerContainer(stagger)}
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

// ── Revelação em cortina, palavra a palavra ────────────────────────────────
// Cada linha é uma máscara com overflow oculto e as palavras sobem de baixo.
// `lines` é uma matriz de linhas, cada uma com tokens { t, cls }: o `cls`
// permite marcar uma palavra com .swipe sem quebrar o recorte da máscara.
const curtain = {
  hidden: { y: '112%' },
  visible: { y: 0, transition: { duration: 0.85, ease: EASE } },
}

export function WordReveal({
  lines,
  className,
  delay = 0,
  stagger = 0.07,
  inView = false,
  ativo = true,
}) {
  const activate = inView
    ? { whileInView: 'visible', viewport: { once: true, margin: '-80px' } }
    : { animate: ativo ? 'visible' : 'hidden' }

  return (
    <motion.span
      className={className}
      initial="hidden"
      {...activate}
      variants={staggerContainer(stagger, delay)}
    >
      {lines.map((line, li) => (
        <span key={li} className="block overflow-hidden pb-[0.14em]">
          {line.map((token, ti) => (
            <Fragment key={ti}>
              <motion.span
                variants={curtain}
                className={`inline-block ${token.cls ?? ''}`}
              >
                {token.t}
              </motion.span>
              {ti < line.length - 1 && ' '}
            </Fragment>
          ))}
        </span>
      ))}
    </motion.span>
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

// Título h2 padrão de seção — serifa grande, revelado palavra a palavra.
export function SectionHeading({
  children,
  delay = 0.05,
  className = 'mt-4 max-w-xl',
}) {
  const lines =
    typeof children === 'string'
      ? [children.split(' ').map((t) => ({ t }))]
      : null

  return (
    <h2
      className={`font-display text-4xl leading-[1.05] text-balance text-ink sm:text-5xl ${className}`}
    >
      {lines ? (
        <WordReveal lines={lines} delay={delay} stagger={0.045} inView />
      ) : (
        <Reveal delay={delay} as={motion.span} className="block">
          {children}
        </Reveal>
      )}
    </h2>
  )
}
