import Ray from '../Particles/Ray'
import createRayAngleArray from './createRayAngleArray'

function createRayArray(context) {
  const angleArray = createRayAngleArray()
  const rayArray = []
  let factor
  for (const rayAngle of angleArray) {
    factor = factor === 1 ? 1.2 : 1
    const ray = new Ray(context, rayAngle, factor)
    rayArray.push(ray)
  }
  return rayArray
}

export default createRayArray
