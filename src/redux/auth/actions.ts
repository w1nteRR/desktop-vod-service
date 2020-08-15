import { AuthActionTypes, AuthThunkType, AUTH, SIGN_UP } from './types'

import { ISignIn, ISignUp } from '../../interfaces/auth/Auth'

import { authApi } from '../../api/auth.api'

const _signUpStatus = (signUpStatus: boolean): AuthActionTypes => ({
    type: SIGN_UP,
    payload: {
        signUpStatus
    }
})

export const authStatus = (isAuthenticated: boolean): AuthActionTypes => ({
    type: AUTH,
    payload: {
        isAuthenticated
    }
})

export const signIn = (data: ISignIn): AuthThunkType => {
    return async dispatch => {
        try {
            const user = await authApi.signIn(data)
            
            localStorage.setItem('token', user.token)

            dispatch(authStatus(true))

        } catch (err) {
            console.log(err)
        }
    }
}  

export const signUp = (data: ISignUp): AuthThunkType => {
    return async dispatch => {
        try {

            await authApi.signUp(data)
            dispatch(_signUpStatus(true))

        } catch (err) {
            console.log(err)
            dispatch(_signUpStatus(false))
        }
    }
}

