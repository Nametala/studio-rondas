import { site } from '../config/site'
import { Reveal, SectionEyebrow } from './Reveal'

export function Sobre() {
  return (
    <section
      id="sobre"
      className="scroll-mt-20 px-5 py-24 sm:px-8 sm:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <SectionEyebrow>01 — Sobre</SectionEyebrow>

        <Reveal delay={0.05}>
          <p className="font-display mt-6 max-w-4xl text-3xl font-medium leading-[1.15] tracking-tight text-ink text-balance sm:text-[2.75rem]">
            Perto de quem treina, do primeiro dia em diante.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-8 border-t border-line pt-10 sm:grid-cols-2 sm:gap-14">
          {site.sobre.paragrafos.map((paragrafo, index) => (
            <Reveal key={paragrafo} delay={0.08 * (index + 1)}>
              <p className="flex gap-4 text-lg text-ink-muted">
                <span
                  aria-hidden="true"
                  className="font-mono text-sm text-accent"
                >
                  {String(index + 1).padStart(2, '0')}
                </span>
                {paragrafo}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
