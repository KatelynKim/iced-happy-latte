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
