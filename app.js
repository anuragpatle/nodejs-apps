var chalk = require("chalk");
const getMessage = require('./notes')

printWithWhiteBg = function (str) {
  const greenMsg = chalk.white.inverse.bold(str)
  console.log(greenMsg)
}

const command = process.argv[2]

if (command === 'add') {
  
  printWithWhiteBg('Adding Note!')

} else if (command === 'remove') {
  
  printWithWhiteBg('Remove Note!')

} 

