import React, { FC } from 'react'
import styled from 'styled-components'

import Icon from '@mdi/react'
import { mdiChevronRight, mdiChevronLeft } from '@mdi/js'
import { text } from '../shared/utils/colors'

interface Arrow {
    onClick: () => void
}

const ArrowStyled = styled.div`
    cursor: pointer;
    margin: 10px;
    opacity: .7;

    &:hover {
        opacity: 1;
        transition: .5s opacity ease-in;
    }
` 

export const NextArrow: FC<Arrow> = ({ onClick }) => 
    <ArrowStyled onClick={onClick}>
        <Icon 
            path={mdiChevronRight} 
            size={1} 
            color={text.silver} 
        />
    </ArrowStyled>

export const PrevArrow: FC<Arrow> = ({ onClick }) => 
    <ArrowStyled onClick={onClick}>
        <Icon 
            path={mdiChevronLeft} 
            size={1} 
            color={text.silver}  
        />
    </ArrowStyled>
