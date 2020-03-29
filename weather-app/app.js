const { geoCode, forecast } = require('./utils/geocode')

geoCode('Pune', (error, data) => {

    if (error) {
        return console.log('Error', error)
    }

    forecast(data.latitude, data.longitude, (error, forecastData) => {
        if (error) {
            return console.log('Error', error)
        }

        console.log('Location: ' + data.placeName)
        console.log('Data', forecastData)
    })

})


