/**
 * Utilidades estáticas para el proyecto
 *
 * @method capitalize - Capitaliza la primera letra de una cadena
 * @method formatDate - Formatea una fecha a dd/mm/yyyy
 * @method slugify - Convierte una cadena a slug
 */
export default class Utils {
  /**
   * Capitaliza la primera letra de una cadena
   *
   * @param input - Cadena a capitalizar
   * @returns La cadena capitalizada
   * @example Utils.capitalize('hello world')
   */
  static capitalize(input: string): string {
    return input.charAt(0).toUpperCase() + input.slice(1);
  }

  /**
   * Formatea una fecha a dd/mm/yyyy
   *
   * @param {Date} date - Fecha a formatear
   * @return {string} - Fecha formateada
   * @example Utils.formatDate(new Date())
   */
  static formatDate(date: Date): string {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = String(date.getFullYear());

    return `${day}/${month}/${year}`;
  }

  /**
   * Convierte una cadena a slug
   *
   * @param {string} string - Cadena a convertir
   * @returns {string} La cadena convertida
   * @example Utils.slugify('Hello World')
   */
  static slugify(string: string): string {
    const specialChars =
      "àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìıİłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;";
    const replaceChars =
      "aaaaaaaaaacccddeeeeeeeegghiiiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------";
    const regex = new RegExp(specialChars.split("").join("|"), "g");

    return string
      .toString()
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(regex, c => replaceChars.charAt(specialChars.indexOf(c)))
      .replace(/&/g, "-and-")
      .replace(/[^\w-]+/g, "")
      .replace(/^-+/, "")
      .replace(/-+$/, "");
  }
}
