import { useEffect, useState } from 'react'
import Canvas from './components/Canvas'
import fetchWeatherData from './lib/useWeatherInfo'
import MoodForm from './components/MoodForm'
import createColorPalette from './lib/createResultButtonStyle'
import Result from './components/Result'

function App() {
  const [weather, setWeather] = useState()
  const [selectedMoodIDs, setSelectedMoodIDs] = useState([])
  const [isResultVisible, setIsResultVisible] = useState(false)
  const [coffee, setCoffee] = useState('')

  useEffect(() => {
    async function getWeatherInfo() {
      await fetchWeatherData().then((res) => { setWeather(res.data) })
    }
    getWeatherInfo()
  }, [])

  const temperature = weather?.main?.temp
  const mainWeather = weather?.weather[0].main
  const weatherTheme = createColorPalette(mainWeather)
  return (
    <div>
      { temperature && mainWeather && <Canvas temperature={temperature} mainWeather={mainWeather} /> }
      { isResultVisible ? <Result coffee={coffee} weatherTheme={weatherTheme} /> : (
        <MoodForm
          weatherTheme={weatherTheme}
          mainWeather={mainWeather}
          selectedMoodIDs={selectedMoodIDs}
          setSelectedMoodIDs={setSelectedMoodIDs}
          temperature={temperature}
          setCoffee={setCoffee}
          setIsResultVisible={setIsResultVisible}
        />
      )}
    </div>
  )
}

export default App
