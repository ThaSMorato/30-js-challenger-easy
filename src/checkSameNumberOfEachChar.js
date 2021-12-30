export function checkSameNumberOfEachChar(string) {
  const stringArray = string.split("").reduce((acc, value) => {
    Object.keys(acc).includes(value) ? acc[value]++ : (acc[value] = 1);
    return acc;
  }, {});

  const result = new Set(Object.values(stringArray));

  return result.size === 1;
}
