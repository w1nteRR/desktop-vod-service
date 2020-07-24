import { SystemActionsTypes, MODAL_OPEN, MODAL_CLOSE } from './types'

export const openModal = (): SystemActionsTypes => ({
    type: MODAL_OPEN,
    payload: true
})

export const closeModal = (): SystemActionsTypes => ({
    type: MODAL_CLOSE,
    payload: false
})