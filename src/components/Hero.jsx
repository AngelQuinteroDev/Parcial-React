import { clsx } from '../lib/clsx.js'

/**
 * Hero: encabezado grande de la página de inicio.
 * Texto a la izquierda y una imagen/visual a la derecha.
 *
 * Uso:
 *   <Hero
 *     kicker="Bienvenido"
 *     title="Construye páginas web modernas"
 *     subtitle="Una descripción breve y atractiva."
 *     primaryAction={{ label: 'Empezar', href: '#servicios' }}
 *     secondaryAction={{ label: 'Saber más', href: '#nosotros' }}
 *     image="https://picsum.photos/600/500"
 *     badge="✨ Nuevo"
 *   />
 *
 * Props:
 *   kicker   -> pequeña etiqueta sobre el título
 *   title    -> título grande (acepta <span className="text-primary-600">…</span>)
 *   subtitle -> párrafo descriptivo
 *   primaryAction   -> { label, href } botón principal
 *   secondaryAction -> { label, href } botón secundario
 *   image    -> URL de la imagen derecha
 *   badge    -> insignia flotante sobre la imagen (opcional)
 *   bg       -> 'white' | 'gray' | 'dark'
 */
export default function Hero({
  kicker,
  title,
  subtitle,
  primaryAction,
  secondaryAction,
  image,
  badge,
  bg = 'white',
}) {
  const dark = bg === 'dark'

  return (
    <section className={clsx(dark ? 'bg-slate-900' : 'bg-white')}>
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-28">
        {/* Columna de texto */}
        <div className="animate-fade-in">
          {kicker && (
            <p className="text-sm font-semibold uppercase tracking-widest text-primary-500">
              {kicker}
            </p>
          )}
          <h1
            className={clsx(
              'mt-3 text-4xl font-bold tracking-tight sm:text-5xl',
              dark ? 'text-white' : 'text-slate-900',
            )}
          >
            {title}
          </h1>
          {subtitle && (
            <p
              className={clsx(
                'mt-5 max-w-xl text-lg leading-relaxed',
                dark ? 'text-slate-400' : 'text-slate-600',
              )}
            >
              {subtitle}
            </p>
          )}

          {(primaryAction || secondaryAction) && (
            <div className="mt-8 flex flex-wrap gap-4">
              {primaryAction && (
                <a
                  href={primaryAction.href}
                  className="inline-flex items-center rounded-xl bg-primary-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-primary-700"
                >
                  {primaryAction.label}
                </a>
              )}
              {secondaryAction && (
                <a
                  href={secondaryAction.href}
                  className="inline-flex items-center rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50"
                >
                  {secondaryAction.label}
                </a>
              )}
            </div>
          )}
        </div>

        {/* Columna de imagen */}
        {image && (
          <div className="relative animate-float">
            <img
              src={image}
              alt=""
              className="mx-auto w-full max-w-lg rounded-3xl shadow-float"
            />
            {badge && (
              <div className="absolute -left-4 top-6 rounded-2xl bg-white px-4 py-2 text-sm font-semibold text-slate-800 shadow-float">
                {badge}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  )
}