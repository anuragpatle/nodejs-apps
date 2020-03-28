const request = require('request')

const url = 'https://api.darksky.net/forecast/104ef73507faebcea8016e47ef9ac7bd/37.8267,-122.4233'

request({ url: url }, (error, response) => {
    const data = JSON.parse(response.body)
    console.log(data.currently)
})