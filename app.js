// const request = require('request')

const request = require("request")
const geocode = require('./utils/geocode')

// // const url = "http://api.weatherstack.com/current?access_key=b0c04e0821fac880aa37a2b54f50c7eb&query=37.8267,-122.4233&units=f"
// // request({  url: url, json: true }, (error, response) => {
// //     if (error) {
// //         console.log('Unable to connect')
// //     }else if (response.body.error) {
// //         console.log('Unable to find location')
// //     }

// //     else {
// //         console.log(response.body.current.weather_descriptions[0]+ '. It is currently ' +response.body.current.temperature + ' degrees out. There is a '+response.body.current.precip +'% chance of rain')
// //     }
// // })
// // --------------- //
// // Geocoding 
// // adress => lat/long => weather

// const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoic2FuamF5dGFseWFvZmZpY2lhbCIsImEiOiJja2QydGFlYmwxOGVhMnJxdjV0bjZ2ZTNmIn0.AXM-NS8SbjbmS_TiRF-z4Q'

// request({ url: geocodeURL, json:true}, (error, response) => {
    
//     if (error) {
//         console.log('Unable to connect')
//     }
//     else if (response.body.features.length === 0) {
//         console.log('Unable to find location')
//     }
//     else {
//         const latitude = response.body.features[0].center[1]
//         const longitude = response.body.features[0].center[0]
//         console.log(longitude, latitude)
//     }
// })



geocode('Boston', (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
})