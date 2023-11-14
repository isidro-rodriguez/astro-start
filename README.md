# Astro start

Una plantilla básica de [Astro](https://astro.build/) para empezar tu sitio web con una configuración establecida.

## Características

- [Tailwind CSS](https://tailwindcss.com/) para las hojas de estilo.
- [Sass](https://sass-lang.com/) para aprovechar sus características.
- [ESLint](https://eslint.org/) en configuración recomendadada para TypeScript y JavaScript.
- [Prettier](https://prettier.io/) para el formateo de documentos.
- [Astro sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/) para generar dicho documento.
- [Astro webmanifest](https://github.com/alextim/astro-lib/tree/main/packages/astro-webmanifest#readme) para generar el webmanifest, iconos y sus relaciones en cabecera.
- [Astro robots](https://github.com/alextim/astro-lib/tree/main/packages/astro-robots-txt#readme) para generar `robots.txt` a partir de las constantes de proyecto.
- Constantes de proyecto `src/consts.ts` y utilidades `src/utils.ts`.
- Para [VSCode](https://code.visualstudio.com/): recomendaciones de extensiones, scripts de ejecución y configuración.

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
├───consts.ts     Constantes de proyecos
├───env.d.ts      Declaración de tipos
└───utils.ts      Utilidades para compilado
```

## Instalación

```shell
git clone https://github.com/isidro-rodriguez/astro-start
cd astro-start
npm install
```
