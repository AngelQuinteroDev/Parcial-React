import { clsx } from '../lib/clsx.js'

/**
 * Título de sección: etiqueta opcional (kicker), heading y subtítulo.
 * Da un encabezado consistente a cualquier sección de la página.
 *
 * Uso:
 *   <Title
 *     kicker="Sobre nosotros"
 *     title="Quiénes somos"
 *     subtitle="Una breve descripción de la empresa"
 *     align="center"
 *   />
 *
 * Props:
 *   kicker    -> texto pequeño sobre el título (opcional)
 *   title     -> el título principal
 *   subtitle  -> texto descriptivo (opcional)
 *   align     -> 'left' | 'center'
 *   as        -> etiqueta HTML del título ('h2' por defecto)
 */
export default function Title({
  kicker,
  title,
  subtitle,
  align = 'left',
  as: Tag = 'h2',
  className = '',
}) {
  const alignment = align === 'center' ? 'text-center mx-auto' : 'text-left'

  return (
    <div className={clsx('max-w-2xl', alignment, className)}>
      {kicker && (
        <p className="text-sm font-semibold uppercase tracking-widest text-primary-600">
          {kicker}
        </p>
      )}
      <Tag className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
        {title}
      </Tag>
      {subtitle && (
        <p className="mt-4 text-lg leading-relaxed text-slate-500">{subtitle}</p>
      )}
    </div>
  )
}