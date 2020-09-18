import { useState, useEffect } from 'react'
import { ipcRenderer } from 'electron'
import { useDispatch } from 'react-redux'

import { authStatus } from '../../redux/auth/actions'

export const useAuth = () => {

    const [loading, setLoading] = useState(true)

    const dispatch = useDispatch()

    const getToken = () => new Promise(resolve => {
        ipcRenderer.send('auth:token-get')
        
        ipcRenderer.on('auth:token', (_, token) => resolve(token))
    })

    const logout = () => {
        ipcRenderer.send('auth:logout')
        dispatch(authStatus(false))
    }

    useEffect(() => {
        (async () => {
            
            const token = await getToken()
            
            token && dispatch(authStatus(true))
            
            setLoading(false)

        })()
    }, [])

    return {
        loading,
        getToken,
        logout
    }
}
