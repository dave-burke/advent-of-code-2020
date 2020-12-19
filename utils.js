const fs = require('fs')

module.exports = {

  isNumeric: function (n) {
    // NaN, Infinity, and -Infinity are not Finite
    // and not numeric according to this
    return isFinite(Number(n))
  },

  readInputRaw: async function (file) {
    const promise = new Promise((resolve, reject) => {
      fs.readFile(file, 'utf8', function (err, data) {
        if (err) {
          reject(err)
        }
        resolve(data)
      })
    })
    return promise
  },

  readInput: async function (file) {
    const data = await this.readInputRaw(file)
    return data.split('\n')
  },

  forEachPair: function (input, callback) {
    for (let i = 0; i < input.length; i++) {
      for (let j = i + 1; j < input.length; j++) {
        const [a, b] = [input[i], input[j]]
        const cont = callback(a, b, i, j, input)
        if (cont === false) {
          return
        }
      }
    }
  },

}
