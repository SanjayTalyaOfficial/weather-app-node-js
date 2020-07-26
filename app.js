const request = require('request')

const url = "http://api.weatherstack.com/current?access_key=b0c04e0821fac880aa37a2b54f50c7eb&query=37.8267,-122.4233"
request({  url: url, json: true }, (error, response) => {
    console.log(response.body.current.temperature)
    console.log('It is currently ' +response.body.current.temperature + ' degrees out. It feels it is 5 degrees out')
})