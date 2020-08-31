import React, { FC, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { Text } from '../../shared/utils/typography'
import { Container } from '../../shared/utils/layout'

import { ModalTags, ModalBg } from '../../shared/styled/modals/Modal.styled'
import { ModalHeader } from '../../shared/styled/modals/Modal.shared'

import { SearchTag } from './Search.tag'

import { RootState } from '../../../redux/rootReducer'
import { initTags, getFilmsByTag } from '../../../redux/search/actions'

export const SearchModal: FC = () => {

    const dispatch = useDispatch()

    const tags = useSelector((state: RootState) => state.search.tags)
    const activeModal = useSelector((state: RootState) => state.app.modal.active)

    useEffect(() => { dispatch(initTags()) }, [])
            
    return (
        <>
        {
            activeModal === 'search'
            &&
            <ModalBg>
                <Container 
                    direction='column' 
                    w='50%' 
                    m='2% auto'             
                >
                    <ModalTags>
                        <Text onClick={() => dispatch(getFilmsByTag())}>Search</Text>
                        <ModalHeader title='Tags' />
                        <SearchTag title='genr' data={tags.genr} />
                        <SearchTag title='company' data={tags.company} />
                        <SearchTag  title='year' data={tags.year } />
                    </ModalTags>
                </Container>
            </ModalBg>
        }
        </>
    )
}



