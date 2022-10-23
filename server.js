// console.log('Vue App Backend')
require("dotenv").config()

const axios = require('axios')
// const cors = require('cors');
const express = require('express');
const { get } = require("http");
const path = require('path');

const app = express();
const port = 3000
const base_url = `https://api.openweathermap.org/data/2.5`
const API_key = process.env.API_key

const average = arr => arr.reduce((p, c) => p + c, 0) / arr.length;
const sum = arr => arr.reduce((p, c) => p + c, 0);

const town = 'Dublin'

app.get('/', (req, res) => res.send('Weather App Server Side'));

app.get('/forecast/:town', getForecast);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));


function getForecast(req, res) {
    let town = req.params.town;
    console.log(`Generating weather forecast for town ${town}...`);

    let forecastSummary = {};
    let isRain = false;
    let forecastSentiment = null;

    axios.get(`${base_url}/forecast?q=${town}&APPID=${API_key}`).then(
        (response) => {
            res.json({
                data: response.data
            })
        }
    ).catch((error) => {
        console.error(error);
        res.status(400);
        res.json({
            error: "Bad Request!"
        });
    })
}