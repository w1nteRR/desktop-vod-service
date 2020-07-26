import { Component, ReactNode } from 'react'

import { SystemState, SystemActionsTypes, MODAL_OPEN, MODAL_CLOSE } from './types'

const initialState: SystemState = {
    modal: {
        isOpen: false,
        content: null
    }
}

export const appReducer = (state = initialState, action: SystemActionsTypes): SystemState => {
    switch(action.type) {
        case MODAL_CLOSE:
            return {
                modal: {
                    isOpen: action.payload.isOpen,
                    content: null           
                }
            }
        case MODAL_OPEN:
            return {
                modal: {
                    isOpen: action.payload.isOpen,
                    content: action.payload.content
                }
            }   
        default:
            return state
    }
}