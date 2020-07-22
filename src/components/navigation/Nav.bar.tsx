import React, { FC } from 'react'
import { NavLink } from 'react-router-dom'

import { Container } from '../shared/utils/layout'
import { Text } from '../shared/utils/typography'

import { UserAvatar } from '../shared/styled/profile/User.avatar'
import { text } from '../shared/utils/colors'

export const NavBar: FC = () => {
    return (
        <Container p='20px 0'>
            <Container>
                {
                    links.map((link, index) => (
                        <NavLink 
                            key={index} 
                            to={link.path}
                            style={linkStyle}
                            activeStyle={activeLinkStyle}
                        >
                                <Text 
                                    uppercase 
                                    size='13px'
                                    color={text.dark}
                                >
                                    {link.name}
                                </Text>
                            </NavLink>
                    ))
                }
            </Container>
            <Container justify='flex-end' m='0 150px 0 0'>
                <UserAvatar isAuth={true} />
            </Container>
        </Container>
    )
}

const links = [
    {
        path: '/home',
        name: 'Home'
    },
    {
        path: '/browse',
        name: 'Browse'
    },
    {
        path: '/library',
        name: 'Library'
    }
]

const linkStyle = {
    textDecoration: 'none',
    margin: '10px',
    color: 'silver',
    opacity: 0.8
}

const activeLinkStyle = {
    opacity: 1
}