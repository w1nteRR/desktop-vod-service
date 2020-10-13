import React, { FC } from 'react'
import { useHistory } from 'react-router'

import { LibraryView } from './Library.view'

import { Container } from '../shared/utils/layout'
import { DualRing } from '../shared/styled/loaders/DualRing'
import { WatchLaterCard } from '../shared/styled/cards/WatchLater.card'
import { ButtonText } from '../shared/styled/buttons/Buttons.shared'

import { text } from '../shared/utils/colors'
import { Text } from '../shared/utils/typography'

import { useAxios } from '../../hooks/useAxios'
import { useWatchLater } from '../../hooks/library/useWatchLater'

import { IFilmShort } from '../../interfaces/film/IFilm'


export const WatchLater: FC<{ token: string }> = ({
    token
}) => {

    const { res, loading } = useAxios(`/api/library/watch-later/list`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${token}`
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
            {
                !watchLaterList.length
                &&
                <Container bgColor={text.dark} p='30px 0'>
                    <Text uppercase size='10px'>Watch later list is empty</Text>
                </Container>
            }
            {
                watchLaterList.slice(0, 3).map(film => 
                    <WatchLaterCard 
                        key={film._id} 
                        img={film.img} 
                        name={film.name} 
                        _id={film._id} 
                        onDeleteBtnClick={() => remove(film._id)}
                        onFilmClick={() => history.push(`/film/${film._id}`)}
                    />
                )
            }
            {
                watchLaterList.length > 3 
                &&
                <Container w='70%' m='0 auto'>
                    <ButtonText 
                        bgColor={text.blue} 
                        text='More' 
                        w='100%'  
                        h='50px'
                        onClick={() => console.log('')} 
                    />
                </Container>
            }
        </LibraryView>
    )
}