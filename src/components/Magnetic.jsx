import { useCallback, useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useReducedMotion, useSpring } from 'motion/react'
import { SPRING } from '../lib/motion'

// Envolve um alvo clicável e faz ele seguir levemente o cursor. Só age em
// ponteiro fino (mouse): em toque não existe hover, e puxar o botão sob o
// dedo atrapalharia o acerto do toque.
export function Magnetic({ children, strength = 0.28, className }) {
  const ref = useRef(null)
  const prefersReducedMotion = useReducedMotion()
  const [finePointer, setFinePointer] = useState(false)

  const x = useSpring(useMotionValue(0), SPRING)
  const y = useSpring(useMotionValue(0), SPRING)

  useEffect(() => {
    const mq = window.matchMedia('(hover: hover) and (pointer: fine)')
    const update = () => setFinePointer(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  const active = finePointer && !prefersReducedMotion

  const handleMove = useCallback(
    (event) => {
      if (!active || !ref.current) return
      const rect = ref.current.getBoundingClientRect()
      x.set((event.clientX - (rect.left + rect.width / 2)) * strength)
      y.set((event.clientY - (rect.top + rect.height / 2)) * strength)
    },
    [active, strength, x, y],
  )

  const reset = useCallback(() => {
    x.set(0)
    y.set(0)
  }, [x, y])

  return (
    <motion.div
      ref={ref}
      onPointerMove={handleMove}
      onPointerLeave={reset}
      onBlur={reset}
      style={active ? { x, y } : undefined}
      className={className}
    >
      {children}
    </motion.div>
  )
}
