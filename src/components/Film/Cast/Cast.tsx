import React, { FC } from 'react'

import { Carousel } from '../../Carousels/Carousel'

import { CastCard } from '../../shared/styled/cards/Cast.card'
import { Container } from '../../shared/utils/layout'
import { Title } from '../../shared/utils/typography'

import { cast_cfg } from '../../../utils/configs/carousel'
import { IActor } from '../../../interfaces/cast/IActor'

interface ICastProps {
    cast: Array<IActor>
}

export const Cast: FC<ICastProps> = ({ cast }) => 
    <>
        <Container p='20px' justify='flex-start'>
            <Title>Cast</Title>
        </Container>
        <Carousel name='' config={cast_cfg} rows={1} toShow={4} toScroll={4}>
            {
                cast.map(actor => <CastCard key={actor._id} actorName={actor.actorName} films={actor.films} />)
            }
        </Carousel>
    </>