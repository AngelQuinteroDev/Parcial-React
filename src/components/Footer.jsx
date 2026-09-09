/**
 * Pie de página (footer). Cuatro columnas: marca, enlaces útiles,
 * contacto y redes sociales.
 *
 * Uso:
 *   <Footer
 *     brand="MiWeb"
 *     description="Breve descripción de la marca."
 *     columns={[
 *       { title: 'Producto', links: [{ label: 'Funciones', href: '#' }] },
 *       { title: 'Compañía', links: [{ label: 'Nosotros', href: '#' }] },
 *     ]}
 *     socials={[
 *       { label: 'GitHub', href: 'https://github.com' },
 *       { label: 'Twitter', href: 'https://x.com' },
 *     ]}
 *     copyright="© 2026 MiWeb. Todos los derechos reservados."
 *   />
 *
 * Props:
 *   brand       -> nombre de la marca
 *   description -> texto bajo la marca
 *   columns     -> array de { title, links: [{ label, href }] }
 *   socials     -> array de { label, href }
 *   copyright   -> texto del copyright
 */
export default function Footer({
  brand = 'MiWeb',
  description,
  columns = [],
  socials = [],
  copyright = '© 2026. Todos los derechos reservados.',
}) {
  return (
    <footer className="bg-slate-900 text-slate-400">
      <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-4">
          {/* Marca */}
          <div className="lg:col-span-2 lg:max-w-sm">
            <p className="text-xl font-bold tracking-tight text-white">{brand}</p>
            {description && <p className="mt-4 text-sm leading-relaxed">{description}</p>}
            {socials.length > 0 && (
              <div className="mt-6 flex gap-3">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="inline-flex items-center rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-primary-600"
                  >
                    {social.label}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Columnas de enlaces */}
          {columns.map((column) => (
            <div key={column.title}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
                {column.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm transition-colors hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center text-xs text-slate-500">
          {copyright}
        </div>
      </div>
    </footer>
  )
}