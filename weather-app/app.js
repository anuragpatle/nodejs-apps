const request = require('request')

const darkskyToken = '104ef73507faebcea8016e47ef9ac7bd'
const mapboxToken = 'pk.eyJ1IjoiYXBhdGxlIiwiYSI6ImNrOGJuMDA0ZzA3aHkzZnA5Z2o0ZXBheTEifQ.wgAlEy6hqMiMOb_ljDcefw'

const url = 'https://api.darksky.net/forecast/' + darkskyToken + '/37.8267,-122.4233'

// request({ url: url, json: true }, (error, response) => {
//     if (error) {
//         console.log('Unable to connect to weather service!')
//     } else if (response.body.error) {
//         console.log('Unable to find location')
//     } else {
//         console.log(response.body.daily.data[0].summary + ' It is currently ' + response.body.currently.temperature + ' degress out. There is a ' + response.body.currently.precipProbability + '% chance of rain.')   
//     }
// })


// Geocoding
// Address -> Lat/Long -> Weather
// We are searching latitude and longitude of 'Los Angles'
const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=' + mapboxToken + '&limit=1'


request({ url: geocodeURL, json: true }, (error, response) => {
    if (error) {
        console.log('Unable to connect to location services!')
    } else if (response.body.features.length === 0) {
        console.log('Unable to find location. Try another search.')
    } else {
        const latitude = response.body.features[0].center[0]
        const longitude = response.body.features[0].center[1]
        console.log(latitude, longitude)
    }
})