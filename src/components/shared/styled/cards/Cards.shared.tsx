import React, { FC } from 'react'
import { text } from '../../utils/colors'

import { Container } from '../../utils/layout'
import { Title } from '../../utils/typography'

import { BgImgCardS } from './Cards.styled'

interface ICardProps {
    w?: string,
    h?: string,
    img?: string,
    m?: string
    onClick?: () => void
}


export const BgImgCard: FC<ICardProps> = ({ 
    w, 
    h, 
    m, 
    img, 
    children, 
    onClick 
}) => 
    <BgImgCardS w={w} h={h} img={img} m={m} onClick={onClick}>
        {children}
    </BgImgCardS>



export const FilmLayoutCard: FC<{ title: string }> = ({
    title,
    children
}) => 
    <div style={{
        borderRadius: 5,
        background: text.dark,
        width: '100%',
        margin: '20px 0'
    }}> 
        <Container justify='flex-start'>
            <Title style={{
                margin: 20
            }}>{title}</Title>
        </Container>
        {children}
    </div>