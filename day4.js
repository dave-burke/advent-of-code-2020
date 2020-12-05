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

const validators = {
  byr: (value) => value >= 1920 && value <= 2002,
  iyr: (value) => value >= 2010 && value <= 2020,
  eyr: (value) => value >= 2020 && value <= 2030,
  hgt: (value) => {
    const n = Number(value.substring(0, value.length - 2))
    if (value.endsWith('cm')) {
      return n >= 150 && n <= 193
    } else if (value.endsWith('in')) {
      return n >= 59 && n <= 76
    } else {
      return false
    }
  },
  hcl: (value) => /^#[0-9a-f]{6}$/.test(value),
  ecl: (value) => ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'].some(validValue => value === validValue),
  pid: (value) => /^\d{9}$/.test(value),
  cid: (value) => true,
}

const hasAllFields = function (passport) {
  return fields.every(field => passport.includes(`${field}:`))
}

const isValidField = function (field) {
  const [key, value] = field.split(':')
  const validator = validators[key]
  return validator ? validator(value) : false
}
const allFieldsValid = function (passport) {
  return passport.split(/\s/).every(field => isValidField(field))
}
function part1 (input) {
  const passports = input.split('\n\n')
  return passports.filter(passport => hasAllFields(passport)).length
}

function part2 (input) {
  const passports = input.split('\n\n')
  return passports.filter(passport => hasAllFields(passport) && allFieldsValid(passport)).length
}

module.exports = { part1, part2, validators }
