import { motion } from 'motion/react'
import { WhatsAppLink } from './WhatsAppButton'

const EASE = [0.16, 1, 0.3, 1]

const headline = ['Treino de perto.', 'Resultado real.']

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}

const line = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
}

export function Hero() {
  return (
    <section
      id="topo"
      className="relative scroll-mt-16 overflow-hidden bg-brand-blue px-4 pb-20 pt-32 text-white sm:px-6 sm:pb-28 sm:pt-40"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-brand-green/30 blur-3xl motion-safe:animate-[blob-float_9s_ease-in-out_infinite]" />
        <div className="absolute -bottom-32 -right-16 h-96 w-96 rounded-full bg-brand-yellow/20 blur-3xl motion-safe:animate-[blob-float_11s_ease-in-out_infinite_-3s]" />
      </div>

      <div className="relative mx-auto max-w-3xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="font-mono-label text-xs text-brand-yellow sm:text-sm"
        >
          Studio Rondas · Funcionários, Belo Horizonte
        </motion.p>

        <motion.h1
          variants={container}
          initial="hidden"
          animate="visible"
          className="font-display mt-5 text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl"
        >
          {headline.map((text) => (
            <motion.span key={text} variants={line} className="block">
              {text}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55, ease: EASE }}
          className="mx-auto mt-6 max-w-xl text-base text-white/80 sm:text-lg"
        >
          Atendimento personalizado, turma reduzida e acompanhamento de perto
          — musculação, pilates, personal e fisioterapia em um só lugar.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7, ease: EASE }}
          className="mt-9 flex flex-col items-center gap-3 sm:flex-row sm:justify-center"
        >
          <WhatsAppLink className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-yellow px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand-blue sm:w-auto">
            Marcar aula experimental
            <span
              aria-hidden="true"
              className="transition-transform group-hover:translate-x-1"
            >
              →
            </span>
          </WhatsAppLink>
          <a
            href="#modalidades"
            className="inline-flex w-full items-center justify-center rounded-full border border-white/40 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand-blue sm:w-auto"
          >
            Conheça as modalidades
          </a>
        </motion.div>
      </div>

      <motion.a
        href="#sobre"
        aria-label="Rolar para a próxima seção"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1, ease: EASE }}
        className="absolute inset-x-0 bottom-6 mx-auto flex w-fit items-center justify-center rounded-full text-white/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
      >
        <motion.span
          aria-hidden="true"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="text-xl"
        >
          ↓
        </motion.span>
      </motion.a>
    </section>
  )
}
