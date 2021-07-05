/**
 * Return a random number between 0 and max
 * @param max the maximus number of the range
 */
export const getRandomNumber = (max: number): number => {
  return Math.floor(Math.random() * (max + 1));
};
