import React, { FC } from 'react'
import { useDispatch } from 'react-redux'
import Icon from '@mdi/react'
import { mdiTune } from '@mdi/js'

import { Container } from '../components/shared/utils/layout'

import { Header } from '../components/navigation/Header'
import { TextT } from '../components/shared/utils/typography'

import { SearchForm } from '../components/Search/Search.form'
import { SearchModal } from '../components/Search/modal/Search.modal'
import { SearchResult } from '../components/Search/Search.result'

import { openModal } from '../redux/app/actions'

export const Search: FC = () => {

    const dispatch = useDispatch()

    return <>
        <Container direction='column' w='75%' m='0 auto'>
        <Header />
        <SearchForm />
        <Container m='5% 0' direction='column' h='75px' justify='space-between'>
            <TextT>Or add some tags and we will find</TextT>
            <Container 
                onClick={() => dispatch(openModal(SearchModal, 'search'))}
            >
                <Icon 
                    path={mdiTune}
                    size={1.2}
                    color='silver'
                    style={{
                        cursor: 'pointer'
                    }}
                />
            </Container>
        </Container>
        </Container>
        <SearchResult />
        <SearchModal />
    </>
}