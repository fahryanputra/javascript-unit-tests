import { describe, expect, test } from "@jest/globals";
import reverseString from "../components/reverseString";

describe("reverseString module", () => {
  test("invalid string", () => {
    expect(reverseString(2312)).toBe("invalid string");
  });

  test("empty string", () => {
    expect(reverseString("")).toBe("");
  });

  test("single word", () => {
    expect(reverseString("batmobile")).toBe("elibomtab");
  });

  test("multiple word", () => {
    expect(reverseString("chilly room")).toBe("moor yllihc");
  });

  test("mixed with number", () => {
    expect(reverseString("2 fast 2 furious")).toBe("suoiruf 2 tsaf 2");
  });
});
