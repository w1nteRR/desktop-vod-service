import React, { FC } from 'react'

import { Carousel } from '../../Carousels/Carousel'

import { CastCard } from '../../shared/styled/cards/Cast.card'
import { Container } from '../../shared/utils/layout'
import { Title } from '../../shared/utils/typography'

import { cast_cfg } from '../../../utils/configs/carousel'
import { IActor } from '../../../interfaces/cast/IActor'
import { text } from '../../shared/utils/colors'

interface ICastProps {
    cast: Array<IActor>
}

export const Cast: FC<ICastProps> = ({ cast }) => 
    <div style={{
        borderRadius: 5,
        background: text.dark,
        padding: 10,
        margin: '20px 0'
    }}>
        <Container justify='flex-start'>
            <Title>Cast</Title>
        </Container>
        <div style={{ margin: '0 auto' }}>
            <Carousel name='' config={cast_cfg} rows={1} toShow={3} toScroll={3}>
                {
                    cast.map(actor => <CastCard key={actor._id} actorName={actor.actorName} films={actor.films} />)
                }
            </Carousel>
        </div>
    </div>
