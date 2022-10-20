import generateRandIntInRange from '../lib/generateRandIntInRange'

class Cloudy {
  constructor(ctx) {
    this.x = Math.random() * window.innerWidth
    this.y = Math.random() * window.innerHeight
    this.dx = Math.random() * (0.9, 0.2) + 0.1
    this.ctx = ctx
    this.length = generateRandIntInRange(400, 100)
    this.lineWidth = this.length / 2
    this.first_circle_radius = this.length / 3
    this.second_circle_radius = this.length / 3
  }

  draw() {
    this.ctx.lineWidth = this.lineWidth
    this.ctx.lineCap = 'round'
    this.ctx.strokeStyle = 'rgba(220, 220, 205)'
    this.ctx.fillStyle = 'rgba(220, 220, 205)'
    this.ctx.beginPath()
    this.ctx.moveTo(this.x, this.y)
    this.ctx.lineTo(this.x + this.length, this.y)
    this.ctx.stroke()
    this.ctx.arc(this.x + this.first_circle_radius, this.y - this.ctx.lineWidth / 4, this.first_circle_radius, 0, 2 * Math.PI)
    this.ctx.arc(this.x + this.second_circle_radius * 2, this.y - this.ctx.lineWidth / 2, this.second_circle_radius, 0, 2 * Math.PI)
    this.ctx.fill()
  }

  update() {
    if (this.x > window.innerWidth) {
      this.x = this.length * -1
      this.y = Math.random() * window.innerWidth
    }

    this.x += this.dx
    this.draw()
  }
}

export default Cloudy
