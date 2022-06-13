const { app, screen, BrowserWindow, BrowserView } = require('electron')

let sizedProperly = false;
let window;

function setResizedTrue() {
    const { width, height } = window.getBounds();
    const quarterWidth = Math.floor(width / 2);
    const quarterHeight = Math.floor(height / 2);
    
    console.log("Width", width, "Height", height)
    if(sizedProperly === false) {
        const view1 = new BrowserView();
        window.addBrowserView(view1);
        view1.setBounds({ x: 0, y: 0, width: quarterWidth, height: quarterHeight })
        view1.webContents.loadURL('http://universe.flyff.com/play')
        
        const view2 = new BrowserView();
        window.addBrowserView(view2);
        view2.setBounds({ x: quarterWidth, y: 0, width: quarterWidth, height: quarterHeight })
        view2.webContents.loadURL('http://universe.flyff.com/play')
        
        const view3 = new BrowserView();
        window.addBrowserView(view3);
        view3.setBounds({ x: 0, y: quarterHeight, width: quarterWidth, height: quarterHeight })
        view3.webContents.loadURL('http://universe.flyff.com/play')
        
        const view4 = new BrowserView();
        window.addBrowserView(view4);
        view4.setBounds({ x: quarterWidth, y: quarterHeight, width: quarterWidth, height: quarterHeight })
        view4.webContents.loadURL('http://universe.flyff.com/play')

        sizedProperly = true;
    }
}

const createWindow = () => {
    window = new BrowserWindow({});

    window.loadFile("main.html");
    
    window.on('resize', function () {
        if(window.isMaximized()) {
            setResizedTrue();   
        }
    });
}

app.whenReady().then(() => {
    createWindow()
})
