import Dust from '../Particles/Dust'
import Cloudy from '../Particles/Cloudy'
import Fog from '../Particles/Fog'
import Rain from '../Particles/Rain'
import Smoke from '../Particles/Smoke'
import Snow from '../Particles/Snow'
import Weathers from './constants/weathers'

export default function createParticleArray(context, weather) {
  let constructor
  let numberOfParticles = 10
  switch (weather) {
    case Weathers.RAIN:
      constructor = Rain
      break
    case Weathers.SNOW:
      constructor = Snow
      break
    case Weathers.CLOUDS:
      numberOfParticles = 7
      constructor = Cloudy
      break
    case Weathers.FOG:
      constructor = Fog
      break
    case Weathers.DUST:
      numberOfParticles = 200
      constructor = Dust
      break
    case Weathers.SMOKE:
      numberOfParticles = 7
      constructor = Smoke
      break
    default:
      break
  }
  const particleArray = []
  if (typeof constructor !== 'undefined') {
    for (let i = 0; i < numberOfParticles; i++) {
      particleArray.push(new constructor(context))
    }
  }
  return particleArray
}
