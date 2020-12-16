function findInvalidNumbers (tickets, validRanges) {
  return tickets.map(numbers => {
    return numbers.map(Number).filter(number => {
      return !validRanges.some(range => {
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
    .split('\n')
    .slice(1)
    .map(line => line.split(','))
  return findInvalidNumbers(nearbyTickets, validRanges)
    .reduce((a, b) => a + b, 0)
}

function part2 (input) {
  const [fieldsSection, yourTicketSection, nearbyTicketsSection] = input.split('\n\n')
  const fieldRanges = fieldsSection
    .split('\n')
    .reduce((map, next) => {
      const [fieldName, numberSpec] = next.split(': ')
      const ranges = numberSpec.split(' or ')
        .map(spec => {
          const [min, max] = spec.split('-')
          return { min, max }
        })
      map.set(fieldName, ranges)
      return map
    }, new Map())
  const yourTicket = yourTicketSection
    .split('\n')[1]
    .split(',')
  const nearbyTickets = nearbyTicketsSection
    .split('\n')
    .slice(1)
    .map(ticketLine => ticketLine.split(','))

  const nFields = yourTicket.length
  return input
}

module.exports = { part1, part2 }
