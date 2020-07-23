import React, { FC } from 'react'

import { IActor } from '../../../interfaces/cast/IActor'
import { Carousel } from '../../Carousels/Carousel'
import { CastCard } from '../../shared/styled/cards/Cast.card'

import { cast_cfg } from '../../../utils/configs/carousel'

interface ICastProps {
    cast: Array<IActor>
}

export const Cast: FC<ICastProps> = ({ cast }) => 
    <Carousel name='Cast' config={cast_cfg}>
        {
            cast.map(actor => <CastCard key={actor._id} actorName={actor.actorName} films={actor.films} />)
        }
    </Carousel>