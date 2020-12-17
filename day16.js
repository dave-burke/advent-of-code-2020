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
  /* Parse input */
  const [fieldsSection, yourTicketSection, nearbyTicketsSection] = input.split('\n\n')
  const fields = fieldsSection
    .split('\n')
    .reduce((arr, next) => {
      const [fieldName, numberSpec] = next.split(': ')
      const ranges = numberSpec.split(' or ')
        .map(spec => {
          const [min, max] = spec.split('-').map(Number)
          return { min, max }
        })
      return [...arr, { fieldName, ranges }]
    }, [])
  const yourTicket = yourTicketSection
    .split('\n')[1]
    .split(',')
    .map(Number)
  const nearbyTickets = nearbyTicketsSection
    .split('\n')
    .slice(1)
    .map(ticketLine => ticketLine.split(',').map(Number))

  /* Validate tickets */
  function isValidForRanges (value, ranges) {
    return ranges.some(range => value >= range.min && value <= range.max)
  }

  function isValidTicket (ticket, fields) {
    return ticket.every(value => {
      return fields.some(field => isValidForRanges(value, field.ranges))
    })
  }

  const nearbyValidTickets = nearbyTickets.filter(ticket => isValidTicket(ticket, fields))

  /* Identify columns */
  const nFields = yourTicket.length
  // Initialize candidate arrays
  const fieldCandidates = new Map()
  for (const field of fields) {
    fieldCandidates.set(field.fieldName, [])
  }
  // Find matches
  for (let fieldIndex = 0; fieldIndex < nFields; fieldIndex++) {
    const nearbyValues = nearbyValidTickets.map(ticket => ticket[fieldIndex])
    // Check each field to see if any match all
    // tickets at this index
    for (const fieldSpec of fields) {
      if (nearbyValues.every(value => isValidForRanges(value, fieldSpec.ranges))) {
        fieldCandidates.get(fieldSpec.fieldName).push(fieldIndex)
      }
    }
  }

  /* Narrow down matches */
  const fieldOrder = []
  while (fieldCandidates.size > 0) {
    for (const [fieldName, possibleColumns] of fieldCandidates) {
      const remainingPossibilities = possibleColumns.filter(index => fieldOrder[index] === undefined)
      if (remainingPossibilities.length === 1) {
        fieldOrder[remainingPossibilities[0]] = fieldName
        fieldCandidates.delete(fieldName)
      }
    }
  }
  return fieldOrder
}

module.exports = { part1, part2 }
