export function Marquee({ items, className }) {
  return (
    <div
      className={`overflow-hidden ${className ?? ''}`}
      role="presentation"
      aria-hidden="true"
    >
      <div className="marquee-track">
        {[0, 1].map((copy) => (
          <ul key={copy} className="flex shrink-0 items-center">
            {items.map((item) => (
              <li
                key={item}
                className="font-display flex items-center whitespace-nowrap px-6 text-2xl font-medium sm:text-4xl"
              >
                {item}
                <span className="ml-6 text-brand-yellow" aria-hidden="true">
                  •
                </span>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  )
}
