function computeSums (input) {
  const result = []
  for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j < input.length; j++) {
      const a = Number(input[i])
      const b = Number(input[j])
      result.push(a + b)
    }
  }
  return result
}
function computeRecentSums (input, start, end) {
  const preamble = input.slice(start, end)
  return computeSums(preamble)
}
function validate (input, start, end, check) {
  const sums = computeRecentSums(input, start, end)
  if (sums.includes(check)) {
    return true
  }
  return false
}

function checkInputPart1 (input, preambleLength) {
  for (let i = preambleLength; i <= input.length; i++) {
    const end = i
    const start = i - preambleLength
    const check = Number(input[i])
    console.log(`calcSums ${start} to ${end} looking for ${check}`)
    if (!validate(input, start, end, check)) {
      return check
    }
  }
  return null
}
function part1 (input) {
  return checkInputPart1(input, 25)
}

function part2 (input) {
  const invalidNumber = part1(input)
  return null
}

module.exports = { part1, part2, computeSums, computeRecentSums, checkInputPart1 }
