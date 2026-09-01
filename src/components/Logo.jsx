// PLACEHOLDER — monograma provisório, redesenhado a partir do avatar do
// Instagram @studiorondas: disco amarelo, "R" verde e o brilho de oito pontas
// em ultramarino. Substituir pelo arquivo oficial (vetor) assim que o cliente
// enviar — ver README.md.
const SPARKLE =
  'M 0 -1 L 0.138 -0.333 L 0.707 -0.707 L 0.333 -0.138 L 1 0 L 0.333 0.138 ' +
  'L 0.707 0.707 L 0.138 0.333 L 0 1 L -0.138 0.333 L -0.707 0.707 ' +
  'L -0.333 0.138 L -1 0 L -0.333 -0.138 L -0.707 -0.707 L -0.138 -0.333 Z'

export function Logo({ className = 'h-8 w-8' }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <circle cx="20" cy="20" r="19" fill="var(--color-brand-yellow)" />
      <text
        x="51%"
        y="57%"
        textAnchor="middle"
        dominantBaseline="middle"
        fontFamily="'Archivo', system-ui, sans-serif"
        fontWeight="700"
        fontSize="25"
        fill="var(--color-brand-green)"
      >
        R
      </text>
      <path
        d={SPARKLE}
        fill="var(--color-brand-blue)"
        transform="translate(13.5 11) scale(3.4)"
      />
    </svg>
  )
}
