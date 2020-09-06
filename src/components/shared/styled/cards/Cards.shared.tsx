import React, { FC } from 'react'

import { BgImgCardS } from './Cards.styled'

interface ICardProps {
    w?: string,
    h?: string,
    img?: string,
    m?: string
    onClick?: () => void
}

export const BgImgCard: FC<ICardProps> = ({ w, h, m, img, children, onClick }) => 
    <BgImgCardS w={w} h={h} img={img} m={m} onClick={onClick}>
        {children}
    </BgImgCardS>

