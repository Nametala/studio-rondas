import { site } from '../config/site'
import { Reveal, RevealGroup, RevealItem } from './Reveal'

export function Modalidades() {
  return (
    <section
      id="modalidades"
      className="scroll-mt-16 bg-surface-alt px-4 py-20 sm:px-6 sm:py-28"
    >
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <span className="font-mono-label text-sm text-brand-green">
            02 · Modalidades
          </span>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-display mt-3 max-w-lg text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl">
            Quatro caminhos, um só acompanhamento.
          </h2>
        </Reveal>

        <RevealGroup className="mt-12 border-t border-black/10" stagger={0.08}>
          {site.modalidades.map((modalidade, index) => (
            <RevealItem key={modalidade.nome}>
              <div className="group grid items-baseline gap-2 border-b border-black/10 py-6 transition-colors hover:bg-surface sm:grid-cols-[3rem_1fr_1.4fr] sm:gap-6 sm:px-4">
                <span className="font-mono text-sm text-ink-muted">
                  {String(index + 1).padStart(2, '0')}
                </span>
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
