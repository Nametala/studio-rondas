import { useEffect, useRef, useState } from 'react'
import { animate } from 'motion'
import { motion, useInView } from 'motion/react'
import { site } from '../config/site'
import { Reveal } from './Reveal'

function useCountUp(target, isInView, decimals = 0) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!isInView) return
    const controls = animate(0, target, {
      duration: 1.4,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => setValue(latest),
    })
    return () => controls.stop()
  }, [isInView, target])

  return value.toFixed(decimals)
}

export function ProvaSocial() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const nota = useCountUp(site.avaliacoes.nota, isInView, 1)
  const total = useCountUp(site.avaliacoes.total, isInView, 0)

  return (
    <section id="avaliacoes" className="scroll-mt-16 px-4 py-20 sm:px-6 sm:py-28">
      <div ref={ref} className="mx-auto max-w-2xl text-center">
        <Reveal>
          <span className="font-mono-label text-sm text-brand-green">
            06 · Avaliações
          </span>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-display mt-3 text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl">
            O que dizem no Google
          </h2>
        </Reveal>

        <div className="mt-10 flex items-center justify-center gap-2">
          <span className="font-display text-5xl font-semibold text-ink sm:text-6xl">
            {nota}
          </span>
          <div className="flex flex-col items-start gap-1">
            <div aria-hidden="true" className="flex gap-0.5 text-brand-yellow">
              {[0, 1, 2, 3, 4].map((i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.6 + i * 0.08, duration: 0.3 }}
                >
                  ★
                </motion.span>
              ))}
            </div>
            <span className="text-sm text-ink-muted">{total} avaliações</span>
          </div>
        </div>

        <Reveal delay={0.2}>
          <a
            href={site.endereco.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-black/10 px-5 py-3 text-sm font-medium text-ink transition-colors hover:bg-surface-alt focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2"
          >
            Ver avaliações no Google
          </a>
        </Reveal>
      </div>
    </section>
  )
}
