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
      className="scroll-mt-16 bg-surface-alt px-4 py-20 sm:px-6 sm:py-28"
    >
      <div className="mx-auto grid max-w-4xl gap-10 sm:grid-cols-2 sm:items-center sm:gap-14">
        <div>
          <SectionEyebrow>05 · Localização</SectionEyebrow>
          <SectionHeading className="mt-3">
            Bairro Funcionários, fácil de chegar.
          </SectionHeading>

          <Reveal delay={0.1}>
            <button
              type="button"
              onClick={handleCopy}
              className="group mt-6 inline-flex items-center gap-2 rounded-lg text-left text-base text-ink-muted transition-colors hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2"
            >
              {site.endereco.enderecoCompleto}
              <span className="relative inline-flex h-5 w-16 shrink-0 items-center font-mono text-xs text-brand-blue">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={copied ? 'copied' : 'copy'}
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.15 }}
                    className="absolute inset-0"
                  >
                    {copied ? 'Copiado ✓' : 'copiar'}
                  </motion.span>
                </AnimatePresence>
              </span>
            </button>
          </Reveal>

          <Reveal delay={0.15}>
            <dl className="mt-6 space-y-2 border-t border-black/10 pt-6">
              {site.horario.map((item) => (
                <div
                  key={item.dias}
                  className="flex justify-between gap-4 text-sm sm:text-base"
                >
                  <dt className="font-medium text-ink">{item.dias}</dt>
                  <dd className="text-ink-muted">{item.horas}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <Reveal delay={0.1} y={16}>
          <iframe
            title={`Mapa com a localização do ${site.nome}`}
            src={site.endereco.mapsEmbedUrl}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-72 w-full rounded-2xl border border-black/5 sm:h-80"
          />
        </Reveal>
      </div>
    </section>
  )
}
