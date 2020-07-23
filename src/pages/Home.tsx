import React, { FC } from 'react'

import { PageLayout, Container } from '../components/shared/utils/layout'
import { DualRing } from '../components/shared/styled/loaders/DualRing'

import { useAxios } from '../hooks/useAxios'

import { IPlaylist } from '../interfaces/playlist/IPlaylist'
import { Playlists } from '../components/Home/Playlists'

export const Home: FC = () => {

    const { res, loading } = useAxios(`/api/video/playlists/${0}`, {
        method: 'GET'
    })

    if(loading) {
        return (
            <Container h='90vh'>
                <DualRing />
            </Container>
        )
    }
        
    const playlists: Array<IPlaylist> = res?.data

    return (
        <PageLayout>
            <Playlists playlists={playlists} />
        </PageLayout>
    )
}