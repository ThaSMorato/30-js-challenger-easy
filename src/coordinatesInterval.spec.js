import { describe, it, expect } from "@jest/globals";

import { coordinatesInterval } from "./coordinatesInterval";

describe("Coordinates Interval", () => {
  it("should return [[0,0],[0,1],[0,2],[1,0],[1,1]...] to [2,2]", () => {
    const content = [2, 2];
    const result = coordinatesInterval(content);
    const expected = [
      [0, 0],
      [0, 1],
      [0, 2],
      [1, 0],
      [1, 1],
      [1, 2],
      [2, 0],
      [2, 1],
      [2, 2],
    ];

    expect(result).toEqual(expected);
  });

  it("should return the coordenate to [2,7]", () => {
    const content = [2, 7];
    const result = coordinatesInterval(content);

    const expected = [
      [0, 0],
      [0, 1],
      [0, 2],
      [0, 3],
      [0, 4],
      [0, 5],
      [0, 6],
      [0, 7],
      [1, 0],
      [1, 1],
      [1, 2],
      [1, 3],
      [1, 4],
      [1, 5],
      [1, 6],
      [1, 7],
      [2, 0],
      [2, 1],
      [2, 2],
      [2, 3],
      [2, 4],
      [2, 5],
      [2, 6],
      [2, 7],
    ];

    expect(result).toEqual(expected);
  });

  it("should return a empty array to [-2,-2]", () => {
    const content = [-2, -2];
    const result = coordinatesInterval(content);

    const expected = [];

    expect(result).toEqual(expected);
  });
});
