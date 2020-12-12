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
      neighbor[0] >= 0 && neighbor[0] < seats.length &&
      neighbor[1] >= 0 && neighbor[1] < seats[y].length)
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

function search (seats, y, x, delta) {
  let [ty, tx] = [y + delta[0], x + delta[1]]
  while (ty >= 0 && ty < seats.length &&
         tx >= 0 && tx < seats[ty].length) {
    const test = seats[ty][tx]
    if (test === '#') {
      return 1
    }
    if (test === 'L') {
      return 0
    }
    [ty, tx] = [ty + delta[0], tx + delta[1]]
  }
  return 0
}

function countNeightbors2 (seats, y, x) {
  const courses = [
    [-1, 0], // up
    [1, 0], // down
    [0, -1], // left
    [0, 1], // right
    [-1, -1], // up-left
    [-1, 1], // up-right
    [1, -1], // down-left
    [1, 1], // down-right
  ]
  const neighborSearchResult = courses.map(course => search(seats, y, x, course))
  return neighborSearchResult
    .reduce((a, b) => a + b, 0)
}

function step2 (seats) {
  const newSeats = []
  for (let y = 0; y < seats.length; y++) {
    const row = seats[y]
    const newRow = []
    for (let x = 0; x < row.length; x++) {
      const seat = seats[y][x]
      const nNeighbors = countNeightbors2(seats, y, x)
      switch (seat) {
        case ('L'): // empty seat
          newRow.push(nNeighbors === 0 ? '#' : 'L')
          break
        case ('#'): // filled seat
          newRow.push(nNeighbors >= 5 ? 'L' : '#')
          break
        default:
          newRow.push(seat)
      }
    }
    newSeats.push(newRow)
  }
  return newSeats
}

function part2 (input) {
  let prev = []
  let cur = parse(input)
  while (!areEqual(prev, cur)) {
    prev = cur
    cur = step2(cur)
  }
  return cur.flat().filter(it => it === '#').length
}

module.exports = {
  part1,
  part2,
  parse,
  countNeightbors,
  step,
  getNeighbors,
  areEqual,
  countNeightbors2,
  search,
}
