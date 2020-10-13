import React, { FC } from 'react'
import { useHistory } from 'react-router'

import { Container } from '../../utils/layout'
import { Text, Describe } from '../../utils/typography'
import { text } from '../../utils/colors'

import { ButtonText } from '../buttons/Buttons.shared'

import { BgImgCard } from './Cards.shared'

import { IFilmTrend } from '../../../../interfaces/film/IFilm'

export const TrendCard: FC<IFilmTrend> = ({ 
    wallpaper, 
    name, 
    describe, 
    _id,
    genr
}) => {

    const history = useHistory()

    return (
        <Container h='450px'>
            <BgImgCard img={wallpaper} w='100%' h='100%'>
                <Container 
                    w='inherit' 
                    h='inherit'
                    align='flex-start'
                    direction='column'
                    justify='flex-end'
                >
                    <Container bgColor='' direction='column' align='flex-start'>
                        <div style={{
                            background: 'linear-gradient(180deg, rgba(50, 47, 47, .1) 0%, rgba(9, 9, 9, 0.92) 100%)',
                            height: 450,
                            width: '100%'
                        }}>
                            <Container h='100%' direction='column' justify='flex-end' align='flex-start'>
                                <Container p='20px 50px' justify='flex-start' w='90%'>
                                    <Text color='#fff' size='36px'>{name}</Text>
                                </Container>
                                <Container p='20px 50px' justify='flex-start' w='90%'>
                                    {
                                        genr.map((genr, index) => 
                                            <Text 
                                                key={index} 
                                                size='10px' 
                                                uppercase 
                                                m='10px'
                                                weight='900'
                                            >
                                                {genr}
                                            </Text>
                                        )
                                    }
                                </Container>
                                <Container p='50px 0' justify='space-around'>
                                    <Container w='60%'>
                                        <Describe>{describe}</Describe>
                                    </Container>
                                    <ButtonText 
                                        bgColor={text.blue}
                                        w='160px'
                                        h='50px'
                                        text='Watch' 
                                        onClick={() => history.push(`/film/${_id}`)}
                                    />
                                </Container>
                            </Container>
                        </div>
                    </Container>
                </Container>
            </BgImgCard>
        </Container>
    )
}
