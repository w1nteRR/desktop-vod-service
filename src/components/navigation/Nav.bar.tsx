import React, { FC } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Icon from '@mdi/react'
import { 
    mdiCog, 
    mdiMagnify, 
    mdiHomeOutline, 
    mdiCompassOutline, 
    mdiHistory, 
    mdiFormatListBulleted, 
    mdiClockOutline 
} from '@mdi/js'

import { Container } from '../shared/utils/layout'
import { Text } from '../shared/utils/typography'

import { UserAvatar } from '../shared/styled/profile/User.avatar'
import { text } from '../shared/utils/colors'

import { RootState } from '../../redux/rootReducer'

export const NavBar: FC = () => {

    const auth = useSelector((state: RootState) => state.auth.isAuthenticated)
    const history = useHistory()

    return (
        <Container 
            bgColor='#1E2226' 
            w='20%' 
            h='100vh' 
            style={{ position: 'fixed' }}
            justify='flex-start'
            direction='column'
            shadow
        >
            <Container p='10% 0' justify='space-around'>
                <Icon 
                    path={mdiCog}
                    size={.7}
                    color={text.silver}
                    style={{cursor: 'pointer'}}
                    onClick={() => history.push('/settings')}
                />
                <UserAvatar isAuth={auth} />
                <Icon 
                    path={mdiMagnify}
                    size={.9}
                    color={text.silver}
                    style={{cursor: 'pointer'}}
                    onClick={() => history.push('/search')}
                />
            </Container>
            <Container 
                direction='column'
                h='50%'
                justify='space-around'
            >
                {
                    links.map((link) => 
                        <Container direction='column' >
                            <Container p='10px 0' justify='flex-start' w='90%'>
                                <Text 
                                    uppercase 
                                    weight='500'
                                    size='11px'
                                    color={text.silver}
                                >
                                    {link.title}
                                </Text>
                            </Container>
                            {
                                link.options.map((link, index) => 
                                <Container justify='space-between' w='70%'>
                                    <Icon 
                                        size={.8}
                                        color='silver'
                                        path={link.icon}
                                    />
                                    <Container justify='flex-start'>
                                        <NavLink
                                            key={index}
                                            to={link.path}
                                            style={linkStyle}
                                            activeStyle={activeLinkStyle}
                                        >
                                            <Text
                                                uppercase 
                                                size='11.4px'
                                                color='silver'
                                            >
                                                {link.name}
                                            </Text>
                                        </NavLink>
                                    </Container>
                                </Container>
                                )
                            }
                        </Container>
                    )
                }
            </Container>
        </Container>
    )
}

const links = [
    {
        title: 'Films',
        options: [
            {
                path: '/',
                name: 'Home',
                icon: mdiHomeOutline
            },
            {
                path: '/browse',
                name: 'Browse',
                icon: mdiCompassOutline
            }
        ]
    },
    {
        title: 'Library',
        options: [
            {
                path: '/library/watchlater',
                name: 'Watch Later',
                icon: mdiClockOutline
            },
            // {
            //     path: '/library/playlists',
            //     name: 'Playlists',
            //     icon: mdiFormatListBulleted
            // },
            // {
            //     path: '/library/recent',
            //     name: 'Recent',
            //     icon: mdiHistory
            // }
        ]
    }
]

const linkStyle = {
    textDecoration: 'none',
    margin: '10px',
    color: 'silver',
    opacity: 0.5
}

const activeLinkStyle = {
    opacity: 1
}