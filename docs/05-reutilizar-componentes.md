# 05 · Reutilizar componentes (el patrón más importante)

> **Si tienes que recordar una sola cosa para el parcial, es esta:**
> define un array de datos → recórrelo con `.map()` → renderiza **un solo componente** por cada objeto.

Reutilizar evita copiar y pegar el mismo JSX 20 veces. Escribes el componente **una vez** y los datos deciden cuántas veces aparece y con qué valores.

---

## 1. El patrón en 3 pasos

### Paso 1 — Los datos (un array de objetos)

```js
const products = [
  { image: 'foto-a.jpg', title: 'Aurora', color: 'bg-primary-500' },
  { image: 'foto-b.jpg', title: 'Coral',  color: 'bg-rose-500' },
  { image: 'foto-c.jpg', title: 'Esmeralda', color: 'bg-emerald-500' },
]
```

Cada objeto = una instancia del componente. Las llaves del objeto son los **props**.

### Paso 2 — El JSX (una sola vez)

```jsx
{products.map((product) => (
  <Card
    key={product.title}
    image={product.image}
    title={product.title}
    color={product.color}
  />
))}
```

### Paso 3 — Resultado

El mismo `<Card />` se repite 3 veces, cada una con su imagen y color.

**Ventaja clave:** si agregas un 4º objeto al array, aparece una 4ª tarjeta **sin tocar el JSX**. Esa es la idea del parcial.

---

## 2. Cambiar la imagen por objeto

La imagen ya cambia porque cada objeto tiene su propia `image`:

```js
const products = [
  { image: 'https://picsum.photos/seed/aurora/400/225', title: 'Aurora' },
  { image: 'https://picsum.photos/seed/coral/400/225', title: 'Coral' },
]
```

> **Tip:** `https://picsum.photos/seed/X/400/225` devuelve una imagen distinta por cada `X`. Úsalo para practicar sin tener imágenes reales.

---

## 3. Cambiar el color por objeto ⚠️

Así lo **NO** hagas:

```jsx
{/* ❌ MAL: Tailwind NO genera clases dinámicas */}
<Card color={`bg-${product.color}-500`} />
```

Tailwind escanea el código buscando **clases completas**. `bg-${...}-500` no existe como texto literal, así que el CSS nunca se genera y la tarjeta sale sin color.

Así **SÍ** se hace — guarda la clase completa en el objeto:

```js
const products = [
  { color: 'bg-primary-500' },   // ✅ clase completa
  { color: 'bg-rose-500' },
  { color: 'bg-emerald-500' },
]
```

```jsx
<Card color={product.color} />
```

### El truco "mapa de variantes" (recomendado)

Lo mismo aplica a cualquier estilo. En vez de clases sueltas, define un objeto que asocie una **variante** (un nombre simple) con sus clases:

```js
const tones = {
  blue:   'bg-primary-500',
  rose:   'bg-rose-500',
  emerald: 'bg-emerald-500',
}

const products = [
  { tone: 'blue' },
  { tone: 'rose' },
  { tone: 'emerald' },
]

// en el JSX:
<Card color={tones[product.tone]} />
```

**Ventaja:** los datos solo guardan nombres simples (`tone: 'rose'`), y el diseño vive en un solo lugar (`tones`). Este es exactamente el patrón interno que usan `Button` y `Ficha` (objetos `variants` / `tones`).

---

## 4. Propagar props con spread `{...objeto}`

Si el objeto del array usa **los mismos nombres** que los props, puedes pasarlos todos a la vez:

```js
const services = [
  { icon: '⚡', title: 'Rápido', description: 'Carga instantánea.' },
  { icon: '🧩', title: 'Modular', description: 'Componentes sueltos.' },
]
```

```jsx
{services.map((service) => (
  <Ficha key={service.title} {...service} />
))}
```

`{...service}` equivale a escribir `icon={service.icon} title={service.title} description={service.description}` a mano. Más corto y menos propenso a errores.

> Cuidado: `key` siempre se escribe **aparte**, nunca dentro del spread.

---

## 5. La prop `key` (¿por qué siempre? ❓)

React necesita identificar cada elemento repetido:

```jsx
{products.map((product) => (
  <Card key={product.title} {...product} />
))}
```

- Debe ser **única** por elemento.
- Usa un `id` o `title` (algo que nunca se repita).
- Si no pones `key`, React te mostrará una advertencia y tendrás bugs al borrar/reordenar elementos.

