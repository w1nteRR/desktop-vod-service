import React, { FC } from 'react'
import { useSelector } from 'react-redux'

import { Container } from '../shared/utils/layout'

import { BgImgCard } from '../shared/styled/cards/Cards.shared'

import { RootState } from '../../redux/rootReducer'

export const SearchResult: FC = () => {
    
    const result = useSelector((state: RootState) => state.search.result)
    
    return (
        <Container wrap='true' w='80%' m='0 auto'>
            { 
                result.map(film => <BgImgCard key={film._id} img={film.img} w='320px' h='180px' m='10px' /> ) 
            }
        </Container>    
    )
}