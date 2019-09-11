class SpeedSource {
  constructor(eegReceiver) {
    this.eegReceiver = eegReceiver
    this.speed = 0

    this.eegReceiver.on('data', data => {
      if (this.stopping) return
      this.speed = data.eSense.attention
      if (this.speed < 0) this.speed = 0
      console.log(`eeg: attention=${data.eSense.attention}`)
    })
    this.eegReceiver.connect()
  }

  getSpeed() {
    return this.speed
  }
}

module.exports = SpeedSource
