import React, { FC } from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

import { IFilmShort } from '../../../../interfaces/film/IFilm'

interface FilmStyled {
    img: string,
    h?: string,
    w?: string
}

export const FilmStyled = styled.div<FilmStyled>`
    width: ${props => props.w || '99%'};
    height: ${props => props.h || '160px'};
    margin: 10px;

    background-image: url(${props => props.img});
    background-repeat: no-repeat;
    background-size: contain;
    
    cursor: pointer;

    &:hover {
        box-shadow: 0px 0px 10px black;
        transition: 1s box-shadow ease;
    }
`

export const FilmCard: FC<IFilmShort> = ({ img, _id }) => {
    
    const history = useHistory()

    return <FilmStyled img={img} onClick={() => history.push(`/film/${_id}`)} />
}  
    
