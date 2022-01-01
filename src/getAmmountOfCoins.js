const COINS = [1, 5, 10, 25, 100, 500];

export function getAmmountOfCoins(number) {
  let total = number;

  return COINS.sort((a, b) => b - a).reduce((acc, coin) => {
    const totalOfCoins = Math.floor(total / coin);
    total = total % coin;

    return {
      ...acc,
      [coin]: totalOfCoins,
    };
  }, {});
}
