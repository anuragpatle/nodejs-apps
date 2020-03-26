var chalk = require("chalk");

getNotes = function () {
    return 'Your notes'
}

printWithWhiteBg = function (str) {
    const greenMsg = chalk.white.inverse.bold(str)
    console.log(greenMsg)
}

module.exports = getNotes