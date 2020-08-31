import { ReactNode } from 'react'

import { SystemActionsTypes, MODAL_OPEN, MODAL_CLOSE } from './types'

export const openModal = (content: ReactNode, active: string): SystemActionsTypes => ({
    type: MODAL_OPEN,
    payload: {
        isOpen: true,
        content,
        active
    }
})

export const closeModal = (): SystemActionsTypes => ({
    type: MODAL_CLOSE,
    payload: {
        isOpen: false
    }
})