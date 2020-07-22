import React, { FC } from 'react'
import styled from 'styled-components'

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
    return <>
        {
            isAuth
            ?   <UserAvatarStyled />
            :   <Text uppercase>Log in</Text>
        }
        </>
}