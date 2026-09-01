import { useEffect, useRef, useState } from 'react'
import { animate } from 'motion'
import { motion, useInView } from 'motion/react'
import { site } from '../config/site'
import { EASE } from '../lib/motion'
import { WhatsAppLink } from './WhatsAppButton'

function useCountUp(target, isInView, decimals = 0) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!isInView) return
    const controls = animate(0, target, {
      duration: 1.4,
      ease: EASE,
      onUpdate: (latest) => setValue(latest),
    })
    return () => controls.stop()
  }, [isInView, target])

  return value.toFixed(decimals)
}

function StarIcon() {
  return (
    <svg viewBox="0 0 20 20" className="h-6 w-6" fill="currentColor" aria-hidden="true">
      <path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L10 15l-5.2 2.7 1-5.8L1.5 7.7l5.9-.9L10 1.5z" />
    </svg>
  )
}

export function ProvaSocial() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const nota = useCountUp(site.avaliacoes.nota, isInView, 1).replace('.', ',')
  const total = useCountUp(site.avaliacoes.total, isInView, 0)

  return (
    <section
      id="avaliacoes"
      className="scroll-mt-20 bg-ink-deep px-5 py-28 text-surface sm:px-8 sm:py-36"
    >
      <div ref={ref} className="mx-auto max-w-3xl text-center">
        <span className="eyebrow text-accent-fill">07 — Avaliações</span>

        <div
          aria-hidden="true"
          className="mt-10 flex items-center justify-center gap-4"
        >
          <span className="font-display text-7xl font-semibold tabular-nums leading-none sm:text-8xl">
            {nota}
          </span>
          <div className="flex flex-col items-start gap-1.5">
            <div className="flex gap-1 text-accent-fill">
              {[0, 1, 2, 3, 4].map((i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.6 + i * 0.08, duration: 0.3 }}
                >
                  <StarIcon />
                </motion.span>
              ))}
            </div>
            <span className="text-sm tabular-nums text-surface/70">
              {total} avaliações
            </span>
          </div>
        </div>

        <p className="sr-only">
          Nota{' '}
          {site.avaliacoes.nota.toLocaleString('pt-BR', {
            minimumFractionDigits: 1,
          })}{' '}
          de 5, com base em {site.avaliacoes.total} avaliações no Google.
        </p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
          className="font-display mx-auto mt-10 max-w-xl text-3xl font-medium leading-tight text-surface text-balance sm:text-4xl"
        >
          Marque uma aula experimental e sinta a diferença de treinar de perto.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3, ease: EASE }}
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <WhatsAppLink className="group inline-flex items-center justify-center gap-2 rounded-full bg-accent-fill px-6 py-3.5 text-base font-semibold text-ink transition-colors hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-fill focus-visible:ring-offset-2 focus-visible:ring-offset-ink-deep">
            Marcar aula experimental
            <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </WhatsAppLink>
          <a
            href={site.endereco.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-surface/30 px-6 py-3.5 text-base font-medium text-surface transition-colors hover:bg-surface/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-fill focus-visible:ring-offset-2 focus-visible:ring-offset-ink-deep"
          >
            Ver avaliações no Google
          </a>
        </motion.div>
      </div>
    </section>
  )
}
