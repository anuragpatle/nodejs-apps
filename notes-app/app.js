const yargs = require('yargs')
const notes = require('./notes.js')


// Customizing yargs number
// PS D:\NodeJs_WorkSpace\nodejs-notes-app> node app.js --version
// 1.1.0
yargs.version('1.1.0')

//console.log(yargs.argv)

// Create add command
// builder: is for providing options to the command.
// demandOption: to make a particular command option compulsory.
// type: to make a particular command option not accept input other than the defined type (in our case string).
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    },
    body: {
      describe: 'Note Body',
      demandOption: 'true',
      type: 'string'
    }
  },
  handler(argv) {
    notes.addNote(argv.title, argv.body)
  }
})

// Create remove command
yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    notes.removeNote(argv.title)
  }
})

// Create list command.
yargs.command({
  command: 'list',
  describe: 'List your notes',
  handler() {
    notes.listNotes();
  }
})

// Create read command
yargs.command({
  command: 'read',
  describe: 'Read a note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    notes.getNote(argv.title)
  }
})

// Without this line, our yargs.command(..) won't get initialized. 
// Way arround to initialize yargs.command(..) is to call yargs.argv. E.g. console.log(yargs.argv)
yargs.parse()


