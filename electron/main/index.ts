import { app } from 'electron'

import authService from '../services/auth/auth.service'

import { createAuthWindow } from './auth.process'
import { createWindow } from './main.process'

import '../events/auth/auth.events'

export async function renderWindow () {

    const token = await authService.getToken()
    
    if(!token) return createAuthWindow()

    return createWindow()
}

app.on('ready', renderWindow)

app.on('window-all-closed', () => app.quit())