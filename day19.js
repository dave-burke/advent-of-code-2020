function mapRules (ruleStrings) {
  return ruleStrings.map(ruleString => ruleString.split(': '))
    .reduce((map, next) => map.set(next[0], next[1]), new Map())
}
function parseInput (rawInput) {
  const [rulesSpec, inputSpec] = rawInput.split('\n\n')
  const ruleStrings = rulesSpec.split('\n')
  const rules = mapRules(ruleStrings)
  const inputs = inputSpec.split('\n')
  return [rules, inputs]
}

function testInput (allRules, checkRule, input) {
  // TODO
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
