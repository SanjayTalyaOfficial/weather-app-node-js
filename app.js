// const request = require('request')
const request = require("request")
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const address = process.argv[2]

if (!address) {
    console.log('Please provide an adress')
} else {
    geocode('Boston', (error, data) => {
        if (error) {
            return console.log(error)
        } 
        
        forecast(data.latitude, data.longitude, (error, forecastData) => {
            if (error) {
                return console.log(error)
            }
    
            console.log(data.location)
            console.log(forecastData)
        })
    })
    
    

}

console.log(process.argv)

