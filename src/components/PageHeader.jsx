import { clsx } from '../lib/clsx.js'

/**
 * Encabezado de página interior (header). Se usa en páginas
 * que no son el inicio (Nosotros, Servicios, Contacto...).
 *
 * Uso:
 *   <PageHeader
 *     title="Sobre nosotros"
 *     subtitle="Conoce la historia de nuestra empresa."
 *     bg="gray"
 *   />
 *
 * Props:
 *   title    -> título de la página
 *   subtitle -> descripción breve
 *   bg       -> 'white' | 'gray' | 'dark'
 *   compact  -> true/false (reduce el alto)
 */
export default function PageHeader({ title, subtitle, bg = 'white', compact = false }) {
  const dark = bg === 'dark'

  return (
    <header
      className={clsx(
        'border-b',
        dark ? 'border-white/10 bg-slate-900' : 'border-slate-200 bg-white',
        compact ? 'py-12' : 'py-20',
      )}
    >
      <div className="mx-auto w-full max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <h1
          className={clsx(
            'text-4xl font-bold tracking-tight sm:text-5xl',
            dark ? 'text-white' : 'text-slate-900',
          )}
        >
          {title}
        </h1>
        {subtitle && (
          <p
            className={clsx(
              'mx-auto mt-4 max-w-2xl text-lg leading-relaxed',
              dark ? 'text-slate-400' : 'text-slate-600',
            )}
          >
            {subtitle}
          </p>
        )}
      </div>
    </header>
  )
}