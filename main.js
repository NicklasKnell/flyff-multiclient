const { app, screen, BrowserWindow, BrowserView } = require('electron')

const createWindow = () => {
    const primaryDisplay = screen.getPrimaryDisplay();
    const { width, height } = primaryDisplay.workAreaSize;

    const win = new BrowserWindow({
        width,
        height
    });

    const quarterWidth = Math.floor(width / 2);
    const quarterHeight = Math.floor(height / 2);

    const view1 = new BrowserView()
    win.addBrowserView(view1)
    view1.setAutoResize({ horizontal: true, vertical: true, width: true, height: true })
    view1.setBounds({ x: 0, y: 0, width: quarterWidth, height: quarterHeight })
    view1.webContents.loadURL('http://universe.flyff.com/play')

    const view2 = new BrowserView()
    win.addBrowserView(view2)
    view2.setAutoResize({ horizontal: true, vertical: true, width: true, height: true })
    view2.setBounds({ x: quarterWidth, y: 0, width: quarterWidth, height: quarterHeight })
    view2.webContents.loadURL('http://universe.flyff.com/play')

    const view3 = new BrowserView()
    win.addBrowserView(view3)
    view3.setAutoResize({ horizontal: true, vertical: true, width: true, height: true })
    view3.setBounds({ x: 0, y: quarterHeight, width: quarterWidth, height: quarterHeight })
    view3.webContents.loadURL('http://universe.flyff.com/play')

    const view4 = new BrowserView()
    win.addBrowserView(view4)
    view4.setAutoResize({ horizontal: true, vertical: true, width: true, height: true })
    view4.setBounds({ x: quarterWidth, y: quarterHeight, width: quarterWidth, height: quarterHeight })
    view4.webContents.loadURL('http://universe.flyff.com/play')
}

app.whenReady().then(() => {
    createWindow()
})
