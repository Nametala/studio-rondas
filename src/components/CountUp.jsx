import { useEffect, useRef, useState } from 'react'
import { animate } from 'motion'
import { useInView, useReducedMotion } from 'motion/react'
import { EASE } from '../lib/motion'

// Número que conta até o valor final quando entra em tela. Sob
// prefers-reduced-motion já nasce no valor final, sem animar.
export function CountUp({ to, decimals = 0, duration = 1.4, className }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const prefersReducedMotion = useReducedMotion()
  const [progress, setProgress] = useState(0)
  // Derivado no render: sob reduced-motion o número já sai pronto, sem
  // depender de um setState de efeito para "corrigir" o valor depois.
  const value = prefersReducedMotion ? to : progress

  useEffect(() => {
    if (prefersReducedMotion || !inView) return
    const controls = animate(0, to, {
      duration,
      ease: EASE,
      onUpdate: setProgress,
    })
    return () => controls.stop()
  }, [inView, to, duration, prefersReducedMotion])

  return (
    <span ref={ref} className={className}>
      {value.toLocaleString('pt-BR', {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}
    </span>
  )
}
