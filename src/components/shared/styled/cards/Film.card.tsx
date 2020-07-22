import React, { FC } from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import Icon from '@mdi/react'
import { mdiPlay } from '@mdi/js'

import { Container } from '../../utils/layout'

interface FilmCard {
    img: string,
    _id: string
}

interface FilmStyled {
    img: string
}

const FilmStyled = styled.div<FilmStyled>`
    width: 99%;
    height: 180px;

    background-image: url(${props => props.img});
    background-repeat: no-repeat;
    background-size: cover;
`

export const FilmCard: FC<FilmCard> = ({ img, _id }) => 
        <FilmStyled img={img}>
            <NavLink to={_id}>
            <Container>
                <Icon path={mdiPlay} size={1} color='#fff' />
            </Container>
            </NavLink>
        </FilmStyled>
