class Background {
  constructor(canvas, speedSource) { // 変更
    this.canvas = canvas
    this.speedSource = speedSource // 追加
    this.loaded = false
    this.y1 = -this.canvas.height // 追加
    this.y2 = 0 // 追加

    this.img = new Image()
    this.img.onload = () => this.loaded = true
    this.img.src = path.resolve('src/images/lawn.png')
  }

  draw() {
    if (!this.loaded) return

    const speed = this.speedSource.getSpeed() * 0.1 // 追加
    const ctx = this.canvas.getContext('2d')

    ctx.drawImage(this.img, 0, this.y1, this.canvas.width, this.canvas.height) // 変更
    ctx.drawImage(this.img, 0, this.y2, this.canvas.width, this.canvas.height) // 追加
    this.y1 += speed // 追加
    this.y2 += speed // 追加
    if (this.y1 > this.canvas.height) this.y1 = -this.canvas.height + speed // 追加
    if (this.y2 > this.canvas.height) this.y2 = -this.canvas.height + speed // 追加
  }
}

module.exports = Background
