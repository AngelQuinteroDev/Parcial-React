# 03 · Catálogo de componentes

Todos los componentes están en `src/components/` y se pueden importar así:

```jsx
import { Card, Button, Navbar } from './components'
// o individualmente
import Card from './components/Card.jsx'
```

Cada componente recibe **props** (atributos) y tiene **valores por defecto**, así que casi siempre basta con escribir `<Card />` y ya funciona.

---

## Button — botón

```jsx
<Button variant="primary" size="md" onClick={() => console.log('click')}>
  Enviar
</Button>
```

| Prop | Valores | Por defecto |
|---|---|---|
| `variant` | `primary` · `secondary` · `outline` · `ghost` · `danger` | `primary` |
| `size` | `sm` · `md` · `lg` | `md` |
| `fullWidth` | `true` · `false` | `false` |
| `className` | clases extra | `''` |
| (resto) | `onClick`, `disabled`, `type`... | — |

Se puede usar `<Button>` o un `<a>` con clases de botón (según lo que necesites).

---

## Badge — insignia

```jsx
<Badge color="green">Nuevo</Badge>
```

| Prop | Valores | Por defecto |
|---|---|---|
| `color` | `blue` · `green` · `red` · `yellow` · `slate` · `outline` | `blue` |
| `size` | `sm` · `md` | `sm` |

---

## Title — título de sección

```jsx
<Title
  kicker="Servicios"
  title="Qué hacemos"
  subtitle="Descripción de la sección"
  align="center"
/>
```

| Prop | Descripción | Por defecto |
|---|---|---|
| `kicker` | texto pequeño sobre el título | `undefined` |
| `title` | título principal | — |
| `subtitle` | párrafo de apoyo | `undefined` |
| `align` | `left` · `center` | `left` |
| `as` | etiqueta HTML (`h1`, `h3`...) | `h2` |

---

## Section — contenedor de sección

```jsx
<Section id="servicios" bg="gray">
  {/* contenido */}
</Section>
```

| Prop | Valores | Por defecto |
|---|---|---|
| `id` | id para anclas | — |
| `bg` | `white` · `gray` · `dark` | `white` |
| `padding` | `default` · `compact` · `none` | `default` |

---

## Card — tarjeta genérica

```jsx
<Card
  image="https://picsum.photos/400/225"
  alt="Foto"
  badge="Nuevo"
  color="bg-primary-500"
  title="Mi producto"
  description="Descripción breve del producto."
  link={{ href: '#', text: 'Ver más' }}
  footer={<Button size="sm">Comprar</Button>}
/>
```

| Prop | Descripción | Por defecto |
|---|---|---|
| `image` | URL de la imagen superior | — |
| `alt` | texto alternativo | `''` |
| `badge` | insignia sobre la imagen | — |
| `color` | **color de acento** (barra superior). Pasa la clase completa, ej. `'bg-rose-500'` (ver docs/05) | — |
| `title` | título | — |
| `description` | texto del cuerpo | — |
| `children` | contenido extra (JSX) | — |
| `link` | `{ href, text }` enlace al pie | — |
| `footer` | contenido al pie (botón, etc.) | — |
| `hover` | `true`/`false` efecto al pasar el mouse | `true` |

> 💡 **Reutilizar cards:** define un array de objetos (con su `image`, `color`, `title`...) y repite esta misma tarjeta con `.map()`. Guía completa en **[docs/05-reutilizar-componentes.md](05-reutilizar-componentes.md)**.

---

## Ficha — caja con icono

```jsx
<Ficha icon="⚡" title="Rápido" description="Carga instantánea." tone="blue" />
```

| Prop | Descripción | Por defecto |
|---|---|---|
| `icon` | cualquier elemento (svg, emoji, imagen) | — |
| `title` | título corto | — |
| `description` | texto breve | — |
| `tone` | `blue` · `green` · `red` · `yellow` · `slate` · `dark` | `blue` |
| `hover` | efecto de elevación | `true` |

---

## Carousel — carrusel

```jsx
<Carousel
  autoplay
  interval={4000}
  items={[
    <Card title="Slide 1" />,
    <Card title="Slide 2" />,
    <Card title="Slide 3" />,
  ]}
/>
```

| Prop | Descripción | Por defecto |
|---|---|---|
| `items` | array de diapositivas (cualquier JSX) | `[]` |
| `autoplay` | avanza solo | `false` |
| `interval` | ms entre slides | `5000` |
| `showArrows` | botones ◀ ▶ | `true` |
| `showDots` | puntos indicadores | `true` |

El carrusel **pausa el autoplay** al pasar el mouse encima. Internamente usa
`useState`, `useEffect`, `useRef` y `useCallback`.

