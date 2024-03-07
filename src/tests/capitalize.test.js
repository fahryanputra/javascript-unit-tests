import { describe, expect, test } from "@jest/globals";
import capitalize from "../components/capitalize";

describe("capitalize module", () => {
  test("invalid string", () => {
    expect(capitalize(1234)).toBe("invalid string");
  });

  test("empty string", () => {
    expect(capitalize("")).toBe("");
  });

  test("capitalize first letter", () => {
    expect(capitalize("test")).toBe("Test");
  });

  test("capitalize each word", () => {
    expect(capitalize("test word")).toBe("Test Word");
  });

  test("mixed number in front of string", () => {
    expect(capitalize("2nice")).toBe("2Nice");
  });

  test("symbol in front of string", () => {
    expect(capitalize("¡caramba!")).toBe("¡Caramba!");
  });

  test("fix mixed case in a word", () => {
    expect(capitalize("wHaT Is This?")).toBe("What Is This?");
  });
});
