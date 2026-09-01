import { site } from '../config/site'
import { Reveal } from './Reveal'

export function Sobre() {
  return (
    <section
      id="sobre"
      className="scroll-mt-20 px-5 py-24 sm:px-8 sm:py-40"
    >
      {/* Layout deslocado de propósito: a frase de abertura ocupa a coluna
          larga e os parágrafos correm à direita, quebrando o ritmo de
          "rótulo, título, conteúdo centralizado" que se repete no resto. */}
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_0.85fr] lg:gap-20">
        <Reveal delay={0.05}>
          <p className="font-display max-w-3xl text-3xl leading-[1.1] text-ink text-balance sm:text-[2.75rem] lg:text-5xl">
            Perto de quem treina, do primeiro dia em diante.
          </p>
        </Reveal>

        <div className="flex flex-col gap-7 border-t border-line pt-8 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-2">
          {site.sobre.paragrafos.map((paragrafo, index) => (
            <Reveal key={paragrafo} delay={0.08 * (index + 1)}>
              <p className="text-lg leading-relaxed text-ink-muted">
                {paragrafo}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
