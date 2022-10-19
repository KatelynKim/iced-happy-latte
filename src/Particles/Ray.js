import { rayLength, sunCoreX, sunCoreY } from '../lib/constants/particleDimensions'

class Ray {
  constructor(ctx, angle, factor) {
    this.x = sunCoreX
    this.y = sunCoreY
    this.angle = angle
    this.ctx = ctx
    this.factor = factor
  }

  draw() {
    this.ctx.lineCap = 'round'
    this.ctx.lineWidth = 50
    this.ctx.strokeStyle = '#EBD7CD'
    this.ctx.beginPath()
    this.ctx.moveTo(this.x + rayLength / 2.5 * Math.cos(this.angle), this.y + rayLength / 2.5 * Math.sin(this.angle))
    this.ctx.lineTo(this.x + rayLength * Math.cos(this.angle) / this.factor, this.y + rayLength * Math.sin(this.angle) / this.factor)
    this.ctx.stroke()
  }

  update() {
    this.angle += 0.001
    this.draw()
  }
}

export default Ray
