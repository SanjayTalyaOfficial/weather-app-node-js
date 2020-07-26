//
// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)

const request = require('request')
const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=b0c04e0821fac880aa37a2b54f50c7eb&query='+ latitude + ',' + longitude + '&units=f'
    request ({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to services', undefined)
        } else if (response.body.error) {
            callback('Unable to find location')
        } else {
            callback(undefined, response.body.current.weather_descriptions[0]+ '. It is currently ' +response.body.current.temperature + ' degrees out. There is a '+response.body.current.precip +'% chance of rain')
        }
    })
}


   module.exports = forecast