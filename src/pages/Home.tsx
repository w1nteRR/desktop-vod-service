import React, { FC } from 'react'

import { PageLayout, Container } from '../components/shared/utils/layout'
import { DualRing } from '../components/shared/styled/loaders/DualRing'

import { Playlists } from '../components/Home/Playlists'
import { Trends } from '../components/Home/Trends'

import { IPlaylist } from '../interfaces/playlist/IPlaylist'
import { useScrollLoader } from '../hooks/useScrollLoader'


export const Home: FC = () => {

    const { data } = useScrollLoader()

    const playlists: Array<IPlaylist> = data

    if(!playlists.length) return (
        <Container h='100vh'>
            <DualRing />
        </Container>
    )

    return (      
        <div style={main}>   
            <Trends />   
            <Playlists playlists={playlists} />
        </div>
    )
}

const main = {
    width: '80%',
    margin: '0 auto',
    backgroundColor: '#090909'
}