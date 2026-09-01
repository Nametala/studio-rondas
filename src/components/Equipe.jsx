import { site } from '../config/site'
import { Icon } from './icons'
import { Reveal, RevealGroup, RevealItem, SectionEyebrow, SectionHeading } from './Reveal'

function Avatar({ pessoa }) {
  if (pessoa.foto) {
    return (
      <img
        src={pessoa.foto}
        alt={pessoa.nome}
        className="aspect-[4/5] w-full rounded-2xl object-cover"
      />
    )
  }

  return (
    <div
      aria-hidden="true"
      className="relative flex aspect-[4/5] w-full items-center justify-center rounded-2xl border border-line bg-surface"
    >
      <Icon name="personal" className="h-10 w-10 text-ink/25" />
      <span className="absolute bottom-3 right-4 text-2xl font-bold tabular-nums text-ink/15">
        {pessoa.nome.charAt(0)}
      </span>
    </div>
  )
}

export function Equipe() {
  return (
    <section
      id="equipe"
      className="scroll-mt-20 bg-surface-alt px-5 py-24 sm:px-8 sm:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <SectionEyebrow>04 — Equipe</SectionEyebrow>
        <SectionHeading>Quem acompanha o seu treino.</SectionHeading>
        <Reveal delay={0.1}>
          <p className="mt-4 text-sm text-ink-muted">
            Nomes e fotos a confirmar com o studio.
          </p>
        </Reveal>

        <RevealGroup
          className="mt-14 grid grid-cols-2 gap-6 sm:grid-cols-3 sm:gap-8"
          stagger={0.1}
        >
          {site.equipe.map((pessoa) => (
            <RevealItem key={pessoa.nome}>
              <figure className="group">
                <div className="overflow-hidden rounded-2xl transition-transform duration-300 group-hover:-translate-y-1">
                  <Avatar pessoa={pessoa} />
                </div>
                <figcaption className="mt-4">
                  <p className="font-display text-xl text-ink">
                    {pessoa.nome}
                  </p>
                  <p className="text-sm text-ink-muted">{pessoa.funcao}</p>
                </figcaption>
              </figure>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}
