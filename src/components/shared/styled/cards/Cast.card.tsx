import React, { FC } from 'react'
import styled from 'styled-components'

import { FilmStyled } from './Film.card'

import { Container } from '../../utils/layout'
import { Title, Text } from '../../utils/typography'
import { text } from '../../utils/colors'

import { IActor } from '../../../../interfaces/cast/IActor'

const CastCardStyled = styled(FilmStyled)`
    width: 200px;
    height: 240px;
    
    background-size: cover;    

    box-shadow: inset 0px -50px 20px rgba(0, 0, 0, 0.6);

    cursor: default;
    &:hover {
        box-shadow: inset 0px -50px 20px rgba(0, 0, 0, 0.6);
    }
`

export const CastCard: FC<IActor> = ({ actorName,  films: { actorRole, img }}) => 
    <CastCardStyled img={img}>
        <Container direction='column' h='100%' justify='flex-end'>
            <Text size='13px' weight='600'>{actorRole}</Text>
            <Title color='#fff'>{actorName}</Title>
        </Container>
    </CastCardStyled>