const request = require('request')


const darkskyToken = '104ef73507faebcea8016e47ef9ac7bd'
const mapboxToken = 'pk.eyJ1IjoiYXBhdGxlIiwiYSI6ImNrOGJuMDA0ZzA3aHkzZnA5Z2o0ZXBheTEifQ.wgAlEy6hqMiMOb_ljDcefw'

const foreCastUrl = 'https://api.darksky.net/forecast/' + darkskyToken + '/37.8267,-122.4233'

// Geocoding
// Address -> Lat/Long -> Weather
// We are searching latitude and longitude of 'Los Angles'
const geoCode = (address, callback) => {
    url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=' + mapboxToken + '&limit=1'
    //console.log('geocodeURL: ' + geocodeURL)
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to the network!')
        } else if (body.features.length === 0) {
            callback('Unable to find location. Try another search.')
        } else {

            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                placeName: body.features[0].place_name
            })
        }
    })

}

const forecast = ({ latitude, longitude }, callback) => {
    const url = 'https://api.darksky.net/forecast/' + darkskyToken + '/37.8267,-122.4233'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (body.error) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined,
                body.daily.data[0].summary + ' It is currently '
                + body.currently.temperature + ' degress out. There is a '
                + body.currently.precipProbability + '% chance of rain.')
        }
    })
}


module.exports = { geoCode, forecast }