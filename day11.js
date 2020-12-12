function parse (input) {
  return input.map(line => line.split(''))
}

function getNeighbors (seats, y, x) {
  const neighborCoords = [
    [y - 1, x - 1],
    [y - 1, x],
    [y - 1, x + 1],
    [y, x - 1],
    [y, x + 1],
    [y + 1, x - 1],
    [y + 1, x],
    [y + 1, x + 1],
  ]
  return neighborCoords
    .filter(neighbor =>
      neighbor[0] >= 0 && neighbor[0] < seats[y].length &&
      neighbor[1] >= 0 && neighbor[1] < seats.length)
    .map(coords => seats[coords[0]][coords[1]])
}

function countNeightbors (seats, y, x) {
  return getNeighbors(seats, y, x)
    .filter(space => space === '#')
    .length
}

function step (seats) {
  const newSeats = []
  for (let y = 0; y < seats.length; y++) {
    const row = seats[y]
    const newRow = []
    for (let x = 0; x < row.length; x++) {
      const seat = seats[y][x]
      const nNeighbors = countNeightbors(seats, y, x)
      switch (seat) {
        case ('L'): // empty seat
          newRow.push(nNeighbors === 0 ? '#' : 'L')
          break
        case ('#'): // filled seat
          newRow.push(nNeighbors >= 4 ? 'L' : '#')
          break
        default:
          newRow.push(seat)
      }
    }
    newSeats.push(newRow)
  }
  return newSeats
}

function areEqual (seatsA, seatsB) {
  const flatA = seatsA.flat()
  const flatB = seatsB.flat()
  return flatA.length === flatB.length &&
  flatA.every((seat, i) => seat === flatB[i])
}

function part1 (input) {
  let prev = []
  let cur = parse(input)
  while (!areEqual(prev, cur)) {
    prev = cur
    cur = step(cur)
  }
  return cur.flat().filter(it => it === '#').length
}

function part2 (input) {
  return input
}

module.exports = { part1, part2, parse, countNeightbors, step, getNeighbors, areEqual }
