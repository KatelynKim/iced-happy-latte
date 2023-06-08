import Weathers from './constants/weathers'

function updateBackgroundColor(mainWeather, backgroundColor, setBackgroundColor) {
  switch (mainWeather) {
    case Weathers.RAIN:
      setBackgroundColor('#D5E7F6')
      break
    case Weathers.SNOW:
      setBackgroundColor('#D0D1E1')
      break
    case Weathers.CLEAR:
      setBackgroundColor('#F1EAE6')
      break
    case Weathers.CLOUDS:
      setBackgroundColor('#E4E4E2')
      break
    case Weathers.FOG:
      setBackgroundColor('#d8e2dc')
      break
    case Weathers.ASH:
      setBackgroundColor('#ab947e')
      break
    case Weathers.SMOKE:
      setBackgroundColor('#b8b8aa')
      break
    default:
      setBackgroundColor('#FEFAE0')
      break
  }
  document.body.style.backgroundColor = backgroundColor
}

export default updateBackgroundColor
