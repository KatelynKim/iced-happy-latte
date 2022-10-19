import Ash from '../Particles/Ash'
import Cloudy from '../Particles/Cloudy'
import Fog from '../Particles/Fog'
import Rain from '../Particles/Rain'
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
    case Weathers.CLOUDY:
      constructor = Cloudy
      break
    case Weathers.FOG:
      constructor = Fog
      break
    case Weathers.ASH:
      numberOfParticles = 200
      constructor = Ash
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
