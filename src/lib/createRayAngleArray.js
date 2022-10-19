function createRayAngleArray() {
  let angle = -1 * Math.PI
  const angleArray = [angle]
  while (angle < Math.PI) {
    angle += Math.PI / 8
    angleArray.push(angle)
  }
  return angleArray
}

export default createRayAngleArray
