// Regras de exibição da abertura, num módulo à parte para que LogoReveal siga
// exportando só o componente (senão o Fast Refresh do Vite para de funcionar).
export const CHAVE_INTRO = 'rondas:intro-visto'

// Decisão síncrona: precisa valer já no primeiro render, senão a página pisca
// antes da cortina aparecer.
export function introVaiAbrir() {
  try {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return false
    return sessionStorage.getItem(CHAVE_INTRO) !== '1'
  } catch {
    // Modo privativo ou storage bloqueado: não anima.
    return false
  }
}
