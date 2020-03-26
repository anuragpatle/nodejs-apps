const yargs = require('yargs')
const getNotes = require('./notes.js')


// Customizing yargs number
// PS D:\NodeJs_WorkSpace\nodejs-notes-app> node app.js --version
// 1.1.0
yargs.version('1.1.0')

//console.log(yargs.argv)

// Create add command
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  handler: function () {
      console.log('Adding a new note!')
  }
})

// Create remove command
yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  handler: function () {
      console.log('Removing the note')
  }
})

// Create list command
yargs.command({
  command: 'list',
  describe: 'List your notes',
  handler: function () {
      console.log('Listing out all notes')
  }
})

// Create read command
yargs.command({
  command: 'read',
  describe: 'Read a note',
  handler: function () {
      console.log('Reading a note')
  }
})

const args = yargs.argv
