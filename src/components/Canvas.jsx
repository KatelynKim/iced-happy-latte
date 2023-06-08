import React, { useRef, useEffect, useState } from 'react'
import createParticleArray from '../lib/createParticleArray'
import Weathers from '../lib/constants/weathers'
import createRayArray from '../lib/createRayArray'
import drawSunCore from '../lib/drawSunCore'
import updateBackgroundColor from '../lib/updateBackgroundColor'

function Canvas({ mainWeather }) {
  const canvasRef = useRef(null)
  const [backgroundColor, setBackgroundColor] = useState('#FFFFFF')
  const canvasWidth = window.innerWidth
  const canvasHeight = window.innerHeight

  useEffect(() => {
    const canvas = canvasRef.current
    canvas.width = canvasWidth
    canvas.height = canvasHeight
    const context = canvas.getContext('2d')

    updateBackgroundColor(mainWeather, backgroundColor, setBackgroundColor)
    let particleArray
    let rayArray
    if (mainWeather !== Weathers.CLEAR) {
      particleArray = createParticleArray(context, mainWeather)
    } else {
      rayArray = createRayArray(context)
    }
    function animate() {
      if (mainWeather === Weathers.CLEAR) {
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
  }, [backgroundColor, mainWeather])

  return <canvas ref={canvasRef} />
}
export default Canvas
