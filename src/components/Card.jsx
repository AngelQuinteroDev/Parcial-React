import { clsx } from '../lib/clsx.js'

/**
 * Tarjeta genérica. Componente más usado de la web: muestra
 * imagen, título, descripción y un enlace/acción.
 *
 * Uso:
 *   <Card
 *     image="https://picsum.photos/400/200"
 *     alt="Foto de ejemplo"
 *     title="Mi tarjeta"
 *     description="Descripción breve del contenido."
 *     badge="Nuevo"
 *     link={{ href: '#', text: 'Ver más' }}
 *   />
 *
 * Props:
 *   image       -> URL de la imagen superior (opcional)
 *   alt         -> texto alternativo de la imagen
 *   badge       -> texto de la insignia (opcional)
 *   title       -> título de la tarjeta
 *   description -> texto del cuerpo
 *   color       -> clases del color de acento (barra superior).
 *                  Ej: 'bg-primary-500', 'bg-rose-500' (opcional).
 *                  Pasa SIEMPRE la clase completa (ver docs/05).
 *   children    -> contenido extra (reemplaza a description si va)
 *   link        -> { href, text } enlace al final
 *   footer      -> cualquier contenido al pie (ej. <Button>)
 *   hover       -> true/false para efecto hover de elevación
 */
export default function Card({
  image,
  alt = '',
  badge,
  title,
  title1,
  description,
  children,
  link,
  footer,
  color,
  hover = true,
  className = '',
}) {
  return (
    <article
      className={clsx(
        'group flex flex-col overflow-hidden rounded-2xl bg-white shadow-card ring-1 ring-slate-200',
        hover && 'transition-shadow duration-300 hover:shadow-float',
        className,
      )}
    >
      {color && <div aria-hidden className={clsx('h-1.5 w-full shrink-0', color)} />}
      {image && (
        <div className="relative aspect-video overflow-hidden">
          <img
            src={image}
            alt={alt}
            loading="lazy"
            className={clsx(
              'h-full w-full object-cover',
              hover && 'transition-transform duration-300 group-hover:scale-105',
            )}
          />
          {badge && (
            <span className="absolute left-3 top-3 inline-flex items-center rounded-full bg-white/90 px-2.5 py-0.5 text-xs font-semibold text-slate-800 backdrop-blur">
              {badge}
            </span>
          )}
        </div>
      )}

      <div className="flex flex-1 flex-col gap-3 p-6">
        <h3 className="text-lg font-bold text-slate-900">{title}</h3>

        {description && (
          <p className="flex-1 text-sm leading-relaxed text-slate-500">
            {description}
          </p>
        )}
          <h3 className="text-lg font-semibold text-slate-900">{title1}</h3>

        {children}

        {link && (
          <a
            href={link.href}
            className="mt-auto inline-flex items-center gap-1 text-sm font-semibold text-primary-600 hover:text-primary-700"
          >
            {link.text}
            <span aria-hidden>→</span>
          </a>
        )}

        {footer && <div className="mt-4">{footer}</div>}
      </div>
    </article>
  )
}