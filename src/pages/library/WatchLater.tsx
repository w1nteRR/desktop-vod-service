import React, { FC } from 'react'

import { PageLayout, Container } from '../../components/shared/utils/layout'
import { DualRing } from '../../components/shared/styled/loaders/DualRing'
import { WatchLaterCard } from '../../components/shared/styled/cards/WatchLater.card'

import { Header } from '../../components/navigation/Header'

import { useAxios } from '../../hooks/useAxios'

import { IFilmShort } from '../../interfaces/film/IFilm'

export const WatchLater: FC = () => {

    const { res, loading } = useAxios(`/api/library/watch-later/list`, {
        method: 'POST',
        data: {
            token: localStorage.getItem('token')
        }
    })
    

    if(loading) {
        return (
            <Container h='100vh'>
                <DualRing />
            </Container>
        )
    }

    const watchLaterList = res?.data

    return (
        <PageLayout>
            <Header />
            <Container minH='100vh' wrap='true' align='flex-start'>
                {
                    watchLaterList.map((item: IFilmShort) => 
                        <WatchLaterCard 
                            key={item._id} 
                            img={item.img} 
                            name={item.name} 
                            _id={item._id} 
                        /> 
                    )
                }
            </Container>
        </PageLayout>
    )
}