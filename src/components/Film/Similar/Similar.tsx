import React, { FC } from 'react'

import { Carousel } from '../../Carousels/Carousel'

import { Container } from '../../shared/utils/layout'
import { Title } from '../../shared/utils/typography'

import { BgImgCard } from '../../shared/styled/cards/Cards.shared'

import { film_cfg } from '../../../utils/configs/carousel'
import { IFilmShort } from '../../../interfaces/film/IFilm'
import { text } from '../../shared/utils/colors'


interface ISimilarProps {
    similar: Array<IFilmShort>
}

export const Similar: FC<ISimilarProps> = ({  similar }) => 
    <div style={{
        borderRadius: 5,
        background: text.dark,
        padding: 10
    }}>
        <Container justify='flex-start'>
            <Title>Similar</Title>
        </Container>
        <Carousel name='' config={film_cfg} rows={2} toShow={2} toScroll={2}>
            {
                similar.map(film => <BgImgCard key={film._id} img={film.img} h='170px' w='96%' m='10px' />)
            }
        </Carousel>
    </div>
