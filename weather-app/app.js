const { geoCode, forecast } = require('./utils/geocode')

const address = process.argv[2]

if (address === undefined) {

    console.log('Please put location name as 3rd commnd line argument.')

} else {
    geoCode(address, (error, { latitude, longitude, placeName: location }) => {

        if (error) {
            return console.log('Error', error)
        }

        forecast({ latitude, longitude }, (error, forecastData) => {
            if (error) {
                return console.log('Error', error)
            }

            console.log('Location: ' + location)
            console.log('Data', forecastData)
        })

    })
}
