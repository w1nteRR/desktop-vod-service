import React, { FC } from 'react'

import { Carousel } from '../../Carousels/Carousel'

import { BgImgCard, FilmLayoutCard } from '../../shared/styled/cards/Cards.shared'

import { IFilmShort } from '../../../interfaces/film/IFilm'

import { film_cfg } from '../../../utils/configs/carousel'


interface ISimilarProps {
    similar: Array<IFilmShort>
}

export const Similar: FC<ISimilarProps> = ({  
    similar 
}) => 
    <FilmLayoutCard title='similar'>
        <Carousel name='' config={film_cfg} rows={2} toShow={1} toScroll={1}>
             {
                 similar.map(film => <BgImgCard key={film._id} img={film.img} h='150px' w='96%' m='10px 5px' />)
             }
         </Carousel>
    </FilmLayoutCard>
