import React, { FC } from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

import { IFilmShort } from '../../../../interfaces/film/IFilm'

interface FilmStyled {
    img: string
}

export const FilmStyled = styled.div<FilmStyled>`
    width: 100%;
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

export const FilmCard: FC<IFilmShort> = ({ img, _id }) => {
    
    const history = useHistory()

    return <FilmStyled img={img} onClick={() => history.push(`/film/${_id}`)} />
}  
    
