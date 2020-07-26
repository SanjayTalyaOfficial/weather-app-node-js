const request = require('request')

const url = "http://api.weatherstack.com/current?access_key=b0c04e0821fac880aa37a2b54f50c7eb&query=37.8267,-122.4233&units=f"
request({  url: url, json: true }, (error, response) => {
    console.log(response.body.current.weather_descriptions[0]+ '. It is currently ' +response.body.current.temperature + ' degrees out. There is a '+response.body.current.precip +'% chance of rain')
})

// Geocoding 
// adress => lat/long => weather

const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoic2FuamF5dGFseWFvZmZpY2lhbCIsImEiOiJja2QydGFlYmwxOGVhMnJxdjV0bjZ2ZTNmIn0.AXM-NS8SbjbmS_TiRF-z4Q&limit=1'

request({ url: geocodeURL, json:true}, (error, response) => {
    const latitude = response.body.features[0].center[1]
    const longitude = response.body.features[0].center[0]
    console.log(longitude, latitude)
})