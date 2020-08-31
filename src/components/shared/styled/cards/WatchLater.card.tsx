import React, { FC } from 'react'
import { useHistory } from 'react-router'

import { Container } from '../../utils/layout'
import { Title } from '../../utils/typography'
import { text } from '../../utils/colors'

import { ButtonDelete } from '../buttons/Buttons.shared'

import { useWatchLater } from '../../../../hooks/library/useWatchLater'

import { IFilmShort } from '../../../../interfaces/film/IFilm'

interface IWatchLaterCardProps extends IFilmShort {}

export const WatchLaterCard: FC<IWatchLaterCardProps> = ({ img, name, _id }) => {
    
    const { remove } = useWatchLater(_id)
    const history = useHistory()

    return (
        <Container 
            w='70%' 
            m='10px' 
            style={{ cursor: 'pointer' }}
            shadow
        >
            <Container justify='space-between'  onClick={() => history.push(`/film/${_id}`)}>
                <img 
                    src={img} 
                    alt="" 
                    width='250px' 
                />
                <Container>
                    <Title 
                        color={text.silver}
                    >
                        {name}
                    </Title>    
                </Container>
            </Container>
            <Container w='10%'>
                <ButtonDelete 
                    onClick={() => remove()}
                />
            </Container>
        </Container>
    )
}

            