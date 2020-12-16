function findInvalidNumbers (tickets, validRanges) {
  return tickets.map(Number).map(numbers => {
    return numbers.filter(number => {
      return validRanges.some(range => {
        const [min, max] = range.split('-')
        return number >= Number(min) && number <= Number(max)
      })
    })
  }).flat()
}
function part1 (input) {
  // eslint-disable-next-line no-unused-vars
  const [fieldsSection, _, nearbyTicketsSection] = input.split('\n\n')
  const validRanges = fieldsSection
    .split('\n')
    .map(fieldSpec => {
      const [fieldName, numberSpec] = fieldSpec.split(': ')
      const ranges = numberSpec.split(' or ')
      return { fieldName, ranges }
    })
    .map(spec => spec.ranges)
    .flat()
  const nearbyTickets = nearbyTicketsSection
    .slice(1)
    .split('\n')
    .map(line => line.split(','))
  return findInvalidNumbers(nearbyTickets, validRanges)
    .reduce((a, b) => a + b, 0)
}

function part2 (input) {
  return input
}

module.exports = { part1, part2 }
