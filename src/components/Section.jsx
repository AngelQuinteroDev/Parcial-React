import { clsx } from '../lib/clsx.js'

/**
 * Contenedor de sección: centra el contenido y le da padding vertical.
 *
 * Uso:
 *   <Section id="servicios" bg="white">
 *     <Title ... />
 *   </Section>
 *
 * Props:
 *   id     -> id para anclas de navegación
 *   bg     -> 'white' | 'gray' | 'dark' (color de fondo)
 *   padding -> 'default' | 'none' | 'compact' (padding vertical)
 */
export default function Section({
  children,
  id,
  bg = 'white',
  padding = 'default',
  className = '',
}) {
  const backgrounds = {
    white: 'bg-white',
    gray: 'bg-slate-50',
    dark: 'bg-slate-900 text-slate-300',
  }

  const paddings = {
    default: 'py-20 sm:py-28',
    compact: 'py-12 sm:py-16',
    none: 'py-0',
  }

  return (
    <section id={id} className={clsx(backgrounds[bg], paddings[padding], className)}>
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  )
}