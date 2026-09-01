import { motion } from 'motion/react'
import { site } from '../config/site'
import { EASE } from '../lib/motion'

function buildWhatsAppUrl(mensagem) {
  const texto = encodeURIComponent(mensagem ?? site.whatsapp.mensagemPadrao)
  return `https://wa.me/${site.whatsapp.numero}?text=${texto}`
}

export function WhatsAppLink({ children, mensagem, className }) {
  return (
    <a
      href={buildWhatsAppUrl(mensagem)}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
    </a>
  )
}

export function WhatsAppFloatButton() {
  return (
    <motion.a
      href={buildWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Marcar aula experimental pelo WhatsApp"
      initial={{ opacity: 0, scale: 0.6, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1.2, ease: EASE }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-4 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-lg shadow-whatsapp/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 sm:bottom-6 sm:right-6"
    >
      <span
        aria-hidden="true"
        className="absolute inset-0 rounded-full bg-whatsapp/60 motion-safe:animate-ping"
      />
      <svg
        aria-hidden="true"
        viewBox="0 0 32 32"
        className="relative h-7 w-7"
        fill="currentColor"
      >
        <path d="M16 3.5c-6.9 0-12.5 5.6-12.5 12.5 0 2.3.6 4.5 1.8 6.4L3.5 28.5l6.3-1.7c1.8 1 3.9 1.5 6.2 1.5 6.9 0 12.5-5.6 12.5-12.5S22.9 3.5 16 3.5Zm0 22.7c-2 0-4-.5-5.7-1.6l-.4-.2-3.7 1 1-3.6-.3-.4c-1.2-1.8-1.8-3.9-1.8-6 0-5.9 4.8-10.7 10.7-10.7S26.9 10.1 26.9 16 22.1 26.2 16 26.2Zm5.9-8c-.3-.2-1.9-.9-2.2-1s-.5-.2-.7.2-.8 1-1 1.2-.4.2-.7.1c-.3-.2-1.4-.5-2.6-1.6-1-.9-1.6-2-1.8-2.3-.2-.3 0-.5.1-.6.1-.1.3-.4.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5s-.7-1.6-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.6-.6 1.8-1.3.2-.6.2-1.2.2-1.3-.1-.1-.3-.2-.6-.4Z" />
      </svg>
    </motion.a>
  )
}
