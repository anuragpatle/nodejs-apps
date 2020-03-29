const { geoCode, forecast } = require('./utils/geocode')

const location = process.argv[2]

if (location === undefined) {

    console.log('Please put location name as 3rd commnd line argument.')

} else {
    geoCode(location, (error, data) => {

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
}
