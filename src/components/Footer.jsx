import { site } from '../config/site'
import { WhatsAppLink } from './WhatsAppButton'

export function Footer() {
  return (
    <footer className="border-t border-line bg-surface px-5 py-16 sm:px-8">
      <div className="mx-auto grid max-w-6xl gap-10 sm:grid-cols-[1.5fr_1fr] sm:gap-16">
        <div>
          <p className="font-display text-2xl font-semibold uppercase tracking-[0.06em] text-ink">
            {site.nomeCompleto}
          </p>
          <p className="mt-3 max-w-sm text-ink-muted">
            {site.endereco.enderecoCompleto}
          </p>
          <WhatsAppLink className="mt-6 inline-flex items-center gap-2 rounded-full bg-whatsapp px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-whatsapp-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
            Marcar aula experimental
          </WhatsAppLink>
        </div>

        <nav className="flex flex-col gap-2 text-sm" aria-label="Rodapé">
          <a
            href={site.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded font-medium text-accent underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            {site.instagram.usuario} no Instagram
          </a>
          <a
            href={site.endereco.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded font-medium text-ink transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            Como chegar
          </a>
          <a
            href="#topo"
            className="rounded font-medium text-ink transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            Voltar ao topo
          </a>
        </nav>
      </div>

      <p className="mx-auto mt-14 max-w-6xl text-xs text-ink-muted">
        © {new Date().getFullYear()} {site.nomeCompleto}.
      </p>
    </footer>
  )
}
