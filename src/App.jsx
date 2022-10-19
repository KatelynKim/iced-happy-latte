import { useEffect, useState } from 'react'
import Canvas from './components/Canvas'
import fetchWeatherData from './lib/useWeatherInfo'
import MoodForm from './components/MoodForm'
import createResultButtonStyle from './lib/createResultButtonStyle'

function App() {
  const [weather, setWeather] = useState()
  useEffect(() => {
    async function getWeatherInfo() {
      await fetchWeatherData().then((res) => { setWeather(res.data) })
    }
    getWeatherInfo()
  }, [])

  const temperature = weather?.main?.temp
  const mainWeather = 'Clear'
  const weatherTheme = createResultButtonStyle(mainWeather)

  return (
    <>
      { temperature && mainWeather && <Canvas temperature={temperature} mainWeather={mainWeather} /> }
      <MoodForm weatherTheme={weatherTheme} mainWeather={mainWeather} />
    </>

  )
}

export default App
