export function organizeNumberMatrix(...matrix) {
  return matrix.reduce((acc, array) => [...acc, ...array], []).sort((a, b) => a - b);
}
