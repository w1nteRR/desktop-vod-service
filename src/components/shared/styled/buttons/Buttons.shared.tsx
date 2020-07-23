import React, { FC } from 'react'
import Icon from '@mdi/react'
import { mdiHistory, mdiChevronLeft } from '@mdi/js'

import { text } from '../../utils/colors'
import { Title } from '../../utils/typography'

import { BackS, WatchS, WatchLaterS} from '../buttons/Button.styled'


interface ButtonProps {
    onClick(): void
}

interface ButtonWl extends ButtonProps {
    isWatchLater: boolean
}


export const ButtonWl: FC<ButtonWl> = ({ onClick, isWatchLater }) => 
    <WatchLaterS onClick={onClick}>
        <Icon path={mdiHistory} size={.7} color={isWatchLater ? text.red : text.dark} />
    </WatchLaterS> 

export const ButtonWatch: FC<ButtonProps> = ({ onClick }) =>
    <WatchS onClick={onClick}>
        <Title>Watch now</Title>
    </WatchS>

export const ButtonBack: FC<ButtonProps> = ({ onClick }) =>
    <BackS onClick={onClick}>
        <Icon path={mdiChevronLeft} size={1} color='#fff' />
    </BackS>
    
    



