// PLACEHOLDER — monograma provisório do "R" (âmbar sobre tinta). Substituir
// pelo arquivo oficial do logo assim que o cliente confirmar (ver README.md).
export function Logo({ className = 'h-8 w-8' }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <rect width="40" height="40" rx="11" fill="var(--color-ink)" />
      <text
        x="51%"
        y="55%"
        textAnchor="middle"
        dominantBaseline="middle"
        fontFamily="'Barlow Condensed', sans-serif"
        fontWeight="700"
        fontSize="24"
        fill="var(--color-accent-fill)"
      >
        R
      </text>
    </svg>
  )
}
