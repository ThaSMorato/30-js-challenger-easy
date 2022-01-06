import { describe, it, expect } from "@jest/globals";

import { PersonLicense } from "./PersonLicense";

describe("Check spaceship license plate", () => {
  it("should return DOE99-7057.j to John Doe", () => {
    const content = {
      name: "John",
      last_name: "Doe",
      birth_date: "1977-05-25",
    };
    const pilot = new PersonLicense(content);

    const license = pilot.license;

    const expected = "DOE99-7057.j";

    expect(expected).toBe(license);
  });

  it("should return JORDA-9095.h to Hal Jordan", () => {
    const content = {
      name: "Hal",
      last_name: "Jordan",
      birth_date: "1995-09-02",
    };
    const pilot = new PersonLicense(content);

    const license = pilot.license;

    const expected = "JORDA-9095.h";

    expect(expected).toBe(license);
  });

  it("should return DANVE-6088.c to Carol Danvers", () => {
    const content = {
      name: "Carol",
      last_name: "Danvers",
      birth_date: "1968-08-17",
    };
    const pilot = new PersonLicense(content);

    const license = pilot.license;

    const expected = "DANVE-6088.c";

    expect(expected).toBe(license);
  });

  it("should return DAMER-7039.p to Poe Dameron", () => {
    const content = {
      name: "Poe",
      last_name: "Dameron",
      birth_date: "1979-03-09",
    };
    const pilot = new PersonLicense(content);

    const license = pilot.license;

    const expected = "DAMER-7039.p";

    expect(expected).toBe(license);
  });

  it("should return MORAT-9105.t to Thales Morato", () => {
    const content = {
      name: "Thales",
      last_name: "Morato",
      birth_date: "1995-10-17",
    };
    const pilot = new PersonLicense(content);

    const license = pilot.license;

    const expected = "MORAT-9105.t";

    expect(expected).toBe(license);
  });
});
