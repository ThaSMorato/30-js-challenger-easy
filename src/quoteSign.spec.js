import { describe, it, expect } from "@jest/globals";
import { quoteSign } from "./quoteSign";

describe("Quote Sign", () => {
  it("should return the sign 'MORATO, T. S.' for the author 'Thales Silva Morato'", () => {
    const content = "Thales Silva Morato";
    const expected = "MORATO, T. S.";
    const result = quoteSign(content);

    expect(result).toEqual(expected);
  });

  it("should return the sign 'PONTES, I. L. F.' for the author 'isaac larabia forhead pontes'", () => {
    const content = "isaac larabia forhead pontes";
    const expected = "PONTES, I. L. F.";
    const result = quoteSign(content);

    expect(result).toEqual(expected);
  });
});
