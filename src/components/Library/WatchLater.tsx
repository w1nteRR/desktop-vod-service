import React, { FC } from 'react'
import { useHistory } from 'react-router'

import { LibraryView } from './Library.view'
import { Carousel } from '../Carousels/Carousel'

import { Container } from '../shared/utils/layout'
import { DualRing } from '../shared/styled/loaders/DualRing'
import { WatchLaterCard } from '../shared/styled/cards/WatchLater.card'

import { useAxios } from '../../hooks/useAxios'
import { useWatchLater } from '../../hooks/library/useWatchLater'

import { IFilmShort } from '../../interfaces/film/IFilm'

import { browse_cfg } from '../../utils/configs/carousel'


export const WatchLater: FC<{ token: string }> = ({
    token
}) => {

    const { res, loading } = useAxios(`/api/library/watch-later/list`, {
        method: 'POST',
        data: {
            token
        }
    })

    const history = useHistory()
    const { remove } = useWatchLater(token)

    if (loading) return (
        <Container h='300px'>
            <DualRing />
        </Container>
    )

    const watchLaterList: Array<IFilmShort> = res?.data

    return (
        <LibraryView title='Watch Later' onMoreBtnClick={() => console.log()}>
            <Carousel
                config={browse_cfg}
                toScroll={3}
                name=''
                toShow={3}
                rows={1}
                arrowsDis
            >
                {
                    watchLaterList.map((item: IFilmShort) =>
                        <WatchLaterCard
                            key={item._id}
                            img={item.img}
                            name={item.name}
                            _id={item._id}
                            onDeleteBtnClick={() => remove(item._id)}
                            onFilmClick={() => history.push(`/film/${item._id}`)}
                        />
                    )
                }
            </Carousel>
        </LibraryView>
    )
}