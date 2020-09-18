import { app, BrowserWindow } from 'electron'

let window: BrowserWindow | null = null

export const createWindow = () => {

    destroyWindow()

    window = new BrowserWindow ({
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

export function destroyWindow () {
    if(!window) return
    
    window.close()
    window = null 
}

app.allowRendererProcessReuse = true
