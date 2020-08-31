import React, { FC, useEffect } from 'react'

import { PageLayout, Container } from '../components/shared/utils/layout'
import { DualRing } from '../components/shared/styled/loaders/DualRing'

import { Playlists } from '../components/Home/Playlists'
import { Trends } from '../components/Home/Trends'

import { useAxios } from '../hooks/useAxios'

import { IPlaylist } from '../interfaces/playlist/IPlaylist'
import { useScrollLoader } from '../hooks/useScrollLoader'

export const Home: FC = () => {

    const { res, loading } = useAxios(`/api/video/playlists/${0}`, {
        method: 'GET'
    })


    const { data } = useScrollLoader()

    if(loading) {
        return (
            <PageLayout>
                <Container h='110vh'>
                    <DualRing />
                </Container>
            </PageLayout>
        )
    }
   
    const playlists: Array<IPlaylist> = res?.data.concat(data)

    return (      
        <>      
        <PageLayout>
            <Trends />
            <Playlists playlists={playlists} />
        </PageLayout>
        </>
    )
}