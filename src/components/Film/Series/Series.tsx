import React, { FC, useEffect, useState } from 'react'

import { Carousel } from '../../Carousels/Carousel'

import { Container } from '../../shared/utils/layout'
import { Title, Text } from '../../shared/utils/typography'

import { IEpisode } from '../../../interfaces/film/IEpisode'

import { episodes_cfg } from '../../../utils/configs/carousel'
import { EpisodeCard } from '../../shared/styled/cards/Episode.card'

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

    const _filterSeries = (series: Array<IEpisode>, seasonNum: number) => series.filter((episode) => episode.season === seasonNum)

    const _seriesForRender: Array<IEpisode> = _filterSeries(series, currentSeason)
       
    return (
        <>
        <Container justify='space-between'>
            <Container p='0 20px' justify='flex-start'>
                <Title>Series</Title>
            </Container>
            <Container justify='flex-end' w='90%' p='10px'>
                {
                    seasons.map(num => 
                        <Text 
                            key={num} 
                            uppercase
                            color='silver'
                            style={{ marginLeft: 20, cursor: 'pointer' }}
                            onClick={() => setCurrentSeason(num)}
                        >
                            Season {num}
                        </Text>
                    )
                }
            </Container>
        </Container>
            <Carousel name='' config={episodes_cfg}>
            {
                _seriesForRender.map(episode => 
                    <EpisodeCard 
                        _id={episode._id} 
                        key={episode._id} 
                        img={episode.img} 
                        name={episode.name}
                        duration={episode.duration}
                        number={episode.number}
                    />
                )
            }
            </Carousel>
        </>
    )
}