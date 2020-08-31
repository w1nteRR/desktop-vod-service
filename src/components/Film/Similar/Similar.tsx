import React, { FC } from 'react'

import { Carousel } from '../../Carousels/Carousel'

import { FilmCard } from '../../shared/styled/cards/Film.card'
import { Container } from '../../shared/utils/layout'
import { Title } from '../../shared/utils/typography'

import { film_cfg } from '../../../utils/configs/carousel'
import { IFilmShort } from '../../../interfaces/film/IFilm'


interface ISimilarProps {
    similar: Array<IFilmShort>
}

export const Similar: FC<ISimilarProps> = ({  similar }) => 
    <>
        <Container p='20px' justify='flex-start'>
            <Title>Similar</Title>
        </Container>
        <Carousel name='' config={film_cfg}>
            {
                similar.map(film => <FilmCard key={film._id} _id={film._id} img={film.img} />)
            }
        </Carousel>
    </>
