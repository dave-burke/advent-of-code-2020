function apply (left, op, right) {
  if (op === '+') {
    return left + right
  } else {
    return left * right
  }
}
function solve (equation) {
  let result, op
  while (equation.length > 0) {
    const next = equation.shift()
    if (isFinite(Number(next))) {
      if (result === undefined) {
        result = Number(next)
      } else {
        result = apply(result, op, Number(next))
      }
    } else if (next === '+' || next === '*') {
      op = next
    } else if (next === '(') {
      let newResult
      [newResult, equation] = solve(equation)
      if (result === undefined) {
        result = newResult
      } else {
        result = apply(result, op, newResult)
      }
    } else if (next === ')') {
      return [result, equation]
    }
  }
  return result
}

function part1 (input) {
  return input
    .map(line => line.split('').filter(char => char !== ' '))
    .map(equation => solve(equation))
    .reduce((a, b) => a + b, 0)
}

function part2 (input) {
  return input
}

module.exports = { part1, part2 }
