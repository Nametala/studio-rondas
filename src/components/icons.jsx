const common = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export function Icon({ name, className }) {
  const props = { ...common, viewBox: '0 0 24 24', className, 'aria-hidden': true }

  switch (name) {
    case 'dumbbell':
      return (
        <svg {...props}>
          <path d="M4 9v6M2 10.5v3M20 9v6M22 10.5v3" />
          <path d="M7 12h10" />
          <rect x="4.5" y="7.5" width="3" height="9" rx="1" />
          <rect x="16.5" y="7.5" width="3" height="9" rx="1" />
        </svg>
      )
    case 'pilates':
      return (
        <svg {...props}>
          <circle cx="12" cy="5" r="1.8" />
          <path d="M12 7v6M8 10h8M12 13l-3 6M12 13l3 6" />
        </svg>
      )
    case 'personal':
      return (
        <svg {...props}>
          <circle cx="9" cy="7" r="2.6" />
          <circle cx="17" cy="9" r="2" />
          <path d="M4 20c0-3 2.5-5.2 5-5.2s5 2.2 5 5.2M15.5 20c.2-2.2 1.7-3.8 3.5-4" />
        </svg>
      )
    case 'espaco':
      return (
        <svg {...props}>
          <path d="M4 11 12 4l8 7" />
          <path d="M6 10v9h12v-9" />
          <path d="M10 19v-5h4v5" />
        </svg>
      )
    case 'fisio':
      return (
        <svg {...props}>
          <path d="M3 13h3l2-5 3 9 2-6 1.5 2H21" />
        </svg>
      )
    case 'grupo':
      return (
        <svg {...props}>
          <circle cx="8" cy="9" r="2.6" />
          <circle cx="16" cy="9" r="2.6" />
          <path d="M3.5 19c.3-2.8 2.2-4.7 4.5-4.7s4.2 1.9 4.5 4.7M11.5 19c.3-2.8 2.2-4.7 4.5-4.7s4.2 1.9 4.5 4.7" />
        </svg>
      )
    case 'sparkle':
      return (
        <svg {...props}>
          <path d="M12 3v4M12 17v4M3 12h4M17 12h4" />
          <path d="M8 8l2 2M14 14l2 2M16 8l-2 2M10 14l-2 2" />
        </svg>
      )
    default:
      return null
  }
}
