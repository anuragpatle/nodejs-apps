const validator = require('validator');
const getNotes = require('./notes');
var express = require('express');


/** Old way (before ES6) import file constants:

    const name = require('./utils')
    console.log(name)

    -------

    New ES6 way is:
    import name from './utils'

*/
const x = getNotes()
console.log(x)

console.log(validator.isEmail('au@g.com'))

