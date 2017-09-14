var fs = require('fs')

var data = fs.readFileSync('./2^17.txt').toString()

var transformed = 'module.exports = [\n' + data.split('\n').map((w) => `  '${w}',`).join('\n') + '\n]\n'

fs.writeFileSync('./words.js', transformed)
