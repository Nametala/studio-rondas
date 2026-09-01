import { site } from '../config/site'
import { Icon } from './icons'
import { RevealGroup, RevealItem, SectionEyebrow, SectionHeading } from './Reveal'

export function Diferenciais() {
  return (
    <section className="scroll-mt-20 bg-surface-alt px-5 py-24 sm:px-8 sm:py-36">
      <div className="mx-auto max-w-6xl">
        <SectionEyebrow>Por que o Rondas</SectionEyebrow>
        <SectionHeading>Perto de casa, perto de você.</SectionHeading>

        <RevealGroup
          className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2"
          stagger={0.08}
        >
          {site.diferenciais.map((diferencial) => (
            <RevealItem key={diferencial.titulo} className="h-full">
              <article className="group flex h-full flex-col gap-5 bg-surface-alt p-8 transition-colors duration-300 hover:bg-surface sm:p-10">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-fill/20 text-accent transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-110 group-hover:bg-accent-fill group-hover:text-surface motion-reduce:transform-none">
                  <Icon name={diferencial.icone} className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="font-display text-2xl text-ink">
                    {diferencial.titulo}
                  </h3>
                  <p className="mt-2 text-ink-muted">{diferencial.descricao}</p>
                </div>
              </article>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}
