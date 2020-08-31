import React, { FC } from 'react'
import styled from 'styled-components'

import { FilmStyled } from './Film.card'

import { IFilmTrend } from '../../../../interfaces/film/IFilm'
import { Container } from '../../utils/layout'
import { Text } from '../../utils/typography'
import { ButtonText, ButtonWatch } from '../buttons/Buttons.shared'
import { text } from '../../utils/colors'

const TrendCardStyled = styled(FilmStyled)`
    height: 80vh;
    width: 100%;
    
    background-size: cover;    

    box-shadow: inset 0px -500px 20px rgba(0, 0, 0, 0.6);
    
    cursor: pointer;

    &:hover {
        box-shadow: inset 0px -500px 20px rgba(0, 0, 0, 0.6);
    }
`

export const TrendCard: FC<IFilmTrend> = ({ wallpaper, name, describe, _id }) => 
    <TrendCardStyled img={wallpaper}>
        <Container justify='flex-start' p='10%' >
            <Text
                size='50px'
                color='#fff'
                weight='100'
            >
                {name}
            </Text>
        </Container>
        <Container w='40%' p='0 10%' >
            <Text
                size='10px'
                weight='100'
                spacing='1.1px'
                color='silver'
                style={{ lineHeight: '20px' }}
            >
                {describe}
            </Text>
        </Container>
    </TrendCardStyled>