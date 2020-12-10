function part1 (input) {
  const sorted = input.map(Number).sort((a, b) => a - b)
  sorted.unshift(0) // outlet
  sorted.push(sorted[sorted.length - 1] + 3) // device adapter
  const diffs = []
  for (let i = 0; i < sorted.length - 1; i++) {
    diffs.push(sorted[i + 1] - sorted[i])
  }
  const nOnes = diffs.filter(diff => diff === 1).length
  const nThrees = diffs.filter(diff => diff === 3).length
  return nOnes * nThrees
}

function part2 (input) {
  return input
}

module.exports = { part1, part2 }
