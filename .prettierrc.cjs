/**
 * Archivo de configuración de Prettier en formato CJS.
 * @see https://prettier.io/docs/en/configuration.html
 */
module.exports = {
  printWidth: 100,
  bracketSpacing: true,
  arrowParens: "avoid",
  bracketSameLine: true,
  quoteProps: "as-needed",
  proseWrap: "preserve",
  plugins: ["prettier-plugin-astro", "prettier-plugin-tailwindcss"],
  overrides: [
    {
      files: ["**/*.astro"],
      options: {
        parser: "astro",
      },
    },
    {
      files: ["src/**/*.ts"],
      options: {
        parser: "typescript",
      },
    },
    {
      files: ["src/**/*.js"],
      options: {
        parser: "babel",
      },
    },
  ],
};
