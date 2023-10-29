import { defineConfig } from 'astro/config';
import { site } from './src/constants';
import webmanifest from 'astro-webmanifest';
import sitemap from '@astrojs/sitemap';

/**
 * Configuración del proyecto en Astro
 * @type {import('astro').AstroConfig}
 * @see https://astro.build/config
 */
export default defineConfig({
  site: site.url,
  integrations: [
    sitemap(),
    webmanifest({
      name: site.title,
      description: site.description,
      lang: site.language,
      start_url: '/',
      icon: 'public/icon.svg',
      theme_color: site.theme_color,
      background_color: site.background_color,
      display: 'standalone',
      orientation: 'portrait'
    }),
  ],
});
