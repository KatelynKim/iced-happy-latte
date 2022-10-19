import { useEffect, useState } from 'react'
import './App.css'
import Canvas from './components/Canvas'
import useWeatherInfo from './lib/useWeatherInfo'

function App() {
  const [weather, setWeather] = useState()

  useEffect(() => {
    async function getWeatherInfo() {
      await useWeatherInfo().then((res) => { setWeather(res.data) })
    }
    getWeatherInfo()
  }, [])
  const temperature = weather?.main?.temp
  const mainWeather = weather?.weather[0].main
  return (temperature && mainWeather && <Canvas temperature={temperature} mainWeather={mainWeather} />)
}

export default App
