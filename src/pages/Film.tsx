import React, { FC } from 'react'
import { RouteComponentProps } from 'react-router'

import { PageLayout, Container} from '../components/shared/utils/layout'
import { DualRing } from '../components/shared/styled/loaders/DualRing'

import { Cast } from '../components/Film/Cast/Cast'
import { Info } from '../components/Film/Info/Info'
import { Simialr } from '../components/Film/Similar/Similar'
import { Series } from '../components/Film/Series/Series'

import { useAxios } from '../hooks/useAxios'

import { IFilm } from '../interfaces/film/IFilm'
import { IFilmShort } from '../interfaces/film/IFilm'
import { Intro } from '../components/Film/Intro/Intro'


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
            <Container h='100vh'>
                <DualRing />
            </Container>
        )
    }

    const film: IFilm = res?.data.film
    const similar: Array<IFilmShort> = res?.data.similar

    return (
        <>
        <Intro 
            name={film.name} 
            describe={film.describe} 
            _id={film._id}
            type={film.type}
            wallpaper={film.wallpaper}
        />
        <PageLayout>
            <Cast cast={film.cast} />
            {
                film.type === 'Serial' && <Series series={film.series} />
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
        </>
    )
}


