import React, { FC, useState, ChangeEvent } from 'react'
import { useDispatch } from 'react-redux'

import { Container } from '../shared/utils/layout'
import { InputSearch } from '../shared/styled/inputs/inputs.shared'
import { useDebounce } from '../../hooks/utils/useDebounce'
import { getFilmsByName } from '../../redux/search/actions'


export const SearchForm: FC = () => {
    
    const [searchVal, setSearchVal] = useState('')

    const debouncedVal = useDebounce(searchVal, 500)
    const dispatch = useDispatch()

    const _inputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchVal(event.target.value)
        dispatch(getFilmsByName(debouncedVal))
    }
    
    return (
        <Container w='90%' m='0 auto'>
            <InputSearch
                placeholder='Enter film name'
                change={_inputHandler}  
            />
        </Container>
    )
}