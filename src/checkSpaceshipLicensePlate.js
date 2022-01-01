function getDigitFromArray(array) {
  const sumOfDigits = array
    .map(Number)
    .reduce(
      (acc, item, index) => (index % 2 === 0 || index === 0 ? acc + item * 3 : acc + item),
      0
    );
  const restOfTen = sumOfDigits % 10;
  return restOfTen === 0 ? 0 : 10 - restOfTen;
}

export function checkSpaceshipLicensePlate(plate) {
  const textPlate = `${plate}`;

  const plateInitialArray = textPlate.split("").slice(0, -1);

  const correctDigit = getDigitFromArray(plateInitialArray);

  return correctDigit === Number(textPlate[textPlate.length - 1]);
}
