import generateRandIntInRange from '../lib/generateRandIntInRange'

class Smoke {
  constructor(ctx) {
    this.x = Math.random() * window.innerWidth
    this.y = Math.random() * window.innerHeight
    this.ctx = ctx
    this.length = generateRandIntInRange(500, 300)
    this.lineWidth = generateRandIntInRange(400, 250)
  }

  draw() {
    this.ctx.beginPath()
    this.ctx.moveTo(this.x, this.y)
    this.ctx.lineTo(this.x + this.length, this.y)

    this.ctx.lineWidth = this.lineWidth
    this.ctx.lineCap = 'round'
    this.ctx.strokeStyle = 'rgba(220,220,205,0.5)'
    this.ctx.stroke()
  }

  update() {
    if (this.x - this.lineWidth / 2 > window.innerWidth) {
      this.x = this.length * -1
      this.y = Math.random() * window.innerHeight
    }
    if (this.y + this.lineWidth / 2 < 0) {
      console.log(this.y)
      this.y = window.innerHeight + this.lineWidth / 2
    }

    this.x -= 0.1
    this.y -= 0.05
    this.draw()
  }
}

export default Smoke
