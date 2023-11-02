import { defineConfig } from 'astro/config';
import { site } from './src/consts';
import robotsTxt from 'astro-robots-txt';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import webmanifest from 'astro-webmanifest';

/**
 * Configuración del proyecto en Astro
 * @type {import('astro').AstroConfig}
 * @see https://astro.build/config
 */
export default defineConfig({
  site: site.url,
  integrations: [
    robotsTxt(),
    sitemap(),
    tailwind(),
    webmanifest({
      name: site.title,
      config: {
        insertAppleTouchLinks: true,
        iconPurpose: ['badge', 'maskable'],
      },
      description: site.description,
      lang: site.language,
      start_url: '/',
      icon: 'public/icon.svg',
      theme_color: site.theme_color,
      background_color: site.background_color,
      display: 'standalone',
      orientation: 'portrait',
    }),
  ],
});
