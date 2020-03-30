const path = require('path')
const express = require('express')

const app = express()
const publicDirectoryPath = path.join(__dirname, '../public')

app.use(express.static(publicDirectoryPath))

app.set('view engine', 'hbs')

// internally index will get mapped to:  ../views/index.hbs
app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather app',
        name: 'Anurag Patle'
    })

})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'Anurag Patle'
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
        helpText: 'Some help para'
    })
})


app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})