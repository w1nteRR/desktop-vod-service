import React, { FC } from 'react'
import { RouteComponentProps } from 'react-router'

import { Container, Background } from '../../components/shared/utils/layout'
import { Text } from '../../components/shared/utils/typography'
import { text } from '../../components/shared/utils/colors'

import { Header } from '../../components/navigation/Header'

import { SeriesList } from '../../components/Film/Series/Series.list'
import { Player } from '../../components/Player/Player'

import { useAuth } from '../../hooks/auth/useAuth'

import { usePlaybackService } from '../../hooks/services/usePlaybackService'


interface MatchParams {
    id: string
}

interface FilmWatchProps extends RouteComponentProps<MatchParams> {}

export const FilmWatch: FC<FilmWatchProps> = ({ 
    match 
}) => {

    const { token, loading } = useAuth()
    const { serviceStatus } = usePlaybackService()
    
    if(loading) return <p>auth data checking</p>

    return (
        <Background>
            <Container minH='100vh' w='80%' m='0 auto' direction='column' justify='flex-start'>
                <Header />
                {
                    !token || !serviceStatus
                    &&
                    <Container bgColor={text.red} w='80%' m='20px 0' p='20px 0'>
                        <Text uppercase color={text.dark}>Video saving service is not available</Text>
                    </Container>
                }
                <Container w='80%'>
                    <Player _id={match.params.id} writePlayback token={token!} />
                </Container>
                <SeriesList _id={match.params.id} />
            </Container>
        </Background>  
    )    
}