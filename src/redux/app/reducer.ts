import { SystemState, SystemActionsTypes, MODAL_OPEN, MODAL_CLOSE } from './types'

const initialState: SystemState = {
    modal: {
        isOpen: false
    }
}

export const appReducer = (state = initialState, action: SystemActionsTypes): SystemState => {
    switch(action.type) {
        case MODAL_CLOSE:
            return {
                modal: {
                    isOpen: false
                }
            }
        case MODAL_OPEN:
            return {
                modal: {
                    isOpen: true
                }
            }   
        default:
            return state
    }
}