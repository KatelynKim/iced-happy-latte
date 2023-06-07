import { useEffect, useState } from 'react'
import Canvas from './components/Canvas'
import fetchWeatherData from './lib/useWeatherInfo'
import MoodForm from './components/MoodForm'
import createColorPalette from './lib/createResultButtonStyle'
import Result from './components/Result'
import CustomCircularProgress from './components/CustomCircularProgress'
import ButtonContainer from './components/ButtonContainer'

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
  const mainWeather = 'Snow'
  const weatherTheme = createColorPalette(mainWeather)
  return (
    <div>
      <ButtonContainer weatherTheme={weatherTheme} />
      { temperature && mainWeather ? <Canvas temperature={temperature} mainWeather={mainWeather} /> : <CustomCircularProgress size="10vw" /> }
      { isResultVisible ? <Result coffee={coffee} weatherTheme={weatherTheme} setIsResultVisible={setIsResultVisible} /> : (
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
