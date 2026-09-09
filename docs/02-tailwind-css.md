# 02 · Guía de Tailwind CSS

Tailwind genera estilos con **clases utilitarias** directamente en el `className`. No escribes CSS aparte, combinas clases.

---

## 1. Concepto básico

```jsx
<button className="bg-blue-600 px-4 py-2 rounded-lg text-white hover:bg-blue-700">
  Enviar
</button>
```

| Clase | Qué hace |
|---|---|
| `bg-blue-600` | color de fondo |
| `px-4 py-2` | padding horizontal / vertical |
| `rounded-lg` | bordes redondeados |
| `text-white` | color del texto |
| `hover:bg-blue-700` | fondo al pasar el mouse |

---

## 2. Los grupos de utilidades más usados

| Grupo | Ejemplos |
|---|---|
| Colores | `bg-*`, `text-*`, `border-*` |
| Espaciado | `p-4`, `px-6`, `m-2`, `mt-8`, `gap-4` |
| Tamaños | `w-64`, `h-16`, `max-w-7xl`, `w-full` |
| Tipografía | `text-sm`, `font-bold`, `tracking-tight`, `uppercase` |
| Bordes | `rounded-xl`, `border`, `border-slate-200` |
| Sombras | `shadow-sm`, `shadow-card`, `shadow-float` |
| Layout | `flex`, `grid`, `hidden`, `absolute`, `relative` |
| Responsive | `sm:`, `md:`, `lg:`, `xl:` |

---

## 3. Diseño responsive

Los prefijos aplican la clase **a partir de** ese tamaño de pantalla:

```jsx
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  {/* 1 columna en móvil, 3 columnas en pantallas medianas+ */}
</div>
```

Breakpoints por defecto:

| Prefijo | Tamaño |
|---|---|
| `sm:` | ≥ 640px |
| `md:` | ≥ 768px |
| `lg:` | ≥ 1024px |
| `xl:` | ≥ 1280px |

**Regla mental:** diseña primero para móvil (sin prefijo) y luego mejora para pantallas grandes.

---

## 4. Estados

Se escriben con prefijo: `hover:`, `focus:`, `active:`, `disabled:`.

```jsx
<a className="text-blue-600 hover:text-blue-800 focus:ring-2 focus:ring-blue-400">
  Enlace
</a>
```

---

## 5. Colores de marca (tema personalizado)

En `src/index.css` se definen colores propios con `@theme`:

```css
@theme {
  --color-primary-500: #3b82f6;
}
```

Eso genera utilidades como `bg-primary-500`, `text-primary-500`, `border-primary-500`.

**Para cambiar el color de la web**: edita el valor hex de `--color-primary-*` y **toda** la web cambia automáticamente (botones, enlaces, badges...).

---

## 6. ¿Y si necesito una clase que no existe?

### Opción A — usas clases arbitrarias

```jsx
<div className="w-[450px] bg-[#123456] top-[calc(100%-1rem)]">
```

### Opción B — creas una utilidad propia

En `src/index.css`:

```css
@theme {
  --color-marca: #e11d48;   /* genera bg-marca, text-marca... */
}
```

### Opción C — CSS normal

Para cosas muy específicas puedes usar `@layer components` en `src/index.css`:

```css
@layer components {
  .btn-especial {
    @apply bg-gradient-to-r from-pink-500 to-rose-500 text-white font-bold;
  }
}
```

`@apply` inserta utilidades de Tailwind dentro de una clase CSS.

---

## 7. Trucos útiles

```jsx
// Anima con transition
className="transition-transform duration-300 hover:scale-105"

// Centra con flex
className="flex items-center justify-center"

// Centra con grid
className="grid place-items-center"

// Ocultar en móvil, mostrar en escritorio
className="hidden md:block"

// Imagen que cubre su contenedor
className="h-full w-full object-cover"

// Fondo con gradiente
className="bg-gradient-to-r from-blue-600 to-purple-600"
```

---

## Resumen

1. Todo es `className` + clases utilitarias.
2. `sm:`/`md:`/`lg:` para responsive.
3. `hover:`/`focus:` para estados.
4. Los colores de marca se cambian en `src/index.css`.
5. Si te falta algo, usa clases arbitrarias `[...]` o crea una utilidad.

La referencia completa de clases: https://tailwindcss.com/docs/utility-first