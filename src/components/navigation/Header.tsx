import React, { FC } from 'react'

import { Container } from '../shared/utils/layout'

import { ButtonBack } from '../shared/styled/buttons/Buttons.shared'
import { useHistory } from 'react-router'

export const Header: FC = () => {
    
    const history = useHistory()
    
    return (
        <Container p='10px 0'>
            <Container justify='flex-start' p='10px'>
                <ButtonBack onClick={() => history.goBack()} />
            </Container>
        </Container>
    )
}
    