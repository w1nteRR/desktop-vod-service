import React, { FC } from 'react'

import { Container } from '../shared/utils/layout'

import { ButtonBack } from '../shared/styled/buttons/Buttons.shared'
import { Title } from '../shared/utils/typography'
import { useHistory } from 'react-router'

interface HeaderProps {
    name: string
}

export const Header: FC<HeaderProps> = ({ name }) => {
    
    const history = useHistory()
    
    return (
        <Container p='10px 0'>
            <Container justify='flex-start' p='10px'>
                <ButtonBack onClick={() => history.goBack()} />
                <Title>{name}</Title>
            </Container>
        </Container>
    )
}
    