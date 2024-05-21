/**
 * Converts minutes to a formatted string "Xh Ym".
 *
 * @param minutes - The total number of minutes to convert.
 * @returns A string representing the converted time in the format "Xh Ym".
 */
export const convertMinutesToHoursMinutes = (minutes: number): string => {
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  return `${hours}h ${remainingMinutes}m`;
};
