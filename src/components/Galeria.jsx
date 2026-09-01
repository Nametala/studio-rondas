import { useEffect, useRef, useState } from 'react'
import { useReducedMotion } from 'motion/react'
import { site } from '../config/site'
import { Reveal, SectionEyebrow, SectionHeading } from './Reveal'
import { Icon } from './icons'

function GaleriaSlide({ slide, index, total }) {
  return (
    <figure
      role="group"
      aria-roledescription="slide"
      aria-label={`${slide.legenda} — ${index + 1} de ${total}`}
      className={`group relative flex aspect-[4/3] w-[80%] shrink-0 snap-start flex-col justify-end overflow-hidden rounded-2xl border border-line p-6 sm:w-[24rem] ${
        slide.foto ? 'bg-ink-deep text-surface' : 'bg-surface-alt text-ink'
      }`}
    >
      {slide.foto ? (
        <>
          <img
            src={slide.foto}
            alt={slide.legenda}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06] motion-reduce:transform-none"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-deep/70 via-transparent to-transparent"
          />
        </>
      ) : (
        <Icon name={slide.icone} className="mb-auto mt-1 h-10 w-10 text-accent" />
      )}
      <figcaption className="font-display relative z-10 text-lg">
        {slide.legenda}
      </figcaption>
    </figure>
  )
}

export function Galeria() {
  const trackRef = useRef(null)
  const [active, setActive] = useState(0)
  const [hasInteracted, setHasInteracted] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const prefersReducedMotion = useReducedMotion()
  const slides = site.galeria

  // Lê a posição real do scroll no DOM em vez de confiar no state `active`,
  // que pode estar desatualizado se o usuário clicar de novo antes do
  // listener de scroll processar o clique anterior.
  function getCurrentIndex() {
    const track = trackRef.current
    if (!track) return 0
    const distances = Array.from(track.children).map((el) =>
      Math.abs(el.offsetLeft - track.scrollLeft),
    )
    return distances.indexOf(Math.min(...distances))
  }

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

  // Passo relativo (um card por vez) com wraparound nas pontas do scroll real.
  function step(direction) {
    setHasInteracted(true)
    const track = trackRef.current
    const firstSlide = track?.children[0]
    if (!track || !firstSlide) return

    const maxScroll = track.scrollWidth - track.clientWidth
    const atEnd = track.scrollLeft >= maxScroll - 2
    const atStart = track.scrollLeft <= 2
    const behavior = prefersReducedMotion ? 'auto' : 'smooth'

    if (direction > 0 && atEnd) {
      track.scrollTo({ left: 0, behavior })
      return
    }
    if (direction < 0 && atStart) {
      track.scrollTo({ left: maxScroll, behavior })
      return
    }

    const stride = firstSlide.getBoundingClientRect().width + 16
    track.scrollTo({ left: track.scrollLeft + direction * stride, behavior })
  }

  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    function updateActive() {
      setActive(getCurrentIndex())
    }
    track.addEventListener('scroll', updateActive, { passive: true })
    return () => track.removeEventListener('scroll', updateActive)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (prefersReducedMotion || isPaused || hasInteracted) return
    const id = setInterval(() => step(1), 6000)
    return () => clearInterval(id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [prefersReducedMotion, isPaused, hasInteracted])

  return (
    <section id="espaco" className="scroll-mt-20 px-5 py-28 sm:px-8 sm:py-44">
      <div className="mx-auto max-w-6xl">
        <SectionEyebrow>O espaço</SectionEyebrow>
        <SectionHeading>
          Um ambiente sem lotação, feito para treinar de verdade.
        </SectionHeading>
        <Reveal delay={0.1}>
          <p className="mt-4 text-sm text-ink-muted">
            Imagens ilustrativas — fotos reais do espaço a confirmar com o studio.
          </p>
        </Reveal>
      </div>

      <Reveal delay={0.1}>
        <div
          className="relative mt-12"
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
            className="no-scrollbar relative flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-5 pb-2 sm:px-[max(2rem,calc((100%-72rem)/2))]"
          >
            {slides.map((slide, index) => (
              <GaleriaSlide
                key={slide.legenda}
                slide={slide}
                index={index}
                total={slides.length}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={() => step(-1)}
            aria-label="Foto anterior"
            className="absolute left-2 top-1/2 hidden -translate-y-1/2 items-center justify-center rounded-full border border-line bg-surface/90 p-2.5 text-ink shadow-sm transition-colors hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:flex"
          >
            <span aria-hidden="true">‹</span>
          </button>
          <button
            type="button"
            onClick={() => step(1)}
            aria-label="Próxima foto"
            className="absolute right-2 top-1/2 hidden -translate-y-1/2 items-center justify-center rounded-full border border-line bg-surface/90 p-2.5 text-ink shadow-sm transition-colors hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:flex"
          >
            <span aria-hidden="true">›</span>
          </button>
        </div>

        <div className="mt-6 flex justify-center gap-1.5">
          {slides.map((slide, index) => (
            <button
              key={slide.legenda}
              type="button"
              onClick={() => goTo(index)}
              aria-label={`Ir para foto ${index + 1}`}
              aria-current={active === index}
              className="flex h-6 w-6 items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <span
                aria-hidden="true"
                className={`h-2 rounded-full transition-all ${
                  active === index ? 'w-6 bg-accent' : 'w-2 bg-line'
                }`}
              />
            </button>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
