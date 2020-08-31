import React, { FC, useRef } from 'react'
import { RouteComponentProps } from 'react-router'

import { Container } from '../../components/shared/utils/layout'
import { DualRing } from '../../components/shared/styled/loaders/DualRing'

import { Cast } from '../../components/Film/Cast/Cast'
import { Info } from '../../components/Film/Info/Info'
import { Similar } from '../../components/Film/Similar/Similar'
import { Series } from '../../components/Film/Series/Series'

import { useAxios } from '../../hooks/useAxios'

import { IFilm } from '../../interfaces/film/IFilm'
import { IFilmShort } from '../../interfaces/film/IFilm'
import { Intro } from '../../components/Film/Intro/Intro'
import { ScrollNav } from '../../components/Film/Scroll.nav'
import { text } from '../../components/shared/utils/colors'


interface MatchParams {
    id: string
}

interface FilmProps extends RouteComponentProps<MatchParams> {}

export const Film: FC<FilmProps> = ({ match }) => {

    const { res, loading } = useAxios(`/api/film/${match.params.id}`, {
        method: 'GET'
    })

    const intro = useRef<HTMLDivElement>(null)
    const cast = useRef<HTMLDivElement>(null)
    const info = useRef<HTMLDivElement>(null)
    const similarv = useRef<HTMLDivElement>(null)
    const episodes = useRef<HTMLDivElement>(null)

    if(loading) {
        return (
            <Container h='100vh'>
                <DualRing />
            </Container>
        )
    }

    const film: IFilm = res?.data.film
    const similar: Array<IFilmShort> = res?.data.similar

    const isSerial = film.type === 'Serial'

    return (
        <div style={main}>
           <div ref={intro} style={view}>
            <Intro 
                name={film.name} 
                describe={film.describe} 
                _id={film._id}
                type={film.type}
                wallpaper={film.wallpaper}
            />
            </div>
            {
                isSerial
                &&
                <div ref={episodes} style={view}> 
                    <Series series={film.series} />
                </div>
            }
            <div ref={cast} style={view}>
                <Cast cast={film.cast} />
            </div>
            <div ref={info} style={view}>
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
            </div>
            <div ref={similarv} style={view}>
                <Similar similar={similar} />
            </div>
            <ScrollNav 
                refs={[
                    intro,
                    episodes,
                    cast,
                    info,
                    similarv
                ]} 
                isSerial={isSerial}
            />
        </div>
    )
}

const view = {
    height: '100vh',
    scrollSnapAlign: 'center'
}

const main = {
    height: '100vh',
    overflowY: 'scroll',
    overflowX: 'hidden',
    scrollSnapType: 'y mandatory',
    background: text.dark
}
