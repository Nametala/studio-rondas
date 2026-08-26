import { useRef } from 'react'
import { useMotionValue, useReducedMotion, useSpring, useTransform } from 'motion/react'

export function useTilt(strength = 8) {
  const ref = useRef(null)
  const prefersReducedMotion = useReducedMotion()
  const x = useMotionValue(0.5)
  const y = useMotionValue(0.5)
  const springX = useSpring(x, { stiffness: 220, damping: 22 })
  const springY = useSpring(y, { stiffness: 220, damping: 22 })
  const rotateX = useTransform(springY, [0, 1], [strength, -strength])
  const rotateY = useTransform(springX, [0, 1], [-strength, strength])

  if (prefersReducedMotion) {
    return { ref, style: {}, onMouseMove: undefined, onMouseLeave: undefined }
  }

  function onMouseMove(event) {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    x.set((event.clientX - rect.left) / rect.width)
    y.set((event.clientY - rect.top) / rect.height)
  }

  function onMouseLeave() {
    x.set(0.5)
    y.set(0.5)
  }

  return {
    ref,
    style: { rotateX, rotateY, transformPerspective: 800 },
    onMouseMove,
    onMouseLeave,
  }
}
