import React, { FC, useRef } from 'react'
import Slider from 'react-slick'

import { film_cfg } from '../../utils/configs/carousel'
import { Container } from '../shared/utils/layout'
import { Text } from '../shared/utils/typography'

import { PrevArrow, NextArrow } from './Arrows'
import { FilmCard } from '../shared/styled/cards/Film.card'
import { text } from '../shared/utils/colors'

import { IFilmCard } from '../../interfaces/Film/IFilm.card'

interface IFilmCarousel {
    name: string,
    films: Array<IFilmCard>
}

export const FilmCarousel: FC<IFilmCarousel> = ({ name, films }) => {

    const carousel = useRef(null)

    const buttonsOnClick = () => {
        return {
                /* @ts-ignore */
            next: () => carousel.current.slickNext(),
                /* @ts-ignore */
            prev: () => carousel.current.slickPrev()
        }
    }

    return ( 
        <>
        <Container p='10px' justify='space-between'>
            <Container justify='flex-start'>
                <Text 
                    uppercase 
                    color={text.silver}
                    size='13px'
                    spacing='1.2px'
                    weight='500'
                >
                    {name}
                </Text>
            </Container>
            <Container justify='flex-end' m='10px'>
                <PrevArrow onClick={() => buttonsOnClick().prev()} />
                <NextArrow onClick={() => buttonsOnClick().next()} />
            </Container>
        </Container>
        <Slider {...film_cfg} ref={carousel}>
           {
                films.map(film => (
                   <div key={film._id}>
                        <FilmCard img={film.img} _id={film._id} />
                   </div>
               ))
           }
        </Slider>
        </>  
    )
}