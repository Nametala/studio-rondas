import { useEffect } from 'react'
import Lenis from 'lenis'

// Scroll suave global via Lenis. Fica desligado quando o usuário pede
// `prefers-reduced-motion: reduce` — nesse caso o scroll nativo do
// navegador continua valendo e nada é interceptado.
export function useSmoothScroll() {
  useEffect(() => {
    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches
    if (prefersReduced) return

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      wheelMultiplier: 0.9,
      touchMultiplier: 1.5,
    })

    let frame
    function raf(time) {
      lenis.raf(time)
      frame = requestAnimationFrame(raf)
    }
    frame = requestAnimationFrame(raf)

    // Âncoras internas (#secao) passam a rolar com a mesma suavidade.
    function handleAnchorClick(event) {
      const anchor = event.target.closest('a[href^="#"]')
      if (!anchor) return
      const id = anchor.getAttribute('href')
      if (!id || id === '#') return
      const target = document.querySelector(id)
      if (!target) return
      event.preventDefault()
      lenis.scrollTo(target, { offset: -64 })
      if (typeof target.focus === 'function') {
        target.focus({ preventScroll: true })
      }
    }
    document.addEventListener('click', handleAnchorClick)

    return () => {
      cancelAnimationFrame(frame)
      document.removeEventListener('click', handleAnchorClick)
      lenis.destroy()
    }
  }, [])
}
