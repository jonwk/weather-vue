# weather-vue

## API Calls
- run `node script.js` to make the calls in the script
• axios.get(`${base_url}/weather?q=${city}&APPID=${API_key}`)
```js
Weather in London,uk
{
    coord: { lon: -0.1257, lat: 51.5085 },
  weather: [
      {
          id: 803,
      main: 'Clouds',
      description: 'broken clouds',
      icon: '04n'
    }
  ],
  base: 'stations',
  main: {
      temp: 287.68,
    feels_like: 287.56,
    temp_min: 286.64,
    temp_max: 288.59,
    pressure: 1010,
    humidity: 91
  },
  visibility: 10000,
  wind: { speed: 4.63, deg: 120 },
  clouds: { all: 75 },
  dt: 1665949971,
  sys: {
      type: 2,
    id: 2075535,
    country: 'GB',
    sunrise: 1665901540,
    sunset: 1665939971
  },
  timezone: 3600,
  id: 2643743,
  name: 'London',
  cod: 200
}
```

• axios.get(`${base_url}/forecast?q=${town}&APPID=${API_key}`)

```js
Forecast in Dublin
{
  cod: '200',
  message: 0,
  cnt: 40,
  list: [
    {
      dt: 1665954000,
      main: [Object],
      weather: [Array],
      clouds: [Object],
      wind: [Object],
      visibility: 10000,
      pop: 0,
      sys: [Object],
      dt_txt: '2022-10-16 21:00:00'
    },
    {
      dt: 1665964800,
      main: [Object],
      weather: [Array],
      clouds: [Object],
      wind: [Object],
      visibility: 10000,
      pop: 0,
      sys: [Object],
      dt_txt: '2022-10-17 00:00:00'
    },
    .
    .
    .,
    {
      dt: 1666364400,
      main: [Object],
      weather: [Array],
      clouds: [Object],
      wind: [Object],
      visibility: 10000,
      pop: 0,
      sys: [Object],
      dt_txt: '2022-10-21 15:00:00'
    },
    {
      dt: 1666375200,
      main: [Object],
      weather: [Array],
      clouds: [Object],
      wind: [Object],
      visibility: 10000,
      pop: 0,
      sys: [Object],
      dt_txt: '2022-10-21 18:00:00'
    }
  ],
  city: {
    id: 5344157,
    name: 'Dublin',
    coord: { lat: 37.7021, lon: -121.9358 },
    country: 'US',
    population: 46036,
    timezone: -25200,
    sunrise: 1665929814,
    sunset: 1665970157
  }
}
```
