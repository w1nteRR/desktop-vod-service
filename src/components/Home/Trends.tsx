import React, { FC } from 'react'

import { Container } from '../shared/utils/layout'
import { DualRing } from '../shared/styled/loaders/DualRing'

import { Carousel } from '../Carousels/Carousel'

import { useAxios } from '../../hooks/useAxios'

import { IFilmTrend } from '../../interfaces/film/IFilm'
import { film_cfg, trends_cfg } from '../../utils/configs/carousel'
import { TrendCard } from '../shared/styled/cards/Trend.card'

export const Trends: FC = () => {

    const { res, loading } = useAxios(`/api/video/playlist/trends`, {
        method: 'GET'
    })

    if(loading) {
        return (
            <Container h='75vh'>
                <DualRing />
            </Container>
        )
    }
    
    const trends: Array<IFilmTrend> = res?.data

    console.log(trends)

    return (
            <Carousel config={trends_cfg} name='Trends' arrowsDis>
                {
                    trends.map(film => 
                        <TrendCard 
                            key={film._id} 
                            describe={film.describe} 
                            _id={film._id} 
                            name={film.name}
                            wallpaper={film.wallpaper} 
                        />
                    )
                }
            </Carousel>
    )
}