import generateRandIntInRange from '../lib/generateRandIntInRange'

class Fog {
  constructor(ctx) {
    this.x = Math.random() * window.innerWidth
    this.y = Math.random() * window.innerHeight
    this.dx = Math.random() * (0.9, 0.2) + 0.1
    this.ctx = ctx
    this.length_bottom = generateRandIntInRange(500, 300)
    this.lineWidth = generateRandIntInRange(400, 80)
  }

  draw() {
    this.ctx.lineWidth = this.lineWidth
    this.ctx.lineCap = 'round'
    this.ctx.strokeStyle = 'rgba(232,232,228,0.7)'
    this.ctx.beginPath()
    this.ctx.moveTo(this.x, this.y)
    this.ctx.lineTo(this.x + this.length_bottom, this.y)
    this.ctx.stroke()
  }

  update() {
    if (this.x - this.lineWidth / 2 > window.innerWidth) {
      this.x = this.length_bottom * -1
      this.y = Math.random() * window.innerHeight
    }

    this.x += this.dx
    this.draw()
  }
}

export default Fog
