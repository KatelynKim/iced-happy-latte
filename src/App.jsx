import { useEffect, useState } from 'react'
import Canvas from './components/Canvas'
import fetchWeatherData from './lib/useWeatherInfo'
import MoodForm from './components/MoodForm'
import createColorPalette from './lib/createResultButtonStyle'
import Result from './components/Result'
import CustomCircularProgress from './components/CustomCircularProgress'
import ButtonContainer from './components/ButtonContainer'

function App() {
  const [selectedMoodIDs, setSelectedMoodIDs] = useState([])
  const [isResultVisible, setIsResultVisible] = useState(false)
  const [mainWeather, setCurrentWeather] = useState('Clear')
  const [temperature, setTemperature] = useState(0)
  const [coffee, setCoffee] = useState('')

  useEffect(() => {
    async function getWeatherInfo() {
      await fetchWeatherData().then((res) => {
        setCurrentWeather(res?.data?.weather[0].main)
        setTemperature(res?.data?.main?.temp)
      })
    }
    getWeatherInfo()
  }, [])

  const weatherTheme = createColorPalette(mainWeather)
  return (
    <div>
      <ButtonContainer weatherTheme={weatherTheme} setCurrentWeather={setCurrentWeather} />
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
