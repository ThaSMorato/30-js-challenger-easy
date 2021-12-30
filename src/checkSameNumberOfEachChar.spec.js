import { describe, it, expect } from "@jest/globals";

import { checkSameNumberOfEachChar } from "./checkSameNumberOfEachChar";

describe("Check Same Number Of Each Char", () => {
  it("should return false to 'you too'", () => {
    const content = "you too";
    const result = checkSameNumberOfEachChar(content);

    expect(result).toBeFalsy();
  });

  it("should return true to 'Thee is This'", () => {
    const content = "Thee is This";
    const result = checkSameNumberOfEachChar(content);

    const expected = true;

    expect(result).toEqual(expected);
  });
});
