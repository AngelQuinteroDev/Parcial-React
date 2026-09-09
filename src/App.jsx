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
  { label: 'Servicios', href: '#servicios' },
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
  },
  {
    image: 'https://picsum.photos/seed/coral/400/225',
    alt: 'Plantilla Coral',
    badge: 'Nuevo',
    color: 'bg-rose-500',
    title: 'Coral',
    description:
      'Tema cálido pensado para tiendas en línea y marcas de moda.',
  },
  {
    image: 'https://picsum.photos/seed/esmeralda/400/225',
    alt: 'Plantilla Esmeralda',
    badge: 'Oferta',
    color: 'bg-emerald-500',
    title: 'Esmeralda',
    description:
      'Diseño fresco y natural, perfecto para negocios de salud y bienestar.',
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
      {/* ---------- Navbar ---------- */}
      <Navbar
        brand="MiWeb"
        links={navLinks}
        cta={{ label: 'Empezar', href: '#contacto' }}
      />

      {/* ---------- Hero ---------- */}
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
        badge="✨ 100% reutilizable"
      />

      {/* ---------- Servicios con Fichas ---------- */}
      <Section id="servicios" bg="gray">
        <Title
          kicker="Servicios"
          title="Componentes listos para usar"
          subtitle="Cada ficha es un componente <Ficha />. Combínalos para crear secciones de características."
          align="center"
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Ficha key={service.title} {...service} />
          ))}
        </div>
      </Section>

      {/* ---------- Tarjetas: patrón de reutilización ---------- */}
      <Section id="tarjetas">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Title
            kicker="Galería"
            title="La misma <Card />, datos distintos"
            subtitle="Una sola tarjeta renderizada con .map() sobre un array. Cada objeto cambia imagen, texto y color de acento."
          />
          <div className="flex gap-3">
            <Button variant="outline">Botón outline</Button>
            <Button variant="danger">Botón danger</Button>
            <Badge color="green">Ejemplo de Badge</Badge>
          </div>
        </div>

        {/* Una sola <Card /> repetida gracias al array `products`.
            Agrega un objeto nuevo al array y aparecerá otra tarjeta. */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <Card
              key={product.title}
              image={product.image}
              alt={product.alt}
              badge={product.badge}
              color={product.color}
              title={product.title}
              description={product.description}
              link={{ href: '#', text: 'Ver detalles' }}
              footer={
                <Button size="sm" variant="secondary">
                  Agregar
                </Button>
              }
            />
          ))}
        </div>

        {/* Mismo patrón con <Ficha />: cambia icono, título y tone por objeto. */}
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Ficha
              key={service.title}
              {...service}
              tone={['blue', 'green', 'red'][index]}
            />
          ))}
        </div>
      </Section>

      {/* ---------- Carrusel ---------- */}
      <Section id="carrusel" bg="gray">
        <Title
          kicker="Slider"
          title="Carrusel con <Carousel />"
          subtitle="Pasa el mouse encima para pausar el autoplay. Usa las flechas o los puntos para navegar."
          align="center"
        />
        <div className="mx-auto mt-12 max-w-4xl">
          <Carousel
            autoplay
            interval={4000}
            items={[1, 2, 3, 4].map((n) => (
              <div
                key={n}
                className="flex h-72 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-600 to-primary-400 text-4xl font-bold text-white"
              >
                Diapositiva {n}
              </div>
            ))}
          />
        </div>
      </Section>

      {/* ---------- Testimonios ---------- */}
      <Section id="testimonios">
        <Title
          kicker="Opiniones"
          title="Testimonios con <Testimonial />"
          align="center"
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <Testimonial
            quote="Usar esta base me ahorró horas de trabajo. Todo listo para personalizar."
            name="Ana García"
            role="Desarrolladora frontend"
            rating={5}
          />
          <Testimonial
            quote="La documentación es clara. Ideal para entender React y Tailwind desde cero."
            name="Luis Pérez"
            role="Estudiante de ingeniería"
            avatar="https://picsum.photos/seed/luis/64/64"
            rating={5}
          />
          <Testimonial
            quote="Componentes simples, bien hechos y fáciles de modificar. Muy recomendado."
            name="María López"
            role="Diseñadora UI"
            rating={4}
          />
        </div>
      </Section>

      {/* ---------- CTA ---------- */}
      <CTA
        title="¿Listo para construir tu página?"
        subtitle="Copia esta base, edita los componentes y crea tu propio sitio con React y Tailwind."
        primaryAction={{ label: 'Empezar ahora', href: '#inicio' }}
        secondaryAction={{ label: 'Ver documentación', href: '#tarjetas' }}
      />

      {/* ---------- Footer ---------- */}
      <Footer
        brand="MiWeb"
        description="Base de componentes React + Vite + Tailwind para construir sitios web tradicionales."
        columns={[
          {
            title: 'Producto',
            links: [
              { label: 'Componentes', href: '#servicios' },
              { label: 'Carrusel', href: '#carrusel' },
              { label: 'Testimonios', href: '#testimonios' },
            ],
          },
          {
            title: 'Recursos',
            links: [
              { label: 'Documentación', href: 'https://tailwindcss.com' },
              { label: 'React', href: 'https://react.dev' },
              { label: 'Vite', href: 'https://vite.dev' },
            ],
          },
        ]}
        socials={[
          { label: 'GitHub', href: 'https://github.com' },
          { label: 'X', href: 'https://x.com' },
        ]}
      />
    </>
  )
}

export default App