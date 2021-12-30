export function recursiveFatorial(number) {
  const bigNumber = BigInt(number);
  if (bigNumber === 0n || bigNumber === 1n) {
    return 1n;
  }

  return bigNumber * recursiveFatorial(bigNumber - 1n);
}
