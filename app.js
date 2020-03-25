const getNotes = require('./notes')


/** Old way (before ES6) import file constants:

    const name = require('./utils')
    console.log(name)

    -------

    New ES6 way is:
    import name from './utils'

*/
const x = getNotes()
console.log(x)

