export const findClosestGreaterDivisibleNumber = (n: number, divisor: number): number => {
  for (n++; n % divisor !== 0; n++);

  return n;
};
