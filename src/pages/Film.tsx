import React, { FC } from 'react'
import { RouteComponentProps } from 'react-router'

import { PageLayout, Container } from '../components/shared/utils/layout'
import { DualRing } from '../components/shared/styled/loaders/DualRing'

import { Header } from '../components/Film/Header'
import { Wallpaper } from '../components/Film/Wallpaper/Wallpaper'
import { Cast } from '../components/Film/Cast/Cast'

import { useAxios } from '../hooks/useAxios'

import { IFilm } from '../interfaces/film/IFilm'

interface MatchParams {
    id: string
}

interface FilmProps extends RouteComponentProps<MatchParams> {}

export const Film: FC<FilmProps> = ({ match }) => {

    const { res, loading } = useAxios(`/api/film/${match.params.id}`, {
        method: 'GET'
    })

    if(loading) {
        return (
            <Container h='90vh'>
                <DualRing />
            </Container>
        )
    }

    const film: IFilm = res?.data.film

    return (
        <PageLayout>
            <Header name={film.name} />
            <Wallpaper wallpaper={film.wallpaper} />
            <Cast cast={film.cast} />
        </PageLayout>
    )
}


