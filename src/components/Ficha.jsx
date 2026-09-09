import { clsx } from '../lib/clsx.js'

/**
 * Ficha / tile: caja con icono, título y descripción.
 * Ideal para listar características o servicios.
 *
 * Uso:
 *   <Ficha
 *     icon={<RocketIcon />}
 *     title="Rápido"
 *     description="Carga en milisegundos gracias a Vite."
 *     tone="blue"
 *   />
 *
 * Props:
 *   icon        -> cualquier elemento React (svg, emoji, imagen)
 *   title       -> título corto
 *   description -> texto breve
 *   tone        -> 'blue' | 'green' | 'red' | 'yellow' | 'slate' | 'dark'
 *   hover       -> true/false para efecto de elevación
 */
export default function Ficha({
  icon,
  title,
  description,
  tone = 'blue',
  hover = true,
  className = '',
}) {
  const tones = {
    blue: 'bg-primary-100 text-primary-700',
    green: 'bg-green-100 text-green-700',
    red: 'bg-red-100 text-red-700',
    yellow: 'bg-yellow-100 text-yellow-700',
    slate: 'bg-slate-100 text-slate-700',
    dark: 'bg-slate-900 text-white',
  }

  return (
    <div
      className={clsx(
        'rounded-2xl bg-white p-8 text-center shadow-card ring-1 ring-slate-200',
        hover && 'transition-transform duration-300 hover:-translate-y-1 hover:shadow-float',
        className,
      )}
    >
      <div
        className={clsx(
          'mx-auto flex h-16 w-16 items-center justify-center rounded-2xl text-3xl',
          tones[tone],
        )}
      >
        {icon}
      </div>
      <h3 className="mt-5 text-lg font-bold text-slate-900">{title}</h3>
      {description && (
        <p className="mt-3 text-sm leading-relaxed text-slate-500">{description}</p>
      )}
    </div>
  )
}