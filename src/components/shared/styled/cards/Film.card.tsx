import React, { FC } from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import Icon from '@mdi/react'
import { mdiPlay } from '@mdi/js'

import { Container } from '../../utils/layout'

import { IFilmCard } from '../../../../interfaces/Film/IFilm.card'

interface FilmStyled {
    img: string
}

const FilmStyled = styled.div<FilmStyled>`
    width: 99%;
    height: 180px;

    background-image: url(${props => props.img});
    background-repeat: no-repeat;
    background-size: cover;
    
    cursor: pointer;

    &:hover {
        box-shadow: 0px 0px 10px black;
        transition: 1s box-shadow ease;
    }
`

export const FilmCard: FC<IFilmCard> = ({ img, _id }) =>    
    <NavLink to={_id}>
        <FilmStyled img={img} />
    </NavLink>
