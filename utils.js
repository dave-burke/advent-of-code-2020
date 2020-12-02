const fs = require('fs')

module.exports = {

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

}
