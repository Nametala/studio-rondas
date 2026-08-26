// PLACEHOLDER — monograma provisório do "R" nas cores da marca (amarelo/verde
// sobre azul). Substituir pelo arquivo oficial do logo assim que o cliente
// confirmar (ver README.md).
export function Logo({ className = 'h-8 w-8' }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="logo-r-gradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--color-brand-yellow)" />
          <stop offset="100%" stopColor="var(--color-brand-green)" />
        </linearGradient>
      </defs>
      <rect width="40" height="40" rx="10" fill="var(--color-brand-blue)" />
      <text
        x="51%"
        y="56%"
        textAnchor="middle"
        dominantBaseline="middle"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="700"
        fontSize="23"
        fill="url(#logo-r-gradient)"
      >
        R
      </text>
    </svg>
  )
}
