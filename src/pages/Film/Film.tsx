import React, { FC } from 'react'
import { RouteComponentProps } from 'react-router-dom'

import { Cast } from '../../components/Film/Cast/Cast'
import { About } from '../../components/Film/Info/About'
import { Info } from '../../components/Film/Info/Info'
import { Rating } from '../../components/Film/Rating/Rating'
import { Series } from '../../components/Film/Series/Series'
import { Similar } from '../../components/Film/Similar/Similar'

import { Header } from '../../components/navigation/Header'

import { DualRing } from '../../components/shared/styled/loaders/DualRing'
import { text } from '../../components/shared/utils/colors'
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
                <Header />
                <Container h='550px'>
                    <video
                        // poster={film.wallpaper}
                        controls
                        // autoPlay
                        src={`/static/${film._id}.mp4`}
                        style={{
                            objectFit: 'fill',
                            height: '100%',
                            width: '100%',
                            outline: 'none'
                        }}
                    />
                </Container>
                <About
                    describe={film.describe} 
                    duration={film.duration} 
                    name={film.name} 
                    genr={film.genr} 
                    year={film.year}
                    _id={film._id}
                />
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    width: '100%'
                }}>
                    <Container direction='column' w='30%' justify='flex-start'>
                        <Rating name={film.name} />
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
                    </Container>
                    <div style={{ width: '65%' }}>
                        {
                            isSerial
                            &&
                            <Series series={film.series} />
                        }
                        <Cast cast={film.cast} />
                        <Similar similar={similar} />
                    </div>
                </div>
            </div>
        </Background>
    )
}

const main = {
    margin: '0 auto',
    width: '80%',
    minHeight: '100vh',
}
