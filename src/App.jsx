// ============================================================
//  Página de demostración (showcase)
//  Aquí se usa TODOS los componentes de la base para que puedas
//  verlos funcionando juntos. Edita esta página como quieras.
// ============================================================

import {
  Badge,
  Button,
  Card,
  Carousel,
  CTA,
  Ficha,
  Footer,
  Hero,
  Navbar,
  Section,
  Testimonial,
  Title,
} from './components'

// Datos de ejemplo (en un proyecto real vendrían de una API)
const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Tarjetas', href: '#tarjetas' },
  { label: 'Testimonios', href: '#testimonios' },
  { label: 'Contacto', href: '#contacto' },
]

// ============================================================
//  PATRÓN CLAVE PARA EL PARCIAL: REUTILIZAR COMPONENTES
//  ------------------------------------------------------------
//  Definimos UN array de objetos. Cada objeto representa los
//  datos de UNA tarjeta (imagen, título, color...).
//  Luego renderizamos LA MISMA <Card /> una vez por objeto con
//  .map(). Si agregas un objeto nuevo al array, aparece una
//  tarjeta nueva sin tocar el JSX.
//
//  Nota sobre el color: Tailwind necesita la clase COMPLETA en
//  el código fuente, así que guardamos 'bg-primary-500' (no
//  algo como `bg-${color}-500`). Detalle en docs/05.
// ============================================================
const products = [
  {
    image: 'https://picsum.photos/seed/aurora/400/225',
    alt: 'Plantilla Aurora',
    badge: 'Popular',
    color: 'bg-primary-500',
    title: 'Aurora',
    description:
      'Plantilla de página de inicio con acento azul. Ideal para startups y productos tech.',
    title1: '$ 12',
  },
  {
    image: 'https://picsum.photos/seed/coral/400/225',
    alt: 'Plantilla Coral',
    badge: 'Nuevo',
    color: 'bg-rose-500',
    title: 'Coral',
    description:
      'Tema cálido pensado para tiendas en línea y marcas de moda.',
      title1: '$ 12',
  },
  {
    image: 'https://picsum.photos/seed/esmeralda/400/225',
    alt: 'Plantilla Esmeralda',
    badge: 'Oferta',
    color: 'bg-emerald-500',
    title: 'Esmeralda',
    description:
      'Diseño fresco y natural, perfecto para negocios de salud y bienestar.',
      title1: '$ 12',
  },

    {
    image: 'https://picsum.photos/seed/esmeralda/400/225',
    alt: 'Plantilla Esmeralda',
    badge: 'Oferta',
    color: 'bg-emerald-500',
    title: 'Esmeralda',
    description:
      'Diseño fresco y natural, perfecto para negocios de salud y bienestar.',
      title1: '$ 12',
  },
    {
    image: 'https://picsum.photos/seed/esmeralda/400/225',
    alt: 'Plantilla Esmeralda',
    badge: 'Oferta',
    color: 'bg-emerald-500',
    title: 'Esmeralda',
    description:
      'Diseño fresco y natural, perfecto para negocios de salud y bienestar.',
      title1: '$ 12',
  },
]

const services = [
  {
    icon: '⚡',
    title: 'Rápido',
    description: 'Vite compila tu código casi al instante con HMR.',
  },
  {
    icon: '🧩',
    title: 'Reutilizable',
    description: 'Componentes sueltos que puedes combinar y modificar.',
  },
  {
    icon: '🎨',
    title: 'Tailwind',
    description: 'Estilos utilitarios sin escribir CSS desde cero.',
  },
]

function App() {
  return (
    <>
      <Navbar
        brand="MiWeb"
        links={navLinks}
        cta={{ label: 'Empezar', href: '#contacto' }}
      />

      <Hero
        id="inicio"
        kicker="Bienvenido a MiWeb"
        title={
          <>
            Una base de componentes para{' '}
            <span className="text-primary-600">React + Tailwind</span>
          </>
        }
        subtitle="Todas las piezas que necesitas para construir una página web tradicional: tarjetas, carruseles, fichas, navbars, footers y más. Copia, pega y personaliza."
        primaryAction={{ label: 'Ver componentes', href: '#servicios' }}
        secondaryAction={{ label: 'Leer docs', href: '#tarjetas' }}
        image="https://picsum.photos/seed/reactbase/600/500"
      />

      {/* ---------- Tarjetas: patrón de reutilización ---------- */}
      <Section id="tarjetas">

        {/* Una sola <Card /> repetida gracias al array `products`.
            Agrega un objeto nuevo al array y aparecerá otra tarjeta. */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <Card
              key={product.title}
              image={product.image}
              alt={product.alt}
              badge={product.badge}
              color={product.color}
              title={product.title}
              description={product.description}
              title1={product.title1}
            />
          ))}
        </div>

      <Hero
        id="inicio"
        kicker="Bienvenido a MiWeb"
        title={
          <>
            Una base de componentes para{' '}
            <span className="text-primary-600">React + Tailwind</span>
          </>
        }
        subtitle="Todas las piezas que necesitas para construir una página web tradicional: tarjetas, carruseles, fichas, navbars, footers y más. Copia, pega y personaliza."
        primaryAction={{ label: 'Ver componentes', href: '#servicios' }}
        secondaryAction={{ label: 'Leer docs', href: '#tarjetas' }}
        image="https://picsum.photos/seed/reactbase/600/500"
      />
      </Section>
    </>
  )
}

export default App