---

## Testimonial — opinión de cliente

```jsx
<Testimonial
  quote="Excelente servicio."
  name="Ana García"
  role="CEO, Startup"
  avatar="https://picsum.photos/64/64"
  rating={5}
/>
```

| Prop | Descripción | Por defecto |
|---|---|---|
| `quote` | texto de la cita | — |
| `name` | nombre | — |
| `role` | cargo / empresa | — |
| `avatar` | URL de la foto | — (usa iniciales) |
| `rating` | estrellas 1–5 | `0` (sin estrellas) |

---

## Navbar — barra de navegación

```jsx
<Navbar
  brand="MiWeb"
  links={[
    { label: 'Inicio', href: '#inicio' },
    { label: 'Servicios', href: '#servicios' },
  ]}
  cta={{ label: 'Contacto', href: '#contacto' }}
/>
```

| Prop | Descripción | Por defecto |
|---|---|---|
| `brand` | texto o logo | `'MiWeb'` |
| `links` | array de `{ label, href }` | `[]` |
| `cta` | botón de acción `{ label, href }` | — |
| `sticky` | queda fija al hacer scroll | `true` |

En móvil muestra menú hamburguesa (usa `useState`).

---

## Hero — encabezado de inicio

```jsx
<Hero
  kicker="Bienvenido"
  title={<>Crea sitios <span className="text-primary-600">modernos</span></>}
  subtitle="Descripción atractiva."
  primaryAction={{ label: 'Empezar', href: '#servicios' }}
  secondaryAction={{ label: 'Saber más', href: '#nosotros' }}
  image="https://picsum.photos/600/500"
  badge="✨ Nuevo"
/>
```

| Prop | Descripción |
|---|---|
| `kicker` | etiqueta sobre el título |
| `title` | título grande (acepta JSX con `<span>`) |
| `subtitle` | párrafo descriptivo |
| `primaryAction` | `{ label, href }` botón principal |
| `secondaryAction` | `{ label, href }` botón secundario |
| `image` | imagen derecha |
| `badge` | insignia flotante sobre la imagen |
| `bg` | `white` · `gray` · `dark` |

---

## PageHeader — encabezado de página interior

```jsx
<PageHeader title="Sobre nosotros" subtitle="Conoce nuestra historia." bg="gray" />
```

| Prop | Descripción | Por defecto |
|---|---|---|
| `title` | título de la página | — |
| `subtitle` | descripción | — |
| `bg` | `white` · `gray` · `dark` | `white` |
| `compact` | reduce el alto | `false` |

---

## CTA — llamada a la acción

```jsx
<CTA
  title="¿Listo para empezar?"
  subtitle="Regístrate gratis."
  primaryAction={{ label: 'Comenzar', href: '#' }}
  secondaryAction={{ label: 'Ver precios', href: '#' }}
/>
```

| Prop | Descripción |
|---|---|
| `title` | texto grande |
| `subtitle` | texto secundario |
| `primaryAction` | `{ label, href }` botón principal |
| `secondaryAction` | `{ label, href }` botón opcional |

---

## Footer — pie de página

```jsx
<Footer
  brand="MiWeb"
  description="Descripción breve."
  columns={[
    { title: 'Producto', links: [{ label: 'Funciones', href: '#' }] },
  ]}
  socials={[{ label: 'GitHub', href: 'https://github.com' }]}
  copyright="© 2026 MiWeb"
/>
```

| Prop | Descripción | Por defecto |
|---|---|---|
| `brand` | nombre de la marca | `'MiWeb'` |
| `description` | texto bajo la marca | — |
| `columns` | array de `{ title, links }` | `[]` |
| `socials` | array de `{ label, href }` | `[]` |
| `copyright` | texto legal | genérico |

---

## Cómo armar una página

El orden típico de una página web:

```jsx
<>
  <Navbar links={[...]} />          {/* 1. navegación */}
  <Hero ... />                      {/* 2. portada */}
  <Section id="servicios" bg="gray"> {/* 3. secciones */}
    <Title ... />
    <div className="grid gap-6 md:grid-cols-3">
      <Ficha ... />
      <Ficha ... />
      <Ficha ... />
    </div>
  </Section>
  <Section id="galeria">
    <div className="grid gap-6 md:grid-cols-3">
      <Card ... />
      <Card ... />
      <Card ... />
    </div>
  </Section>
  <CTA ... />                       {/* 4. llamada a la acción */}
  <Footer ... />                    {/* 5. pie */}
</>
```

Mira `src/App.jsx`: es exactamente este patrón, ya armado.