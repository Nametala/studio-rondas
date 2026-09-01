import { site } from '../config/site'
import { Icon } from './icons'
import { RevealGroup, RevealItem, SectionEyebrow, SectionHeading } from './Reveal'

// Seção chapada de lima — é o gesto mais reconhecível das artes do Instagram
// deles (posts inteiros em lima) e o ponto onde a marca aparece com força.
// Sobre a lima, TODO texto usa `text-ink` cheio: `text-ink-muted` dá 3,4:1 e
// reprova. A hierarquia vem do tamanho, não da opacidade.
export function Diferenciais() {
  return (
    <section className="scroll-mt-20 bg-accent-fill px-5 py-24 sm:px-8 sm:py-36">
      <div className="mx-auto max-w-6xl">
        <SectionEyebrow>Por que o Rondas</SectionEyebrow>
        <SectionHeading>Perto de casa, perto de você.</SectionHeading>

        <RevealGroup
          className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2"
          stagger={0.08}
        >
          {site.diferenciais.map((diferencial) => (
            <RevealItem key={diferencial.titulo} className="h-full">
              <article className="group flex h-full flex-col gap-5 border-t border-ink/20 pt-6">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-ink-deep text-surface transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-110 motion-reduce:transform-none">
                  <Icon name={diferencial.icone} className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="font-display text-2xl text-ink">
                    {diferencial.titulo}
                  </h3>
                  <p className="mt-2 text-[0.975rem] leading-relaxed text-ink">
                    {diferencial.descricao}
                  </p>
                </div>
              </article>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}
