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
      start_url: '/',
      description: site.description,
      lang: site.language,
      icon: site.icon,
      theme_color: site.theme_color,
      background_color: site.background_color,
      orientation: site.orientation,
      display: 'standalone',
      screenshots: [
        {
          src: site.og_image,
          sizes: site.og_image_size,
          type: site.og_image_type,
          platform: 'wide',
          label: site.title,
        },
      ],
    }),
  ],
});
