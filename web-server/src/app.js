const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()
const publicDirectoryPath = path.join(__dirname, '../public')
const viewPath = path.join(__dirname, '../templates/views')
const partialPath = path.join(__dirname, '../templates/partials')

app.use(express.static(publicDirectoryPath))

app.set('view engine', 'hbs')
app.set('views', viewPath)
hbs.registerPartials(partialPath)

// internally index will get mapped to:  ../views/index.hbs
app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather app',
        name: 'Anurag Patle for indexpage'
    })

})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'Anurag Patle for about'
    })

})


app.get('/weather', (req, res) => {
    res.send({
        forecast: 'It is snowing',
        location: 'Philadelphia'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        helpText: 'Some help para',
        title: 'Help',
        name: 'Anurag Patle for help'
    })
})


app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})