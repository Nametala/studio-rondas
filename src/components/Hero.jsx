import { useRef } from 'react'
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'motion/react'
import { site } from '../config/site'
import { EASE } from '../lib/motion'
import { WhatsAppLink } from './WhatsAppButton'

// Entrada padrão do hero — dispara assim que a seção entra em tela.
const rise = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.1 },
  transition: { duration: 0.8, delay, ease: EASE },
})

export function Hero() {
  const prefersReducedMotion = useReducedMotion()
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const arcY = useTransform(scrollYProgress, [0, 1], [0, 120])
  const nota = site.avaliacoes.nota.toLocaleString('pt-BR', {
    minimumFractionDigits: 1,
  })

  return (
    <section
      id="topo"
      ref={ref}
      className="relative scroll-mt-20 overflow-hidden bg-surface px-5 pb-20 pt-32 sm:px-8 sm:pb-28 sm:pt-40"
    >
      {/* Arco âmbar decorativo, com parallax sutil. */}
      <motion.div
        aria-hidden="true"
        style={prefersReducedMotion ? undefined : { y: arcY }}
        className="pointer-events-none absolute -right-40 -top-24 h-[38rem] w-[38rem] rounded-full border border-accent-fill/40 sm:-right-24"
      >
        <div className="absolute inset-10 rounded-full border border-line" />
        <div className="absolute inset-24 rounded-full border border-accent-fill/25" />
      </motion.div>

      <div className="relative mx-auto max-w-6xl">
        <motion.p
          {...rise(0)}
          className="font-display text-sm font-semibold uppercase tracking-[0.22em] text-accent"
        >
          {site.nome} — Funcionários, Belo Horizonte
        </motion.p>

        <h1 className="font-display mt-6 max-w-4xl text-[3.25rem] font-semibold uppercase leading-[0.92] tracking-[-0.01em] text-ink sm:text-8xl">
          <span className="block overflow-hidden pb-[0.08em]">
            <motion.span {...rise(0.12)} className="block">
              Treino <span className="swipe text-ink">de perto</span>.
            </motion.span>
          </span>
          <span className="block overflow-hidden pb-[0.08em]">
            <motion.span {...rise(0.22)} className="block text-ink-muted">
              Resultado real.
            </motion.span>
          </span>
        </h1>

        <div className="mt-10 grid gap-10 sm:grid-cols-[1.4fr_1fr] sm:items-end">
          <motion.div {...rise(0.36)}>
            <p className="max-w-md text-lg text-ink-muted">
              Turma reduzida e acompanhamento próximo em cada treino —
              musculação, pilates, personal e fisioterapia sob o mesmo teto.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <WhatsAppLink className="group inline-flex items-center justify-center gap-2 rounded-full bg-accent-fill px-6 py-3.5 text-base font-semibold text-ink transition-colors hover:bg-ink hover:text-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-surface">
                Marcar aula experimental
                <span
                  aria-hidden="true"
                  className="transition-transform group-hover:translate-x-1"
                >
                  →
                </span>
              </WhatsAppLink>
              <a
                href="#modalidades"
                className="inline-flex items-center justify-center rounded-full border border-ink/25 px-6 py-3.5 text-base font-medium text-ink transition-colors hover:border-ink hover:bg-ink hover:text-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                Ver modalidades
              </a>
            </div>
          </motion.div>

          <motion.div
            {...rise(0.46)}
            className="flex items-center gap-4 border-t border-line pt-5 sm:justify-self-end sm:border-l sm:border-t-0 sm:pl-6 sm:pt-0"
          >
            <span className="font-display text-6xl font-semibold leading-none text-ink">
              {nota}
            </span>
            <div className="leading-tight">
              <div aria-hidden="true" className="flex gap-0.5 text-accent-fill">
                {[0, 1, 2, 3, 4].map((i) => (
                  <StarIcon key={i} />
                ))}
              </div>
              <p className="mt-1 text-sm text-ink-muted">
                {site.avaliacoes.total} avaliações no Google
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.a
        href="#sobre"
        aria-label="Rolar para a próxima seção"
        {...rise(0.7)}
        className="relative mx-auto mt-16 flex w-fit items-center gap-2 rounded-full text-sm font-medium uppercase tracking-[0.16em] text-ink-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:mt-20"
      >
        <motion.span
          aria-hidden="true"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          ↓
        </motion.span>
        Continuar
      </motion.a>
    </section>
  )
}

function StarIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      className="h-4 w-4"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L10 15l-5.2 2.7 1-5.8L1.5 7.7l5.9-.9L10 1.5z" />
    </svg>
  )
}
