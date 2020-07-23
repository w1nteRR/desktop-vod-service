import React, { FC } from 'react'

import { Carousel } from '../../Carousels/Carousel'
import { FilmCard } from '../../shared/styled/cards/Film.card'

import { IFilmCard } from '../../../interfaces/film/IFilm.card'

import { film_cfg } from '../../../utils/configs/carousel'


interface ISimilarProps {
    similar: Array<IFilmCard>
}

export const Simialr: FC<ISimilarProps> = ({ similar }) =>    
    <Carousel name='Similar' config={film_cfg}>
        {
            similar.map(film => <FilmCard key={film._id} _id={film._id} img={film.img} />)
        }
    </Carousel>
