function part1 (input) {
  const [earliest, buses] = input
  const quickestBus = buses.split(',').filter(it => it !== 'x')
    .map(id => ({
      id: Number(id),
      wait: (Math.ceil(earliest / id) * id) - earliest,
    })).reduce((a, b) => a.wait < b.wait ? a : b, { wait: Infinity })
  return quickestBus.id * quickestBus.wait
}

function part2 (input) {
  const buses = input[1].split(',').map((id, i) => {
    if (id === 'x') return undefined
    return { id, i }
  }).filter(bus => bus !== undefined)
  const checkBus = buses[0]
  let result
  for (let i = 1; i < Infinity; i++) {
    const check = checkBus.id * i
    if (buses.every(bus => {
      const wait = (Math.ceil(check / bus.id) * bus.id) - check
      return (wait === bus.i)
    })) {
      result = i
      break
    }
  }
  return checkBus.id * result
}

module.exports = { part1, part2 }
