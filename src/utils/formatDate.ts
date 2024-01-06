/**
 * Returns the formatted data from ISO to Brazilian locale string.
 *
 * @example
 * // returns "6 de janeiro de 2024"
 * formatDate("2024-01-06T21:40:17.893Z");
 *
 * @param isoString - The data string in ISO format.
 * @returns A friendly version of the date.
 */
export const formatDate = (isoString: string): string => {
    return new Date(isoString).toLocaleString("pt-BR", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
};
