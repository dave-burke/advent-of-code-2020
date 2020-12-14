
class Computer {
  constructor () {
    this.mask = undefined
    this.mem = new Map()
  }

  applyInstruction (line) {
    if (line.startsWith('mask = ')) {
      this.mask = line.subString(7)
    } else {
      const [address, decimalValue] = line.match(/mem\[(\d+)\] = (\d+)/).groups
      this.updateMemory(address, decimalValue)
    }
  }

  updateMemory (address, decimalValue) {
    const binaryValue = this.dtob(decimalValue)
    const maskedBinary = Computer.applyMask(binaryValue, this.mask)
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
  return input
}

function part2 (input) {
  return input
}

module.exports = { part1, part2, Computer }
