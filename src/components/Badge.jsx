import { clsx } from '../lib/clsx.js'

/**
 * Etiqueta / insignia (badge). Ideal para destacar categorías,
 * estados o características.
 *
 * Uso:
 *   <Badge color="green">Nuevo</Badge>
 *
 * Props:
 *   color  -> 'blue' | 'green' | 'red' | 'yellow' | 'slate' | 'outline'
 *   size   -> 'sm' | 'md'
 */
export default function Badge({ children, color = 'blue', size = 'sm', className = '' }) {
  const colors = {
    blue: 'bg-primary-100 text-primary-700',
    green: 'bg-green-100 text-green-700',
    red: 'bg-red-100 text-red-700',
    yellow: 'bg-yellow-100 text-yellow-800',
    slate: 'bg-slate-100 text-slate-700',
    outline: 'border border-slate-300 text-slate-600 bg-white',
  }

  const sizes = {
    sm: 'px-2.5 py-0.5 text-xs',
    md: 'px-3 py-1 text-sm',
  }

  return (
    <span
      className={clsx(
        'inline-flex items-center gap-1 rounded-full font-semibold',
        colors[color],
        sizes[size],
        className,
      )}
    >
      {children}
    </span>
  )
}