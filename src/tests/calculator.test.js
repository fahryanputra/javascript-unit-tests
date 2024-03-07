import { describe, expect, test } from "@jest/globals";
import calculator from "../components/calculator";

describe("calculator module", () => {
  test("invalid number", () => {
    expect(calculator.add(2, "a")).toBe("invalid number");
  });

  test("add number", () => {
    expect(calculator.add(2, 3)).toBe(5);
  });

  test("add decimal number", () => {
    expect(calculator.add(2.5, 3)).toBe(5.5);
  });

  test("add negative number", () => {
    expect(calculator.add(-2, 3)).toBe(1);
  });

  test("subtract number", () => {
    expect(calculator.subtract(5, 1)).toBe(4);
  });

  test("negative result", () => {
    expect(calculator.subtract(1, 5)).toBe(-4);
  });

  test("multiply number", () => {
    expect(calculator.multiply(5, 2)).toBe(10);
  });

  test("divide number", () => {
    expect(calculator.divide(10, 2)).toBe(5);
  });

  test("divide number with decimal result", () => {
    expect(calculator.divide(10, 3)).toBeCloseTo(3.33);
  });
});
