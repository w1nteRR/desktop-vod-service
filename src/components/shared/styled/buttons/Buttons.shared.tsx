import React, { FC } from 'react'
import Icon from '@mdi/react'
import { mdiHistory, mdiChevronLeft, mdiPlaylistPlus, mdiHeartOutline, mdiHeart, mdiClose, mdiTune } from '@mdi/js'

import { text } from '../../utils/colors'
import { Title } from '../../utils/typography'

import { BackS, WatchS, WatchLaterS } from '../buttons/Button.styled'


interface ButtonProps {
    onClick(): void
}

interface ButtonWl extends ButtonProps {
    isWatchLater: boolean
}

interface ButtonFav extends ButtonProps {
    isFav: boolean
}


export const ButtonWl: FC<ButtonWl> = ({ onClick, isWatchLater }) => 
    <WatchLaterS onClick={onClick}>
        <Icon path={mdiHistory} size={.7} color={isWatchLater ? text.red : text.dark} />
    </WatchLaterS> 

export const ButtonPl: FC<ButtonProps> = ({ onClick }) =>
    <WatchLaterS onClick={onClick}>
        <Icon path={mdiPlaylistPlus} size={.7} color={text.dark} />
    </WatchLaterS> 

export const ButtonFav: FC<ButtonFav> = ({ onClick, isFav }) =>
    <WatchLaterS onClick={onClick}>
        <Icon path={isFav ? mdiHeart : mdiHeartOutline} size={.6} color={text.dark} />
    </WatchLaterS> 

export const ButtonClose: FC<ButtonProps> = ({ onClick }) =>
    <WatchLaterS onClick={onClick}>
        <Icon path={mdiClose} size={.6} color={text.dark} />
    </WatchLaterS> 

export const ButtonTags: FC<ButtonProps> = ({ onClick }) =>
    <WatchLaterS onClick={onClick}>
        <Icon path={mdiTune} size={.8} color={text.dark} />
    </WatchLaterS> 


export const ButtonWatch: FC<ButtonProps> = ({ onClick }) =>
    <WatchS onClick={onClick}>
        <Title>Watch now</Title>
    </WatchS>

export const ButtonBack: FC<ButtonProps> = ({ onClick }) =>
    <BackS onClick={onClick}>
        <Icon path={mdiChevronLeft} size={1} color='#fff' />
    </BackS>
    



