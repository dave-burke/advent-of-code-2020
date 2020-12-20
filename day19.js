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

function resolve (allRules, rule) {
  if (rule.startsWith('"')) {
    return rule[1]
  }
  if (rule.includes('|')) {
    const [x, y] = rule.split(' | ') // assumes only 2
    return [resolve(allRules, x), resolve(allRules, y)]
  } else {
    return rule.split(' ').map(id => allRules.get(Number(id))).map(subRule => resolve(allRules, subRule))
  }
}

function validate (input, validGraph) {
  const nextChar = input[0]
  const nextValidator = validGraph[0]
  if (nextChar === nextValidator) {
    if (nextChar === undefined) return true
    return validate(input.slice(1), validGraph.slice(1))
  } else if (Array.isArray(nextValidator)) {
    return nextValidator.some(it => validate(input, [...it, ...validGraph.slice(1)]))
  } else {
    return false
  }
}

function part1 (rawInput) {
  console.log(`${new Date().toISOString()} Parsing rules`)
  const [rules, inputs] = parseInput(rawInput)
  console.log(`${new Date().toISOString()} Building validation graph`)
  const validGraph = resolve(rules, rules.get(0))
  console.log(`${new Date().toISOString()} Validating inputs`)

  let result = 0
  for (let i = 0; i < inputs.length; i++) {
    const input = inputs[i]
    console.log(`${i} ${input}`)
    const isValid = validate(input.split(''), validGraph)
    if (isValid) {
      result += 1
    }
  }
  return result
}

function part2 (input) {
  return input
}

module.exports = { part1, part2 }
