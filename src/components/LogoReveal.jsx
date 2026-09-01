import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { EASE } from '../lib/motion'

const SPARKLE =
  'M 0 -1 L 0.138 -0.333 L 0.707 -0.707 L 0.333 -0.138 L 1 0 L 0.333 0.138 ' +
  'L 0.707 0.707 L 0.138 0.333 L 0 1 L -0.138 0.333 L -0.707 0.707 ' +
  'L -0.333 0.138 L -1 0 L -0.333 -0.138 L -0.707 -0.707 L -0.138 -0.333 Z'

const CHAVE = 'rondas:intro-visto'
const DURACAO = 1150 // ms de exibição; some o wipe de 0,72s = ~1,9s no total

// Abertura com o logo. Três travas deliberadas, porque intro mal calibrada
// é um dos jeitos mais fáceis de piorar um site:
//   1. Só na primeira visita da sessão — quem volta não é barrado de novo.
//   2. Não existe sob prefers-reduced-motion.
//   3. É uma camada por cima: a página renderiza normalmente atrás, então a
//      intro não atrasa o conteúdo nem o carregamento da foto do hero.
// A decisão é síncrona e acontece na inicialização do estado, não num efeito:
// a intro precisa existir já no primeiro quadro, senão pisca a página antes
// da cortina aparecer. Só leitura aqui — a escrita fica no efeito.
function deveAbrir() {
  try {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return false
    return sessionStorage.getItem(CHAVE) !== '1'
  } catch {
    // Modo privativo ou storage bloqueado: não anima.
    return false
  }
}

export function LogoReveal() {
  const [ativo, setAtivo] = useState(deveAbrir)

  useEffect(() => {
    if (!ativo) return

    try {
      sessionStorage.setItem(CHAVE, '1')
    } catch {
      // Sem storage a intro roda uma vez e pronto; não é motivo para abortar.
    }

    const raiz = document.documentElement
    const overflowAnterior = raiz.style.overflow
    raiz.style.overflow = 'hidden'

    const t = setTimeout(() => setAtivo(false), DURACAO)
    return () => {
      clearTimeout(t)
      raiz.style.overflow = overflowAnterior
    }
  }, [ativo])

  return (
    <AnimatePresence>
      {ativo && (
        <motion.div
          key="intro"
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-[100] flex flex-col items-center justify-center gap-7 bg-ink-deep"
          initial={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.72, ease: EASE }}
        >
          <motion.svg
            viewBox="0 0 40 40"
            className="h-24 w-24 sm:h-28 sm:w-28"
            initial={{ scale: 0.35, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 170, damping: 15, mass: 0.9 }}
          >
            <circle cx="20" cy="20" r="19" fill="var(--color-brand-yellow)" />
            <motion.text
              x="51%"
              y="57%"
              textAnchor="middle"
              dominantBaseline="middle"
              fontFamily="'Archivo', system-ui, sans-serif"
              fontWeight="700"
              fontSize="25"
              fill="var(--color-brand-green)"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.28, duration: 0.35, ease: EASE }}
            >
              R
            </motion.text>
            {/* O posicionamento fica no <g> como atributo e a animação no
                <path> como transform CSS. Se os dois ficassem no mesmo
                elemento, o CSS sobrescreveria o atributo e o brilho perderia
                posição e escala. `transform-box: fill-box` faz a escala
                acontecer em torno do centro do próprio desenho. */}
            <g transform="translate(13.5 11) scale(3.4)">
              <motion.path
                d={SPARKLE}
                fill="var(--color-brand-blue)"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
                transition={{ delay: 0.46, type: 'spring', stiffness: 260, damping: 14 }}
              />
            </g>
          </motion.svg>

          <motion.span
            className="text-xs font-semibold uppercase tracking-[0.4em] text-surface sm:text-sm"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.54, duration: 0.5, ease: EASE }}
          >
            Studio Rondas
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
