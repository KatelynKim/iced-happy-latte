import { sunCoreX, sunCoreY, sunCoreRadius } from './constants/particleDimensions'

function drawSunCore(context) {
  context.clearRect(0, 0, window.innerHeight, window.innerHeight)
  context.reset()
  context.arc(sunCoreX, sunCoreY, sunCoreRadius, 0, 2 * Math.PI)
  context.fillStyle = '#EBD7CD'
  context.fill()
}

export default drawSunCore
