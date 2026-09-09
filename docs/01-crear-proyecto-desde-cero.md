# 01 · Crear un proyecto React desde cero

Guía paso a paso para montar **React + Vite + Tailwind CSS** en una carpeta vacía.
Perfecta para el examen o para empezar cualquier proyecto nuevo.

---

## 1. Requisitos previos

Instala **Node.js** (viene con `npm`) desde https://nodejs.org.

Verifica en la terminal:

```bash
node --version   # ej: v22.x.x
npm --version    # ej: 10.x.x
```

---

## 2. Crear el proyecto con Vite

```bash
npm create vite@latest mi-proyecto -- --template react
cd mi-proyecto
```

- `mi-proyecto` → nombre de la carpeta
- `--template react` → plantilla de React (sin TypeScript)
- Responde **No** si pregunta por "rolldown" (opcional)

Instala dependencias:

```bash
npm install
```

Prueba que todo funciona:

```bash
npm run dev     # abre http://localhost:5173
```

---

## 3. Instalar Tailwind CSS v4

Tailwind v4 funciona como **plugin de Vite** (más simple que versiones anteriores):

```bash
npm install tailwindcss @tailwindcss/vite
```

### 3.1 Conectar el plugin en `vite.config.js`

```js
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})
```

### 3.2 Importar Tailwind en el CSS

Reemplaza el contenido de `src/index.css` por:

```css
@import 'tailwindcss';
```

¡Listo! Ya puedes usar clases de Tailwind (`bg-blue-500`, `p-4`, etc.) en tus componentes.

> **Nota:** en Tailwind v4 **no** se crea `tailwind.config.js`. El tema se configura desde el propio CSS con `@theme` (ver `src/index.css` de esta base).

---

## 4. Estructura mínima

```
mi-proyecto/
├── public/
├── src/
│   ├── assets/
│   ├── App.jsx        # componente principal
│   ├── index.css      # estilos (aquí va Tailwind)
│   └── main.jsx       # entrada de React
├── index.html
├── package.json
└── vite.config.js
```

---

## 5. Primer componente

Edita `src/App.jsx`:

```jsx
function App() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100">
      <h1 className="text-4xl font-bold text-primary-600">
        Hola React + Tailwind 🎉
      </h1>
    </div>
  )
}

export default App
```

Guarda el archivo → verás el cambio al instante (HMR).

---

## 6. Build de producción

```bash
npm run build      # genera la carpeta dist/
npm run preview    # sirve el build para revisarlo
```

---

## Resumen de comandos

| Comando | Uso |
|---|---|
| `npm create vite@latest <nombre> -- --template react` | crear proyecto |
| `npm install` | instalar dependencias |
| `npm install tailwindcss @tailwindcss/vite` | instalar Tailwind v4 |
| `npm run dev` | servidor de desarrollo |
| `npm run build` | build de producción |
| `npm run preview` | previsualizar build |

---

## Errores comunes

- **`command not found: npm`** → Node.js no está instalado.
- **Puerto ocupado** → usa `npm run dev -- --port 3000` para cambiarlo.
- **Tailwind no aplica estilos** → revisa que `@import 'tailwindcss'` esté en el CSS y el plugin en `vite.config.js`. Reinicia `npm run dev` después de cambiar la config.