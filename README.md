# weather-vue

## API Calls
- run `node script.js` to make the calls in the script
• axios.get(`${base_url}/weather?q=${city}&APPID=${API_key}`)
```json
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

```json
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
    {
      dt: 1665975600,
      main: [Object],
      weather: [Array],
      clouds: [Object],
      wind: [Object],
      visibility: 10000,
      pop: 0,
      sys: [Object],
      dt_txt: '2022-10-17 03:00:00'
    },
    {
      dt: 1665986400,
      main: [Object],
      weather: [Array],
      clouds: [Object],
      wind: [Object],
      visibility: 10000,
      pop: 0,
      sys: [Object],
      dt_txt: '2022-10-17 06:00:00'
    },
    {
      dt: 1665997200,
      main: [Object],
      weather: [Array],
      clouds: [Object],
      wind: [Object],
      visibility: 10000,
      pop: 0,
      sys: [Object],
      dt_txt: '2022-10-17 09:00:00'
    },
    {
      dt: 1666008000,
      main: [Object],
      weather: [Array],
      clouds: [Object],
      wind: [Object],
      visibility: 10000,
      pop: 0,
      sys: [Object],
      dt_txt: '2022-10-17 12:00:00'
    },
    {
      dt: 1666018800,
      main: [Object],
      weather: [Array],
      clouds: [Object],
      wind: [Object],
      visibility: 10000,
      pop: 0,
      sys: [Object],
      dt_txt: '2022-10-17 15:00:00'
    },
    {
      dt: 1666029600,
      main: [Object],
      weather: [Array],
      clouds: [Object],
      wind: [Object],
      visibility: 10000,
      pop: 0,
      sys: [Object],
      dt_txt: '2022-10-17 18:00:00'
    },
    {
      dt: 1666040400,
      main: [Object],
      weather: [Array],
      clouds: [Object],
      wind: [Object],
      visibility: 10000,
      pop: 0,
      sys: [Object],
      dt_txt: '2022-10-17 21:00:00'
    },
    {
      dt: 1666051200,
      main: [Object],
      weather: [Array],
      clouds: [Object],
      wind: [Object],
      visibility: 10000,
      pop: 0,
      sys: [Object],
      dt_txt: '2022-10-18 00:00:00'
    },
    {
      dt: 1666062000,
      main: [Object],
      weather: [Array],
      clouds: [Object],
      wind: [Object],
      visibility: 10000,
      pop: 0,
      sys: [Object],
      dt_txt: '2022-10-18 03:00:00'
    },
    {
      dt: 1666072800,
      main: [Object],
      weather: [Array],
      clouds: [Object],
      wind: [Object],
      visibility: 10000,
      pop: 0,
      sys: [Object],
      dt_txt: '2022-10-18 06:00:00'
    },
    {
      dt: 1666083600,
      main: [Object],
      weather: [Array],
      clouds: [Object],
      wind: [Object],
      visibility: 10000,
      pop: 0,
      sys: [Object],
      dt_txt: '2022-10-18 09:00:00'
    },
    {
      dt: 1666094400,
      main: [Object],
      weather: [Array],
      clouds: [Object],
      wind: [Object],
      visibility: 10000,
      pop: 0,
      sys: [Object],
      dt_txt: '2022-10-18 12:00:00'
    },
    {
      dt: 1666105200,
      main: [Object],
      weather: [Array],
      clouds: [Object],
      wind: [Object],
      visibility: 10000,
      pop: 0,
      sys: [Object],
      dt_txt: '2022-10-18 15:00:00'
    },
    {
      dt: 1666116000,
      main: [Object],
      weather: [Array],
      clouds: [Object],
      wind: [Object],
      visibility: 10000,
      pop: 0,
      sys: [Object],
      dt_txt: '2022-10-18 18:00:00'
    },
    {
      dt: 1666126800,
      main: [Object],
      weather: [Array],
      clouds: [Object],
      wind: [Object],
      visibility: 10000,
      pop: 0,
      sys: [Object],
      dt_txt: '2022-10-18 21:00:00'
    },
    {
      dt: 1666137600,
      main: [Object],
      weather: [Array],
      clouds: [Object],
      wind: [Object],
      visibility: 10000,
      pop: 0,
      sys: [Object],
      dt_txt: '2022-10-19 00:00:00'
    },
    {
      dt: 1666148400,
      main: [Object],
      weather: [Array],
      clouds: [Object],
      wind: [Object],
      visibility: 10000,
      pop: 0,
      sys: [Object],
      dt_txt: '2022-10-19 03:00:00'
    },
    {
      dt: 1666159200,
      main: [Object],
      weather: [Array],
      clouds: [Object],
      wind: [Object],
      visibility: 10000,
      pop: 0,
      sys: [Object],
      dt_txt: '2022-10-19 06:00:00'
    },
    {
      dt: 1666170000,
      main: [Object],
      weather: [Array],
      clouds: [Object],
      wind: [Object],
      visibility: 10000,
      pop: 0,
      sys: [Object],
      dt_txt: '2022-10-19 09:00:00'
    },
    {
      dt: 1666180800,
      main: [Object],
      weather: [Array],
      clouds: [Object],
      wind: [Object],
      visibility: 10000,
      pop: 0,
      sys: [Object],
      dt_txt: '2022-10-19 12:00:00'
    },
    {
      dt: 1666191600,
      main: [Object],
      weather: [Array],
      clouds: [Object],
      wind: [Object],
      visibility: 10000,
      pop: 0,
      sys: [Object],
      dt_txt: '2022-10-19 15:00:00'
    },
    {
      dt: 1666202400,
      main: [Object],
      weather: [Array],
      clouds: [Object],
      wind: [Object],
      visibility: 10000,
      pop: 0,
      sys: [Object],
      dt_txt: '2022-10-19 18:00:00'
    },
    {
      dt: 1666213200,
      main: [Object],
      weather: [Array],
      clouds: [Object],
      wind: [Object],
      visibility: 10000,
      pop: 0,
      sys: [Object],
      dt_txt: '2022-10-19 21:00:00'
    },
    {
      dt: 1666224000,
      main: [Object],
      weather: [Array],
      clouds: [Object],
      wind: [Object],
      visibility: 10000,
      pop: 0,
      sys: [Object],
      dt_txt: '2022-10-20 00:00:00'
    },
    {
      dt: 1666234800,
      main: [Object],
      weather: [Array],
      clouds: [Object],
      wind: [Object],
      visibility: 10000,
      pop: 0,
      sys: [Object],
      dt_txt: '2022-10-20 03:00:00'
    },
    {
      dt: 1666245600,
      main: [Object],
      weather: [Array],
      clouds: [Object],
      wind: [Object],
      visibility: 10000,
      pop: 0,
      sys: [Object],
      dt_txt: '2022-10-20 06:00:00'
    },
    {
      dt: 1666256400,
      main: [Object],
      weather: [Array],
      clouds: [Object],
      wind: [Object],
      visibility: 10000,
      pop: 0,
      sys: [Object],
      dt_txt: '2022-10-20 09:00:00'
    },
    {
      dt: 1666267200,
      main: [Object],
      weather: [Array],
      clouds: [Object],
      wind: [Object],
      visibility: 10000,
      pop: 0,
      sys: [Object],
      dt_txt: '2022-10-20 12:00:00'
    },
    {
      dt: 1666278000,
      main: [Object],
      weather: [Array],
      clouds: [Object],
      wind: [Object],
      visibility: 10000,
      pop: 0,
      sys: [Object],
      dt_txt: '2022-10-20 15:00:00'
    },
    {
      dt: 1666288800,
      main: [Object],
      weather: [Array],
      clouds: [Object],
      wind: [Object],
      visibility: 10000,
      pop: 0,
      sys: [Object],
      dt_txt: '2022-10-20 18:00:00'
    },
    {
      dt: 1666299600,
      main: [Object],
      weather: [Array],
      clouds: [Object],
      wind: [Object],
      visibility: 10000,
      pop: 0,
      sys: [Object],
      dt_txt: '2022-10-20 21:00:00'
    },
    {
      dt: 1666310400,
      main: [Object],
      weather: [Array],
      clouds: [Object],
      wind: [Object],
      visibility: 10000,
      pop: 0,
      sys: [Object],
      dt_txt: '2022-10-21 00:00:00'
    },
    {
      dt: 1666321200,
      main: [Object],
      weather: [Array],
      clouds: [Object],
      wind: [Object],
      visibility: 10000,
      pop: 0,
      sys: [Object],
      dt_txt: '2022-10-21 03:00:00'
    },
    {
      dt: 1666332000,
      main: [Object],
      weather: [Array],
      clouds: [Object],
      wind: [Object],
      visibility: 10000,
      pop: 0,
      sys: [Object],
      dt_txt: '2022-10-21 06:00:00'
    },
    {
      dt: 1666342800,
      main: [Object],
      weather: [Array],
      clouds: [Object],
      wind: [Object],
      visibility: 10000,
      pop: 0,
      sys: [Object],
      dt_txt: '2022-10-21 09:00:00'
    },
    {
      dt: 1666353600,
      main: [Object],
      weather: [Array],
      clouds: [Object],
      wind: [Object],
      visibility: 10000,
      pop: 0,
      sys: [Object],
      dt_txt: '2022-10-21 12:00:00'
    },
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