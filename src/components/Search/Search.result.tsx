import React, { FC } from 'react'
import { useSelector } from 'react-redux'

import { FilmCard } from '../shared/styled/cards/Film.card'
import { Container } from '../shared/utils/layout'

import { RootState } from '../../redux/rootReducer'

export const SearchResult: FC = () => {
    
    const result = useSelector((state: RootState) => state.search.result)
    
    return (
        <Container justify='space-around' wrap>
            {
                result.map(film =>
                    <Container w='25%' m='10px'>
                        <FilmCard key={film._id} _id={film._id}  img={film.img} />
                    </Container>   
                )
            }
        </Container>    
    )
}