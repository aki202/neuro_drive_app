const { app, BrowserWindow } = require('electron')

let win

const createWindow = () => {
  win = new BrowserWindow({
    width: 1150,
    height: 838,
    webPreferences: {
      nodeIntegration: true
    }
  })
  win.loadFile('index.html')
  win.webContents.openDevTools()
  win.on('closed', () => {
    win = null
  })
}

app.on('ready', createWindow)

app.on('activate', () => {
  if (win != null) return
  createWindow()
})
