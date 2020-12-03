function part1 (input) {
  const matrix = input.map(line => line.split(''))
  let [right, down, nTrees] = [0, 0, 0]
  while (down < matrix.length) {
    if (matrix[down][right] === '#') {
      matrix[down][right] = 'X'
      nTrees += 1
    } else {
      matrix[down][right] = 'O'
    }
    right = (right + 3) % matrix[down].length
    down += 1
  }
  console.log(matrix.map(row => row.join('')).join('\n'))
  return nTrees
}

function part2 (input) {
  return input
}

module.exports = { part1, part2 }
