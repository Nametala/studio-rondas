import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from 'motion/react'
import { site } from '../config/site'

// Painel de foto do hero, com parallax contido. A foto é 18% mais alta que a
// máscara, então pode deslizar sem descobrir a borda.
export function HeroArt({ className = '' }) {
  const ref = useRef(null)
  const prefersReducedMotion = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  // A mola tira o "degrau" do scroll e dá peso ao movimento.
  const p = useSpring(scrollYProgress, { stiffness: 90, damping: 26, mass: 0.4 })
  const yFoto = useTransform(p, [0, 1], ['-6%', '6%'])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
      className={`relative overflow-hidden bg-surface-alt ${className}`}
    >
      <motion.img
        src={site.heroFoto}
        alt=""
        aria-hidden="true"
        loading="eager"
        fetchPriority="high"
        style={prefersReducedMotion ? undefined : { y: yFoto }}
        className="absolute inset-x-0 -top-[9%] h-[118%] w-full object-cover"
      />

      {/* Vinheta escura discreta na base, só para dar profundidade. Não usar
          gradiente na cor do papel aqui: sobre base clara ele lava a foto
          inteira em vez de assentá-la. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent"
      />
    </motion.div>
  )
}
