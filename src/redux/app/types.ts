import { ReactNode } from "react"

export const MODAL_OPEN = 'MODAL_OPEN'
export const MODAL_CLOSE = 'MODAL_CLOSE'

export interface SystemState {
    modal: {
        isOpen: boolean,
        content: ReactNode
    }
}

interface ModalOpenAction {
    type: typeof MODAL_OPEN,
    payload: {
        isOpen: boolean,
        content: ReactNode
    }
}

interface ModalCloseAction {
    type: typeof MODAL_CLOSE,
    payload: {
        isOpen: boolean,
    }
}

export type SystemActionsTypes = ModalCloseAction | ModalOpenAction
