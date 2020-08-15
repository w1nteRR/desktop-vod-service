import { AuthActionTypes, AuthState, AUTH, SIGN_UP } from './types'

const initialState: AuthState = {
    isAuthenticated: false,
    signUpStatus: false
}

export const authReducer = (state = initialState, action: AuthActionTypes): AuthState => {
    switch(action.type) {
        case AUTH: 
            return {
                ...state,
                isAuthenticated: action.payload.isAuthenticated
            }
        case SIGN_UP:
            return {
                ...state,
                signUpStatus: action.payload.signUpStatus
            }
        default:
            return state
    }
}