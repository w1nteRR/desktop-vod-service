import React, { FC } from 'react'
import { RouteComponentProps } from 'react-router'

import { PageLayout, Container } from '../components/shared/utils/layout'
import { DualRing } from '../components/shared/styled/loaders/DualRing'

import { Header } from '../components/Film/Header'
import { Wallpaper } from '../components/Film/Wallpaper/Wallpaper'
import { Cast } from '../components/Film/Cast/Cast'
import { Control } from '../components/Film/Control/Control'
import { Info } from '../components/Film/Info/Info'
import { Simialr } from '../components/Film/Similar/Similar'
import { Series } from '../components/Film/Series/Series'

import { useAxios } from '../hooks/useAxios'

import { IFilm } from '../interfaces/film/IFilm'
import { IFilmCard } from '../interfaces/film/IFilm.card'


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
    const similar: Array<IFilmCard> = res?.data.similar

    return (
        <PageLayout>
            <Header name={film.name} />
            <Wallpaper wallpaper={film.wallpaper} />
            <Control />
            <Cast cast={film.cast} />
            {
                film.type === 'serial' && <Series series={film.series} />
            }
            <Info
                audio={film.audio}
                company={film.company}
                country={film.country}
                director={film.director}
                genr={film.genr}
                release={film.release}
                subtitles={film.subtitles}
                year={film.year.toString()}
            />
            <Simialr similar={similar} />
        </PageLayout>
    )
}


