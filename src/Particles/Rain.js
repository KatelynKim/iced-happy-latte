class Rain {
  constructor(ctx) {
    this.x = Math.random() * window.innerWidth
    this.y = Math.random() * window.innerHeight
    this.dy = Math.random() * (0.9, 0.2) + 1
    this.ctx = ctx
    this.length = 200
  }

  draw() {
    this.ctx.beginPath()
    this.ctx.moveTo(this.x, this.y)
    this.ctx.lineTo(this.x, this.y + this.length)
    this.ctx.lineWidth = 20
    this.ctx.lineCap = 'round'
    this.ctx.strokeStyle = '#B9DCF9'
    this.ctx.stroke()
  }

  update() {
    if (this.y > window.innerHeight) {
      this.y = this.length * -1
      this.x = Math.random() * window.innerWidth
    }

    this.y += this.dy
    this.draw()
  }
}

export default Rain
