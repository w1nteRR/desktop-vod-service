export const MODAL_OPEN = 'MODAL_OPEN'
export const MODAL_CLOSE = 'MODAL_CLOSE'

export interface SystemState {
    modal: {
        isOpen: boolean
    }
}

interface ModalOpenAction {
    type: typeof MODAL_OPEN,
    payload: boolean
}

interface ModalCloseAction {
    type: typeof MODAL_CLOSE,
    payload: boolean
}

export type SystemActionsTypes = ModalCloseAction | ModalOpenAction
