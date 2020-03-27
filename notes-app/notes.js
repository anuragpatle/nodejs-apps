var chalk = require("chalk");
const fs = require('fs')

const getNotes = function () {
    return 'Your notes'
}

const addNote = function (title, body) {
    const notes = loadNotes()


    const duplicateNotes = notes.filter(note => note.title === title)

    if (duplicateNotes.length === 0) {

        // add data to 'notes' array
        notes.push({
            title: title,
            body: body
        })

        saveNotes(notes)

    } else {
        printWithRedBg('Duplicate Note!')
    }
    console.log(notes)

}

const saveNotes = function (notes) {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
    printWithGreenBg('Note has been saved!')
}

const removeNote = function (title) {
    const notes = loadNotes()

    const notesToKeep = notes.filter(note => note.title !== title)

    if (notesToKeep.length === notes.length) {
        printWithRedBg('No note found with title: ' + title)
    } else {
        printWithGreenBg('Note has been removed with title: ' + title)
        saveNotes(notesToKeep)
    }

}

const loadNotes = function () {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

const printWithWhiteBg = function (str) {
    const whiteMsg = chalk.white.inverse.bold(str)
    console.log(whiteMsg)
}

const printWithGreenBg = function (str) {
    const greenMsg = chalk.green.inverse.bold(str)
    console.log(greenMsg)
}

const printWithRedBg = function (str) {
    const redMsg = chalk.red.inverse.bold(str)
    console.log(redMsg)
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
}