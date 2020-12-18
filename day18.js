function solve (equation) {
  const result = undefined
  const op = undefined
  const stack = []
  for (const char of equation) {
    switch (char) {
      case ('('):
        // what if this is the 1st char?
        stack.push(result)
        break
      case (')'):
        break
      case ('+'):
      case ('*'):
        op = char
        break
      default:
        break
    }
  }
  return 0
}

function part1 (input) {
  return input
    .map(line => line.split(' '))
    .map(solve)
    .reduce((a, b) => a + b, 0)
}

function part2 (input) {
  return input
}

module.exports = { part1, part2 }
