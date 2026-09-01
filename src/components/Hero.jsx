import { motion } from 'motion/react'
import { site } from '../config/site'
import { EASE } from '../lib/motion'
import { WhatsAppLink } from './WhatsAppButton'
import { WordReveal } from './Reveal'
import { HeroArt } from './HeroArt'
import { Magnetic } from './Magnetic'
import { CountUp } from './CountUp'

// Entrada padrão do hero — dispara no carregamento, não no scroll: esta
// seção já está em tela quando a página abre.
const rise = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: EASE },
})

const TITULO = [
  [{ t: 'Treino' }, { t: 'de perto', cls: 'swipe' }],
  [{ t: 'Resultado' }, { t: 'real.', cls: 'italic text-ink-muted' }],
]

export function Hero() {
  return (
    <section
      id="topo"
      className="relative scroll-mt-20 overflow-hidden bg-surface px-5 pb-20 pt-32 sm:px-8 sm:pb-24 sm:pt-36"
    >
      <div className="relative mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-16">
        <div>
          <motion.p
            {...rise(0)}
            className="text-sm font-semibold uppercase tracking-[0.2em] text-accent"
          >
            {site.nome} — Funcionários, Belo Horizonte
          </motion.p>

          <h1 className="font-display mt-6 text-[3.4rem] leading-[0.94] text-ink sm:text-7xl lg:text-8xl">
            <WordReveal lines={TITULO} delay={0.12} stagger={0.09} />
          </h1>

          <motion.p
            {...rise(0.52)}
            className="mt-8 max-w-md text-lg text-ink-muted"
          >
            Turma reduzida e acompanhamento próximo em cada treino —
            musculação, pilates, personal e fisioterapia sob o mesmo teto.
          </motion.p>

          <motion.div
            {...rise(0.62)}
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <Magnetic className="w-full sm:w-auto">
              <WhatsAppLink className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent-fill px-7 py-4 text-base font-semibold text-surface transition-colors duration-200 hover:bg-ink hover:text-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-surface sm:w-auto">
                Marcar aula experimental
                <span
                  aria-hidden="true"
                  className="transition-transform duration-200 group-hover:translate-x-1"
                >
                  →
                </span>
              </WhatsAppLink>
            </Magnetic>
            <a
              href="#modalidades"
              className="inline-flex items-center justify-center rounded-full border border-ink/25 px-7 py-4 text-base font-medium text-ink transition-colors duration-200 hover:border-ink hover:bg-ink hover:text-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              Ver modalidades
            </a>
          </motion.div>

          <motion.div
            {...rise(0.72)}
            className="mt-10 flex items-center gap-4 border-t border-line pt-6"
          >
            <CountUp
              to={site.avaliacoes.nota}
              decimals={1}
              className="text-5xl font-bold leading-none tabular-nums text-ink sm:text-6xl"
            />
            <div className="leading-tight">
              <div aria-hidden="true" className="flex gap-0.5 text-accent">
                {[0, 1, 2, 3, 4].map((i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0.4 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.9 + i * 0.07, duration: 0.4, ease: EASE }}
                  >
                    <StarIcon />
                  </motion.span>
                ))}
              </div>
              <p className="mt-1 text-sm text-ink-muted">
                {site.avaliacoes.total} avaliações no Google
              </p>
            </div>
          </motion.div>
        </div>

        <HeroArt className="mx-auto aspect-[560/680] w-full max-w-sm lg:max-w-none" />
      </div>

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
