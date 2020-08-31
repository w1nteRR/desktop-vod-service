import React, { FC } from 'react'
import { useHistory } from 'react-router-dom'

import { FilmStyled } from './Film.card'

import { Container } from '../../utils/layout'
import { text } from '../../utils/colors'
import { Text } from '../../utils/typography'

import { IEpisodeShort } from '../../../../interfaces/film/IEpisode'


export const EpisodeCard: FC<IEpisodeShort> = ({  
    _id, 
    duration,
    name,
    img, 
    number 
}) => {
    
    // const history = useHistory()
    // onClick={() => history.push(`/film/${_id}`)}

    return (
        <FilmStyled img={img}>
            <Container 
                bgColor={text.dark}
                direction='column' 
                justify='space-between'
                style={{ opacity: 0.5, zIndex: -1 }} 
                h='inherit'
            >
                <Container w='90%' p='10px 0' justify='flex-start'>
                    <Text color='#fff' size='14px'>{name}</Text>
                </Container>
                <Container w='90%' p='10px 0' justify='space-between'>
                    <Text color='#fff' size='10px'>{duration}</Text>
                    <Text color='#fff' size='10px'>{number}</Text>
                </Container>
            </Container>
        </FilmStyled>
    )
}  
    
