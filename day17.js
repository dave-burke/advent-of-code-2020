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
    const rows = input.map(row => row.split(''))
    for (let y = 0; y < rows.length; y++) {
      for (let x = 0; x < rows[y].length; x++) {
        if (rows[y][x] === '#') {
          this.active.set(new Point(x, y, 0), true)
        }
      }
    }
  }

  isActive (point) {
    return this.active.has(point)
  }

  extreme (field, comparator, initialValue) {
    return Array.from(this.active.keys())
      .reduce((a, b) => comparator(a[field], b[field]), initialValue)
  }

  get minX () { return this.extreme('x', Math.min, Infinity) }
  get minY () { return this.extreme('y', Math.min, Infinity) }
  get minZ () { return this.extreme('z', Math.min, Infinity) }
  get maxX () { return this.extreme('x', Math.max, -Infinity) }
  get maxY () { return this.extreme('y', Math.max, -Infinity) }
  get maxZ () { return this.extreme('z', Math.max, -Infinity) }

  step () {
    const newMap = new Map()
    for (let x = this.minX - 1; x <= this.maxX + 1; x++) {
      for (let y = this.minY - 1; y <= this.maxY + 1; y++) {
        for (let z = this.minZ - 1; z <= this.maxZ + 1; z++) {
          const point = new Point(x, y, z)
          newMap.set(point, point.computeNextState(this))
        }
      }
    }
    this.active = newMap
  }

  get nActiveCells () {
    return Array.from(this.active.values())
      .filter(cell => cell === true)
      .length
  }
}

function part1 (input) {
  const world = new World(input)
  for (const i of [0, 1, 2, 3, 4, 5]) {
    world.step()
  }
  return world.nActiveCells
}

function part2 (input) {
  return input
}

module.exports = { part1, part2 }
