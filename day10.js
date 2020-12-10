function part1 (input) {
  const sorted = input.sort((a, b) => a - b)
  sorted.unshift(0) // outlet
  sorted.push(sorted[sorted.length - 1] + 3) // device adapter
  const processed = sorted.reduce((result, cur, i, arr) => {
    const next = {
      prev: cur,
      nOnes: result.nOnes,
      nThrees: result.nThrees,
    }
    if (result.prev !== undefined) {
      if (result.prev - next.prev === 1) {
        next.nOnes++
      }
      if (result.prev - next.prev === 3) {
        next.nThrees++
      }
    }
    return next
  }, {
    prev: undefined,
    nOnes: 0,
    nThrees: 0,
  })
  return processed.nOnes * processed.nThrees
}

function part2 (input) {
  return input
}

module.exports = { part1, part2 }
