import type { page } from "./env.d";

/**
 * Constantes del proyecto
 */
export const site = {
  title: "Astro start",
  description: "Plantilla básica para proyectos de Astro con Tailwind CSS y daisyUI",
  url: "https://www.astro-start.com",
  language: "es",
  icon: "public/favicon.svg",
  orientation: "landscape",
  og_image: "ogimage.jpg",
  og_image_type: "image/jpeg",
  og_image_size: "1200x630",
};

/**
 * Tema claro y oscuro
 * Establece 'primary_color' y 'background_color' en base al tema claro.
 * @see https://daisyui.com/docs/themes/
 */
export const theme = {
  light: "light",
  dark: "dark",
  primary_color: "#4a00ff",
  background_color: "#ffffff",
};

/**
 * Páginas del proyecto para mostrar en el menu
 */
export const pages: page[] = [
  { title: "Inicio", url: "/", icon: "ph:house-fill" },
  { title: "Sobre", url: "/about", icon: "ph:info-bold" },
  { title: "Contacto", url: "/contact", icon: "ph:envelope-fill" },
];
