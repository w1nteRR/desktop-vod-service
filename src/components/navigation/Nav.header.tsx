import React, { FC } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import Icon from '@mdi/react'
import { mdiBell, mdiMagnify } from '@mdi/js'

import { UserAvatar } from '../shared/styled/profile/User.avatar'

import { text } from '../shared/utils/colors'
import { Container } from '../shared/utils/layout'
import { Text } from '../shared/utils/typography'
import { useAuth } from '../../hooks/auth/useAuth'


export const NavHeader: FC<{ auth: boolean }> = ({
    auth
}) => {

    const history = useHistory()
    const { logout } = useAuth()

    return (
        <Container
            p='20px'
            bgColor={text.dark}
            w='75%'
            m='2% auto'
            justify='space-between'
            style={{ borderRadius: 10 }}
        >
            <Container justify='space-around' w='40%'>
                {
                    links.map((link, index) =>
                        <NavLink
                            key={index}
                            to={link.path}
                            style={linkStyle}
                            activeStyle={activeStyle}
                        >
                            <Text uppercase>
                                {link.name}
                            </Text>
                        </NavLink>
                    )
                }
            </Container>
            <Container justify='space-around' w='25%'>
                <Icon
                    path={mdiMagnify}
                    size={.8}
                    color='silver'
                    style={{ cursor: 'pointer' }}
                    onClick={() => history.push('/search')}
                />
                {
                    auth
                    &&
                    <Icon
                        path={mdiBell}
                        size={.8}
                        color='#fff'
                        style={{ cursor: 'pointer' }}
                    />
                }
                <UserAvatar isAuth={auth} />
            </Container>
        </Container>
    )
}

const links = [
    {
        path: '/',
        name: 'Home',
    },
    {
        path: '/browse',
        name: 'Browse',
    },
    {
        path: '/library',
        name: 'Library',
    }
]

const linkStyle = {
    textDecoration: 'none',
    margin: '10px',
    color: 'silver',
    opacity: 0.5
}

const activeStyle = {
    opacity: 1
}