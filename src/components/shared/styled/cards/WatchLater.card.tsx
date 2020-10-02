import React, { FC } from 'react'
import Icon from '@mdi/react'
import { mdiDelete } from '@mdi/js'
import styled from 'styled-components'

import { Container } from '../../utils/layout'
import { text } from '../../utils/colors'
import { TextT } from '../../utils/typography'

import { BgImgCard } from './Cards.shared'

import { IFilmShort } from '../../../../interfaces/film/IFilm'


interface IWatchLaterCardProps extends IFilmShort {
    onFilmClick: () => void
    onDeleteBtnClick: () => void
}

const DeleteHover = styled(Container)`
    cursor: pointer;

    width: 120px;
    height: 100px;

    z-index: 5;

    &:hover {
        background: #121212
    }
`

export const WatchLaterCard: FC<IWatchLaterCardProps> = ({ 
    img, 
    onDeleteBtnClick,
    onFilmClick,
    name
}) => 
  <Container 
        m='20px auto' 
        brRadius='5px' 
        w='70%' 
        justify='space-between' 
        bgColor={text.dark}
        style={{
            cursor: 'pointer'
        }}
    >
        <Container w='100%' justify='space-between' onClick={onFilmClick}>
            <BgImgCard img={img} h='100px' w='200px' />
            <Container w='200px'>
                <TextT>{name}</TextT>
            </Container>
        </Container>
        <DeleteHover onClick={onDeleteBtnClick}>
            <Icon path={mdiDelete} size={.8} color={text.red} />
        </DeleteHover>
    </Container>
            