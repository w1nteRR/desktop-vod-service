import React, { FC, useState } from 'react'

import { Carousel } from '../../Carousels/Carousel'
import { Seasons } from './Seasons'

import { IEpisode } from '../../../interfaces/film/IEpisode'

import { episodes_cfg } from '../../../utils/configs/carousel'
import { EpisodeCard } from '../../shared/styled/cards/Episode.card'

import { useFilter } from '../../../hooks/utils/useFilter'

interface ISeriesProps {
    series: Array<IEpisode>
}

export const Series: FC<ISeriesProps> = ({ series }) => {

    const [currentSeason, setCurrentSeason] = useState(1)

    const { episodes } = useFilter(series)

    const { seasons, filtredEpisodes } = episodes(currentSeason)

       
    return (
        <div style={{ margin: '50px 0' }}>
            <Seasons seasons={seasons} onSeasonClick={season => setCurrentSeason(season)} />
            <div style={{ paddingRight: 20 }}>
            <Carousel name='' config={episodes_cfg} toShow={3} toScroll={3} rows={2}>
            {
                filtredEpisodes.map(episode => 
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
            </div>
        </div>
    )
}