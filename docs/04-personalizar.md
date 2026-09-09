# 04 · Personalizar y crear componentes

Guía para modificar esta base a tu gusto y agregar componentes nuevos.

---

## 1. Cambiar el color de toda la web

Edita `src/index.css` → bloque `@theme`:

```css
@theme {
  --color-primary-500: #8b5cf6;   /* azul → violeta */
}
```

Esto cambia **todos** los `bg-primary-*`, `text-primary-*` de la app (botones, enlaces, badges...).

También puedes agregar más colores:

```css
@theme {
  --color-marca-500: #e11d48;
}
```

Y usarlo: `bg-marca-500`, `text-marca-500`, etc.

---

## 2. Cambiar la tipografía

Edita `src/index.css`:

```css
@theme {
  --font-sans: 'Montserrat', ui-sans-serif, system-ui, sans-serif;
  --font-display: 'Montserrat', ui-sans-serif, system-ui, sans-serif;
}
```

Luego agrega la fuente en `index.html` (Google Fonts):

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap" rel="stylesheet" />
```

---

## 3. Modificar un componente existente

Abre el archivo del componente, por ejemplo `src/components/Button.jsx`.

Estructura típica:

```jsx
// 1. Importa la utilidad para combinar clases
import { clsx } from '../lib/clsx.js'

// 2. Define el componente con sus props y valores por defecto
export default function Button({ variant = 'primary', size = 'md', children, ... }) {
  // 3. Mapa de estilos según el valor de la prop
  const variants = {
    primary: 'bg-primary-600 text-white hover:bg-primary-700',
    ...
  }

  // 4. Combina las clases
  return <button className={clsx('base...', variants[variant], sizes[size])}>{children}</button>
}
```

**Para cambiar un estilo**: edita las clases en el objeto `variants` (o el `className`).
**Para agregar una variante nueva**: añade una clave al objeto, ej. `purple: 'bg-purple-600 text-white'`.

---

## 4. Crear un componente nuevo

Ejemplo: un contador de estadísticas (`StatsBar`).

**Paso 1** — crea el archivo `src/components/StatsBar.jsx`:

```jsx
export default function StatsBar({ stats = [] }) {
  return (
    <dl className="grid grid-cols-2 gap-6 sm:grid-cols-4">
      {stats.map((stat) => (
        <div key={stat.label} className="text-center">
          <dt className="order-2 mt-2 text-sm text-slate-500">{stat.label}</dt>
          <dd className="text-4xl font-bold text-primary-600">{stat.value}</dd>
        </div>
      ))}
    </dl>
  )
}
```

**Paso 2** — expórtalo en `src/components/index.js`:

```js
export { default as StatsBar } from './StatsBar.jsx'
```

**Paso 3** — úsalo en `App.jsx`:

```jsx
import { StatsBar } from './components'

<StatsBar
  stats={[
    { label: 'Usuarios', value: '10K' },
    { label: 'Descargas', value: '50K' },
  ]}
/>
```

---

## 5. Agregar una página nueva

Si tu sitio tiene varias páginas, la opción simple es editar `App.jsx` por página y cambiar `npm run dev`... pero lo correcto es usar un **router**. Para el examen, lo más común:

**React Router** (rutas tipo `/`, `/nosotros`, `/contacto`):

```bash
npm install react-router-dom
```

```jsx
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

<BrowserRouter>
  <Routes>
    <Route path="/" element={<Inicio />} />
    <Route path="/nosotros" element={<Nosotros />} />
    <Route path="/contacto" element={<Contacto />} />
  </Routes>
</BrowserRouter>
```

> **Tip:** los componentes `PageHeader`, `Navbar` y `Footer` están hechos justo para esto: un header por página + el layout compartido.

---

## 6. Combinar y sobreescribir clases (clsx / className)

### Cómo mezcla clases esta base

Todos los componentes usan `clsx` (`src/lib/clsx.js`) para unir clases:

```js
import { clsx } from '../lib/clsx.js'

className={clsx(
  'bg-white ring-slate-200',      // estilos base del componente
  hover && 'shadow-lg',           // condicional
  className,                      // clases que envía el padre
)}
```

`clsx` ignora valores falsy (`false`, `undefined`, `''`) y une el resto con espacios.

### ⚠️ Cuándo `className` NO sobreescribe

Con `clsx` las clases solo se concatenan. En CSS **no gana siempre la última clase escrita**, así que esto puede NO funcionar:

```jsx
<Card className="bg-black" />   // puede no pisar el bg-white de la tarjeta
```

**Reglas prácticas:**

1. Para **cambiar** un estilo que ya usa el componente → edita sus clases internas o usa sus props (`variant`, `color`, `tone`, `size`).
2. Para **agregar** estilo que no colisiona (margen, ancho, animación) → usa `className`.
3. Si necesitas que `className` **sobreescriba** de verdad → instala `tailwind-merge`:

```bash
npm install tailwind-merge
```

```js
import { twMerge } from 'tailwind-merge'

className={twMerge('bg-white ring-slate-200', className)}
// bg-white + className="bg-black" → se queda SOLO con bg-black
```

`twMerge` detecta clases en conflicto y conserva la última.

---

## 7. ⚠️ Error clásico: clases de Tailwind "dinámicas"

Tailwind **no** genera clases que armes con variables:

```jsx
// ❌ MAL: `bg-${color}-500` no existe como texto, no se genera CSS
<Card color={`bg-${product.color}-500`} />

// ✅ BIEN: clase completa en el dato o en un mapa de variantes
<Card color={product.color} />          // product.color = 'bg-rose-500'
<Card color={tones[product.tone]} />    // tones = { rose: 'bg-rose-500', ... }
```

Siempre guarda la **clase completa** en los datos o usa un objeto "mapa de variantes" (como hacen `Button` y `Ficha`). Detalle ampliado en **[docs/05-reutilizar-componentes.md](05-reutilizar-componentes.md)**.

---

## 8. Tips para el examen

- **Los componentes = funciones que devuelven JSX.** Entender eso es el 80% del examen.
- **Props** son los parámetros: `<Card title="x" />` → dentro es `function Card({ title })`.
- **Estado** es `useState`. Ejemplo: el `open` del Navbar o el `current` del Carousel.
- **Efectos** son `useEffect`. Ejemplo: el autoplay del Carousel.
- **Cambiar colores = Tailwind.** Casi nunca tocas CSS; solo clases.
- **Reutilizar = datos + `.map()` + un componente.** La sección "Galería" de `App.jsx` es el ejemplo exacto del parcial.
- Practica copiando secciones de `App.jsx` y modificando texto/colores.