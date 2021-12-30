export function coordinatesInterval(coordinates) {
  const [x, y] = coordinates;
  return Array.from({ length: x + 1 })
    .map((_, indexX) => {
      return Array.from({ length: y + 1 }).map((_, indexY) => [indexX, indexY]);
    })
    .flat();
}
