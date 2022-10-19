import generateRandIntInRange from '../lib/generateRandIntInRange'

class Ash {
  constructor(ctx) {
    this.x = Math.random() * window.innerWidth
    this.y = Math.random() * window.innerHeight
    this.dx = Math.random() * (0.9, 0.2) + 0.1
    this.ctx = ctx
    this.radius = generateRandIntInRange(5, 1)
  }

  draw() {
    this.ctx.beginPath()
    this.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI)
    this.ctx.fillStyle = '#c3a995'
    this.ctx.fill()
  }

  update() {
    if (this.x - this.radius > window.innerWidth) {
      this.x = 0
    }

    if (this.y - this.radius > window.innerHeight) {
      this.y = this.radius * -1
    }

    this.x += 0.03
    this.y += 0.1
    this.draw()
  }
}

export default Ash
