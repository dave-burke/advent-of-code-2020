class Point {
  constructor (x, y, z) {
    this.x = x
    this.y = y
    this.z = z
  }

  equals (other) {
    return this.x === other.x && this.y === other.y && this.z === other.z
  }

  computeNextState (world) {
    const nActiveNeighbors = this.neighbors.filter(neighbor => world.isActive(neighbor))
    if (world.isActive(this)) {
      return nActiveNeighbors >= 2 && nActiveNeighbors <= 3
    } else {
      return nActiveNeighbors === 3
    }
  }

  get neighbors () {
    const neighbors = []
    for (let x = -1; x < 2; x++) {
      for (let y = -1; y < 2; y++) {
        for (let z = -1; z < 2; z++) {
          const neighbor = new Point(x, y, z)
          if (neighbor.equals(this)) {
            continue
          }
          neighbors.push(neighbor)
        }
      }
    }
    return neighbors
  }
}
class World {
  constructor (input) {
    this.active = new Map()
    // TODO parse input and set values in map
  }

  isActive (point) {
    return this.active.has(point)
  }

  step () {
    // TODO find min/max for xyz and compute those values +/- 1
    // set or delete map entries based on active status
  }
}
function part1 (input) {
  return input
}

function part2 (input) {
  return input
}

module.exports = { part1, part2 }
