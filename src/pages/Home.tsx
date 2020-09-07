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
        <PageLayout>
            <Container h='110vh'>
                <DualRing />
            </Container>
        </PageLayout>
    )

    return (      
        <>      
        <PageLayout>
            <div style={main}>
                <div style={{ height: 400}}>
                    <Trends />
                </div>
                <div style={{ padding: 10}}>
                    <Playlists playlists={playlists} />
                </div>
            </div>
        </PageLayout>
        </>
    )
}

const main = {
    width: '80%',
    margin: '0 auto'
}