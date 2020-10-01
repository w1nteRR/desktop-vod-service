import React, { FC } from 'react'

import { BgImgCard } from './Cards.shared'

import { Container } from '../../utils/layout'
import { text } from '../../utils/colors'
import { Text, Describe, Title } from '../../utils/typography'

import { IEpisodeShort, IEpisode } from '../../../../interfaces/film/IEpisode'

export const EpisodeCard: FC<IEpisodeShort> = ({  
    _id, 
    duration,
    name,
    img, 
    number 
}) => 
    <Container m='20px' direction='column' bgColor='brown' w='95%'>
        <BgImgCard img={img} h='150px' w='100%' />
        <Container direction='column' h='50px' p='10px 0'  bgColor={text.dark}>
            <Container justify='flex-start' w='90%'>
                <Text size='12px' uppercase color='silver'>{name}</Text>
            </Container>
            <Container justify='space-between' m='10px' w='90%'>
                <Text size='10px' color={text.silver}>{duration}</Text>
                <Text size='10px' color={text.silver}>{number}</Text>
            </Container>
        </Container>
    </Container>
    
export const EpisodeCardDetailed: FC<IEpisode> = ({
    _id,
    duration,
    name,
    img,
    number,
    describe,
}) => 
    <Container m='20px' style={{ cursor: 'pointer' }} justify='space-between'>
        <BgImgCard img={img} w='50%' h='200px' />
        <Container direction='column' justify='space-between' h='200px' w='45%' brRadius='5px' bgColor={text.dark}>
            <Container justify='space-between' w='90%' p='10px 0'>
                <Title>{name}</Title>
            </Container>
            <Container w='70%'>
                <Describe>
                    {describe}
                </Describe>
            </Container>
            <Container justify='space-between' w='90%' p='10px 0'>
                <Text color='gray'>{number}</Text>
                <Text size='10px'>{duration}</Text>
            </Container>
        </Container>
    </Container>
