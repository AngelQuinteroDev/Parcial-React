/**
 * Banda de llamada a la acción (CTA). Banner ancho con texto
 * y botones. Muy común al final de las landing pages.
 *
 * Uso:
 *   <CTA
 *     title="¿Listo para empezar?"
 *     subtitle="Regístrate gratis y crea tu primera página hoy."
 *     primaryAction={{ label: 'Comenzar', href: '#' }}
 *     secondaryAction={{ label: 'Ver precios', href: '#' }}
 *   />
 *
 * Props:
 *   title    -> texto grande del banner
 *   subtitle -> texto secundario
 *   primaryAction   -> { label, href }
 *   secondaryAction -> { label, href } (opcional)
 */
export default function CTA({ title, subtitle, primaryAction, secondaryAction }) {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary-700 to-primary-500 px-8 py-16 text-center text-white shadow-float">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
          {subtitle && (
            <p className="mx-auto mt-4 max-w-xl text-lg text-primary-100">{subtitle}</p>
          )}
          {(primaryAction || secondaryAction) && (
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              {primaryAction && (
                <a
                  href={primaryAction.href}
                  className="inline-flex items-center rounded-xl bg-white px-6 py-3 text-sm font-semibold text-primary-700 shadow-sm transition-colors hover:bg-primary-50"
                >
                  {primaryAction.label}
                </a>
              )}
              {secondaryAction && (
                <a
                  href={secondaryAction.href}
                  className="inline-flex items-center rounded-xl border border-white/40 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                >
                  {secondaryAction.label}
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}