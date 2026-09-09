/**
 * Testimonio: cita de un cliente con foto, nombre y rol.
 *
 * Uso:
 *   <Testimonial
 *     quote="El mejor servicio que hemos probado."
 *     name="Ana García"
 *     role="CEO, Startup"
 *     avatar="https://picsum.photos/64/64"
 *   />
 *
 * Props:
 *   quote  -> texto de la cita
 *   name   -> nombre de la persona
 *   role   -> cargo / empresa
 *   avatar -> URL de la foto (si no hay, muestra iniciales)
 *   rating -> 1-5 estrellas (opcional)
 */
export default function Testimonial({ quote, name, role, avatar, rating }) {
  const initials = name
    .split(' ')
    .map((word) => word[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()

  return (
    <figure className="flex h-full flex-col rounded-2xl bg-white p-8 shadow-card ring-1 ring-slate-200">
      {rating > 0 && (
        <div className="mb-4 text-primary-500" aria-label={`${rating} de 5 estrellas`}>
          {'★'.repeat(rating)}
          <span className="text-slate-300">{'★'.repeat(5 - rating)}</span>
        </div>
      )}
      <blockquote className="flex-1 text-lg leading-relaxed text-slate-700">
        “{quote}”
      </blockquote>
      <figcaption className="mt-6 flex items-center gap-4">
        {avatar ? (
          <img
            src={avatar}
            alt={name}
            className="h-12 w-12 rounded-full object-cover"
          />
        ) : (
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-sm font-bold text-primary-700">
            {initials}
          </span>
        )}
        <div>
          <p className="text-sm font-bold text-slate-900">{name}</p>
          {role && <p className="text-xs text-slate-500">{role}</p>}
        </div>
      </figcaption>
    </figure>
  )
}