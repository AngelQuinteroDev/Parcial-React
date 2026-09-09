import { clsx } from '../lib/clsx.js'

/**
 * Botón reutilizable con variantes de color y tamaño.
 *
 * Uso:
 *   <Button variant="primary" size="lg" onClick={() => console.log('hola')}>
 *     Enviar
 *   </Button>
 *
 * Props:
 *   variant  -> 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'
 *   size     -> 'sm' | 'md' | 'lg'
 *   fullWidth -> true/false (ocupa todo el ancho del contenedor)
 *   Todo lo demás (onClick, type, className, disabled...) se pasa al <button>.
 */
export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className = '',
  ...props
}) {
  const variants = {
    primary:
      'bg-primary-600 text-white hover:bg-primary-700 shadow-sm focus-visible:ring-primary-500',
    secondary:
      'bg-slate-800 text-white hover:bg-slate-900 shadow-sm focus-visible:ring-slate-500',
    outline:
      'border border-slate-300 text-slate-700 bg-white hover:border-slate-400 hover:bg-slate-50 focus-visible:ring-slate-400',
    ghost:
      'text-primary-600 hover:bg-primary-50 focus-visible:ring-primary-500',
    danger:
      'bg-red-600 text-white hover:bg-red-700 shadow-sm focus-visible:ring-red-500',
  }

  const sizes = {
    sm: 'px-3 py-1.5 text-sm rounded-lg',
    md: 'px-5 py-2.5 text-sm rounded-xl',
    lg: 'px-7 py-3.5 text-base rounded-xl',
  }

  return (
    <button
      type="button"
      className={clsx(
        'inline-flex items-center justify-center gap-2 font-semibold',
        'transition-colors duration-200',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
        'disabled:opacity-50 disabled:pointer-events-none',
        variants[variant],
        sizes[size],
        fullWidth && 'w-full',
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
}