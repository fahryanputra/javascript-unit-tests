import capitalize from "../components/capitalize";
import { describe, expect, test } from "@jest/globals";

describe("capitalize module", () => {
  test("capitalize first letter", () => {
    expect(capitalize("test")).toBe("Test");
  });

  test("capitalize each word", () => {
    expect(capitalize("test word")).toBe("Test Word");
  });
});
