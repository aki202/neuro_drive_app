const width  = 100
const height = 134

class Car {
  constructor(canvas) {
    this.canvas = canvas
    this.loaded = false

    this.img = new Image()
    this.img.onload = () => this.loaded = true
    this.img.src = path.resolve('src/images/car.png')

    this.x = canvas.width/2 - width/2
    this.y = canvas.height*0.75
  }

  draw() {
    if (!this.loaded) return

    this.canvas.getContext('2d').drawImage(this.img, this.x, this.y, width, height)
  }
}

module.exports = Car
