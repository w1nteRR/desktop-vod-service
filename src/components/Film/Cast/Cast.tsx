import React, { FC } from 'react'

import { Carousel } from '../../Carousels/Carousel'

import { BgImgCard, FilmLayoutCard } from '../../shared/styled/cards/Cards.shared'

import { Container } from '../../shared/utils/layout'
import { Text } from '../../shared/utils/typography'

import { cast_cfg } from '../../../utils/configs/carousel'
import { IActor } from '../../../interfaces/cast/IActor'


interface ICastProps {
    cast: Array<IActor>
}

export const Cast: FC<ICastProps> = ({ 
    cast 
}) => 
    <FilmLayoutCard title='cast'>
        <div style={{ margin: '0 auto' }}>
            <Carousel name='' config={cast_cfg} rows={1} toShow={3} toScroll={3}>
                {
                    cast.map(actor => 
                        <div key={actor._id}>
                        <BgImgCard img={actor.films.img} m='10px' h='200px' />                           
                            <Container direction='column' h='100%' justify='flex-end'>
                                <Text size='13px' weight='600'>{actor.films.actorRole}</Text>
                            <Container m='10px'>
                                <Text color='#fff' size='12px'>{actor.actorName}</Text>
                            </Container>
                        </Container>
                        </div>
                    )
                }
            </Carousel>
        </div>
    </FilmLayoutCard>
