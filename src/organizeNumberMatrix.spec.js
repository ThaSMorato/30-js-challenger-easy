import { describe, it, expect } from "@jest/globals";

import { organizeNumberMatrix } from "./organizeNumberMatrix";

describe("Organize number matrix", () => {
  it("should return [1,1,2,3,4,5,6,7,8] from [[8,4,5],[1,7,6], [1,3,2]]", () => {
    const content = [
      [8, 4, 5],
      [1, 7, 6],
      [1, 3, 2],
    ];
    const result = organizeNumberMatrix(...content);
    console.log(result);
    const expected = [1, 1, 2, 3, 4, 5, 6, 7, 8];

    expect(result).toEqual(expected);
  });

  it("should return [1,1,2,3,4,5,6,7,8,9,10,11,11,11] from [[8,4,5, 11, 10, 9],[1,7,6, 11], [1,3,2, 11]]", () => {
    const content = [
      [8, 4, 5, 11, 10, 9],
      [1, 7, 6, 11],
      [1, 3, 2, 11],
    ];
    const result = organizeNumberMatrix(...content);
    console.log(result);
    const expected = [1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 11, 11];

    expect(result).toEqual(expected);
  });
});
