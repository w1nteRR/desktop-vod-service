import React, { FC, useEffect, useState } from 'react'

import { Carousel } from '../../Carousels/Carousel'
import { FilmCard } from '../../shared/styled/cards/Film.card'

import { Container } from '../../shared/utils/layout'
import { Title, Text } from '../../shared/utils/typography'
import { text } from '../../shared/utils/colors'

import { IEpisode } from '../../../interfaces/film/IEpisode'
import { IFilmCard } from '../../../interfaces/film/IFilm.card'

import { film_cfg } from '../../../utils/configs/carousel'

interface ISeriesProps {
    series: Array<IEpisode>
}

export const Series: FC<ISeriesProps> = ({ series }) => {

    const [currentSeason, setCurrentSeason] = useState(1)
    const [seasons, setSeasons] = useState<Array<number>>([])

    useEffect(() => {
       const seasons = new Set(series.map(i => i.season))
       setSeasons(Array.from(seasons))
    }, [])

    const _filterSeries = (series: Array<IEpisode>, seasonNum: number) => series.filter((episode: IEpisode) => episode.season === seasonNum)

    const _seriesForRender = _filterSeries(series, currentSeason)
       
    return (
        <>
        <Container justify='space-between' m='20px 0 0'>
            <Container p='20px' justify='flex-start'>
                <Title>Series</Title>
            </Container>
            <Container justify='flex-end' w='90%' p='10px'>
                {
                    seasons.map(num => 
                        <Text 
                            key={num} 
                            uppercase
                            color={text.dark}
                            style={{ marginLeft: 20, cursor: 'pointer' }}
                            onClick={() => setCurrentSeason(num)}
                        >
                            Season {num}
                        </Text>
                    )
                }
            </Container>
        </Container>
        <Carousel name='' config={film_cfg}>
           {
               _seriesForRender.map((episode: IFilmCard) => <FilmCard _id={episode._id} key={episode._id} img={episode.img} />)
           }
        </Carousel>
        </>
        
    )
}