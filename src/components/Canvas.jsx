import React, { useRef, useEffect, useState } from 'react'
import createParticleArray from '../lib/createParticleArray'
import Weathers from '../lib/constants/weathers'
import createRayArray from '../lib/createRayArray'
import drawSunCore from '../lib/drawSunCore'

function Canvas({ temperature, mainWeather }) {
  const canvasRef = useRef(null)
  const [backgroundColor, setBackgroundColor] = useState('#FFFFFF')
  const numberOfParticles = 10
  const canvasWidth = window.innerWidth
  const canvasHeight = window.innerHeight

  useEffect(() => {
    const canvas = canvasRef.current
    canvas.width = canvasWidth
    canvas.height = canvasHeight
    const context = canvas.getContext('2d')

    switch (mainWeather) {
      case Weathers.RAIN:
        setBackgroundColor('#D5E7F6')
        break
      case Weathers.SNOW:
        setBackgroundColor('#D0D1E1')
        break
      case Weathers.SUNNY:
        setBackgroundColor('#F1EAE6')
        break
      case Weathers.CLOUDY:
        setBackgroundColor('#E4E4E2')
        break
      default:
        setBackgroundColor('yellow')
        break
    }

    document.body.style.backgroundColor = backgroundColor

    let particleArray
    let rayArray
    if (mainWeather !== Weathers.SUNNY) {
      particleArray = createParticleArray(numberOfParticles, context, mainWeather)
    } else {
      rayArray = createRayArray(context)
    }

    function animate() {
      if (mainWeather === Weathers.SUNNY) {
        drawSunCore(context)
        for (const ray of rayArray) {
          ray.update()
        }
      } else {
        context.clearRect(0, 0, canvasWidth, canvasHeight)
        for (const element of particleArray) {
          element.update()
        }
      }
      requestAnimationFrame(animate)
    }
    animate()
  }, [backgroundColor])

  return <canvas ref={canvasRef} />
}
export default Canvas
