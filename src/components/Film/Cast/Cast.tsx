import React, { FC } from 'react'

import { Carousel } from '../../Carousels/Carousel'

import { CastCard } from '../../shared/styled/cards/Cast.card'
import { FilmLayoutCard } from '../../shared/styled/cards/Cards.shared'

import { IActor } from '../../../interfaces/cast/IActor'

import { cast_cfg } from '../../../utils/configs/carousel'


interface ICastProps {
    cast: Array<IActor>
}

export const Cast: FC<ICastProps> = ({ cast }) => 
    <FilmLayoutCard title='cast'>
        <div style={{ margin: '0 auto' }}>
            <Carousel name='' config={cast_cfg} rows={1} toShow={3} toScroll={3}>
                {
                    cast.map(actor => <CastCard key={actor._id} actorName={actor.actorName} films={actor.films} />)
                }
            </Carousel>
        </div>
    </FilmLayoutCard>
