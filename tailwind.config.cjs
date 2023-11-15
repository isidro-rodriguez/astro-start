import { theme } from "./src/consts";

/**
 * Archivo de configuración de Tailwind con DaisyUI
 * @see https://tailwindcss.com/docs
 * @see https://daisyui.com/docs
 **/
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        lg: "2rem",
      },
    },

    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: [theme.light, theme.dark],
    darkTheme: theme.dark,
    base: true,
    styled: true,
    utils: true,
    prefix: "",
    logs: true,
    themeRoot: ":root",
  },
};
