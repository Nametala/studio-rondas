import { site } from '../config/site'
import { Reveal } from './Reveal'

export function Sobre() {
  return (
    <section id="sobre" className="scroll-mt-16 px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto grid max-w-4xl gap-8 sm:grid-cols-[auto_1fr] sm:gap-14">
        <Reveal>
          <span className="font-mono-label text-sm text-brand-green">
            01 · Sobre
          </span>
        </Reveal>
        <div className="space-y-5">
          <Reveal>
            <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl">
              Perto de quem treina, do primeiro dia em diante.
            </h2>
          </Reveal>
          {site.sobre.paragrafos.map((paragrafo, index) => (
            <Reveal key={paragrafo} delay={0.08 * (index + 1)}>
              <p className="max-w-xl text-base text-ink-muted sm:text-lg">
                {paragrafo}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
