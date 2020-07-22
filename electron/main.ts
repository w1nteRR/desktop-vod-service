const { app, BrowserWindow } = require('electron')

const createWindow = () => {
    let window = new BrowserWindow ({
        minWidth: 1000,
        minHeight: 600,
        webPreferences: {
            nodeIntegration: true,
            experimentalFeatures: true
        }
    })

    window.loadURL(`http://localhost:3000`)

    window.on('closed', () => {
        window = null
    })
}

app.on('ready', createWindow)
app.allowRendererProcessReuse = true
