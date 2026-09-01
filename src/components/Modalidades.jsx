import { site } from '../config/site'
import { Icon } from './icons'
import { RevealGroup, RevealItem, SectionEyebrow, SectionHeading } from './Reveal'

export function Modalidades() {
  return (
    <section
      id="modalidades"
      className="scroll-mt-20 px-5 py-24 sm:px-8 sm:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <SectionEyebrow>03 — Modalidades</SectionEyebrow>
        <SectionHeading>Quatro caminhos, um só acompanhamento.</SectionHeading>

        <RevealGroup className="mt-14 border-t border-line" stagger={0.07}>
          {site.modalidades.map((modalidade, index) => (
            <RevealItem key={modalidade.nome}>
              <div className="group flex flex-col gap-3 border-b border-line py-7 transition-colors duration-300 hover:bg-surface-alt sm:grid sm:grid-cols-[3rem_1fr_1fr] sm:items-center sm:gap-8 sm:px-4">
                <span className="font-mono text-sm text-accent">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="font-display flex items-center gap-3 text-3xl font-semibold text-ink transition-transform duration-300 group-hover:translate-x-1 sm:text-4xl">
                  <Icon
                    name={modalidade.icone}
                    className="hidden h-7 w-7 shrink-0 text-accent sm:block"
                  />
                  {modalidade.nome}
                </h3>
                <p className="max-w-md text-ink-muted sm:text-right sm:text-lg">
                  {modalidade.descricao}
                </p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}
