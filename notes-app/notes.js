var chalk = require("chalk");
const fs = require('fs')

const getNote = (title) => {

    const notes = loadNotes()

    const note = notes.find(note => note.title === title)

    if (note) {
        printWithWhiteBg(note.title)
        console.log(note.body)
    } else {
        printWithRedBg('No note found!')
    }
}

const addNote = (title, body) => {
    const notes = loadNotes()

    // Filter will give multiple result
    // const duplicateNotes = notes.filter(note => note.title === title)
    // Find will give only first result
    const duplicateNote = notes.find(note => note.title === title)

    debugger

    if (!duplicateNote) {

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

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
    printWithGreenBg('Note has been saved!')
}

const removeNote = (title) => {
    const notes = loadNotes()

    const notesToKeep = notes.filter(note => note.title !== title)

    if (notesToKeep.length === notes.length) {
        printWithRedBg('No note found with title: ' + title)
    } else {
        printWithGreenBg('Note has been removed with title: ' + title)
        saveNotes(notesToKeep)
    }

}

const listNotes = () => {
    const notes = loadNotes()

    notes.forEach(note => {
        printWithWhiteBg(note.title)
    });

}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

const printWithWhiteBg = (str) => {
    const whiteMsg = chalk.white.inverse.bold(str)
    console.log(whiteMsg)
}

const printWithGreenBg = (str) => {
    const greenMsg = chalk.green.inverse.bold(str)
    console.log(greenMsg)
}

const printWithRedBg = (str) => {
    const redMsg = chalk.red.inverse.bold(str)
    console.log(redMsg)
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    getNote: getNote
}