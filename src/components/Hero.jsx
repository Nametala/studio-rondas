import { motion } from 'motion/react'
import { site } from '../config/site'
import { EASE } from '../lib/motion'
import { WhatsAppLink } from './WhatsAppButton'
import { WordReveal } from './Reveal'
import { HeroArt } from './HeroArt'
import { Magnetic } from './Magnetic'
import { CountUp } from './CountUp'

// Entrada do hero — dispara no carregamento, não no scroll: esta seção já
// está em tela quando a página abre.
const rise = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: EASE },
})

// O nome da marca É o hero. Antes ele era um rótulo miúdo acima de um slogan
// genérico, e o Studio Rondas ficava em segundo plano na própria página dele.
const MARCA = [[{ t: 'Studio' }, { t: 'Rondas' }]]

const SPARK =
  'M 0 -1 L 0.138 -0.333 L 0.707 -0.707 L 0.333 -0.138 L 1 0 L 0.333 0.138 ' +
  'L 0.707 0.707 L 0.138 0.333 L 0 1 L -0.138 0.333 L -0.707 0.707 ' +
  'L -0.333 0.138 L -1 0 L -0.333 -0.138 L -0.707 -0.707 L -0.138 -0.333 Z'

export function Hero() {
  return (
    <section
      id="topo"
      className="relative scroll-mt-20 overflow-hidden bg-surface px-5 pb-16 pt-32 sm:px-8 sm:pb-20 sm:pt-36"
    >
      <div className="mx-auto max-w-6xl">
        {/* Assinatura de canto das artes deles, trazida para a página. */}
        <motion.div
          {...rise(0)}
          className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-semibold uppercase tracking-[0.22em] text-accent sm:text-sm"
        >
          <svg viewBox="-1 -1 2 2" className="h-3 w-3 shrink-0" aria-hidden="true">
            <path d={SPARK} fill="currentColor" />
          </svg>
          <span>Saúde integrada</span>
          <span aria-hidden="true" className="text-ink-muted">
            ·
          </span>
          <span className="text-ink-muted">Funcionários, Belo Horizonte</span>
        </motion.div>

        {/* Assinatura tipográfica: o nome ocupa a largura inteira do container. */}
        <h1 className="font-display mt-5 text-[clamp(2.5rem,10vw,8.5rem)] uppercase leading-[0.86] tracking-[-0.02em] text-ink">
          <WordReveal lines={MARCA} delay={0.1} stagger={0.12} />
        </h1>

        <HeroArt className="mt-8 aspect-[16/10] w-full rounded-3xl sm:mt-10 sm:aspect-[21/9]" />

        <div className="mt-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-16">
          <motion.div {...rise(0.62)}>
            <p className="font-display max-w-2xl text-[1.75rem] leading-[1.15] text-balance text-ink sm:text-4xl">
              Treino <span className="text-accent">de perto</span>.
              <span className="italic text-ink-muted"> Resultado real.</span>
            </p>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-ink-muted">
              Turma reduzida e acompanhamento próximo em cada treino —
              musculação, pilates, personal e fisioterapia sob o mesmo teto.
            </p>
          </motion.div>

          <motion.div
            {...rise(0.72)}
            className="flex flex-col gap-6 lg:items-end"
          >
            {/* Um único CTA primário — o padrão hero-centric pede um só. */}
            <Magnetic className="w-full sm:w-auto">
              <WhatsAppLink className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent-fill px-8 py-4 text-base font-semibold text-ink transition-colors duration-200 hover:bg-ink hover:text-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-surface sm:w-auto">
                Marcar aula experimental
                <span
                  aria-hidden="true"
                  className="transition-transform duration-200 group-hover:translate-x-1"
                >
                  →
                </span>
              </WhatsAppLink>
            </Magnetic>

            <div className="flex items-center gap-3">
              <CountUp
                to={site.avaliacoes.nota}
                decimals={1}
                className="text-4xl font-bold leading-none tabular-nums text-ink"
              />
              <div className="leading-tight">
                <div aria-hidden="true" className="flex gap-0.5 text-accent">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0.4 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.95 + i * 0.07, duration: 0.4, ease: EASE }}
                    >
                      <StarIcon />
                    </motion.span>
                  ))}
                </div>
                <p className="mt-0.5 text-sm text-ink-muted">
                  {site.avaliacoes.total} avaliações no Google
                </p>
              </div>
            </div>

            <a
              href="#modalidades"
              className="rounded text-sm font-medium uppercase tracking-[0.14em] text-ink underline decoration-line underline-offset-[6px] transition-colors hover:decoration-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              Ver modalidades
            </a>
          </motion.div>
        </div>
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
