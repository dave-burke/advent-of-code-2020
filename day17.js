class Point {
  constructor (x, y, z) {
    this.x = x
    this.y = y
    this.z = z
  }

  toString () {
    return [this.x, this.y, this.z].join(',')
  }

  static fromString (s) {
    return new Point(...s.split(','))
  }

  equals (other) {
    return this.x === other.x && this.y === other.y && this.z === other.z
  }

  computeNextState (world) {
    const nActiveNeighbors = this.neighbors
      .filter(neighbor => world.isActive(neighbor))
      .length
    if (world.isActive(this)) {
      return nActiveNeighbors >= 2 && nActiveNeighbors <= 3
    } else {
      return nActiveNeighbors === 3
    }
  }

  get neighbors () {
    const neighbors = []
    for (let dx = -1; dx <= 1; dx++) {
      for (let dy = -1; dy <= 1; dy++) {
        for (let dz = -1; dz <= 1; dz++) {
          const neighbor = new Point(this.x + dx, this.y + dy, this.z + dz)
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
    this.active = new Set()
    const rows = input.map(row => row.split(''))
    for (let y = 0; y < rows.length; y++) {
      for (let x = 0; x < rows[y].length; x++) {
        if (rows[y][x] === '#') {
          this.active.add(new Point(x, y, 0).toString())
        }
      }
    }
  }

  isActive (point) {
    return this.active.has(point.toString())
  }

  extreme (field, comparator, initialValue) {
    const keys = Array.from(this.active.entries())
    return keys
      .map(entry => entry[0])
      .map(Point.fromString)
      .reduce((result, next) => comparator(result, next[field]), initialValue)
  }

  get minX () { return this.extreme('x', Math.min, Infinity) }
  get minY () { return this.extreme('y', Math.min, Infinity) }
  get minZ () { return this.extreme('z', Math.min, Infinity) }
  get maxX () { return this.extreme('x', Math.max, -Infinity) }
  get maxY () { return this.extreme('y', Math.max, -Infinity) }
  get maxZ () { return this.extreme('z', Math.max, -Infinity) }

  step () {
    const newSet = new Set()
    for (let x = this.minX - 1; x <= this.maxX + 1; x++) {
      for (let y = this.minY - 1; y <= this.maxY + 1; y++) {
        for (let z = this.minZ - 1; z <= this.maxZ + 1; z++) {
          const point = new Point(x, y, z)
          const nextState = point.computeNextState(this)
          if (nextState === true) {
            newSet.add(point.toString())
          }
        }
      }
    }
    this.active = newSet
  }

  get nActiveCells () {
    return this.active.size
  }
}

function part1 (input) {
  const world = new World(input)
  for (let i = 0; i < 6; i++) {
    world.step()
  }
  return world.nActiveCells
}

class Point4 {
  constructor (x, y, z, w) {
    this.x = x
    this.y = y
    this.z = z
    this.w = w
  }

  toString () {
    return [this.x, this.y, this.z, this.w].join(',')
  }

  static fromString (s) {
    return new Point4(...s.split(','))
  }

  equals (other) {
    return this.x === other.x && this.y === other.y && this.z === other.z && this.w === other.w
  }

  computeNextState (world) {
    const nActiveNeighbors = this.neighbors
      .filter(neighbor => world.isActive(neighbor))
      .length
    if (world.isActive(this)) {
      return nActiveNeighbors >= 2 && nActiveNeighbors <= 3
    } else {
      return nActiveNeighbors === 3
    }
  }

  get neighbors () {
    const neighbors = []
    for (let dx = -1; dx <= 1; dx++) {
      for (let dy = -1; dy <= 1; dy++) {
        for (let dz = -1; dz <= 1; dz++) {
          for (let dw = -1; dw <= 1; dw++) {
            const neighbor = new Point4(this.x + dx, this.y + dy, this.z + dz, this.w + dw)
            if (neighbor.equals(this)) {
              continue
            }
            neighbors.push(neighbor)
          }
        }
      }
    }
    return neighbors
  }
}
class World4 {
  constructor (input) {
    this.active = new Set()
    const rows = input.map(row => row.split(''))
    for (let y = 0; y < rows.length; y++) {
      for (let x = 0; x < rows[y].length; x++) {
        if (rows[y][x] === '#') {
          this.active.add(new Point4(x, y, 0, 0).toString())
        }
      }
    }
  }

  isActive (point) {
    return this.active.has(point.toString())
  }

  extreme (field, comparator, initialValue) {
    const keys = Array.from(this.active.entries())
    return keys
      .map(entry => entry[0])
      .map(Point4.fromString)
      .reduce((result, next) => comparator(result, next[field]), initialValue)
  }

  get minX () { return this.extreme('x', Math.min, Infinity) }
  get minY () { return this.extreme('y', Math.min, Infinity) }
  get minZ () { return this.extreme('z', Math.min, Infinity) }
  get minW () { return this.extreme('w', Math.min, Infinity) }
  get maxX () { return this.extreme('x', Math.max, -Infinity) }
  get maxY () { return this.extreme('y', Math.max, -Infinity) }
  get maxZ () { return this.extreme('z', Math.max, -Infinity) }
  get maxW () { return this.extreme('w', Math.max, -Infinity) }

  step () {
    const newSet = new Set()
    for (let x = this.minX - 1; x <= this.maxX + 1; x++) {
      for (let y = this.minY - 1; y <= this.maxY + 1; y++) {
        for (let z = this.minZ - 1; z <= this.maxZ + 1; z++) {
          for (let w = this.minW - 1; w <= this.maxW + 1; w++) {
            const point = new Point4(x, y, z, w)
            const nextState = point.computeNextState(this)
            if (nextState === true) {
              newSet.add(point.toString())
            }
          }
        }
      }
    }
    this.active = newSet
  }

  get nActiveCells () {
    return this.active.size
  }
}

function part2 (input) {
  const world = new World4(input)
  const start = new Date()
  for (let i = 0; i < 6; i++) {
    console.log(i)
    world.step()
  }
  const end = new Date()
  const duration = end.getTime() - start.getTime()
  const xLength = world.maxX - world.minX
  const yLength = world.maxY - world.minY
  const zLength = world.maxZ - world.minZ
  const wLength = world.maxW - world.minW
  console.log(`Finished in ${duration}ms. The world is ${xLength}x${yLength}x${zLength}x${wLength}}`)
  return world.nActiveCells
}

module.exports = { part1, part2 }
