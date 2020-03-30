const path = require('path')
const express = require('express')
const hbs = require('hbs')
const { geoCode, forecast } = require('../../weather-app/utils/geocode')

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

    const address = req.query.address

    if (address === undefined) {
        return res.send({
            error: 'You must provide an address.'
        })
    } else {

        geoCode(address, (error, { latitude, longitude, placeName: location }) => {

            if (error) {
                return res.send({
                    Error: error,
                    location: location
                })
            }

            forecast({ latitude, longitude }, (error, forecastData) => {

                if (error) {
                    return res.send({
                        Error: error,
                        location: location
                    })
                } else {
                    // console.log('Location: ' + location)
                    // console.log('Data', forecastData)

                    res.send({
                        forecast: forecastData,
                        location: location
                    })
                }



            })

        })


    }


})

app.get('/help', (req, res) => {
    res.render('help', {
        helpText: 'Some help para',
        title: 'Help',
        name: 'Anurag Patle for help'
    })
})


app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404',
        errorMsg: 'Help content not found!',
        name: 'Anurag Patle For Error!'
    })

})

// This request has to come at last after all the request mapping.
// Reason: is express see for the request in the same order you have placed in file while coding.
app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        errorMsg: 'Page not found!',
        name: 'Anurag Patle!'
    })

})


app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})