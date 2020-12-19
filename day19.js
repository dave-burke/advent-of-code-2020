function mapRules (ruleStrings) {
  return ruleStrings.map(ruleString => ruleString.split(': '))
    .reduce((map, next) => map.set(Number(next[0]), next[1]), new Map())
}
function parseInput (rawInput) {
  const [rulesSpec, inputSpec] = rawInput.split('\n\n')
  const ruleStrings = rulesSpec.split('\n')
  const rules = mapRules(ruleStrings)
  const inputs = inputSpec.split('\n')
  return [rules, inputs]
}

function testOption (allRules, option, input) {
  if (option === '"a"') {
    return [input.startsWith('a'), input.substring(1)]
  } else if (option === '"b"') {
    return [input.startsWith('b'), input.substring(1)]
  } else {
    const subrules = option.split(' ').map(Number)
    let remainingInput = input
    let isValid = true
    for (const subrule of subrules) {
      [isValid, remainingInput] = testInput(allRules, allRules.get(subrule), remainingInput)
      if (!isValid) {
        return [false, remainingInput]
      }
    }
    if (remainingInput.length === 0) {
      return [true, remainingInput]
    }
  }
}

function testInput (allRules, checkRule, input) {
  for (const option of checkRule.split(' | ')) {
    const [isValid, remainingInput] = testOption(allRules, option, input)
    if (isValid && remainingInput.length === 0) return true
  }
  return false
}

function part1 (rawInput) {
  const [rules, inputs] = parseInput(rawInput)
  let nValid = 0
  for (const input of inputs) {
    const isValid = testInput(rules, rules.get(0), input)
    if (isValid) {
      nValid += 1
    }
  }
  return nValid
}

function part2 (input) {
  return input
}

module.exports = { part1, part2 }
