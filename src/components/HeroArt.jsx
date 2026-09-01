import { motion, useReducedMotion, useScroll, useSpring, useTransform } from 'motion/react'
import { useRef } from 'react'

// Brilho de oito pontas do logo, usado como pontuação da composição.
const SPARK =
  'M 0 -1 L 0.138 -0.333 L 0.707 -0.707 L 0.333 -0.138 L 1 0 L 0.333 0.138 ' +
  'L 0.707 0.707 L 0.138 0.333 L 0 1 L -0.138 0.333 L -0.707 0.707 ' +
  'L -0.333 0.138 L -1 0 L -0.333 -0.138 L -0.707 -0.707 L -0.138 -0.333 Z'

// Reformer de pilates em vista lateral — trilhos, carro, molas e barra de
// apoio. É a silhueta que identifica a modalidade sem precisar de foto.
function Reformer() {
  return (
    <g>
      <rect x="0" y="120" width="520" height="14" rx="7" fill="var(--color-surface-alt)" />
      <rect x="0" y="152" width="520" height="10" rx="5" fill="var(--color-surface-alt)" opacity="0.65" />
      <rect x="26" y="162" width="20" height="86" rx="8" fill="var(--color-surface-alt)" />
      <rect x="474" y="162" width="20" height="86" rx="8" fill="var(--color-surface-alt)" />
      <rect x="26" y="240" width="468" height="12" rx="6" fill="var(--color-surface-alt)" opacity="0.5" />
      <rect x="150" y="78" width="250" height="44" rx="14" fill="var(--color-surface-alt)" />
      <rect x="150" y="70" width="250" height="14" rx="7" fill="var(--color-brand-yellow)" />
      <rect x="164" y="52" width="26" height="24" rx="8" fill="var(--color-brand-yellow)" />
      <rect x="206" y="52" width="26" height="24" rx="8" fill="var(--color-brand-yellow)" />
      <path
        d="M404 96 h58 a10 10 0 0 1 10 10 v54"
        fill="none"
        stroke="var(--color-brand-yellow)"
        strokeWidth="13"
        strokeLinecap="round"
      />
      <path
        d="M56 108 q14 -14 28 0 q14 14 28 0 q14 -14 28 0"
        fill="none"
        stroke="var(--color-brand-yellow)"
        strokeWidth="8"
        strokeLinecap="round"
      />
    </g>
  )
}

export function HeroArt({ className = '' }) {
  const ref = useRef(null)
  const prefersReducedMotion = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  // A mola tira o "degrau" do scroll e dá peso às camadas.
  const p = useSpring(scrollYProgress, { stiffness: 90, damping: 26, mass: 0.4 })

  // Camadas em velocidades diferentes: fundo mais lento, frente mais rápida.
  // As amplitudes são contidas de propósito — o aparelho e o piso viajam
  // juntos, senão o reformer descola do chão e a composição se desfaz.
  const yPanel = useTransform(p, [0, 1], [0, -18])
  const yGround = useTransform(p, [0, 1], [0, -42])
  const yDisc = useTransform(p, [0, 1], [0, -70])
  const ySpark = useTransform(p, [0, 1], [0, -100])

  const still = prefersReducedMotion
  const layer = (y) => (still ? undefined : { y })

  return (
    <div ref={ref} className={className}>
      <motion.svg
        viewBox="0 0 560 680"
        className="h-full w-full"
        aria-hidden="true"
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
      >
        <defs>
          <clipPath id="hero-panel">
            <rect width="560" height="680" rx="28" />
          </clipPath>
          <filter id="hero-grain">
            <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" />
          </filter>
        </defs>

        <g clipPath="url(#hero-panel)">
          <motion.g style={layer(yPanel)}>
            <rect width="560" height="800" y="-60" fill="var(--color-ink-deep)" />
            <rect y="196" width="560" height="460" fill="var(--color-brand-blue)" />
            <g
              fill="none"
              stroke="var(--color-surface-alt)"
              strokeWidth="8"
              opacity="0.45"
            >
              <rect x="304" y="58" width="212" height="252" rx="12" />
              <line x1="410" y1="58" x2="410" y2="310" />
              <line x1="304" y1="184" x2="516" y2="184" />
            </g>
          </motion.g>

          <motion.g style={layer(yDisc)}>
            <circle cx="132" cy="150" r="86" fill="var(--color-brand-yellow)" />
          </motion.g>

          {/* Piso e aparelho na mesma camada: o reformer precisa continuar
              apoiado no chão enquanto a composição se move. */}
          <motion.g style={layer(yGround)}>
            <rect y="560" width="560" height="280" fill="var(--color-brand-lime)" />
            <g transform="translate(46 336) scale(0.9)">
              <Reformer />
            </g>
          </motion.g>

          <motion.g
            style={layer(ySpark)}
            animate={still ? undefined : { rotate: [0, 12, 0] }}
            transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
            transformOrigin="262px 268px"
          >
            <g transform="translate(262 268) scale(34)">
              <path d={SPARK} fill="var(--color-brand-lime)" />
            </g>
          </motion.g>

          <rect
            width="560"
            height="680"
            filter="url(#hero-grain)"
            opacity="0.09"
            style={{ mixBlendMode: 'multiply' }}
          />
        </g>
      </motion.svg>
    </div>
  )
}
