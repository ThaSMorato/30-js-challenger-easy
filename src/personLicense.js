export class PersonLicense {
  #name;
  #last_name;
  #birth_date;
  #license = false;

  constructor({ name, last_name, birth_date, license }) {
    this.#name = name;
    this.#last_name = last_name;
    this.#birth_date = new Date(birth_date);

    this.#license = license ?? this.#license;
  }

  #createLicense() {
    const [year, month, day] = this.#birth_date.toISOString().split("T")[0].split("-");
    const lastNamePart = `${this.#last_name}99999`.substring(0, 5).toUpperCase();
    const sixthChar = "-";
    const seventhChar = year[2];
    const tenthChar = year[3];
    const eleventhChar = ".";
    const twelthChar = this.#name[0].toLowerCase();

    return `${lastNamePart}${sixthChar}${seventhChar}${month}${tenthChar}${eleventhChar}${twelthChar}`;
  }

  get license() {
    if (!this.#license) {
      this.#license = this.#createLicense();
    }

    return this.#license;
  }
}
