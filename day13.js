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
  const checkBus = buses.shift()
  const sortedDescendingBuses = buses.sort((a, b) => b.id - a.id)
  let result
  const start = new Date()
  console.log(start.toISOString())
  for (let i = 1; i < Infinity; i++) {
    const check = checkBus.id * i
    if (i % 1_000_000_000 === 0) {
      const now = new Date()
      const duration = (now.getTime() - start.getTime()) / 1000
      console.log(`${now.toISOString()}: ${check} in ${duration} seconds`)
    }
    if (sortedDescendingBuses.every(bus => {
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
