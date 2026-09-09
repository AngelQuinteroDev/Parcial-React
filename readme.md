# React Base Components

> Base de componentes reutilizables para construir páginas web tradicionales con **React + Vite + Tailwind CSS**.

Incluye tarjetas, carruseles, fichas, títulos, navbar, footer, heroes, testimonios, botones, badges y más. Todo documentado y fácil de modificar.

---

## 🚀 Stack

| Tecnología | Para qué sirve |
|---|---|
| [React 19](https://react.dev) | Librería de componentes UI |
| [Vite](https://vite.dev) | Servidor de desarrollo y empaquetador (rápido) |
| [Tailwind CSS v4](https://tailwindcss.com) | Estilos con clases utilitarias, sin escribir CSS |

---

## 📦 Instalación y arranque

```bash
# 1. Instalar dependencias
npm install

# 2. Iniciar el servidor de desarrollo
npm run dev
```

Abre la URL que muestra la terminal (normalmente `http://localhost:5173`).
Cada cambio que guardes se refleja al instante (HMR).

### Scripts útiles

```bash
npm run dev      # servidor de desarrollo
npm run build    # build de producción (carpeta dist/)
npm run preview  # previsualizar el build
npm run lint     # revisar código con oxlint
```

---

## 📁 Estructura del proyecto

```
├── public/                  # archivos estáticos (favicon, imágenes)
├── src/
│   ├── components/          # 👈 TODOS los componentes reutilizables
│   │   ├── Badge.jsx
│   │   ├── Button.jsx
│   │   ├── Card.jsx
│   │   ├── Carousel.jsx
│   │   ├── CTA.jsx
│   │   ├── Ficha.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── PageHeader.jsx
│   │   ├── Section.jsx
│   │   ├── Testimonial.jsx
│   │   ├── Title.jsx
│   │   └── index.js         # exporta todo desde un solo lugar
│   ├── lib/
│   │   └── clsx.js          # utilidad para combinar clases
│   ├── App.jsx              # página de demostración (showcase)
│   ├── main.jsx             # punto de entrada de React
│   └── index.css            # 👈 configuración de Tailwind (@theme)
├── index.html               # HTML principal
└── vite.config.js           # configuración de Vite + Tailwind
```

---

## 🧩 Catálogo de componentes

| Componente | Descripción | Archivo |
|---|---|---|
| `Button` | Botón con variantes de color y tamaño | `src/components/Button.jsx` |
| `Badge` | Etiqueta / insignia | `src/components/Badge.jsx` |
| `Title` | Título de sección (kicker + título + subtítulo) | `src/components/Title.jsx` |
| `Section` | Contenedor de sección con fondo y padding | `src/components/Section.jsx` |
| `Card` | Tarjeta genérica (imagen, título, descripción, link) | `src/components/Card.jsx` |
| `Ficha` | Caja con icono + título + descripción | `src/components/Ficha.jsx` |
| `Carousel` | Carrusel con autoplay, flechas y puntos | `src/components/Carousel.jsx` |
| `Testimonial` | Testimonio de cliente | `src/components/Testimonial.jsx` |
| `Navbar` | Barra de navegación responsive | `src/components/Navbar.jsx` |
| `Hero` | Encabezado grande del inicio | `src/components/Hero.jsx` |
| `PageHeader` | Encabezado de páginas interiores | `src/components/PageHeader.jsx` |
| `CTA` | Banda de llamada a la acción | `src/components/CTA.jsx` |
| `Footer` | Pie de página con enlaces y redes | `src/components/Footer.jsx` |

### Reutilizar componentes (patrón clave para el examen)

Un array de datos + `.map()` + un solo componente:

```jsx
const products = [
  { title: 'Aurora', image: 'https://picsum.photos/seed/a/400/225', color: 'bg-primary-500' },
  { title: 'Coral',  image: 'https://picsum.photos/seed/b/400/225', color: 'bg-rose-500' },
]

{products.map((product) => (
  <Card key={product.title} image={product.image} color={product.color} title={product.title} />
))}
```

Cada objeto cambia la imagen y el color de la misma tarjeta. Guía completa en **[docs/05](docs/05-reutilizar-componentes.md)** y ejemplo vivo en la sección "Galería" de `src/App.jsx`.

### Importar componentes

```jsx
// Opción 1: importar todo desde un solo lugar
import { Card, Button, Navbar, Footer } from './components'

// Opción 2: importar un archivo directo
import Card from './components/Card.jsx'
```

---

## 📚 Documentación completa

La guía detallada está en la carpeta [`docs/`](docs/):

1. **[Crear un proyecto React desde cero](docs/01-crear-proyecto-desde-cero.md)** — pasos exactos para montar React + Vite + Tailwind desde 0 (para el examen).
2. **[Guía de Tailwind CSS](docs/02-tailwind-css.md)** — cómo funcionan las clases utilitarias, responsive y cómo personalizar el tema.
3. **[Catálogo de componentes](docs/03-componentes.md)** — props de cada componente con ejemplos de código.
4. **[Personalizar y crear componentes](docs/04-personalizar.md)** — cómo modificar el diseño, colores, tipografías y agregar componentes nuevos.
5. **[Reutilizar componentes](docs/05-reutilizar-componentes.md)** ⭐ — el patrón clave: un array de datos + `.map()` + un solo componente. Cambiar imagen y color por objeto, `key`, spread, composición y `tailwind-merge`. Imprescindible para el parcial.

---

## 🎨 Personalización rápida

**Cambiar el color de marca** → edita `--color-primary-*` en `src/index.css`:

```css
@theme {
  --color-primary-500: #8b5cf6; /* violeta en vez de azul */
}
```

**Cambiar el título / navbar / footer** → edita `src/App.jsx` o los props del componente.

**Quitar una sección** → borra el bloque en `src/App.jsx` (por ejemplo el `<Carousel />`).

> **Consejo:** todos los estilos están con clases de Tailwind dentro de cada componente. Modificar estilos = modificar las clases.

---

## 🎯 Para tu examen

- El componente de **carrusel** (`Carousel.jsx`) usa hooks (`useState`, `useEffect`, `useRef`, `useCallback`). ¡Es buen ejemplo de React con estado!
- El **Navbar** muestra cómo hacer un menú responsive con estado (`open`).
- Todos los componentes reciben **props** y tienen **valores por defecto** (`variant = 'primary'`), así puedes ver props en acción.
- Los estilos vienen de **Tailwind** (`className`), no de CSS aparte.
- **Reutilización**: la sección "Galería" de `src/App.jsx` repite una misma `<Card />` con `.map()` desde un array, cambiando imagen y color por objeto. Ese es el patrón que más vale la pena dominar → [docs/05](docs/05-reutilizar-componentes.md).

Repasa `src/App.jsx`: ahí está cada componente en uso real, como plantilla para armar cualquier página.