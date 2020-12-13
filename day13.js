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
  return input
}

module.exports = { part1, part2 }
