import { describe, test, it, expect } from "vitest";
import { max } from "../src/intro";

describe("max", () => {
  it("should return the first argument if it is greater", () => {
    // AAA
    // Arrange: Turn on the TV
    // const a = 2;
    // const b = 1;

    // Act: Press the power button
    // const result = max(a, b);

    // Assert: Verify TV is off
    // expect(result).toBe(2);

    // Cleaner test - One line of code
    expect(max(2, 1)).toBe(2);
  });
});
