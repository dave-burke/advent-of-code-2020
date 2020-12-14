
class Computer {
  constructor () {
    this.mask = undefined
    this.mem = new Map()
  }

  applyInstruction (line) {
    if (line.startsWith('mask = ')) {
      this.mask = line.substring(7)
    } else {
      const { address, decimalValue } = line.match(/mem\[(?<address>\d+)\] = (?<decimalValue>\d+)/).groups
      this.updateMemory(address, decimalValue)
    }
  }

  updateMemory (address, decimalValue) {
    const binaryValue = Computer.dtob(decimalValue)
    const paddedBinary = binaryValue.padStart(36, '0')
    const maskedBinary = Computer.applyMask(paddedBinary, this.mask)
    const maskedDecimal = Computer.btod(maskedBinary)
    this.mem.set(address, maskedDecimal)
  }

  static dtob (decimalValue) {
    return Number(decimalValue).toString(2)
  }

  static btod (binaryValue) {
    return parseInt(binaryValue, 2)
  }

  static applyMask (valueBits, mask) {
    const result = []
    for (let i = 0; i < valueBits.length; i++) {
      if (mask[i] === 'X') {
        result.push(valueBits[i])
      } else {
        result.push(mask[i])
      }
    }
    return result.join('')
  }
}

function part1 (input) {
  const computer = new Computer()
  for (const line of input) {
    computer.applyInstruction(line)
  }
  return Array.from(computer.mem.values())
    .reduce((a, b) => a + b, 0)
}

class Computer2 {
  constructor () {
    this.mask = undefined
    this.mem = new Map()
  }

  static dtob (decimalValue) {
    return Number(decimalValue).toString(2)
  }

  static btod (binaryValue) {
    return parseInt(binaryValue, 2)
  }

  applyInstruction (line) {
    if (line.startsWith('mask = ')) {
      this.mask = line.substring(7)
    } else {
      const { address, binaryValue } = line.match(/mem\[(?<address>\d+)\] = (?<binaryValue>\d+)/).groups
      this.updateMemory(address, binaryValue)
    }
  }

  updateMemory (rawAddress, binaryValue) {
    for (const address of this.applyMask(rawAddress)) {
      this.mem.set(address, binaryValue)
    }
  }

  applyMask (address) {
    // TODO apply mask to address and return permutations for all X values
    // permutations are every binary value 0 -> nX^2
    // e.g. for 4 Xs, it is every binary value from 0 to 4^2=16
    const result = []
    for (let i = 0; i < address.length; i++) {
      if (this.mask[i] === 'X') {
        result.push('X')
      } else if (this.mask[i] === '1') {
        result.push(1)
      } else {
        result.push(address[i])
      }
    }
    const nX = result.filter(bit => bit === 'X').length
    const nPermutations = Math.pow(nX, 2)
    const permutations = []
    for (let i = 0; i < nPermutations; i++) {
      const replacementBits = Computer2.dtob(i)
      const permutation = []
      for (let j = 0; j < result.length; j++) {
        if (result[j] === 'X') {
          permutation.push(replacementBits.shift())
        } else {
          permutation.push(result[j])
        }
      }
      permutations.push(permutation.join(''))
    }
    return permutations
  }
}

function part2 (input) {
  const computer = new Computer2()
  for (const line of input) {
    computer.applyInstruction(line)
  }
  return Array.from(computer.mem.values())
    .reduce((a, b) => a + b, 0)
}

module.exports = { part1, part2, Computer }
