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

// This is called the "Shunting Yard Algorithm"
// I got it from a hint on Reddit, then implemented it based
// on reading here: https://en.wikipedia.org/wiki/Shunting-yard_algorithm
function toRpn (input) {
  const output = []
  const operators = []
  while (input.length > 0) {
    const next = input.shift()
    if (isFinite(Number(next))) {
      output.push(Number(next))
    } else if (next === '(') {
      operators.unshift(next)
    } else if (next === ')') {
      while (operators[0] !== '(') {
        output.push(operators.shift())
      }
      if (operators[0] === '(') {
        operators.shift()
      }
    } else if (next === '+') {
      operators.unshift('+')
    } else if (next === '*') {
      while (operators[0] === '+') {
        output.push(operators.shift())
      }
      operators.unshift(next)
    }
  }
  return [...output, ...operators]
}

// I made this rpn solver on my own
function solveRpn (input) {
  const stack = []
  while (input.length > 0) {
    const next = input.shift()
    if (isFinite(Number(next))) {
      stack.push(next)
    } else {
      const a = stack.pop()
      const b = stack.pop()
      if (next === '+') {
        stack.push(a + b)
      } else {
        stack.push(a * b)
      }
    }
  }
  return stack.pop()
}

function part2 (input) {
  return input
    .map(line => line.split('').filter(char => char !== ' '))
    .map(equation => toRpn(equation))
    .map(rpn => solveRpn(rpn))
    .reduce((a, b) => a + b, 0)
}

module.exports = { part1, part2 }
