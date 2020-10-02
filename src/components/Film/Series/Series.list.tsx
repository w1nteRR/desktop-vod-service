import React, { FC, useState } from 'react'

import { EpisodeCardDetailed } from '../../shared/styled/cards/Episode.card'
import { DualRing } from '../../shared/styled/loaders/DualRing'
import { Container } from '../../shared/utils/layout'

import { Seasons } from './Seasons'

import { useAxios } from '../../../hooks/useAxios'
import { useFilter } from '../../../hooks/utils/useFilter'

import { IEpisode } from '../../../interfaces/film/IEpisode'

export const SeriesList: FC<{ _id: string }> = ({ 
    _id 
}) => {

    const [currSeason, setCurrSeason] = useState(1)

    const { res, loading } = useAxios(`/api/film/series/${_id}`, {
        method: 'GET'
    })

    if(loading) return <Container>
        <DualRing />
    </Container>

    const series: Array<IEpisode> = res?.data.series || []

    const { episodes } = useFilter(series)

    const { seasons, filtredEpisodes } = episodes(currSeason)

    return (
        <>
        <Container w='80%' m='20px 0'>
            <Seasons 
                seasons={seasons} 
                onSeasonClick={season => setCurrSeason(season)} 
            />
        </Container>
        <Container w='80%' direction='column' m='20px 0'>
            {
                filtredEpisodes.map(episode => 
                    <EpisodeCardDetailed 
                        key={episode._id}
                        img={episode.img}
                        name={episode.name}
                        number={episode.number} 
                        describe={episode.describe}
                        duration={episode.duration}
                        release={episode.release}
                    />
                )
            }
        </Container> 
        </>
    )
}