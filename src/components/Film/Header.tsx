import React, { FC } from 'react'

import { Container } from '../shared/utils/layout'

import { ButtonBack } from '../shared/styled/buttons/Button.back'
import { Title } from '../shared/utils/typography'

interface HeaderProps {
    name: string
}

export const Header: FC<HeaderProps> = ({ name }) => 
    <Container p='10px 0'>
        <Container justify='flex-start' p='10px'>
            <ButtonBack />
            <Title>{name}</Title>
        </Container>
    </Container>