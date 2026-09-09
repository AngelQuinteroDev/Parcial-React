import { useCallback, useEffect, useRef, useState } from 'react'
import { clsx } from '../lib/clsx.js'

/**
 * Carrusel / slider de contenido. Cada elemento de `items`
 * es una "diapositiva" (puede ser cualquier componente: Card,
 * imagen, testimonio, etc.).
 *
 * Uso:
 *   <Carousel
 *     items={[<Card .../>, <Card .../>, <Card .../>]}
 *     autoplay
 *     interval={4000}
 *     showDots
 *   />
 *
 * Props:
 *   items    -> array de elementos React a mostrar
 *   autoplay -> true/false: avanza solo cada `interval` ms
 *   interval -> milisegundos entre slides (defecto 5000)
 *   showArrows -> true/false: botones ◀ ▶
 *   showDots   -> true/false: puntos indicadores
 *   className  -> clases extra para el contenedor
 */
export default function Carousel({
  items = [],
  autoplay = false,
  interval = 5000,
  showArrows = true,
  showDots = true,
  className = '',
}) {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)
  const timer = useRef(null)

  const total = items.length

  const goTo = useCallback((index) => {
    setCurrent(((index % total) + total) % total)
  }, [total])

  const next = useCallback(() => goTo(current + 1), [current, goTo])
  const prev = useCallback(() => goTo(current - 1), [current, goTo])

  // Autoplay: avanza sola mientras no esté en pausa
  useEffect(() => {
    if (!autoplay || paused) return undefined
    timer.current = setInterval(next, interval)
    return () => clearInterval(timer.current)
  }, [autoplay, paused, interval, next])

  if (total === 0) return null

  return (
    <div
      className={clsx('relative w-full', className)}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Slides */}
      <div className="overflow-hidden rounded-2xl">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {items.map((item, index) => (
            <div
              key={index}
              className="w-full shrink-0 px-4 py-2"
              aria-hidden={current !== index}
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* Botones anterior / siguiente */}
      {showArrows && total > 1 && (
        <>
          <button
            type="button"
            aria-label="Anterior"
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2.5 text-slate-700 shadow-md backdrop-blur transition-colors hover:bg-white"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            type="button"
            aria-label="Siguiente"
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2.5 text-slate-700 shadow-md backdrop-blur transition-colors hover:bg-white"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M9 6l6 6-6 6" />
            </svg>
          </button>
        </>
      )}

      {/* Puntos indicadores */}
      {showDots && total > 1 && (
        <div className="mt-4 flex justify-center gap-2">
          {items.map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Ir a la diapositiva ${index + 1}`}
              onClick={() => goTo(index)}
              className={clsx(
                'h-2.5 rounded-full transition-all duration-300',
                current === index ? 'w-6 bg-primary-600' : 'w-2.5 bg-slate-300 hover:bg-slate-400',
              )}
            />
          ))}
        </div>
      )}
    </div>
  )
}