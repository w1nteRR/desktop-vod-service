import React, { FC } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { ContinueWatching } from '../components/Library/ContinueWatching'
import { LibraryView } from '../components/Library/Library.view'
import { WatchLater } from '../components/Library/WatchLater'
import { ButtonText } from '../components/shared/styled/buttons/Buttons.shared'
import { text } from '../components/shared/utils/colors'

import { PageLayout, Container } from '../components/shared/utils/layout'
import { Text, Title } from '../components/shared/utils/typography'
import { useAuth } from '../hooks/auth/useAuth'

export const Library: FC = () => {

    const { token, loading } = useAuth()

    const history = useHistory()

    if(loading) return <></>

    if(!token) return (
        <Container h='50vh' direction='column' w='75%' m='0 auto'>
            <Container m='10px'>
                <Title>Library is available only to authorized users</Title>
            </Container>
            <ButtonText 
                text='Sign In'
                w='50%'
                h='50px'
                bgColor={text.blue}
                onClick={() => history.push('/signin')}
            />
        </Container>
    )

    return <>
        <div style={main}>
            <ContinueWatching />
            <WatchLater token={token} />
        </div>
    </>
}

const main = {
    width: '75%',
    margin: '0 auto',
    backgroundColor: '#090909'
}