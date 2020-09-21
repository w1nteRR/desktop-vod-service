import React, { FC } from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router'

import { ButtonText } from '../buttons/Buttons.shared'
import { text } from '../../utils/colors'


interface User {
    isAuth?: boolean
    p?: string
}

const UserAvatarStyled = styled.div<User>`
    padding: ${props => props.p || '20px'};
    background-color: gray;
    border-radius: 50%;
    cursor: pointer;
`

export const UserAvatar: FC<User> = ({ isAuth, p }) => {

    const history = useHistory()

    return <>
        {
            isAuth
            ?   <UserAvatarStyled p={p} onClick={() => history.push('/profile')} />
            :   <ButtonText 
                    text='Sign In' 
                    bgColor={text.blue}
                    w='100px' 
                    onClick={() => history.push('/signin')} 
                />
        }
    </>
}