import React, { FC } from 'react'
import { useDispatch } from 'react-redux'

import { Container } from '../../utils/layout'
import { Title } from '../../utils/typography'

import { ButtonClose } from '../buttons/Buttons.shared'

import { closeModal } from '../../../../redux/app/actions'


interface ModalProps {
    title: string
}

export const ModalHeader: FC<ModalProps> = ({ title }) => {

    const dispatch = useDispatch()
    
    return (
        <Container justify='space-between' p='20px 0'>
            <Title>{title}</Title>
            <ButtonClose onClick={() => dispatch(closeModal())} />
        </Container>
    )
}
    