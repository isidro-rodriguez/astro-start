/**
 * Archivo de configuración de Tailwind
 * @see https://tailwindcss.com/docs
 **/
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    container: {
      center: true,
      padding: {
        default: "1rem",
        xl: "2rem",
      },
    },

    extend: {},
  },
  plugins: [],
};
