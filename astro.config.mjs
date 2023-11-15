import { defineConfig } from "astro/config";
import { site, theme } from "./src/consts";
import robotsTxt from "astro-robots-txt";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import webmanifest from "astro-webmanifest";

/**
 * Configuración del proyecto en Astro
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
        iconPurpose: ["badge", "maskable"],
      },
      start_url: "/",
      description: site.description,
      lang: site.language,
      icon: "public/favicon.svg",
      theme_color: theme.primary_color,
      background_color: theme.background_color,
      orientation: "landscape",
      display: "standalone",
      screenshots: [
        {
          src: "ogimage.jpg",
          sizes: "1200x630",
          type: "image/jpeg",
          platform: "wide",
          label: site.title,
        },
      ],
    }),
  ],
});
