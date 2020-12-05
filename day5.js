class Ticket {
  constructor (seat) {
    [this.seat, this.rowSpec, this.colSpec] = /^([FB]{7})([RL]{3})$/.exec(seat)
  }

  binarySpacePartition (spec, lowChar, highChar, min, max) {
    return spec.split('').reduce((result, nextChar) => {
      const diff = result[1] - result[0]
      const mid = result[0] + Math.floor(diff / 2)
      if (nextChar === lowChar) {
        return [result[0], mid]
      }
      if (nextChar === highChar) {
        return [mid + 1, result[1]]
      } else {
        throw new Error(`Unexpected spec char ${nextChar}`)
      }
    }, [min, max])[0]
  }

  get row () {
    return this.binarySpacePartition(this.rowSpec, 'F', 'B', 0, 127)
  }

  get col () {
    return this.binarySpacePartition(this.colSpec, 'L', 'R', 0, 7)
  }

  get id () {
    return this.row * 8 + this.col
  }
}

function part1 (input) {
  return input
    .map(seat => new Ticket(seat))
    .map(ticket => Number(ticket.id))
    .reduce((a, b) => Math.max(a, b), -Infinity)
}

function part2 (input) {
  return input
    .map(seat => new Ticket(seat))
    .map(ticket => Number(ticket.id))
    .sort((a, b) => a - b)
    .find((id, i, arr) => i !== 0 && arr[i] - arr[i - 1] !== 1) - 1
}

module.exports = { part1, part2, Ticket }
