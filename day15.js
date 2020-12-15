function solve (input, iterations) {
  const turns = input.split(',').map(Number)
  const memory = new Map()
  for (let i = 0; i < turns.length; i++) {
    memory.set(turns[i], [i])
  }

  for (let i = turns.length; i < iterations; i++) {
    const lastNumber = turns[turns.length - 1]
    const priorTurns = memory.get(lastNumber)

    let nextNumber = 0
    if (priorTurns.length > 1) {
      const a = priorTurns[priorTurns.length - 1]
      const b = priorTurns[priorTurns.length - 2]
      nextNumber = a > b ? a - b : b - a
    }
    turns.push(nextNumber)
    const nextPriorTurns = memory.get(nextNumber)
    if (nextPriorTurns === undefined) {
      memory.set(nextNumber, [i])
    } else {
      nextPriorTurns.push(i)
      memory.set(nextNumber, nextPriorTurns)
    }
  }
  return turns[turns.length - 1]
}
function part1 (input) {
  return solve(input, 2020)
}

function part2 (input) {
  return solve(input, 30_000_000)
}

module.exports = { part1, part2 }
