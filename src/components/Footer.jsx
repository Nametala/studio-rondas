import { site } from '../config/site'
import { Marquee } from './Marquee'

export function Footer() {
  return (
    <footer className="border-t border-black/5">
      <Marquee
        items={site.modalidades.map((m) => m.nome.toUpperCase())}
        className="bg-brand-blue py-4 text-white/90"
      />
      <div className="px-4 py-8 text-center text-sm text-ink-muted sm:px-6">
        <p>{site.nomeCompleto}</p>
        <p className="mt-1">{site.endereco.enderecoCompleto}</p>
        <a
          href={site.instagram.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-block rounded font-medium text-brand-blue underline underline-offset-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2"
        >
          {site.instagram.usuario} no Instagram
        </a>
      </div>
    </footer>
  )
}
