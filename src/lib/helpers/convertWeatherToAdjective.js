function convertWeatherToAdjective(weather) {
  switch (weather) {
    case 'Snow':
      return 'SNOWY'
    case 'Rain':
      return 'RAINY'
    case 'Clouds':
      return 'CLOUDY'
    case 'Mist':
      return 'FOGGY'
    case 'Fog':
      return 'FOGGY'
    case 'Smoke':
      return 'SMOKEY'
    case 'Haze':
      return 'DUSTY'
    case 'Dust':
      return 'DUSTY'
    case 'Ash':
      return 'DUSTY'
    case 'Drizzle':
      return 'RAINY'
    case 'Thunderstorm':
      return 'STORMY'
    case 'Squall':
      return 'STORMY'
    case 'Tornado':
      return 'WINDY'
    default:
      return weather
  }
}

export default convertWeatherToAdjective
