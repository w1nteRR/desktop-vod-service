import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { authStatus } from '../../redux/auth/actions'

export const useAuth = () => {

    const dispatch = useDispatch()

    const login = (jwt: string) => {
        localStorage.setItem('token', jwt)
        dispatch(authStatus(true))
    }

    const logout = () => localStorage.removeItem('token')
    
    useEffect(() => {
        const token = localStorage.getItem('token')
        
        token && login(token)        
    
    }, [login])

    return {
        login,
        logout
    }
}