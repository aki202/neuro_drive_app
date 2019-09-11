const path        = require('path')
const Car         = require(path.resolve('src/components/Car.js'))
const Background  = require(path.resolve('src/components/Background.js'))
const EegReceiver = require(path.resolve('src/EegReceiver.js'))
const SpeedSource = require(path.resolve('src/SpeedSource.js'))

const canvas = document.getElementById('game')
const ctx    = canvas.getContext('2d')

const eegReceiver = new EegReceiver()
const speedSource = new SpeedSource(eegReceiver)
const car         = new Car(canvas)
const background  = new Background(canvas, speedSource)

const draw = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height)

  background.draw()
  car.draw()
}

setInterval(draw, 10)
