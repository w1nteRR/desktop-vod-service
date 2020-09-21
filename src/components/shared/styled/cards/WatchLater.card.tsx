import React, { FC } from 'react'
import Icon from '@mdi/react'
import { mdiDelete } from '@mdi/js'

import { Container } from '../../utils/layout'
import { text } from '../../utils/colors'

import { ButtonText } from '../buttons/Buttons.shared'

import { BgImgCard } from './Cards.shared'

import { IFilmShort } from '../../../../interfaces/film/IFilm'

interface IWatchLaterCardProps extends IFilmShort {
    onFilmClick: () => void
    onDeleteBtnClick: () => void
}

export const WatchLaterCard: FC<IWatchLaterCardProps> = ({ 
    img, 
    onDeleteBtnClick,
    onFilmClick 
}) => 
    <>
        <Container 
            w='95%'
            h='170px' 
            style={{ cursor: 'pointer' }}
            bgColor={text.dark}
            direction='column'
        >
            <Container 
                justify='space-between' 
                onClick={onFilmClick}
            >
                <BgImgCard img={img} h='170px' w='100%' />
            </Container>
        </Container>
        <Container 
            bgColor={text.dark} 
            w='95%' 
            m='10px 0' 
            h='50px'
            justify='space-around'
            style={{
                borderRadius: 5
            }}
        >
        <ButtonText 
            text='Watch' 
            bgColor={text.blue} 
            w='100px'                 
            onClick={onFilmClick}
        />
            <Container 
                h='70%'
                w='20%'
                style={{
                    cursor: 'pointer'
                }}
            >
                <Icon path={mdiDelete} size={.8} color={text.red} />
            </Container>
        </Container>
    </>

            