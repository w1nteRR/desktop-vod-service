import React, { FC } from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

import { IFilmCard } from '../../../../interfaces/film/IFilm.card'

interface FilmStyled {
    img: string
}

export const FilmStyled = styled.div<FilmStyled>`
    width: 98%;
    height: 140px;

    background-image: url(${props => props.img});
    background-repeat: no-repeat;
    background-size: cover;
    
    cursor: pointer;

    &:hover {
        box-shadow: 0px 0px 10px black;
        transition: 1s box-shadow ease;
    }
`

export const FilmCard: FC<IFilmCard> = ({ img, _id }) => {
    
    const history = useHistory()

    return <FilmStyled img={img} onClick={() => history.push(`/film/${_id}`)} />
}  
    
