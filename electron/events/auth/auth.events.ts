import { ipcMain } from 'electron'

import authService from '../../services/auth/auth.service'

import { destroyWindow } from '../../main/main.process'
import { destroyAuthWindow } from '../../main/auth.process'
import { renderWindow } from '../../main'

interface IAuthData {
    token: string
}

ipcMain.on('auth:sign-in', async (_, authData) => {

    const { token } = authData as IAuthData

    try {

        await authService.saveToken(token)
        await renderWindow()

        destroyAuthWindow()


    } catch (err) {
        console.log(err)
        throw err
    }
})

ipcMain.on('auth:logout', async () => {
    await authService.logout()
    await renderWindow()   

    destroyWindow() 
})

ipcMain.on('auth:token-get', async event => {

    const token = await authService.getToken()

    event.sender.send('auth:token', token)

})