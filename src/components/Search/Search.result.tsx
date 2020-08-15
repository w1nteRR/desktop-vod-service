import React, { FC } from 'react'
import { useSelector } from 'react-redux'

import { FilmCard } from '../shared/styled/cards/Film.card'
import { Container } from '../shared/utils/layout'

import { RootState } from '../../redux/rootReducer'

export const SearchResult: FC = () => {
    
    const result = useSelector((state: RootState) => state.search.result)
    
    return (
        <Container justify='space-around' wrap minH='40vh'>
            {
                result.map(film =>
                    <Container w='30%' m='1%'>
                        <FilmCard key={film._id} _id={film._id}  img={film.img} />
                    </Container>   
                )
            }
        </Container>    
    )
}