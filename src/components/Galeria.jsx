import { useEffect, useRef, useState } from 'react'
import { useReducedMotion } from 'motion/react'
import { site } from '../config/site'
import { Reveal } from './Reveal'
import { GalleryIcon } from './icons'

const GRADIENTS = [
  'from-brand-blue to-brand-blue-dark',
  'from-brand-green to-brand-blue',
  'from-brand-blue-dark to-brand-blue',
  'from-brand-green to-brand-blue-dark',
]

export function Galeria() {
  const trackRef = useRef(null)
  const [active, setActive] = useState(0)
  const [hasInteracted, setHasInteracted] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const prefersReducedMotion = useReducedMotion()
  const slides = site.galeria

  function scrollToIndex(index) {
    const track = trackRef.current
    const slide = track?.children[index]
    if (!track || !slide) return
    track.scrollTo({
      left: slide.offsetLeft,
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
    })
  }

  function goTo(index) {
    setHasInteracted(true)
    scrollToIndex(index)
  }

  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    const slideEls = Array.from(track.children)

    function updateActive() {
      const distances = slideEls.map((el) =>
        Math.abs(el.offsetLeft - track.scrollLeft),
      )
      setActive(distances.indexOf(Math.min(...distances)))
    }

    track.addEventListener('scroll', updateActive, { passive: true })
    return () => track.removeEventListener('scroll', updateActive)
  }, [])

  useEffect(() => {
    if (prefersReducedMotion || isPaused || hasInteracted) return
    const id = setInterval(() => {
      const next = (active + 1) % slides.length
      scrollToIndex(next)
    }, 6000)
    return () => clearInterval(id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, prefersReducedMotion, isPaused, hasInteracted])

  return (
    <section
      id="espaco"
      className="scroll-mt-16 px-4 py-20 sm:px-6 sm:py-28"
    >
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <span className="font-mono-label text-sm text-brand-green">
            04 · Espaço
          </span>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-display mt-3 max-w-lg text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl">
            Um ambiente sem lotação, feito para treinar de verdade.
          </h2>
        </Reveal>
      </div>

      <Reveal delay={0.1}>
        <div
          className="relative mt-10"
          role="region"
          aria-roledescription="carrossel"
          aria-label="Fotos do espaço do Studio Rondas"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocus={() => setIsPaused(true)}
          onBlur={() => setIsPaused(false)}
        >
          <div
            ref={trackRef}
            onPointerDown={() => setHasInteracted(true)}
            className="no-scrollbar relative flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-4 pb-2 sm:px-[max(1rem,calc((100%-56rem)/2))]"
          >
            {slides.map((slide, index) => (
              <div
                key={slide.legenda}
                role="group"
                aria-roledescription="slide"
                aria-label={`${slide.legenda} — ${index + 1} de ${slides.length}`}
                className={`relative flex aspect-[4/3] w-[78%] shrink-0 snap-start flex-col justify-end overflow-hidden rounded-2xl bg-gradient-to-br p-5 text-white sm:w-[22rem] ${GRADIENTS[index % GRADIENTS.length]}`}
              >
                {slide.foto ? (
                  <img
                    src={slide.foto}
                    alt={slide.legenda}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                ) : (
                  <GalleryIcon
                    name={slide.icone}
                    className="mb-auto mt-2 h-10 w-10 text-white/70"
                  />
                )}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent"
                />
                <p className="font-display relative z-10 text-lg font-medium">
                  {slide.legenda}
                </p>
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={() => goTo(Math.max(active - 1, 0))}
            disabled={active === 0}
            aria-label="Foto anterior"
            className="absolute left-1 top-1/2 hidden -translate-y-1/2 items-center justify-center rounded-full bg-surface/90 p-2 text-ink shadow-md transition-opacity hover:bg-surface disabled:opacity-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue sm:flex"
          >
            <span aria-hidden="true">‹</span>
          </button>
          <button
            type="button"
            onClick={() => goTo(Math.min(active + 1, slides.length - 1))}
            disabled={active === slides.length - 1}
            aria-label="Próxima foto"
            className="absolute right-1 top-1/2 hidden -translate-y-1/2 items-center justify-center rounded-full bg-surface/90 p-2 text-ink shadow-md transition-opacity hover:bg-surface disabled:opacity-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue sm:flex"
          >
            <span aria-hidden="true">›</span>
          </button>
        </div>

        <div className="mt-5 flex justify-center gap-2">
          {slides.map((slide, index) => (
            <button
              key={slide.legenda}
              type="button"
              onClick={() => goTo(index)}
              aria-label={`Ir para foto ${index + 1}`}
              aria-current={active === index}
              className={`h-2 rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue ${
                active === index ? 'w-6 bg-brand-blue' : 'w-2 bg-black/15'
              }`}
            />
          ))}
        </div>
      </Reveal>
    </section>
  )
}
