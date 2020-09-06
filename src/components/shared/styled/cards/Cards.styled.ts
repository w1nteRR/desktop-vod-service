import styled from 'styled-components'

interface CardStyled {
    w?: string,
    h?: string,
    img?: string,
    m?: string
}

export const Card = styled.div<CardStyled>`
    width: ${props => props.w || 'auto'};
    height: ${props => props.h || '180px'};

    margin: ${props => props.m || '0'};
`

export const BgImgCardS = styled(Card)`

    background-image: url(${props => props.img});
    background-repeat: no-repeat;
    background-size: cover;

    cursor: pointer;
`




