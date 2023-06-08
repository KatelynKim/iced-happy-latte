import { useEffect, useState } from 'react'
import Canvas from './components/Canvas'
import fetchWeatherData from './lib/useWeatherInfo'
import MoodForm from './components/MoodForm'
import createColorPalette from './lib/createResultButtonStyle'
import Result from './components/Result'
import CustomCircularProgress from './components/CustomCircularProgress'
import ButtonContainer from './components/ButtonContainer'
import Thermometer from './components/Thermometer'
import convertKelvinToCelcius from './lib/helpers/convertKelvinToCelcius'
import Weathers from './lib/constants/weathers'

function App() {
  const [selectedMoodIDs, setSelectedMoodIDs] = useState([])
  const [isResultVisible, setIsResultVisible] = useState(false)
  const [mainWeather, setCurrentWeather] = useState('Clear')
  const [temperature, setTemperature] = useState(0)
  const [coffee, setCoffee] = useState('')

  useEffect(() => {
    async function getWeatherInfo() {
      await fetchWeatherData().then((res) => {
        setCurrentWeather(Weathers[res?.data?.weather[0].main.toUpperCase()])
        if (res?.data?.main?.temp !== undefined) {
          setTemperature(convertKelvinToCelcius(res?.data?.main?.temp))
        }
      })
    }
    getWeatherInfo()
  }, [])
  const weatherTheme = createColorPalette(mainWeather)
  return (
    <>
      { temperature && <Thermometer temperature={temperature} weatherTheme={weatherTheme} />}
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
    </>
  )
}

export default App
