import { ReactNode } from 'react'

import { SystemActionsTypes, MODAL_OPEN, MODAL_CLOSE } from './types'

export const openModal = (content: ReactNode): SystemActionsTypes => ({
    type: MODAL_OPEN,
    payload: {
        isOpen: true,
        content
    }
})

export const closeModal = (): SystemActionsTypes => ({
    type: MODAL_CLOSE,
    payload: {
        isOpen: false
    }
})