---

## 6. Variar el contenido interno (children)

A veces cada tarjeta necesita algo distinto dentro (un chip, un precio, un enlace). Usa `children`:

```jsx
const products = [
  { title: 'Plan Básico', price: '$9', extra: <Badge color="green">Incluye 1 proyecto</Badge> },
  { title: 'Plan Pro',    price: '$29', extra: <Badge color="blue">Incluye 5 proyectos</Badge> },
]
```

```jsx
{products.map((product) => (
  <Card key={product.title} title={product.title} footer={<Button>Elegir</Button>}>
    <p className="text-2xl font-bold text-slate-900">{product.price}</p>
    {product.extra}
  </Card>
))}
```

---

## 7. Composición: componentes que usan otros

Puedes crear un componente **compuesto** que encapsule el patrón completo. Por ejemplo una grilla de tarjetas:

```jsx
// src/components/ProductGrid.jsx
import Card from './Card.jsx'

export default function ProductGrid({ products = [] }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <Card key={product.title} {...product} />
      ))}
    </div>
  )
}
```

```jsx
// en App.jsx
<ProductGrid products={products} />
```

Ahora `ProductGrid` también es reutilizable: le pasas el array que quieras y ella se encarga del `map`.

---

## 8. Combinar clases cuando personalizas

Para mezclar clases de Tailwind de forma segura esta base usa la utilidad `clsx` (`src/lib/clsx.js`):

```js
import { clsx } from '../lib/clsx.js'

clsx('bg-white', hover && 'shadow-lg', className)  // une todo lo que sea truthy
```

### ⚠️ Ojo: las clases agregadas por `className` NO siempre ganan

Con `clsx` (simple concatenación) el `className` que pasa el padre se agrega al final, pero **en CSS no siempre gana la última clase escrita** (depende del orden en el archivo generado). Ejemplo:

```jsx
<Card className="bg-black" />  // puede NO pisar el bg-white de la tarjeta
```

**Reglas prácticas:**
- Para cambiar estilo → edita las clases **dentro** del componente o usa sus props (`variant`, `color`, `tone`).
- Usa `className` para **agregar** estilo (margen, alineación) que no colisiona con el del componente.
- Si de verdad necesitas que `className` sobreescriba, instala `tailwind-merge`:

```bash
npm install tailwind-merge
```

```js
import { twMerge } from 'tailwind-merge'
// y en el componente:
className={twMerge('bg-white ring-slate-200', className)}
```

`twMerge` detecta clases en conflicto y conserva solo la última.

---

## 9. Receta completa para el parcial

Arma una grilla de tarjetas de **3 pasos**, lista para copiar:

```jsx
import { Badge, Button, Card } from './components'

// 1) DATOS
const products = [
  { id: 1, image: 'https://picsum.photos/seed/a/400/225', title: 'Aurora', color: 'bg-primary-500', badge: 'Popular' },
  { id: 2, image: 'https://picsum.photos/seed/b/400/225', title: 'Coral', color: 'bg-rose-500', badge: 'Nuevo' },
  { id: 3, image: 'https://picsum.photos/seed/c/400/225', title: 'Esmeralda', color: 'bg-emerald-500', badge: 'Oferta' },
]

// 2) COMPONENTE que recibe los datos
export default function ProductGrid({ products }) {
  // 3) MAP: una <Card /> por objeto
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <Card
          key={product.id}
          image={product.image}
          badge={product.badge}
          color={product.color}
          title={product.title}
          description={`Este producto se renderiza desde un array con .map().`}
          footer={<Button size="sm">Ver producto</Button>}
        />
      ))}
    </div>
  )
}
```

Esto es exactamente lo que hace la sección **"Galería"** de `src/App.jsx`. Ábrela, edita el array `products` y observa cómo cambia la página.

---

## 10. Checklist antes del parcial

- [ ] ¿Uso `.map()` para repetir componentes a partir de datos? (no copio JSX)
- [ ] ¿Cada objeto del array representa los props de un componente?
- [ ] ¿Tengo `key` única en cada `.map()`?
- [ ] ¿Las clases de Tailwind están **completas** (nada de `bg-${x}`)?
- [ ] ¿Separo los datos (arrays) del diseño (JSX)?
- [ ] ¿Uso `{...objeto}` cuando los nombres coinciden?
- [ ] ¿Puedo agregar un elemento nuevo solo editando el array?