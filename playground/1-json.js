const fs = require('fs')

// We named it buffer because it will contain the binary data and not the string
const dataBuffer = fs.readFileSync('./1-json.json')

const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)

data.name = 'Anurag'
data.planet = 'Mars'
data.age = '30'

console.log(data.name)

