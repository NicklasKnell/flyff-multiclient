const { app, BrowserWindow } = require('electron')

const createWindow = () => {
    const win = new BrowserWindow({
        width: 2560 / 2,
        height: 1440 / 2
    })

    win.loadURL('http://universe.flyff.com/play')
}

app.whenReady().then(() => {
    createWindow()
})
