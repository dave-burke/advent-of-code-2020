function solve (equation) {
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
