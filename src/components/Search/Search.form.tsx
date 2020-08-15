import React, { FC, useState, ChangeEvent, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { Container } from '../shared/utils/layout'
import { Input } from '../shared/styled/inputs/inputs.shared'

import { useDebounce } from '../../hooks/utils/useDebounce'
import { getFilmsByName } from '../../redux/search/actions'


export const SearchForm: FC = () => {
    
    const [searchVal, setSearchVal] = useState('')

    const debouncedVal = useDebounce(searchVal, 500)
    const dispatch = useDispatch()

    useEffect(() => { debouncedVal && dispatch(getFilmsByName(debouncedVal)) }, [debouncedVal])
 
    return (
        <Container w='90%' m='0 auto'>
            <Input
                type='text'
                p='30px'
                placeholder='Enter film name'
                change={(event: ChangeEvent<HTMLInputElement>) => setSearchVal(event.target.value)}  
            />
        </Container>
    )
}