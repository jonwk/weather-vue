// console.log('Vue App Backend')
require("dotenv").config()
const base_url = `https://api.openweathermap.org/data/2.5`
const API_key = process.env.API_key

const axios = require('axios')


const town = 'Dublin'
axios.get(`${base_url}/forecast?q=${town}&APPID=${API_key}`).then((response) => {
    console.log(`Forecast in ${town}`)
    console.log(response.data)
})

// Sample API Call from the org
const city = `London,uk`
console.log(`Weather in ${city}`)
axios.get(`${base_url}/weather?q=${city}&APPID=${API_key}`).then((response) => {
    console.log(response.data)
})

