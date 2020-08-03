import React, { FC } from 'react'
import styled from 'styled-components'

import { FilmStyled } from './Film.card'

import { IFilmTrend } from '../../../../interfaces/film/IFilm'
import { Container } from '../../utils/layout'
import { Text } from '../../utils/typography'
import { ButtonText } from '../buttons/Buttons.shared'
import { text } from '../../utils/colors'

const TrendCardStyled = styled(FilmStyled)`
    height: 500px;
    
    background-size: cover;    

    box-shadow: inset 0px -500px 20px rgba(0, 0, 0, 0.6);
    
    cursor: default;

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
                weight='900'
            >
                {name}
            </Text>
        </Container>
        <Container w='40%' p='0 10%' >
            <Text
                size='11px'
                style={{ lineHeight: '20px' }}
                uppercase
                weight='500'
            >
                {describe}
            </Text>
        </Container>
        <Container w='40%' m='20px'>
            <ButtonText 
                text='More' 
                w='150px' 
                h='50px'
                onClick={() => console.log('s')} 
                bgColor='#fff'
                textColor={text.dark} 
            />
        </Container>
    </TrendCardStyled>