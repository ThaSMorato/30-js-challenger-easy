import { describe, it, expect } from "@jest/globals";

import { checkSpaceshipLicensePlate } from "./checkSpaceshipLicensePlate";

describe("Check spaceship license plate", () => {
  it("should return false to 301354030349", () => {
    const content = 301354030349;
    const result = checkSpaceshipLicensePlate(content);

    expect(result).toBeFalsy();
  });

  it("should return false to 12345678972", () => {
    const content = 12345678972;
    const result = checkSpaceshipLicensePlate(content);

    expect(result).toBeFalsy();
  });

  it("should return true to 547020743789", () => {
    const content = 547020743789;
    const result = checkSpaceshipLicensePlate(content);

    const expected = true;

    expect(result).toEqual(expected);
  });

  it("should return true to 301354030348", () => {
    const content = 301354030348;
    const result = checkSpaceshipLicensePlate(content);

    const expected = true;

    expect(result).toEqual(expected);
  });
});
