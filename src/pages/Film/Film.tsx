import React, { FC } from 'react'
import { RouteComponentProps } from 'react-router-dom'

import { Cast } from '../../components/Film/Cast/Cast'
import { Control } from '../../components/Film/Control/Control'
import { Info } from '../../components/Film/Info/Info'
import { Series } from '../../components/Film/Series/Series'
import { Similar } from '../../components/Film/Similar/Similar'

import { Header } from '../../components/navigation/Header'

import { DualRing } from '../../components/shared/styled/loaders/DualRing'
import { Background, Container } from '../../components/shared/utils/layout'

import { useAxios } from '../../hooks/useAxios'
import { IFilm, IFilmShort } from '../../interfaces/film/IFilm'


interface MatchParams {
    id: string
}

interface FilmProps extends RouteComponentProps<MatchParams> {}

export const Film: FC<FilmProps> = ({ match }) => {

    const { res, loading } = useAxios(`/api/film/${match.params.id}`, {
        method: 'GET'
    })

    if(loading) return (
        <Container h='100vh' bgColor='#090909'>
            <DualRing />
        </Container>
    )

    const film: IFilm = res?.data.film
    const similar: Array<IFilmShort> = res?.data.similar

    const isSerial = film.type === 'Serial'

    return (
        <Background>
            <div style={main}>
                <Header title={film.name} />
                <Container minH='550px'>
                    <video
                        poster={film.wallpaper}
                        autoPlay
                        muted={true}
                        src={`/static/${film._id}.mp4`}
                        style={{
                            objectFit: 'cover',
                            height: '100%',
                            width: '100%'
                        }}
                    />
                </Container>
                <Control type={film.type} _id={film._id} />
                {
                    isSerial
                    &&
                    <Series series={film.series} />
                }
                <Cast cast={film.cast} />
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
                <Similar similar={similar} />
            </div>
        </Background>
    )
}

const main = {
    margin: '0 auto',
    width: '80%',
    minHeight: '100vh',
}