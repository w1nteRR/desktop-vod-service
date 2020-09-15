import React, { FC } from 'react'

import { Container } from '../shared/utils/layout'

import { ButtonBack } from '../shared/styled/buttons/Buttons.shared'
import { useHistory } from 'react-router'
import { TextT } from '../shared/utils/typography'

interface IHeaderProps {
    title?: string
}

export const Header: FC<IHeaderProps> = ({ title }) => {
    
    const history = useHistory()
    
    return (
        <Container>
            <Container justify='flex-start' p='10px'>
                <ButtonBack onClick={() => history.goBack()} />
                <TextT>{title}</TextT>
            </Container>
        </Container>
    )
}
    