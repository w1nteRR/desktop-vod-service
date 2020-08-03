import React, { FC, useRef } from 'react'
import Slider from 'react-slick'

import { Container } from '../shared/utils/layout'
import { Title } from '../shared/utils/typography'

import { PrevArrow, NextArrow } from './Arrows'

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
        <Container p='10px' justify='space-between'>
            <Container justify='flex-start'>
                <Title>{name}</Title>
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
        <Slider {...config} ref={carousel}>
            {children}
        </Slider>
        </>  
    )
}