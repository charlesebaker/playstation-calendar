import { findClosestGreaterDivisibleNumber } from "./number";

describe("findClosestGreaterDivisibleNumber", () => {
  test("finds the closest greater number divisible by the divisor", () => {
    expect(findClosestGreaterDivisibleNumber(5, 3)).toBe(6);
    expect(findClosestGreaterDivisibleNumber(10, 2)).toBe(12);
    expect(findClosestGreaterDivisibleNumber(0, 5)).toBe(5);
    expect(findClosestGreaterDivisibleNumber(12, 7)).toBe(14);
    expect(findClosestGreaterDivisibleNumber(-1, 4)).toBe(0);
  });

  test("handles case where n is already divisible by divisor", () => {
    expect(findClosestGreaterDivisibleNumber(4, 2)).toBe(6);
  });
});
