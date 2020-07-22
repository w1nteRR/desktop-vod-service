import React, { FC, useRef } from 'react'
import Slider from 'react-slick'

import { films } from '../../utils/configs/carousel'
import { Container } from '../shared/utils/layout'
import { Text } from '../shared/utils/typography'

import { PrevArrow, NextArrow } from './Arrows'
import { FilmCard } from '../shared/styled/cards/Film.card'
import { text } from '../shared/utils/colors'

export const FilmCarousel: FC = () => {

    const carousel = useRef(null)

    const buttonsOnClick = () => {
        return {
                /* @ts-ignore */
            next: () => carousel.current.slickNext(),
                /* @ts-ignore */
            prev: () => carousel.current.slickPrev()
        }
    }

    const films_data = [
        {
            _id: '1',
            img: 'https://wallpapercave.com/wp/wp5268423.jpg'
        },
        {
            _id: '2',
            img: 'https://wallpapercave.com/wp/wp6965396.jpg'
        },
        {
            _id: '3',
            img: 'https://wallpaperaccess.com/full/705020.jpg'
        },
        {
            _id: '4',
            img: 'https://cultbox.co.uk/wp-content/uploads/2018/09/wallpaper___marvel_invert_by_desous-d96uhzb.png'
        },
        {
            _id: '5',
            img: 'https://television.mxdwn.com/wp-content/uploads/2019/03/maxresdefault.jpg'
        },
        {
            _id: '6',
            img: 'https://lh3.googleusercontent.com/S9IgEFlW20uL7U1Vzgg8GJ7P_2AWoFak7nqlz9_bi4aqPJZF_0B4rJcC4enhwI5lSsgzx2E_Pg=w640-h400-e365'
        }
    ]

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
                    Family cult
                </Text>
            </Container>
            <Container justify='flex-end' m='10px'>
                <PrevArrow onClick={() => buttonsOnClick().prev()} />
                <NextArrow onClick={() => buttonsOnClick().next()} />
            </Container>
        </Container>
        <Slider {...films} ref={carousel}>
           {
               films_data.map(film => (
                   <div key={film._id}>
                        <FilmCard img={film.img} _id={film._id} />
                   </div>
               ))
           }
        </Slider>
        </>  
    )
}