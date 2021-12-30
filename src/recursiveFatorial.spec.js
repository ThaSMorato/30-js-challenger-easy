import { describe, it, expect } from "@jest/globals";
import { recursiveFatorial } from "./recursiveFatorial";

describe("Recursive fatorial", () => {
  it("should return the fatorial from 0", () => {
    const content = 0;
    const expected = 1n;
    const result = recursiveFatorial(content);

    expect(result).toEqual(expected);
  });

  it("should return the fatorial from 5", () => {
    const content = 5;
    const expected = 120n;
    const result = recursiveFatorial(content);

    expect(result).toEqual(expected);
  });

  it("should return the fatorial from 9", () => {
    const content = 9;
    const expected = 362880n;
    const result = recursiveFatorial(content);

    expect(result).toEqual(expected);
  });

  it("should return the fatorial from 32", () => {
    const content = 32;
    const expected = 263130836933693530167218012160000000n;
    const result = recursiveFatorial(content);

    expect(result).toEqual(expected);
  });
});
