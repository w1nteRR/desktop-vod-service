import { Component, ReactNode } from 'react'

import { SystemState, SystemActionsTypes, MODAL_OPEN, MODAL_CLOSE } from './types'

const initialState: SystemState = {
    modal: {
        isOpen: false,
        content: null,
        active: ''
    }
}

export const appReducer = (state = initialState, action: SystemActionsTypes): SystemState => {
    switch(action.type) {
        case MODAL_CLOSE:
            return {
                modal: {
                    isOpen: action.payload.isOpen,
                    content: null,
                    active: ''
                }
            }
        case MODAL_OPEN:
            return {
                modal: {
                    isOpen: action.payload.isOpen,
                    content: action.payload.content,
                    active: action.payload.active
                }
            }   
        default:
            return state
    }
}