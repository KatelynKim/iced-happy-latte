import generateRandIntInRange from '../lib/generateRandIntInRange'

class Snow {
  constructor(ctx) {
    this.x = Math.random() * window.innerWidth
    this.y = Math.random() * window.innerHeight
    this.dy = Math.random() * (0.9, 0.2) + 0.2
    this.ctx = ctx
    this.maxSnowSize = 150
    this.minSnowSize = 80
    this.length = generateRandIntInRange(this.maxSnowSize, this.minSnowSize)
  }

  draw() {
    const horizontalLength = (this.length / 2) * Math.cos(Math.PI / 6)
    const verticalLength = (this.length / 2) * Math.sin(Math.PI / 6)

    this.ctx.lineWidth = this.length / 10
    this.ctx.lineCap = 'round'
    this.ctx.strokeStyle = '#E6E7E7'
    this.ctx.beginPath()

    // Draw the vertical stem [1]
    this.ctx.moveTo(this.x, this.y - this.length / 2)
    this.ctx.lineTo(this.x, this.y + this.length / 2)

    // Draw top right - bottom left stem [2]
    this.ctx.moveTo(this.x + horizontalLength, this.y - verticalLength)
    this.ctx.lineTo(this.x - horizontalLength, this.y + verticalLength)

    // Draw top left - bottom right stem [3]
    this.ctx.moveTo(this.x + horizontalLength, this.y + verticalLength)
    this.ctx.lineTo(this.x - horizontalLength, this.y - verticalLength)

    // Draw right branch [1]
    this.ctx.moveTo(this.x, this.y - this.length / 4)
    this.ctx.lineTo(this.x + this.length / 7, this.y - this.length / 2.5)

    // Draw left branch [1]
    this.ctx.moveTo(this.x, this.y - this.length / 4)
    this.ctx.lineTo(this.x - this.length / 7, this.y - this.length / 2.5)

    // Draw the left branch [2]
    this.ctx.moveTo(this.x + horizontalLength / 2, this.y - verticalLength / 2)
    this.ctx.lineTo(
      this.x + horizontalLength / 4 + this.length / 5,
      this.y - this.length / 3
    )

    // Draw the right branch [2]
    this.ctx.moveTo(this.x + horizontalLength / 2, this.y - verticalLength / 2)
    this.ctx.lineTo(
      this.x + horizontalLength / 4 + (this.length / 5) * 1.7,
      this.y - this.length / 9
    )

    // Draw the right branch [3]
    this.ctx.moveTo(this.x + horizontalLength / 2, this.y + verticalLength / 2)
    this.ctx.lineTo(
      this.x + horizontalLength / 4 + this.length / 5,
      this.y + this.length / 3
    )

    // Draw the left branch [3]
    this.ctx.moveTo(this.x + horizontalLength / 2, this.y + verticalLength / 2)
    this.ctx.lineTo(
      this.x + horizontalLength / 4 + (this.length / 5) * 1.7,
      this.y + this.length / 9
    )

    // Draw right branch [1]
    this.ctx.moveTo(this.x, this.y + this.length / 4)
    this.ctx.lineTo(this.x + this.length / 7, this.y + this.length / 2.5)

    // Draw left branch [1]
    this.ctx.moveTo(this.x, this.y + this.length / 4)
    this.ctx.lineTo(this.x - this.length / 7, this.y + this.length / 2.5)

    // Draw the right branch [2]
    this.ctx.moveTo(this.x - horizontalLength / 2, this.y + verticalLength / 2)
    this.ctx.lineTo(
      this.x - horizontalLength / 4 - this.length / 5,
      this.y + this.length / 3
    )

    // Draw the left branch [2]
    this.ctx.moveTo(this.x - horizontalLength / 2, this.y + verticalLength / 2)
    this.ctx.lineTo(
      this.x - horizontalLength / 4 - (this.length / 5) * 1.7,
      this.y + this.length / 9
    )

    // Draw the right branch [3]
    this.ctx.moveTo(this.x - horizontalLength / 2, this.y - verticalLength / 2)
    this.ctx.lineTo(
      this.x - horizontalLength / 4 - this.length / 5,
      this.y - this.length / 3
    )

    // Draw the left branch [3]
    this.ctx.moveTo(this.x - horizontalLength / 2, this.y - verticalLength / 2)
    this.ctx.lineTo(
      this.x - horizontalLength / 4 - (this.length / 5) * 1.7,
      this.y - this.length / 9
    )
    this.ctx.stroke()
  }

  update() {
    if (this.y > window.innerHeight + this.length) {
      this.y = this.length * -1
      this.x = Math.random() * window.innerWidth
    }

    this.y += this.dy
    this.draw()
  }
}

export default Snow
