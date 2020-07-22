import React, { FC } from 'react'

import { PageLayout, Container } from '../components/shared/utils/layout'
import { DualRing } from '../components/shared/styled/loaders/DualRing'

import { FilmCarousel } from '../components/Carousels/Films.carousel'

import { useAxios } from '../hooks/useAxios'

import { IPlaylist } from '../interfaces/Playlist/IPlaylist'

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
            {
                playlists.map(playlist => 
                    <FilmCarousel key={playlist._id} name={playlist.name} films={playlist.films} />
                )
            }
        </PageLayout>
    )
}