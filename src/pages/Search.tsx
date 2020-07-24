import React, { FC } from 'react'
import { useDispatch } from 'react-redux'

import { PageLayout, Container } from '../components/shared/utils/layout'

import { Header } from '../components/navigation/Header'
import { Title } from '../components/shared/utils/typography'

import { SearchForm } from '../components/Search/Search.form'

import { ButtonTags } from '../components/shared/styled/buttons/Buttons.shared'

import { openModal } from '../redux/app/actions'

export const Search: FC = () => {

    const dispatch = useDispatch()
    
    return (
        <>
        <PageLayout>
            <Header name='Search' />
            <SearchForm />
            <Container m='20px 0' direction='column'>
                <Title>Or add some tags and we will find</Title>
                <ButtonTags onClick={() => dispatch(openModal())} />
            </Container>
        </PageLayout>
        </>
    )
}