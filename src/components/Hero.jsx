import { motion } from 'motion/react'
import { site } from '../config/site'
import { EASE } from '../lib/motion'
import { WhatsAppLink } from './WhatsAppButton'
import { WordReveal } from './Reveal'
import { HeroArt } from './HeroArt'
import { Magnetic } from './Magnetic'
import { CountUp } from './CountUp'
import { Logo } from './Logo'
import { Icon } from './icons'

// Entrada do hero. Fica presa até `pronto` — que a App libera quando a cortina
// da abertura começa a subir. Sem essa amarra o hero animava escondido atrás
// dela e a intro revelava uma página já parada.
const rise = (delay = 0, pronto = true) => ({
  initial: { opacity: 0, y: 24 },
  animate: pronto ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 },
  transition: { duration: 0.8, delay, ease: EASE },
})

// A promessa é o maior elemento, não o nome da marca: quem chega aqui pela
// primeira vez não conhece "Studio Rondas", conhece o problema que tem. A marca
// abre a página logo acima, em tamanho de masthead, então segue em primeiro
// plano sem ocupar o lugar da oferta.
const PROMESSA = [
  [{ t: 'Treino' }, { t: 'de perto', cls: 'text-accent' }],
  [{ t: 'Resultado' }, { t: 'real.', cls: 'italic text-ink-muted' }],
]

export function Hero({ pronto = true }) {
  const nota = site.avaliacoes.nota.toLocaleString('pt-BR', {
    minimumFractionDigits: 1,
  })

  return (
    <section
      id="topo"
      className="relative scroll-mt-20 overflow-hidden bg-surface px-5 pb-14 pt-28 sm:px-8 sm:pb-16 sm:pt-32"
    >
      <div className="mx-auto max-w-6xl">
        {/* Masthead: a marca abre a página, com o descritor que eles usam nas
            artes e a cidade — intenção local pesa muito para academia. */}
        <motion.div
          {...rise(0, pronto)}
          className="flex flex-wrap items-center gap-x-4 gap-y-2 border-b border-line pb-5"
        >
          <Logo className="h-9 w-9 shrink-0" />
          <span className="font-display text-2xl leading-none text-ink sm:text-[1.75rem]">
            Studio Rondas
          </span>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Saúde integrada
          </span>
          <span className="ml-auto text-xs font-medium uppercase tracking-[0.16em] text-ink-muted sm:text-sm">
            Funcionários, Belo Horizonte
          </span>
        </motion.div>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16">
          <div>
            <h1 className="font-display text-[clamp(2.75rem,6.5vw,4.75rem)] leading-[0.95] tracking-[-0.015em] text-ink">
              <WordReveal
                lines={PROMESSA}
                delay={0.1}
                stagger={0.08}
                ativo={pronto}
              />
            </h1>

            <motion.p
              {...rise(0.5, pronto)}
              className="mt-6 max-w-lg text-lg leading-relaxed text-ink-muted sm:text-xl"
            >
              Musculação, pilates, personal e fisioterapia no mesmo lugar — com
              turma reduzida e um professor acompanhando cada treino, não uma
              fila de aparelhos.
            </motion.p>

            <motion.div
              {...rise(0.6, pronto)}
              className="mt-9 flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-6"
            >
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

              {/* Prova social encostada no CTA: é o argumento mais forte que
                  eles têm e precisa ser lido no mesmo golpe de vista. */}
              <div className="flex items-center gap-3">
                <CountUp
                  to={site.avaliacoes.nota}
                  decimals={1}
                  className="text-3xl font-bold leading-none tabular-nums text-ink"
                />
                <div className="leading-tight">
                  <div aria-hidden="true" className="flex gap-0.5 text-accent">
                    {[0, 1, 2, 3, 4].map((i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, scale: 0.4 }}
                        animate={
                          pronto
                            ? { opacity: 1, scale: 1 }
                            : { opacity: 0, scale: 0.4 }
                        }
                        transition={{
                          delay: 0.85 + i * 0.07,
                          duration: 0.4,
                          ease: EASE,
                        }}
                      >
                        <StarIcon />
                      </motion.span>
                    ))}
                  </div>
                  <p className="mt-0.5 text-sm text-ink-muted">
                    <span className="sr-only">Nota {nota} de 5. </span>
                    {site.avaliacoes.total} avaliações no Google
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.p
              {...rise(0.68, pronto)}
              className="mt-4 text-sm text-ink-muted"
            >
              A primeira aula é experimental — venha conhecer antes de decidir.
            </motion.p>
          </div>

          <HeroArt className="aspect-[4/5] w-full rounded-3xl sm:aspect-[5/4] lg:aspect-[4/5]" />
        </div>

        {/* O que se compra aqui, dito de forma direta. Estava enterrado no meio
            da página; no hero ele responde "o que é isso?" de imediato. */}
        <motion.ul
          {...rise(0.78, pronto)}
          className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:mt-14 sm:grid-cols-4"
        >
          {site.modalidades.map((modalidade) => (
            <li
              key={modalidade.nome}
              className="flex items-center gap-3 bg-surface px-5 py-5"
            >
              <Icon
                name={modalidade.icone}
                className="h-5 w-5 shrink-0 text-accent"
              />
              <span className="text-sm font-semibold leading-tight text-ink">
                {modalidade.nome}
              </span>
            </li>
          ))}
        </motion.ul>
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
