import { useEffect, useState } from 'react'
import Canvas from './components/Canvas'
import fetchWeatherData from './lib/useWeatherInfo'
import MoodForm from './components/MoodForm'
import createColorPalette from './lib/createResultButtonStyle'

function App() {
  const [weather, setWeather] = useState()
  const [selectedMoodIDs, setSelectedMoodIDs] = useState([])

  useEffect(() => {
    async function getWeatherInfo() {
      await fetchWeatherData().then((res) => { setWeather(res.data) })
    }
    getWeatherInfo()
  }, [])

  const temperature = weather?.main?.temp
  const mainWeather = weather?.weather[0].main
  const weatherTheme = createColorPalette(mainWeather)
  console.log('Selected mood IDs: ', selectedMoodIDs)
  return (
    <>
      { temperature && mainWeather && <Canvas temperature={temperature} mainWeather={mainWeather} /> }
      <MoodForm weatherTheme={weatherTheme} mainWeather={mainWeather} selectedMoodIDs={selectedMoodIDs} setSelectedMoodIDs={setSelectedMoodIDs} temperature={temperature} />
    </>

  )
}

export default App
