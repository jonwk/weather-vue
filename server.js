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
const kelvin_to_celsius = k => (k < 0) ? '0K' : Math.round((k - 273.12) * 100) / 100;
const min_max = (arr) => {
    const min = kelvin_to_celsius(Math.min(...arr));
    const max = kelvin_to_celsius(Math.max(...arr));
    return { min: min, max: max }
}

const town = 'Dublin'

app.get('/', (req, res) => res.send('Weather App Server Side'));

app.get('/forecast/:town', getForecast);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

function getMaskAdvise(forecastSummary) {
    let pm2_5 = [];
    for (dateEntry in forecastSummary) {
        pm2_5.push(forecastSummary[dateEntry].averagePM2_5);
    }
    // console.log(pm2_5);
    const pm2_5_avg = average(pm2_5);
    return pm2_5_avg > 10;
}

function getTemperaturesSummary(forecastSummary) {
    let max = 0;
    let min = forecastSummary[Object.keys(forecastSummary)[0]].averageTemp;
    let sentiment = null;

    let minMaxObj = {};

    // Loop over every day getting the absolute min and max values
    for (dateEntry in forecastSummary) {
        minMaxObj = forecastSummary[dateEntry].temperatureRange;

        // Check if the max on this day is more than current max
        if (minMaxObj.max >= max)
            max = minMaxObj.max;

        // Check if the min on this day is more than current max
        if (minMaxObj.min <= min)
            min = minMaxObj.min;

    }



    if (max >= 20.0)
        sentiment = "hot";

    else if (max <= 20.0 && min >= 10.0)
        sentiment = "warm";

    else
        sentiment = "cold";


    return {
        sentiment: sentiment,
        max: max,
        min: min
    }

}


// function getAirPollutionForecast(lat, lon) {


// }

function getForecast(req, res) {
    let town = req.params.town;
    console.log(`Generating weather forecast for town ${town}...`);

    var forecastSummary = {};
    let isRain = false;
    let forecastSentiment = null;
    let airPollutionSummary = {};
    var lati = 0;
    var longi = 0;


    axios.get(`${base_url}/forecast?q=${town}&APPID=${API_key}`).then(
        (response) => {
            const { lat, lon } = response.data.city.coord;
            lati = lat;
            longi = lon;
            // const airPollution = getAirPollutionForecast(lat, lon);

            var weatherData = response.data.list;

            //  Loop over OpenWeather API response and extract data for each day
            for (weatherEntry in weatherData) {
                // Make the date look nicer for front-end
                let date = new Date(response.data.list[weatherEntry].dt * 1000);
                date.setHours(0, 0, 0, 0);
                date = date.toLocaleDateString();

                // First check if there is a date entry for the given date, if not create one
                if (!forecastSummary[date]) {
                    forecastSummary[date] = {
                        temperatures: [],
                        windSpeeds: [],
                        rainfallLevels: [],
                    }
                }

                // Extract temperature and wind speed data
                forecastSummary[date].temperatures.push(weatherData[weatherEntry].main.temp);
                forecastSummary[date].windSpeeds.push(weatherData[weatherEntry].wind.speed);

                // Check if there is any rain
                if (weatherData[weatherEntry].rain && weatherData[weatherEntry].rain['3h']) {
                    isRain = true;
                    forecastSummary[date].rainfallLevels.push(weatherData[weatherEntry].rain['3h']);
                }

            }

        }
    ).catch((error) => {
        console.error(error);
        res.status(400);
        res.json({
            error: "Bad Request!"
        });
    })

    axios.get(`${base_url}/air_pollution/forecast?lat=${lati}&lon=${longi}&APPID=${API_key}`).then((response1) => {
        const airPollutionData = response1.data.list;
        for (airPollutionEntry of airPollutionData) {
            let date = new Date(airPollutionEntry.dt * 1000);
            date.setHours(0, 0, 0, 0);
            date = date.toLocaleDateString();

            // First check if there is a date entry for the given date, if not create one
            if (!airPollutionSummary[date]) {
                airPollutionSummary[date] = {
                    pm2_5: []
                }
            }
            // Extract temperature and wind speed data
            airPollutionSummary[date].pm2_5.push(airPollutionEntry.components.pm2_5);
            // console.log(`${date} - PM2_5 - ${airPollutionEntry.components.pm2_5}`)
        }

        // When finished extracting data, calculate averages
        for (dateEntry in forecastSummary) {
            forecastSummary[dateEntry].averageTemp = kelvin_to_celsius(average(forecastSummary[dateEntry].temperatures));
            forecastSummary[dateEntry].averageWind = average(forecastSummary[dateEntry].windSpeeds);
            forecastSummary[dateEntry].rainfallLevels = sum(forecastSummary[dateEntry].rainfallLevels);
            forecastSummary[dateEntry].temperatureRange = min_max(forecastSummary[dateEntry].temperatures);
            forecastSummary[dateEntry].averagePM2_5 = average(airPollutionSummary[dateEntry].pm2_5);
        }

        // Get overall temperature sentiment
        temperatureSummary = getTemperaturesSummary(forecastSummary);
        maskAdvised = getMaskAdvise(forecastSummary);



        res.json({
            forecastSummary: forecastSummary,
            isRain: isRain,
            temperatureSummary: temperatureSummary,
            maskAdvised: maskAdvised
        })


    }).catch((error) => {
        console.error(error);
        res.status(400);
        res.json({
            error: "Bad Request!"
        });
    })



}

