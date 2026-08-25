import { useState } from 'react'
import { motion, useMotionValueEvent, useScroll } from 'motion/react'
import { site } from '../config/site'
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
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
        scrolled
          ? 'border-b border-black/5 bg-surface/90 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <a
          href="#topo"
          className="font-display rounded text-lg font-semibold tracking-tight text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2"
        >
          {site.nome}
        </a>
        <WhatsAppLink className="inline-flex shrink-0 items-center gap-2 rounded-full bg-brand-green px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-brand-green/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2">
          Marcar aula experimental
        </WhatsAppLink>
      </div>
    </motion.header>
  )
}
