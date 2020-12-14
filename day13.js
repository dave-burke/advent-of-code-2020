function part1 (input) {
  const [earliest, buses] = input
  const quickestBus = buses.split(',').filter(it => it !== 'x')
    .map(id => ({
      id: Number(id),
      wait: (Math.ceil(earliest / id) * id) - earliest,
    })).reduce((a, b) => a.wait < b.wait ? a : b, { wait: Infinity })
  return quickestBus.id * quickestBus.wait
}
/*

The pattern between a, b, c... repeates every a*b*c*... iterations.
It should be possible to break up the search:
1) Find the first instance where A and B are in the right place. That will repeat after that every A*B.
2) Incrementing by A*B, look for the first time C is also in place.
3) Incrementing by A*B*C, look for the first time D is also in place.
And so on.

              ***           * *           * *    **     * *           * *           ***
A------A------A------A------A------A------A------A------A------A------A------A------A------A------A------A------A------A------A------A------A (7)
B----B----B----B----B----B----B----B----B----B----B----B----B----B----B----B----B----B----B----B----B----B----B----B----B----B----B----B----B (5)
C-C-C-C-C-C-C-C-C-C-C-C-C-C-C-C-C-C-C-C-C-C-C-C-C-C-C-C-C-C-C-C-C-C-C-C-C-C-C-C-C-C-C-C-C-C-C-C-C-C-C-C-C-C-C-C-C-C-C-C-C-C-C-C-C-C-C-C-C-C-C (2)
                            * * *                              * *                                * * *
012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890
000000000011111111112222222222333333333344444444445555555555666666666677777777778888888888999999999900000000001111111111222222222233333333334
000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000011111111111111111111111111111111111111111

*/
function part2 (input) {
  const buses = input[1].split(',').map((id, i) => {
    if (id === 'x') return undefined
    return { id: Number(id), i }
  }).filter(bus => bus !== undefined)
  let megaBus = buses.shift()
  let next = buses.shift()
  for (let i = 0; ; i += megaBus.id) {
    // As we loop, i will always be on a "correct" index of megaBus
    if ((i + next.i) % next.id === 0) {
      // B is also in the correct position at i. Continue as if A*B is the new megabus
      megaBus = { id: megaBus.id * next.id }
      next = buses.shift()
      if (next === undefined) {
        return i
      }
      i -= megaBus.id // Take a step back in case this is the one
    }
  }
}

module.exports = { part1, part2 }
