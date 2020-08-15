import { ThunkAction } from "redux-thunk"

import { RootState } from "../rootReducer"

export const SIGN_UP = 'SIGN_UP'
export const AUTH = 'Auth'

export interface AuthState {
    isAuthenticated: boolean,
    signUpStatus: boolean
}

interface AuthAction {
    type: typeof AUTH,
    payload: {
        isAuthenticated: boolean
    }
}

interface SignUpAction {
    type: typeof SIGN_UP,
    payload: {
        signUpStatus: boolean
    }
}

export type AuthActionTypes = AuthAction | SignUpAction

export type AuthThunkType = ThunkAction<Promise<void>, RootState, unknown, AuthActionTypes>
