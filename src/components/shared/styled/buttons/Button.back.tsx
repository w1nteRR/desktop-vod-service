import React, { FC } from 'react'
import { useHistory } from 'react-router'
import styled from 'styled-components'
import Icon from '@mdi/react'
import { mdiChevronLeft } from '@mdi/js'

import { text } from '../../utils/colors'

const ButtonStyled = styled.button`
    width: 30px;
    height: 30px;

    border: none;
    outline: none;
    background-color: none;
    background: none;
    cursor: pointer;
    border-radius: 50%;
    
    margin: 10px;

    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        background: ${text.silver};
        transition: .5s background-color ease;
    }
    
`

export const ButtonBack: FC = () => {
    
    const history = useHistory()

    return (
        <ButtonStyled onClick={() => history.goBack()}>
            <Icon path={mdiChevronLeft} size={1} color='#fff' />
        </ButtonStyled>
    )
}
    