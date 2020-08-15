import React, { FC, useRef } from 'react'
import Slider from 'react-slick'

import { Container } from '../shared/utils/layout'
import { Title } from '../shared/utils/typography'

import { PrevArrow, NextArrow } from './Arrows'
import { text } from '../shared/utils/colors'

interface ICarousel {
    name: string,
    config: object,
    arrowsDis?: boolean
}

export const Carousel: FC<ICarousel> = ({ name, config, children, arrowsDis }) => {

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
        <Container justify='space-between'>
            <Container justify='flex-start'>
                <Title color='silver'>{name}</Title>
            </Container>
            {
                arrowsDis
                ?   null
                :   <Container justify='flex-end' m='10px'>
                        <PrevArrow onClick={() => buttonsOnClick().prev()} />
                        <NextArrow onClick={() => buttonsOnClick().next()} />
                    </Container>
            }
        </Container>
        <div style={{ padding: 10 }}>
        <Slider {...config} ref={carousel}>
            {children}
        </Slider>
        </div>
        </>  
    )
}