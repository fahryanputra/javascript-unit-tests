import { describe, expect, test } from "@jest/globals";
import analyzeArray from "../components/analyzeArray";

describe("analyzeArray module", () => {
  test("empty array", () => {
    expect(analyzeArray([])).toBe("invalid array");
  });

  test("invalid array", () => {
    expect(analyzeArray(2)).toBe("invalid array");
  });

  test("array not containing number", () => {
    expect(analyzeArray([1, "a", 3])).toBe("invalid array");
  });

  test("return type is object", () => {
    expect(typeof analyzeArray([1, 2, 3, 4])).toBe("object");
  });

  test("average", () => {
    expect(analyzeArray([1, 2, 3, 4]).average).toBe(2.5);
  });

  test("min", () => {
    expect(analyzeArray([1, 2, 3, 4]).min).toBe(1);
  });

  test("max", () => {
    expect(analyzeArray([1, 2, 3, 4]).max).toBe(4);
  });

  test("length", () => {
    expect(analyzeArray([1, 2, 3, 4]).length).toBe(4);
  });

  test("object property", () => {
    expect(analyzeArray([1, 2, 3, 4])).toHaveProperty(
      "average",
      "min",
      "max",
      "length",
    );
  });

  test("object equality", () => {
    expect(analyzeArray([1, 2, 3, 4])).toEqual({
      average: 2.5,
      min: 1,
      max: 4,
      length: 4,
    });
  });
});
