import { useState } from 'react'
import { clsx } from '../lib/clsx.js'

/**
 * Barra de navegación superior. Fija arriba, con menú hamburguesa
 * en pantallas pequeñas.
 *
 * Uso:
 *   <Navbar
 *     brand="MiWeb"
 *     links={[{ label: 'Inicio', href: '#' }, { label: 'Servicios', href: '#servicios' }]}
 *     cta={{ label: 'Contacto', href: '#contacto' }}
 *   />
 *
 * Props:
 *   brand -> texto o logo de la marca
 *   links -> array de { label, href }
 *   cta   -> botón de acción a la derecha { label, href } (opcional)
 *   sticky -> true/false: fija la barra al hacer scroll
 */
export default function Navbar({ brand = 'MiWeb', links = [], cta, sticky = true }) {
  const [open, setOpen] = useState(false)

  return (
    <header
      className={clsx(
        'z-50 border-b border-slate-200 bg-white/80 backdrop-blur',
        sticky && 'sticky top-0',
      )}
    >
      <nav className="mx-auto flex h-16 items-center justify-end px-400 sm:px-200 lg:px-10">
  
       <a href="#" className="text-xl font-bold sm:px-150">
        {brand}
       </a>

        {/* Enlaces: escritorio */}
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-sm font-medium text-slate-600 transition-colors px-3 hover:text-primary-600"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Acción derecha */}
        <div className="hidden md:block">
          {cta && (
            <a
              href={cta.href}
              className="inline-flex items-center rounded-xl bg-primary-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary-700"
            >
              {cta.label}
            </a>
          )}
        </div>

        {/* Botón hamburguesa: móvil */}
        <button
          type="button"
          aria-label="Abrir menú"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="inline-flex items-center justify-center rounded-lg p-2 text-slate-700 hover:bg-slate-100 md:hidden"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
            {open ? (
              <>
                <path d="M18 6L6 18" />
                <path d="M6 6l12 12" />
              </>
            ) : (
              <>
                <path d="M3 12h18" />
                <path d="M3 6h18" />
                <path d="M3 18h18" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {/* Menú desplegable: móvil */}
      <div
        className={clsx(
          'overflow-hidden border-t border-slate-200 bg-white transition-all duration-300 md:hidden',
          open ? 'max-h-96 opacity-100' : 'max-h-0 border-t-0 opacity-0',
        )}
      >
        <ul className="space-y-1 px-4 py-4">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 hover:text-primary-600"
              >
                {link.label}
              </a>
            </li>
          ))}
          {cta && (
            <li className="pt-2">
              <a
                href={cta.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl bg-primary-600 px-4 py-2 text-center text-sm font-semibold text-white hover:bg-primary-700"
              >
                {cta.label}
              </a>
            </li>
          )}
        </ul>
      </div>
    </header>
  )
}