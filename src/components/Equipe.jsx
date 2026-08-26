import { motion } from 'motion/react'
import { site } from '../config/site'
import { Reveal, RevealGroup, RevealItem, SectionEyebrow, SectionHeading } from './Reveal'
import { useTilt } from './useTilt'

function Avatar({ pessoa }) {
  const tilt = useTilt(14)

  if (pessoa.foto) {
    return (
      <motion.img
        ref={tilt.ref}
        onMouseMove={tilt.onMouseMove}
        onMouseLeave={tilt.onMouseLeave}
        style={tilt.style}
        src={pessoa.foto}
        alt={pessoa.nome}
        className="h-24 w-24 rounded-full object-cover shadow-sm sm:h-28 sm:w-28"
      />
    )
  }

  return (
    <motion.div
      ref={tilt.ref}
      onMouseMove={tilt.onMouseMove}
      onMouseLeave={tilt.onMouseLeave}
      style={tilt.style}
      aria-hidden="true"
      className="flex h-24 w-24 items-center justify-center rounded-full bg-brand-blue text-2xl font-semibold text-white shadow-sm sm:h-28 sm:w-28"
    >
      {pessoa.nome.charAt(0)}
    </motion.div>
  )
}

export function Equipe() {
  return (
    <section id="equipe" className="scroll-mt-16 px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-4xl">
        <SectionEyebrow>03 · Equipe</SectionEyebrow>
        <SectionHeading>Quem acompanha o seu treino.</SectionHeading>
        <Reveal delay={0.1}>
          <p className="mt-2 text-sm text-ink-muted">
            Nomes e fotos a confirmar com o studio.
          </p>
        </Reveal>

        <RevealGroup
          className="mt-12 grid grid-cols-2 gap-8 sm:grid-cols-3"
          stagger={0.1}
        >
          {site.equipe.map((pessoa) => (
            <RevealItem key={pessoa.nome} className="flex flex-col items-center text-center">
              <Avatar pessoa={pessoa} />
              <p className="font-display mt-4 font-medium text-ink">
                {pessoa.nome}
              </p>
              <p className="text-sm text-ink-muted">{pessoa.funcao}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}
