export function quoteSign(authorName) {
  const [lastName, ...rest] = authorName.toUpperCase().split(" ").reverse();

  return [
    `${lastName},`,
    ...rest.reverse().map((name) => {
      return `${name[0]}.`;
    }),
  ].join(" ");
}
