import { describe, it, expect } from "@jest/globals";

import { getAmmountOfCoins } from "./getAmmountOfCoins";

describe("Coordinates Interval", () => {
  it("should return 2 of 500 for 1000", () => {
    const content = 1000;
    const result = getAmmountOfCoins(content);
    const expected = {
      1: 0,
      5: 0,
      10: 0,
      25: 0,
      100: 0,
      500: 2,
    };

    expect(result).toEqual(expected);
  });

  it("should return the amount to 478", () => {
    const content = 478;
    const result = getAmmountOfCoins(content);

    const expected = {
      1: 3,
      5: 0,
      10: 0,
      25: 3,
      100: 4,
      500: 0,
    };

    expect(result).toEqual(expected);
  });

  it("should return a empty array to 384", () => {
    const content = 384;
    const result = getAmmountOfCoins(content);

    const expected = {
      1: 4,
      5: 1,
      10: 0,
      25: 3,
      100: 3,
      500: 0,
    };

    expect(result).toEqual(expected);
  });

  it("should return a empty array to 5412", () => {
    const content = 5412;
    const result = getAmmountOfCoins(content);

    const expected = {
      1: 2,
      5: 0,
      10: 1,
      25: 0,
      100: 4,
      500: 10,
    };

    expect(result).toEqual(expected);
  });
});
