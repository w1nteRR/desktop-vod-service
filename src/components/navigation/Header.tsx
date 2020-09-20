import React, { FC } from 'react'
import { useHistory } from 'react-router'

import { Container } from '../shared/utils/layout'
import { TextT } from '../shared/utils/typography'

import { ButtonBack } from '../shared/styled/buttons/Buttons.shared'

interface IHeaderProps {
    title?: string
}

export const Header: FC<IHeaderProps> = ({ title }) => {
    
    const history = useHistory()
    
    return (
        <Container>
            <Container justify='flex-start'>
                <ButtonBack onClick={() => history.goBack()} />
                <TextT>{title}</TextT>
            </Container>
        </Container>
    )
}
    