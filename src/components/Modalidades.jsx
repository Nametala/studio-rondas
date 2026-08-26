import { site } from '../config/site'
import { Icon } from './icons'
import { RevealGroup, RevealItem, SectionEyebrow, SectionHeading } from './Reveal'

export function Modalidades() {
  return (
    <section
      id="modalidades"
      className="scroll-mt-16 bg-surface-alt px-4 py-20 sm:px-6 sm:py-28"
    >
      <div className="mx-auto max-w-4xl">
        <SectionEyebrow>02 · Modalidades</SectionEyebrow>
        <SectionHeading>Quatro caminhos, um só acompanhamento.</SectionHeading>

        <RevealGroup className="mt-12 border-t border-black/10" stagger={0.08}>
          {site.modalidades.map((modalidade, index) => (
            <RevealItem key={modalidade.nome}>
              <div className="group grid items-center gap-2 border-b border-black/10 py-6 transition-colors hover:bg-surface sm:grid-cols-[3rem_2.5rem_1fr_1.4fr] sm:gap-6 sm:px-4">
                <span className="font-mono text-sm text-ink-muted">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <Icon
                  name={modalidade.icone}
                  className="hidden h-6 w-6 text-brand-green transition-transform duration-300 group-hover:scale-110 sm:block"
                />
                <h3 className="font-display text-xl font-medium text-ink transition-transform duration-300 group-hover:translate-x-1 sm:text-2xl">
                  {modalidade.nome}
                </h3>
                <p className="text-sm text-ink-muted sm:text-base">
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
