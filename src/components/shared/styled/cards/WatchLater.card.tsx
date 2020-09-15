import React, { FC } from 'react'
import { useHistory } from 'react-router'

import { Container } from '../../utils/layout'
import { TextT } from '../../utils/typography'
import { text } from '../../utils/colors'

import { ButtonDelete } from '../buttons/Buttons.shared'

import { useWatchLater } from '../../../../hooks/library/useWatchLater'

import { IFilmShort } from '../../../../interfaces/film/IFilm'
import { BgImgCard } from './Cards.shared'

interface IWatchLaterCardProps extends IFilmShort {}

export const WatchLaterCard: FC<IWatchLaterCardProps> = ({ img, name, _id }) => {
    
    const { remove } = useWatchLater(_id)
    const history = useHistory()

    return (
        <Container 
            w='60%'
            m='20px'
            h='160px' 
            style={{ cursor: 'pointer', borderRadius: 5 }}
            bgColor={text.dark}
        >
            <Container 
                justify='space-between' 
                onClick={() => history.push(`/film/${_id}`)}
            >
                <BgImgCard img={img} h='160px' w='100%' />
                <Container>
                    <TextT color={text.silver}>{name}</TextT>    
                </Container>
            </Container>
            <Container w='10%'>
                <ButtonDelete onClick={() => remove()} />
            </Container>
        </Container>
    )
}

            