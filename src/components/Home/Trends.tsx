import React, { FC } from 'react'

import { Container } from '../shared/utils/layout'
import { DualRing } from '../shared/styled/loaders/DualRing'
import { TrendCard } from '../shared/styled/cards/Trend.card'

import { Carousel } from '../Carousels/Carousel'

import { useAxios } from '../../hooks/useAxios'

import { IFilmTrend } from '../../interfaces/film/IFilm'

import { trends_cfg } from '../../utils/configs/carousel'

export const Trends: FC = () => {

    const { res, loading } = useAxios(`/api/video/playlist/trends`, {
        method: 'GET'
    })

    if(loading) {
        return (
            <Container h='300px'>
                <DualRing />
            </Container>
        )
    }
    
    const trends: Array<IFilmTrend> = res?.data

    return (
            <Carousel config={trends_cfg} name='' arrowsDis toShow={1} toScroll={1} rows={1}>
                {
                    trends.map(film => 
                        <TrendCard 
                            key={film._id} 
                            describe={film.describe} 
                            _id={film._id} 
                            name={film.name}
                            wallpaper={film.wallpaper} 
                            img={film.img}
                        />
                    )
                }
            </Carousel>
    )
}