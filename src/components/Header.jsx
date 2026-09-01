import { useState } from 'react'
import { motion, useMotionValueEvent, useScroll } from 'motion/react'
import { site } from '../config/site'
import { EASE } from '../lib/motion'
import { Logo } from './Logo'
import { WhatsAppLink } from './WhatsAppButton'

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 8)
  })

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: EASE }}
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
        scrolled
          ? 'border-b border-line bg-surface/85 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 sm:px-8">
        <a
          href="#topo"
          aria-label={site.nome}
          className="flex items-center gap-2.5 rounded text-lg font-bold uppercase tracking-[0.08em] text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          <Logo />
          <span className="sr-only sm:not-sr-only">{site.nome}</span>
        </a>
        <WhatsAppLink className="inline-flex shrink-0 items-center gap-2 rounded-full bg-whatsapp px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-whatsapp-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
          Marcar aula experimental
        </WhatsAppLink>
      </div>
    </motion.header>
  )
}
