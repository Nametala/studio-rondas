import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { site } from '../config/site'
import { Reveal, SectionEyebrow, SectionHeading } from './Reveal'

export function Localizacao() {
  const [copied, setCopied] = useState(false)

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(site.endereco.enderecoCompleto)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Clipboard indisponível (ex.: contexto não seguro) — sem feedback, sem quebrar a página.
    }
  }

  return (
    <section
      id="localizacao"
      className="scroll-mt-20 px-5 py-24 sm:px-8 sm:py-32"
    >
      <div className="mx-auto grid max-w-6xl gap-12 sm:grid-cols-2 sm:items-center sm:gap-16">
        <div>
          <SectionEyebrow>06 — Localização</SectionEyebrow>
          <SectionHeading>Bairro Funcionários, fácil de chegar.</SectionHeading>

          <Reveal delay={0.1}>
            <button
              type="button"
              onClick={handleCopy}
              className="group mt-8 inline-flex items-center gap-3 rounded-lg text-left text-lg text-ink transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              {site.endereco.enderecoCompleto}
              <span className="relative inline-flex h-5 w-16 shrink-0 items-center font-mono text-xs text-accent">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={copied ? 'copied' : 'copy'}
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.15 }}
                    className="absolute inset-0"
                  >
                    {copied ? 'copiado ✓' : 'copiar'}
                  </motion.span>
                </AnimatePresence>
              </span>
            </button>
          </Reveal>

          <Reveal delay={0.15}>
            <dl className="mt-8 space-y-3 border-t border-line pt-8">
              {site.horario.map((item) => (
                <div
                  key={item.dias}
                  className="flex justify-between gap-4 text-base sm:text-lg"
                >
                  <dt className="font-medium text-ink">{item.dias}</dt>
                  <dd className="font-mono text-sm text-ink-muted">
                    {item.horas}
                  </dd>
                </div>
              ))}
            </dl>
            <p className="mt-3 text-xs text-ink-muted">
              Horário a confirmar com o studio.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.1} y={16}>
          <iframe
            title={`Mapa com a localização do ${site.nome}`}
            src={site.endereco.mapsEmbedUrl}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-80 w-full rounded-2xl border border-line grayscale-[0.2] sm:h-[26rem]"
          />
        </Reveal>
      </div>
    </section>
  )
}
