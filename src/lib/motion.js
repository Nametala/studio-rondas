// Curvas de easing compartilhadas por todas as animações do site.
// EASE — saída expo, para entradas que "assentam" com suavidade.
export const EASE = [0.16, 1, 0.3, 1]
// EASE_SOFT — mais discreta, para microtransições e hovers.
export const EASE_SOFT = [0.4, 0, 0.2, 1]

// Transição padrão de entrada em viewport.
export const enterViewport = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.7, ease: EASE },
}
