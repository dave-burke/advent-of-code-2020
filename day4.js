const fields = [
  'byr',
  'iyr',
  'eyr',
  'hgt',
  'hcl',
  'ecl',
  'pid',
  // 'cid',
]

const hasAllFields = function (passport) {
  return fields.every(field => passport.includes(`${field}:`))
}

const isValidField = function (field) {
  const [key, value] = field.split(':')
  switch (key) {
    case ('byr'):
      return value >= 1920 && value <= 2002
    case ('iyr'):
      return value >= 2010 && value <= 2020
    case ('eyr'):
      return value >= 2020 && value <= 2030
    case ('hgt'):
      return true // TODO 150-193cm or 59-76in
    case ('hcl'):
      return true // TODO a # followed by exactly six characters 0-9 or a-f
    case ('ecl'):
      return true // TODO exactly one of: amb blu brn gry grn hzl oth.
    case ('pid'):
      return true // TODOa nine-digit number, including leading zeroes.
    default:
      return true
  }
}
const allFieldsValid = function (passport) {
  return fields.every(field => isValidField(field))
}
function part1 (input) {
  const passports = input.split('\n\n')
  return passports.filter(passport => hasAllFields(passport)).length
}

function part2 (input) {
  const passports = input.split('\n\n')
  return passports.filter(passport => hasAllFields(passport) && allFieldsValid(passport)).length
}

module.exports = { part1, part2 }
