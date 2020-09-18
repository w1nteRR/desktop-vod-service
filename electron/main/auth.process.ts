import { BrowserWindow } from 'electron'

let window: BrowserWindow | null = null

export function createAuthWindow () {
    
    destroyAuthWindow()
    
    window = new BrowserWindow({
        resizable: false,
        width: 500,
        height: 600,
        backgroundColor: '#090909',
        webPreferences: {
          nodeIntegration: true,
          experimentalFeatures: true
        }
    })

    // window.setMenu(null)

    window.loadURL(`http://localhost:3000`)
    
    window.on('closed', () => {
        window = null
    })
}

export function destroyAuthWindow () {
    if(!window) return
    
    window.close()
    window = null 
}