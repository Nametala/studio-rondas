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
              <div className="group relative isolate flex flex-col gap-3 overflow-hidden border-b border-line py-7 sm:grid sm:grid-cols-[3rem_1fr_1fr] sm:items-center sm:gap-8 sm:px-4">
                {/* Preenchimento que varre da esquerda no hover — anima só
                    transform, então não força relayout a cada quadro. */}
                <span
                  aria-hidden="true"
                  className="absolute inset-0 -z-10 origin-left scale-x-0 bg-surface-alt transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100 motion-reduce:transition-none"
                />
                <span className="font-mono text-sm text-accent">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="font-display flex items-center gap-3 text-3xl text-ink transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transform-none sm:text-4xl">
                  <Icon
                    name={modalidade.icone}
                    className="hidden h-7 w-7 shrink-0 text-accent transition-transform duration-300 group-hover:scale-110 motion-reduce:transform-none sm:block"
                  />
                  {modalidade.nome}
                  <span
                    aria-hidden="true"
                    className="-translate-x-2 text-accent opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 motion-reduce:transition-none"
                  >
                    →
                  </span>
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
