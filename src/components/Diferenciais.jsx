import { motion } from 'motion/react'
import { site } from '../config/site'
import { Icon } from './icons'
import { RevealGroup, RevealItem, SectionEyebrow, SectionHeading } from './Reveal'
import { useTilt } from './useTilt'

function IconBadge({ nome }) {
  return (
    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-blue text-white transition-transform duration-300 group-hover:scale-105">
      <Icon name={nome} className="h-5 w-5" />
    </div>
  )
}

function DiferencialCard({ diferencial, className }) {
  const tilt = useTilt(6)

  return (
    <motion.div
      ref={tilt.ref}
      onMouseMove={tilt.onMouseMove}
      onMouseLeave={tilt.onMouseLeave}
      style={tilt.style}
      className={`group rounded-2xl border border-black/10 bg-surface p-6 shadow-sm transition-shadow duration-300 hover:shadow-lg ${className ?? ''}`}
    >
      <IconBadge nome={diferencial.icone} />
      <h3 className="font-display mt-4 text-lg font-medium text-ink">
        {diferencial.titulo}
      </h3>
      <p className="mt-1 text-sm text-ink-muted">{diferencial.descricao}</p>
    </motion.div>
  )
}

// Card de fechamento em largura total — evita o "buraco" vazio que sobra
// quando o 1º card ocupa 2 colunas e restam só 3 cards num grid de 4.
function DiferencialFeatureCard({ diferencial, className }) {
  const tilt = useTilt(4)

  return (
    <motion.div
      ref={tilt.ref}
      onMouseMove={tilt.onMouseMove}
      onMouseLeave={tilt.onMouseLeave}
      style={tilt.style}
      className={`group flex flex-col gap-4 rounded-2xl border border-black/10 bg-surface p-6 shadow-sm transition-shadow duration-300 hover:shadow-lg lg:flex-row lg:items-center lg:gap-6 ${className ?? ''}`}
    >
      <IconBadge nome={diferencial.icone} />
      <div>
        <h3 className="font-display text-lg font-medium text-ink">
          {diferencial.titulo}
        </h3>
        <p className="mt-1 text-sm text-ink-muted">{diferencial.descricao}</p>
      </div>
    </motion.div>
  )
}

export function Diferenciais() {
  const lastIndex = site.diferenciais.length - 1

  return (
    <section className="px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-4xl">
        <SectionEyebrow>Por que o Studio Rondas</SectionEyebrow>
        <SectionHeading>Perto de casa, perto de você.</SectionHeading>

        <RevealGroup
          className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          stagger={0.08}
        >
          {site.diferenciais.map((diferencial, index) => {
            const isFeature = index === 0
            const isClosing = index === lastIndex

            return (
              <RevealItem
                key={diferencial.titulo}
                className={
                  isFeature ? 'lg:col-span-2' : isClosing ? 'lg:col-span-4' : ''
                }
              >
                {isClosing ? (
                  <DiferencialFeatureCard
                    diferencial={diferencial}
                    className="h-full"
                  />
                ) : (
                  <DiferencialCard diferencial={diferencial} className="h-full" />
                )}
              </RevealItem>
            )
          })}
        </RevealGroup>
      </div>
    </section>
  )
}
