// Curvas de easing compartilhadas por todas as animações do site.
// EASE — saída expo, para entradas que "assentam" com suavidade.
export const EASE = [0.16, 1, 0.3, 1]
// EASE_SOFT — mais discreta, para microtransições e hovers.
export const EASE_SOFT = [0.4, 0, 0.2, 1]

// Molas para hover e elementos que seguem o cursor. Mola dá um retorno
// natural que curva de duração fixa não alcança.
export const SPRING = { type: 'spring', stiffness: 300, damping: 30, mass: 0.8 }
export const SPRING_SOFT = { type: 'spring', stiffness: 160, damping: 22, mass: 0.9 }

// Transição padrão de entrada em viewport.
export const enterViewport = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.7, ease: EASE },
}

// Variantes de container/filho para revelar palavras ou itens em cascata.
// O stagger fica no container para que os filhos não precisem calcular delay.
export const staggerContainer = (stagger = 0.06, delayChildren = 0) => ({
  hidden: {},
  visible: { transition: { staggerChildren: stagger, delayChildren } },
})

export const wordChild = {
  hidden: { opacity: 0, y: '0.5em' },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: EASE } },
}
