import React, { FC } from "react"

import { Carousel } from '../Carousels/Carousel'
import { FilmCard } from '../shared/styled/cards/Film.card'

import { IPlaylist } from '../../interfaces/playlist/IPlaylist'

import { film_cfg } from '../../utils/configs/carousel'

interface IPlaylistsProps {
    playlists: Array<IPlaylist>
}

export const Playlists: FC<IPlaylistsProps> = ({ playlists }) => 
    <>
        {
            playlists.map(playlist => 
                <Carousel key={playlist._id} name={playlist.name} config={film_cfg}>
                    {
                        playlist.films.map(film => <FilmCard key={film._id} _id={film._id} img={film.img} />)
                    }
                </Carousel>
            )
        }
    </>
