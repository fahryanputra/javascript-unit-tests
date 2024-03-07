import { describe, expect, test } from "@jest/globals";
import caesarCipher from "../components/caesarCipher";

describe("caesarCipher module", () => {
  test("invalid string", () => {
    expect(caesarCipher(2, 3)).toBe("invalid cipher");
  });

  test("invalid shift", () => {
    expect(caesarCipher("cipher", "a")).toBe("invalid cipher");
  });

  test("invalid parameters", () => {
    expect(caesarCipher(2, "a")).toBe("invalid cipher");
  });

  test("empty string", () => {
    expect(caesarCipher("", 3)).toBe("");
  });

  test("shift by 3", () => {
    expect(caesarCipher("cipher", 3)).toBe("flskhu");
  });

  test("wrapping from z to a", () => {
    expect(caesarCipher("cipher", 29)).toBe("flskhu");
  });

  test("multiple words", () => {
    expect(caesarCipher("cipher cipher", 3)).toBe("flskhu flskhu");
  });

  test("same case", () => {
    expect(caesarCipher("CipHeR", 3)).toBe("FlsKhU");
  });

  test("punctuation", () => {
    expect(caesarCipher("cipher!", 3)).toBe("flskhu!");
  });
});
