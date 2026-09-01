import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from 'motion/react'
import { site } from '../config/site'

// Brilho de oito pontas do logo, usado como selo sobre a foto.
const SPARK =
  'M 0 -1 L 0.138 -0.333 L 0.707 -0.707 L 0.333 -0.138 L 1 0 L 0.333 0.138 ' +
  'L 0.707 0.707 L 0.138 0.333 L 0 1 L -0.138 0.333 L -0.707 0.707 ' +
  'L -0.333 0.138 L -1 0 L -0.333 -0.138 L -0.707 -0.707 L -0.138 -0.333 Z'

export function HeroArt({ className = '' }) {
  const ref = useRef(null)
  const prefersReducedMotion = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  // A mola tira o "degrau" do scroll e dá peso ao movimento.
  const p = useSpring(scrollYProgress, { stiffness: 90, damping: 26, mass: 0.4 })

  // A foto é 18% mais alta que a máscara, então pode deslizar sem descobrir
  // a borda. O selo anda mais rápido, criando profundidade.
  const yFoto = useTransform(p, [0, 1], ['-6%', '6%'])
  const ySelo = useTransform(p, [0, 1], [26, -26])

  const still = prefersReducedMotion

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
      className={`relative overflow-hidden rounded-3xl bg-surface-alt ${className}`}
    >
      <motion.img
        src={site.heroFoto}
        alt=""
        aria-hidden="true"
        loading="eager"
        fetchPriority="high"
        style={still ? undefined : { y: yFoto }}
        className="absolute inset-x-0 -top-[9%] h-[118%] w-full object-cover"
      />

      {/* Escurecimento na base para a composição assentar no fundo da página
          e para o selo ter contraste garantido sobre qualquer parte da foto. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-surface via-surface/25 to-transparent"
      />

      {/* Selo de canto — ecoa os rótulos que eles usam no topo das artes. */}
      <motion.div
        style={still ? undefined : { y: ySelo }}
        className="absolute bottom-5 left-5 flex items-center gap-2.5 rounded-full bg-ink-deep px-4 py-2.5"
      >
        <svg viewBox="-1 -1 2 2" className="h-3.5 w-3.5 shrink-0" aria-hidden="true">
          <path d={SPARK} fill="var(--color-brand-lime)" />
        </svg>
        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-ink">
          Saúde integrada
        </span>
      </motion.div>
    </motion.div>
  )
}
