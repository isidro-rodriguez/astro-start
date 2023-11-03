/**
 * Archivo de configuración de Prettier en formato CJS.
 * Define las reglas para el formateo de documentos del proyecto.
 * @type {import('prettier').Config}
 * @see https://prettier.io/docs/en/configuration.html
 */

module.exports = {
  printWidth: 100,
  semi: true,
  singleQuote: true,
  useTabs: false,
  tabWidth: 2,
  trailingComma: 'es5',
  plugins: ['prettier-plugin-astro', 'prettier-plugin-tailwindcss'],
  overrides: [
    {
      files: ['**/*.astro'],
      options: {
        parser: 'astro',
      },
    },
  ],
};
