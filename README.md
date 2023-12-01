# Astro start

Una plantilla básica de [Astro](https://astro.build/) para empezar tu sitio web con una
configuración establecida.

Para instalarlo:

```shell
git clone https://github.com/isidro-rodriguez/astro-start
cd astro-start
npm install
```

## Características

- [Tailwind CSS](https://tailwindcss.com/) para las hojas de estilo.
- [DaisyUI](https://daisyui.com/): para la interfaz y el cambio de temas.
- [Astro icons](https://www.astroicon.dev/) para importar SVGs de
  [Iconify](https://iconify.design/).
- [Astro sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/) para generar
  `sitemap.xml`.
- [Astro webmanifest](https://github.com/alextim/astro-lib/tree/main/packages/astro-webmanifest#readme)
  para generar `manifest.webmanifest`, iconos a partir de `public/favicon.svg` y sus relaciones en
  cabecera.
- [Astro robots](https://github.com/alextim/astro-lib/tree/main/packages/astro-robots-txt#readme)
  para generar `robots.txt` a partir de las constantes de proyecto.
- Constantes de proyecto `src/consts.ts` y utilidades `src/utils.ts`.
- [ESLint](https://eslint.org/) en configuración recomendadada para TypeScript y JavaScript.
- [Prettier](https://prettier.io/) para el formateo de documentos.
- Para [VSCode](https://code.visualstudio.com/): recomendaciones de extensiones, scripts de
  ejecución y configuración.

## Estructura propuesta

```text
src
├───assets        Recursos de proyecto procesados
│   ├───images      Imágenes
│   ├───scripts     Scripts de cliente
│   └───styles      Hojas de estilo
├───content       Colecciones de contenido
├───components    Componentes
├───layouts       Plantillas
├───pages         Páginas
├───consts.ts     Constantes de proyecto
├───env.d.ts      Declaración de tipos
└───utils.ts      Utilidades para compilado
```

## Scripts

Se disponen de los siguientes scripts de ejecución tanto para `shell` como
[VSCode](https://code.visualstudio.com/):

| Script            | Descripción                                                   |
| ----------------- | ------------------------------------------------------------- |
| `npm run dev`     | Servidor de desarrollo en `http://localhost:4321/`            |
| `npm run build`   | Comprobar y compilar el proyecto                              |
| `npm run preview` | Revisar el proyecto compilado en `http://localhost:4321`      |
| `npm run format`  | Formatear los documentos con [Prettier](https://prettier.io/) |
| `npm run lint`    | Revisar documentos con [ESLint](https://eslint.org/)          |
