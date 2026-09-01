export function Marquee({ items }) {
  return (
    <div
      className="overflow-hidden border-y border-line bg-surface-alt py-4"
      role="presentation"
      aria-hidden="true"
    >
      <div className="marquee-track">
        {[0, 1].map((copy) => (
          <ul key={copy} className="flex shrink-0 items-center">
            {items.map((item) => (
              <li
                key={item}
                className="flex items-center whitespace-nowrap px-6 text-2xl font-bold uppercase tracking-tight text-ink sm:text-3xl"
              >
                {item}
                <span className="ml-6 text-accent" aria-hidden="true">
                  ✷
                </span>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  )
}
