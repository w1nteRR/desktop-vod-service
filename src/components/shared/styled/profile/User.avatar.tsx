import React, { FC } from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router'

import { Text } from '../../utils/typography'


interface User {
    isAuth: Boolean
}

const UserAvatarStyled = styled.div`
    padding: 20px;
    background-color: #fff;
    border-radius: 50%;
`

export const UserAvatar: FC<User> = ({ isAuth }) => {

    const history = useHistory()

    return <>
        {
            isAuth
            ?   <UserAvatarStyled />
            :   <Text 
                    uppercase
                    weight='800'
                    size='13px'
                    onClick={() => history.push('/signin')}
                    style={{
                        cursor: 'pointer'
                    }}
                >
                    Log in
                </Text>
        }
        </>
}