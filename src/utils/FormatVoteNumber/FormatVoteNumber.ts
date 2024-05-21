/**
 * Rounds and formats numbers according to the following rules:
 * - If the number is less than 1000, returns the number as is.
 * - If the number is between 1000 and 999999, rounds to one decimal place and appends 'K'.
 * - If the number is 1000000 or greater, rounds to one decimal place and appends 'M'.
 *
 * @param num - The number to be formatted.
 * @returns A string representing the formatted number.
 */
export const formatNumber = (num: number): string => {
  if (num < 1000) {
    return num.toString();
  }

  if (num < 1000000) {
    return (num / 1000).toFixed(1) + "K";
  }

  return (num / 1000000).toFixed(1) + "M";
};
