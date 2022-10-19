class Cloudy {
  constructor(ctx) {
    this.x = Math.random() * window.innerWidth
    this.y = Math.random() * window.innerHeight
    this.dx = Math.random() * (0.9, 0.2) + 0.1
    this.ctx = ctx
    this.length_bottom = 100
    this.first_circle_radius = 15
    this.second_circle_radius = 25
    this.third_circle_radius = 20
    this.fourth_circle_radius = 18
  }

  draw() {
    this.ctx.beginPath()
    this.ctx.moveTo(this.x, this.y)
    this.ctx.lineTo(this.x + this.length_bottom, this.y)
    this.ctx.moveTo(this.x, this.y - this.ctx.lineWidth)
    this.ctx.lineTo(this.x + this.length_bottom, this.y - this.ctx.lineWidth)
    this.ctx.moveTo(this.x, this.y - 2 * this.ctx.lineWidth)
    this.ctx.lineTo(this.x + this.length_bottom, this.y - 2 * this.ctx.lineWidth)
    this.ctx.arc(this.x, this.y - this.first_circle_radius, this.first_circle_radius, 0 * Math.PI, 2 * Math.PI)
    this.ctx.arc(this.x + this.second_circle_radius, this.y - this.second_circle_radius, this.second_circle_radius, 0, 2 * Math.PI)
    this.ctx.arc(this.x + this.first_circle_radius + 2 * this.second_circle_radius, this.y - this.first_circle_radius - this.second_circle_radius, this.third_circle_radius, 0, 2 * Math.PI)
    this.ctx.arc(this.x + this.length_bottom - 2, this.y - this.fourth_circle_radius, this.fourth_circle_radius, 0, 2 * Math.PI)

    this.ctx.lineWidth = 10
    this.ctx.lineCap = 'round'
    this.ctx.strokeStyle = '#DCDCCD'
    this.ctx.fillStyle = '#DCDCCD'

    this.ctx.fill()
    this.ctx.stroke()
  }

  update() {
    if (this.x > window.innerWidth) {
      this.x = this.length_bottom * -1
      this.y = Math.random() * window.innerWidth
    }

    this.x += this.dx
    this.draw()
  }
}

export default Cloudy
