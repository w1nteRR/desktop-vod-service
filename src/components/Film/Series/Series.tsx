import React, { FC, useState } from 'react'

import { Carousel } from '../../Carousels/Carousel'
import { Seasons } from './Seasons'

import { episodes_cfg } from '../../../utils/configs/carousel'
import { EpisodeCard } from '../../shared/styled/cards/Episode.card'

import { FilmLayoutCard } from '../../shared/styled/cards/Cards.shared'

import { useFilter } from '../../../hooks/utils/useFilter'

import { IEpisode } from '../../../interfaces/film/IEpisode'


interface ISeriesProps {
    series: Array<IEpisode>
}

export const Series: FC<ISeriesProps> = ({ series }) => {

    const [currentSeason, setCurrentSeason] = useState(1)

    const { episodes } = useFilter(series)

    const { seasons, filtredEpisodes } = episodes(currentSeason)

       
    return (
        <FilmLayoutCard title='series'>
            <Seasons seasons={seasons} onSeasonClick={season => setCurrentSeason(season)} />
            <Carousel name='' config={episodes_cfg} toShow={2} toScroll={2} rows={2}>
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
        </FilmLayoutCard>
    )
}
