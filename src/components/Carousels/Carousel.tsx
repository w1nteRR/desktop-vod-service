import React, { FC, useRef } from 'react'
import Slider from 'react-slick'

import { Container } from '../shared/utils/layout'
import { TextT } from '../shared/utils/typography'

import { PrevArrow, NextArrow } from './Arrows'

interface ICarousel {
    name: string,
    config: object,
    arrowsDis?: boolean,
    rows?: number,
    toScroll?: number,
    toShow?: number,
    before?: any
}

export const Carousel: FC<ICarousel> = ({ 
    name, 
    config, 
    children, 
    arrowsDis,
    rows,
    toShow,
    toScroll,
    before
}) => {

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
            <Container justify='flex-start' p='10px'>
                <TextT>{name}</TextT>
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
            {before}
        <Slider 
            {...config} 
            ref={carousel} 
            rows={rows} 
            slidesToShow={toShow}
            slidesToScroll={toScroll}
        >
            {children}
        </Slider>
        </div>
        </>  
    )
}