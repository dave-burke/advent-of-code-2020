const checkSlope = function (input, moveRight, moveDown) {
  const matrix = input.map(line => line.split(''))
  let [right, down, nTrees] = [0, 0, 0]
  while (down < matrix.length) {
    if (matrix[down][right] === '#') {
      matrix[down][right] = 'X'
      nTrees += 1
    } else {
      matrix[down][right] = 'O'
    }
    right = (right + moveRight) % matrix[down].length
    down += moveDown
  }
  return nTrees
}
function part1 (input) {
  return checkSlope(input, 3, 1)
}

function part2 (input) {
  return [
    checkSlope(input, 1, 1),
    checkSlope(input, 3, 1),
    checkSlope(input, 5, 1),
    checkSlope(input, 7, 1),
    checkSlope(input, 1, 2),
  ].reduce((result, next) => result * next)
}

module.exports = { part1, part2, checkSlope }
