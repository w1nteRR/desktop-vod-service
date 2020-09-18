import React, { FC } from 'react'
import Icon from '@mdi/react'
import { 
    mdiHistory, 
    mdiChevronLeft, 
    mdiPlaylistPlus, 
    mdiHeartOutline, 
    mdiHeart, 
    mdiClose, 
    mdiTune,
    mdiPlay,
    mdiVolumeOff,
    mdiFullscreen,
    mdiDelete 
} from '@mdi/js'

import { text } from '../../utils/colors'
import { Title, Text } from '../../utils/typography'

import { BackS, WatchS, WatchLaterS, ButtonTextS } from '../buttons/Button.styled'


interface ButtonProps {
    onClick(): void
}

interface ButtonWl extends ButtonProps {
    isWatchLater: boolean
}

interface ButtonFav extends ButtonProps {
    isFav: boolean
}

interface ButtonWatch extends ButtonProps {
    iconColor: string
}


interface ButtonText extends ButtonProps {
    shadow?: boolean
    w?: string
    h?: string
    text: string | number
    bgColor?: string
    brdrColor?: string
    textColor?: string
    brdrRadius? : string
}

export const ButtonText: FC<ButtonText> = ({ shadow, w, h, text, bgColor, brdrColor, brdrRadius, textColor, onClick }) => 
    <ButtonTextS 
        w={w} 
        h={h} 
        shadow={shadow}
        onClick={onClick}
        bgColor={bgColor}
        brdrColor={brdrColor}
        brdrRadius={brdrRadius}
    >
        <Text 
            uppercase
            color={textColor}
            weight='700'
        >
            {text}
        </Text>
    </ButtonTextS>


export const ButtonWl: FC<ButtonWl> = ({ onClick, isWatchLater }) => 
    <WatchLaterS onClick={onClick}>
        <Icon 
            path={mdiHistory} 
            size={.8} 
            color={isWatchLater ? text.red : text.blue} 
        />
    </WatchLaterS> 

export const ButtonPl: FC<ButtonProps> = ({ onClick }) =>
    <WatchLaterS onClick={onClick}>
        <Icon 
            path={mdiPlaylistPlus} 
            size={1} 
            color={text.silver} 
        />
    </WatchLaterS> 

export const ButtonFav: FC<ButtonFav> = ({ onClick, isFav }) =>
    <WatchLaterS onClick={onClick}>
        <Icon 
            path={isFav ? mdiHeart : mdiHeartOutline} 
            size={1} 
            color={text.red} 
        />
    </WatchLaterS> 

export const ButtonClose: FC<ButtonProps> = ({ onClick }) =>
    <WatchLaterS onClick={onClick}>
        <Icon 
            path={mdiClose} 
            size={.6} 
            color={text.red} 
        />
    </WatchLaterS> 


export const ButtonWatch: FC<ButtonWatch> = ({ iconColor, onClick }) =>
    <WatchS onClick={onClick}>
        <Icon 
            path={mdiPlay}
            size={1.4}
            color={iconColor}
        />
    </WatchS>

export const ButtonBack: FC<ButtonProps> = ({ onClick }) =>
    <BackS onClick={onClick}>
        <Icon 
            path={mdiChevronLeft} 
            size={1.5} 
            color='#fff' 
        />
    </BackS>

export const ButtonMute: FC<ButtonProps> = ({ onClick }) =>
    <BackS onClick={onClick}>
        <Icon 
            path={mdiVolumeOff}
            size={1}
            color='#fff'
        />
    </BackS>   
    

export const ButtonFullScreen: FC<ButtonProps> = ({ onClick }) =>
    <BackS onClick={onClick}>
        <Icon 
            path={mdiFullscreen}
            size={1}
            color='#fff'
        />
    </BackS>   
 
export const ButtonDelete: FC<ButtonProps> = ({ onClick }) =>
    <BackS onClick={onClick}>
        <Icon 
            path={mdiDelete}
            size={1}
            color={text.red}
        />
    </BackS>

// export const ButtonSubscribe: FC<ButtonSubscribe> = ({ isSubscriber, onClick }) =>
//     <ButtonText 
//         onClick={onClick} 
//         text={ isSubscriber ? 'You subscribed' : 'Subscribe'} 
//     />