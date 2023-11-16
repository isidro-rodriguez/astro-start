import type { page } from "./env.d";

/**
 * Constantes del proyecto
 */
export const site = {
  title: "Astro start",
  description: "Plantilla básica para proyectos de Astro con Tailwind CSS y daisyUI",
  url: "https://www.astro-start.com",
  language: "es",
};

/**
 * Temas claro y oscuro (establece los colores en base al tema principal)
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
  { title: "Sobre", url: "/sobre", icon: "ph:info-bold" },
  { title: "Contacto", url: "/contacto", icon: "ph:envelope-fill" },
];
