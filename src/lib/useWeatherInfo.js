import axios from 'axios'
import useCurrentLocation from './useCurrentLocation'

async function useWeatherInfo() {
  const location = await useCurrentLocation()
  const { latitude, longitude } = location.coords
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=57052ffff5e8980041faacb90c828350`
  const result = await axios.get(url)
  return result
}
export default useWeatherInfo
