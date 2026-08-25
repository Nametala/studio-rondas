import { site } from '../config/site'
import { Reveal, RevealGroup, RevealItem } from './Reveal'

export function Equipe() {
  return (
    <section id="equipe" className="scroll-mt-16 px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <span className="font-mono-label text-sm text-brand-green">
            03 · Equipe
          </span>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-display mt-3 max-w-lg text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl">
            Quem acompanha o seu treino.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-2 text-sm text-ink-muted">
            Nomes e fotos a confirmar com o studio.
          </p>
        </Reveal>

        <RevealGroup
          className="mt-12 grid grid-cols-2 gap-8 sm:grid-cols-3"
          stagger={0.1}
        >
          {site.equipe.map((pessoa) => (
            <RevealItem key={pessoa.nome} className="flex flex-col items-center text-center">
              {pessoa.foto ? (
                <img
                  src={pessoa.foto}
                  alt={pessoa.nome}
                  className="h-24 w-24 rounded-full object-cover shadow-sm transition-transform duration-300 hover:scale-105 sm:h-28 sm:w-28"
                />
              ) : (
                <div
                  aria-hidden="true"
                  className="flex h-24 w-24 items-center justify-center rounded-full bg-brand-blue text-2xl font-semibold text-white shadow-sm transition-transform duration-300 hover:scale-105 sm:h-28 sm:w-28"
                >
                  {pessoa.nome.charAt(0)}
                </div>
              )}
              <p className="font-display mt-4 font-medium text-ink">
                {pessoa.nome}
              </p>
              <p className="text-sm text-ink-muted">{pessoa.funcao}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}
