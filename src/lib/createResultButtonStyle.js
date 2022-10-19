import Weathers from './constants/weathers'

function createResultButtonStyle(mainWeather) {
  let background
  const color = '#FFFFFF'
  const hoverColor = '#FFFFFF'
  let hoverBackground
  switch (mainWeather) {
    case Weathers.CLOUDY:
      background = '#BABAAA'
      hoverBackground = '#67671C'
      break
    case Weathers.SNOW:
      background = '#8180AB'
      hoverBackground = '#5C4196'
      break
    case Weathers.CLEAR:
      background = '#D8A899'
      hoverBackground = '#E06741'
      break
    case Weathers.FOG:
      background = '#5c677d'
      hoverBackground = '#33415c'
      break
    case Weathers.ASH:
      background = '#6f5e53'
      hoverBackground = '#593d3b'
      break
    default:
      break
  }

  const weatherTheme = {
    background,
    color,
    width: '20vw',
    fontWeight: 'bold',
    hoverBackground,
    hoverColor
  }
  return weatherTheme
}

export default createResultButtonStyle
