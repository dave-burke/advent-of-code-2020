function parseLine (line) {
  const groups = line.match(/(\d+)-(\d+) (\w): (.*)/)
  return {
    min: Number(groups[1]),
    max: Number(groups[2]),
    char: groups[3],
    pwd: groups[4],
  }
}

function part1 (input) {
  const data = this.parseLine(input)
  return data
}

module.exports = { parseLine, part1 }
