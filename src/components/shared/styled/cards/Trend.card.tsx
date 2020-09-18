import React, { FC } from 'react'
import { useHistory } from 'react-router'

import { Container } from '../../utils/layout'
import { Text, Describe } from '../../utils/typography'
import { text } from '../../utils/colors'

import { ButtonText } from '../buttons/Buttons.shared'

import { BgImgCard } from './Cards.shared'

import { IFilmTrend } from '../../../../interfaces/film/IFilm'


export const TrendCard: FC<IFilmTrend> = ({ wallpaper, name, describe, _id }) => {

    const history = useHistory()

    return (
        <Container h='400px'>
            <BgImgCard img={wallpaper} w='100%' h='100%' />
            <Container 
                w='40%' 
                direction='column' 
                justify='space-around' 
                h='100%'  
                p='20px' 
                bgColor={text.dark}
            >
                <Container justify='flex-start'>
                    <Text 
                        size='17px' 
                        spacing='1.3px' 
                        uppercase
                    >
                        {name}
                    </Text>
                </Container>
                <Container>
                    <Describe>
                        {describe}
                    </Describe>
                </Container>
                <Container justify='flex-start'>
                    <ButtonText 
                        brdrRadius='5px'
                        text='Go' 
                        w='120px' 
                        h='40px' 
                        bgColor={text.blue} 
                        textColor={text.dark} 
                        onClick={() => history.push(`/film/${_id}`)}
                    />
                </Container>
            </Container>
        </Container>
    )
}